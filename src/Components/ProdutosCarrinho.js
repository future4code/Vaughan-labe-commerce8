import React from 'react';
import { BotaoCarrinho, CardCarrinho } from '../styles-app';
import iconeRemoverItem from '../imgs/delete.svg'



class ProdutosCarrinho extends React.Component {
 



 render() {
    return (
      <CardCarrinho>
        <p>{this.props.item.quantidade}</p>
        <p>{this.props.item.nome}</p>
        <BotaoCarrinho><img src={iconeRemoverItem} alt="Ícone Remover do Carrinho"/></BotaoCarrinho>
        </CardCarrinho>
  );
 }
    
}
 export default ProdutosCarrinho; 
  