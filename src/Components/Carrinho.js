import React from 'react';
import ProdutosCarrinho from './ProdutosCarrinho'
import { CarrinhoContainer, EstilizacaoCarrinhoContainer } from '../styles-app';
import iconeCarrinho from '../imgs/shopping-cart.svg'
import styled from 'styled-components'

const Pagar = styled.button`
    margin: 10px;
    height: 2rem;
    padding: 0px 3px;
    background-color: #41807d;
    border: 2px solid black;
    border-radius: 0.5em;
    cursor: pointer;
    :hover {
      background-color: #50a3a0;
    }
    font-weight: 600;
    margin-top: 10%;
    
`

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

                <p>Valor total: {this.getTotalValue()}</p>
                <Pagar>Finalizar Compra</Pagar>

            </CarrinhoContainer>
        )
    }
}

export default Carrinho;
