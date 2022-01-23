import React from 'react';
import ProdutosCarrinho from './ProdutosCarrinho'
import { CarrinhoContainer, EstilizacaoCarrinhoContainer } from '../styles-app';
import iconeCarrinho from '../imgs/shopping-cart.svg'




class Carrinho extends React.Component {
    getTotalValue = () => {
        let totalValue = 0
        for (let product of this.props.itensNoCarrinho) {
            totalValue += product.valor * product.quantidade
        }
        return totalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    render() {
        return (

            <CarrinhoContainer>
                <h3><img src={iconeCarrinho} alt="Ícone Carrinho"/> Carrinho</h3>
                <EstilizacaoCarrinhoContainer>
                {this.props.itensNoCarrinho.map((produto) => {
                    return <ProdutosCarrinho 
                            item={produto}
                            removerItem={this.props.removerItem}
                            />
                })}
                  </EstilizacaoCarrinhoContainer>

                <p>Valor total: $ {this.getTotalValue()}</p>

            </CarrinhoContainer>
        )
    }
}

export default Carrinho;
