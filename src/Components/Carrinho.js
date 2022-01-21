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
        return totalValue
    }

    render() {
        return (
            <CarrinhoContainer>
                <h3><img src={iconeCarrinho} alt="Ícone Carrinho"/>  Carrinho</h3>
                <EstilizacaoCarrinhoContainer>
                    {this.props.itensNoCarrinho.map((produto) => {
                        return <ProdutosCarrinho item={produto} />
                    })}
                </EstilizacaoCarrinhoContainer>
                <p>Valor total: {this.getTotalValue()}</p>

            </CarrinhoContainer>
        )
    }
}

export default Carrinho;
