import React from "react";
import { createGlobalStyle } from "styled-components";
import Filter from "./Components/Filter";
import listaProdutos from "./data/produtos.js";
import Carrinho from './Components/Carrinho';
import { EstilizacaoHeader, CaixaPrincipal, FiltroDiv, OrdenacaoContainer, CardsContainer, CardProduto, Imagem, Paragrafo, Botao } from './styles-app';
import iconeAdicionarCarrinho from './imgs/add-shopping-cart.svg';
import iconeNave from './imgs/spaceship-red.png';
import iconeCifrao from './imgs/dollar-sign.svg';
import iconeFoguete from './imgs/rocket.svg'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    background-color: #303030;
    color: white;
  }
  `;

class App extends React.Component {
  state = {
    produtos: listaProdutos,

    produtosFiltrado: [],
    naoFiltrando: true,

    valor: "",
    valorMin: "",
    valorMax: "",
    valorNome: "",
    valorArray: [],
    ordem: 'crescente',

    itensNoCarrinho: []
  };

  componentDidUpdate() {
    const itensCarrinhoEmString = JSON.stringify(this.state.itensNoCarrinho)
    localStorage.setItem("Itens no Carrinho", itensCarrinhoEmString);
  };

  componentDidMount() {
    const carrinhoLocalStorage = JSON.parse(localStorage.getItem("Itens no Carrinho"))

    if (carrinhoLocalStorage) {
      this.setState({ itensNoCarrinho: carrinhoLocalStorage})
    }
  };

  adicionarItem = (itemId) => {
    const itemNoCarrinho = this.state.itensNoCarrinho.find(item => itemId === item.id)
    if (itemNoCarrinho) {
      const novosItensCarrinho = this.state.itensNoCarrinho.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            quantidade: item.quantidade + 1
          }
        }
        return item
      })
      this.setState({ itensNoCarrinho: novosItensCarrinho })
    } else {
      const itemAdicionado = this.state.produtos.find(item => itemId === item.id)

      const novosItensCarrinho = [...this.state.itensNoCarrinho, { ...itemAdicionado, quantidade: 1 }]

      this.setState({ itensNoCarrinho: novosItensCarrinho })
    }
  }



  removerItem = (itemID) => {
    const novosProdutos = this.state.itensNoCarrinho.map((item) => {
      if(item.id === itemID) {
        return {
          ...item,
          quantidade: item.quantidade - 1
        }
      }
      return item
    }).filter((item) => item.quantidade > 0)
    this.setState({itensNoCarrinho: novosProdutos})
  }

  valorDataApp = (data) => {
    const id = data.target.id;
    const valor = data.target.value;

    this.setState(
      (state) => ({
        valor: valor
      }));

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

    }
  };

  updateOrdem = (event) => {
    this.setState({
      ordem: event.target.value
    })
  };

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
              <Paragrafo><img src={iconeFoguete} alt="Ícone de Foguete"/> {produto.nome}</Paragrafo>
              <Paragrafo><img src={iconeCifrao} alt="Ícone de Cifrão"/> {produto.valor},00</Paragrafo>
              <Botao onClick={() => this.adicionarItem(produto.id)}><img src ={iconeAdicionarCarrinho} alt="Ícone Adicionar ao Carrinho"/></Botao>
            </CardProduto>
          );
        });

    return (
      <CaixaPrincipal>
        <GlobalStyle />
        <EstilizacaoHeader>
          <h1> <img src={iconeNave} alt="Ícone de Nave"/> Navezinhas <img src={iconeNave} alt="Ícone de Nave"/></h1>
        </EstilizacaoHeader>
        <FiltroDiv>
          <Filter
            valorDataApp={this.valorDataApp}
            inputLabel={"Valor mínimo:"}
          />
        </FiltroDiv>



        <CardsContainer>
          <OrdenacaoContainer>
            <label htmlFor="ordem">Ordem: </label>
            <select value={this.state.ordem} onChange={this.updateOrdem}>
              <option value='crescente'>Crescente</option>
              <option value='decrescente'>Decrescente</option>
            </select>
          </OrdenacaoContainer>
            {arrayProduto}

        </CardsContainer>
        
        <Carrinho 
          itensNoCarrinho={this.state.itensNoCarrinho}
          removerItem={this.removerItem}
        />


      </CaixaPrincipal>
    );
  }
}

export default App;