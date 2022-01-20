import React from 'react';
import './App.css';
import fogueteN1Img from './imgs/foguete-N1.jpg';
import fogueteVostokImg from './imgs/foguete-vostok.jpg';
import naveH3KLO8Img from './imgs/nave-H3KLO8.jpg';
import naveH7KJX67Img from "./imgs/nave-H7KJX67.jpg";
import onibusBuranImg from "./imgs/onibus-buran.jpg";
import onibusPtichkaImg from "./imgs/onibus-ptichka.jpg";
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
`
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
`

const CardProduto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  border: 2px solid black;
  margin: 10px;
`

const Imagem = styled.img`
  width: 200px;
  height: 200px;
  margin: 10px;
`

const Paragrafo = styled.p`
  margin-bottom: 10px;
`

const Botao = styled.button`
  margin-bottom: 10px;
  padding: 5px;
`

class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        nome: "Foguete N1",
        valor: 150000,
        imagem: fogueteN1Img,
      },
      {
        id: 2,
        nome: "Foguete Vostok",
        valor: 2400000,
        imagem: fogueteVostokImg,
      },
      {
        id: 3,
        nome: "Nave H3KLO8",
        valor: 1000500,
        imagem: naveH3KLO8Img,
      },
      {
        id: 4,
        nome: "Nave H7KJX67",
        valor: 2400600,
        imagem: naveH7KJX67Img,
      },
      {
        id: 5,
        nome: "Ônibus Espacial Ptichka",
        valor: 45000780,
        imagem: onibusBuranImg,
      },
      {
        id: 6,
        nome: "Ônibus Espacial Buran",
        valor: 67000890,
        imagem: onibusPtichkaImg,
      },
    ],

  }

  // onChangeFilter = (event) => {
  //   this.setState ({ produtos: event.target.value})
  // }

  render() {

    // const produtosCopiaCrescente = [...this.state.produtos];
    // const produtosOrdemCrescente = produtosCopiaCrescente.sort((a, b) => (a.valor > b.valor) ? 1 : -1);

    // const produtosCopiaDecrescente = [...this.state.produtos];
    // const produtosOrdemDecrescente = produtosCopiaDecrescente.sort((a, b) => (a.valor < b.valor) ? 1 : -1);

    // const arrayCrescente = produtosOrdemCrescente.map((produto) => {
    //   return <CardProduto>
  
    //   <Imagem src={produto.imagem} alt="Imagem do produto" />
    //   <Paragrafo>Nome: {produto.nome}</Paragrafo>
    //   <Paragrafo>Valor: {produto.valor}</Paragrafo>
    //   <Botao>Adicionar ao carrinho</Botao>

    // </CardProduto>
    // })

    // const arrayDecrescente = produtosOrdemDecrescente.map((produto) => {
    //   return <CardProduto>
  
    //   <Imagem src={produto.imagem} alt="Imagem do produto" />
    //   <Paragrafo>Nome: {produto.nome}</Paragrafo>
    //   <Paragrafo>Valor: {produto.valor}</Paragrafo>
    //   <Botao>Adicionar ao carrinho</Botao>

    // </CardProduto>
    // })

    // const listaOrdenada = (this.state.produtos.filter (produto => {
    //   switch (this.state.ordenacao) {
    //     case 'crescente':
    //       return produtosOrdemCrescente
    //     case 'decrescente':
    //       return produtosOrdemDecrescente
    //   }
    // }))

    // const listaOrdenada = () => {
    //   switch (this.state.produtos) {
    //     case "crescente":
    //       return arrayCrescente
        
    //     case "decrescente":
    //       return arrayDecrescente

    //     default:
    //       return arrayProduto
    //   }
    // }

    const arrayProduto = this.state.produtos.map((produto) => {
      return <CardProduto>
  
        <Imagem src={produto.imagem} alt="Imagem do produto" />
        <Paragrafo>Nome: {produto.nome}</Paragrafo>
        <Paragrafo>Valor: {produto.valor}</Paragrafo>
        <Botao>Adicionar ao carrinho</Botao>

      </CardProduto>
    })

    return (

      <div>
        <GlobalStyle />
        <div>
          <label>Ordem:</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
          <option value="crescente">Crescente</option>
          <option value="decrescente">Decrescente</option>
          </select>
        </div>
        <CardsContainer>
          {arrayProduto}
        </CardsContainer>
      </div>
    );
  }
}

export default App;