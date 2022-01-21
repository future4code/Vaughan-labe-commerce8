import React from 'react';
import Produto from './Produto';
import listaProdutos from '../data/produtos';

class Carrinho extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          listaProdutos
      };
      this.adicionar = this.adicionar.bind(this);
      this.remover = this.remover.bind(this);
    }

    componentDidMount() {
        
        this.setState({listaProdutos: listaProdutos})
     
    }

    render(){
        if(!this.state.listaProdutos) {
            return <p>Carrinho vazio</p>
        }
        let produtos = this.state.listaProdutos.map(function(produto) {
            return (
               <Produto 
               name={produto.nome}
                />
            )
        })

        return(
            {produtos}
        )
    }
} 

export default Carrinho;