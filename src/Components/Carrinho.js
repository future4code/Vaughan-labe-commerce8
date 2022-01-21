
import React from 'react';
import ProdutosCarrinho from './ProdutosCarrinho'
import styled from 'styled-components';



class Carrinho extends React.Component {

    render() {
        return (
            <div>
                <h3>Carrinho</h3>
                <ProdutosCarrinho/>
                <ProdutosCarrinho/>
                <ProdutosCarrinho/>
                    
            </div>
        )
    }
}

export default Carrinho;
