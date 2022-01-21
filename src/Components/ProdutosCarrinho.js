import React from 'react';



class ProdutosCarrinho extends React.Component {
 



 render() {
    return (
      <div>
        <p>{this.props.item.quantidade}</p>
        <p>{this.props.item.nome}</p>
        <button onClick={() => this.props.removerItem(this.props.item.id)}>Remover</button>
      </div>
  );
 }
    
}
 export default ProdutosCarrinho; 
  