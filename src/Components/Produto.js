import React from 'react';
import listaProdutos from '../data/produtos';


class Produto extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
        quantidade: 0
    };
    this.adicionar = this.adicionar.bind(this);
    this.remover = this.remover.bind(this);
  }


adicionar() {
  this.setState({quantidade: this.state.quantidade +1});
};

remover() {
  this.setState({quantidade: this.state.quantidade - 1});
};



 render() {
    return (
    <div>
      <div>
        Quantidade: {this.state.quantidade}
      </div>
      <div>
        <button onClick={this.adicionar}>Adicionar</button>
        <button onClick={this.remover}>Remover</button>
      </div>
      <hr />
    </div>
  );
 }
    
}
 export default Produto; 
  