
import React from 'react';
import ProdutosCarrinho from './ProdutosCarrinho'
import styled from 'styled-components';



class Carrinho extends React.Component {
    getTotalValue = () => {
        let totalValue = 0
        for(let product of this.props.itensNoCarrinho) {
            totalValue += product.valor * product.quantidade
        }
        return totalValue   
    }

    render() {
        return (
            <div>
                <h3>Carrinho</h3>
                <div>
                {this.props.itensNoCarrinho.map((produto) => {
                    return <ProdutosCarrinho item={produto}/>
                })}
                </div>
                <p>Valor total: {this.getTotalValue()}</p>
                    
            </div>
        )
    }
}

export default Carrinho;
