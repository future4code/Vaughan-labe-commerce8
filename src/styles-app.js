import styled from "styled-components";

// Div Principal
export const CaixaPrincipal = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 4fr 1fr;
`;

//Header
export const EstilizacaoHeader = styled.div`
    grid-column-start: 1;
    grid-column-end: 5;
    justify-content: center;
    align-items: center;
    /* width: 100vw; */
    text-align: center;
    color: #303030;
    background-color: #ad3743;
    padding: 10px;
`

// Estilização Filtro 
export const FiltroDiv = styled.div`
    grid-row-start: 2;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  border: solid 1px black;
  background: #6e6e6e;
  color: black;
`;

// Estilização Cards
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: .6fr 4fr 4fr;
  justify-content: center;
  align-items: center;
  grid-row-start: 2;
`;

export const OrdenacaoContainer = styled.div`
    grid-column: 2 / -1;
    padding: 10px;
    margin-top: 10px;
`

export const CardProduto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  border: 2px solid black;
  margin: 10px;
`;

export const Imagem = styled.img`
  width: 200px;
  height: 200px;
  margin: 10px;
`;

export const Paragrafo = styled.p`
  margin-bottom: 10px;
`;

export const Botao = styled.button`
  margin-bottom: 10px;
  padding: 5px;
`
// Estilização Carrinho

export const CarrinhoContainer = styled.div`
    /* grid-column:; */
    grid-row-start: 2;
    border: 1px solid black;
    background-color: #6e6e6e;
    margin: 10px;
    padding: 10px;
    color: black;
    h3 {
        margin: 10px;
    }
    p {
        margin: 10px;
    }
`

export const EstilizacaoCarrinhoContainer = styled.div`
    margin: 10px;
`

export const CardCarrinho = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid black;
`

export const BotaoCarrinho = styled.button`
    margin: 10px;
    height: 2rem;
`