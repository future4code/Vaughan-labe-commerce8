// state = {
//     produtos: [
//       {
//       id: 1,
//       nome: 'Navinha',
//       valor: 10,
//       imagem: 'oi'
//       }
//     ],
//     carrinho: [],
//     quantidade: 0
//   }

  

//   adicionarProduto = () => {
//     const novoProdutoCarrinho = this.state.produtos.map((item) => {
//       return (
//           <ul key={item.id}>
//             <li>Nome: {item.nome}</li>
//           </ul>
//         )
//       }  
//     );
//     const novaLista = [...this.state.carrinho, novoProdutoCarrinho];
//     this.setState({carrinho: novaLista}) 
//   }


//  render() {
    
//   return (
//     <div className="App">
//       <button onClick={this.adicionarProduto}>Adicionar ao carrinho</button>
//         <div>
//           <h3>Carrinho</h3>
//           {this.state.carrinho}
//           <button>remover</button>
//           <p>valor total:</p>
//         </div>
//     </div>
//   );
//   }
// }