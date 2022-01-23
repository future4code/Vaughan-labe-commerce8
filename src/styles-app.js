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
  text-align: center;
  color: #303030;
  background-color: #ad3743;
  padding: 10px;
  img {
    height: 2.1rem;
  }
  //título 'metálico'
  h1 {
    background: linear-gradient(#787878 0%,
                                #b5b5b5 25%,
                                #e3e3e3 50%,
                                #b5b5b5 75%,
                                #787878 100%
    ); 
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #fff;
  	text-transform: uppercase;	
	  font-weight: 600;
  }
`

// Estilização Filtro 
export const FiltroDiv = styled.div`
  grid-row-start: 2;
  height: 80vh;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  border: solid 1px black;
  background: #858585;
  color: black;
  align-items: center;

`;

export const Filter = styled.div`
  width: 100%;
  
`

// Estilização Cards
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: .7fr 4fr 4fr;
  justify-content: center;
  align-items: center;
  grid-row-start: 2;
`;

export const OrdenacaoContainer = styled.div`
    grid-column: 1 / -1;
    padding: 10px;
    margin-top: 10px;
    justify-self: center;
`

export const CardProduto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  border: 2px solid black;
  margin: 10px;
  background-color: #ad3743; 
 
  box-shadow: 3px 3px 3px #1f1f1f;
`;

export const Imagem = styled.img`
  width: 140px;
  height: 140px;
  margin: 10px;
  box-shadow:3px 3px 3px #1f1f1f;
`;

export const Paragrafo = styled.p`
  margin-bottom: 10px;
  ;
`;

export const Botao = styled.button`
  margin-bottom: 10px;
  padding: 5px;
  background-color: #41807d;
  border: 2px solid black;
  width: 50%;
  border-radius: .5em;
  cursor: pointer;
  :hover {
      background-color: #50a3a0;
    }
`
// Estilização Carrinho
export const CarrinhoContainer = styled.div`
    grid-row-start: 2;
    border: 1px solid black;
    background-color: #858585;
    margin: 10px;
    padding: 10px;
    color: black;
    text-align: center;
    
    h3 {
        margin: 10px;
        text-align: left;
    }
    p {
        margin: 10px;
        font-weight: 500;
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
    background-color: #41807d;
    border: 2px solid black;
    border-radius: .5em;
    cursor: pointer;
    :hover {
      background-color: #50a3a0;
    }
`
//FOOTER

export const Footer = styled.footer`
  grid-column-start: 1;
  grid-column-end: 5;
  color: #b5b5b5;
  background-color: #ad3743;
  padding: 15px 15px;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  margin-top: 0%;
  p:hover{
    color: white;
    cursor: pointer;
  }
 text-align: center;
`