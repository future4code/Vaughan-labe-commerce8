import React from 'react';



class ProdutosCarrinho extends React.Component {
 



 render() {
    return (
      <div>
        <p>{this.props.item.quantidade}</p>
        <p>{this.props.item.nome}</p>
        <button>Remover</button>
      </div>
  );
 }
    
}
 export default ProdutosCarrinho; 
  