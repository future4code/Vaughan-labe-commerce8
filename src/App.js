import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Filter from "./Components/Filter";
import listaProdutos from "./data/produtos.js";
import Carrinho from './Components/Carrinho'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  `;

//! Coloquei temporariamente so para me ajudar na visualização
const CaixaPrincipal = styled.div`
  display: flex;
`;

// Stilo do Filtro para tela

const FiltroDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 23vw;
  margin: 10px;
  padding: 10px;
  border: solid 1px black;
  background: rgba(223, 228, 237, .9);
`;

//? Cards

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
`;

const CardProduto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  border: 2px solid black;
  margin: 10px;
`;

const Imagem = styled.img`
  width: 200px;
  height: 200px;
  margin: 10px;
`;

const Paragrafo = styled.p`
  margin-bottom: 10px;
`;

const Botao = styled.button`
  margin-bottom: 10px;
  padding: 5px;
`



class App extends React.Component {
  state = {
    produtos: listaProdutos,

    produtosFiltrado: [],
    naoFiltrando: true,

    valor: "",
    valorMin: 0,
    valorMax: 670008900,
    valorNome: "",
    valorArray: [],
    ordem: 'crescente',
    // carrinho: [],
    // quantidade: 0
  };

  adicionarItem = (itemId) => {
    const itemNoCarrinho = this.state.itensNoCarrinho.find(item => itemId === item.id)
     if (itemNoCarrinho) {
       const novosItensCarrinho = this.state.itensNoCarrinho.map (item => {
         if (itemId === item.id) {
           return {
            ...item,
             quantidade: item.quantidade + 1
           }
         }
         return item
       })
    this.setState({itensNoCarrinho : novosItensCarrinho})
  } else {
    const itemAdicionado = this.state.itensNoCarrinho.find(item => itemId === item.id)

    const novosItensCarrinho = [...this.state.itensNoCarrinho, {...itemAdicionado, quantidade: 1}]

    this.setState({itensNoCarrinho: novosItensCarrinho})
  }
}
  
  
  

  valorDataApp = (data) => {
    const id = data.target.id;
    const valor = data.target.value;

    this.setState(
      (state) => ({
        valor: valor
      }));

    /* console.log("id;", id, "valor:" , valor); */

    if (id === "1") {
      this.setState(
        (state) => ({
          valorMin: valor
        }));
    }
    if (id === "2") {
      this.setState(
        (state) => ({
          valorMax: valor
        }));
    }
    if (id === "3") {
      return this.setState(
        (state) => ({
          valorNome: valor
        }));
    }

    if (this.state.valor) {
      this.setState(
        (state) => ({
          produtosFiltrado: this.state.produtos
            .filter((item) => item.valor >= this.state.valorMin && item.valor <= this.state.valorMax),
          naoFiltrando: false,
        }));

      console.log(this.state.produtosFiltrado);
      console.log(this.state.valor);
      console.log(this.state.naoFiltrando);
      console.log(this.state.valorMax);

      // }else{ 
      //   this.setState(
      //     (state) =>({
      //      naoFiltrando: true,
      //      valorMax: 6700090000
      //    }));

    }
  };

  updateOrdem = (event) => {
    this.setState({
      ordem: event.target.value
    })
  }

  render() {

    const arrayProduto =
      this.state.produtos
        .filter(produto => {
          return this.state.valorMin === '' || produto.valor >= this.state.valorMin
        })
        .filter(produto => {
          return this.state.valorMax === '' || produto.valor <= this.state.valorMax
        })
        .filter(produto => {
          return produto.nome.toLowerCase().includes(this.state.valorNome.toLocaleLowerCase())
        })
        .sort((produtoAtual, proximoProduto) => {
          switch (this.state.ordem) {
            case 'crescente':
              return produtoAtual.valor - proximoProduto.valor
            case 'decrescente':
              return proximoProduto.valor - produtoAtual.valor
          }
        })
        .map((produto) => {
          return (
            <CardProduto key={produto.id}>
              <Imagem src={produto.imagem} alt='Imagem do produto' />
              <Paragrafo>Nome: {produto.nome}</Paragrafo>
              <Paragrafo>Valor: {produto.valor}</Paragrafo>
              <Botao onClick={() => this.props.adicionarItem(produto.id)}>Adicionar ao carrinho</Botao>
            </CardProduto>
          );
        });

    return (
      <CaixaPrincipal>
        <GlobalStyle />
        <FiltroDiv>        
          <Filter
            valorDataApp={this.valorDataApp}
            inputLabel={"Valor mínimo:"}
          />
        </FiltroDiv>
        
        <div>
          <label htmlFor="ordem">Ordem: </label>
          <select value={this.state.ordem} onChange={this.updateOrdem}>
            <option value='crescente'>Crescente</option>
            <option value='decrescente'>Decrescente</option>
          </select>
        </div>

        <CardsContainer>
          {arrayProduto}
        </CardsContainer>
        
        <Carrinho adicionarItem={this.adicionarItem}/>

      </CaixaPrincipal>
    );
  }
}

export default App;
