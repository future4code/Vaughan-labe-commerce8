import React from 'react';

let produtos = [
    {
        nome: "oi",
        valor: 200,
        info: "saudação"
    },
    {
        nome: "tchau",
        valor: 100,
        info: "saudação"
    },
    {
        nome: "uepa",
        valor: 2000,
        info: "saudação"
    }
]

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantidade: 0
        }
        //eventos
        this.adicionar = this.adicionar.bind(this);
        this.remover = this.remover.bind(this);
    }

    adicionar() {
        this.setState({
            quantidade: this.state.quantidade + 1
        })
    }

    remover() {
        this.setState({
            quantidade: this.state.quantidade - 1
        })
    }

    render() {
        return(
            <div>
                <h4>{this.state.nome}</h4>
                <div>
                    Quantidade: {this.state.quantidade}
                </div>
                <button onClick={this.adicionar}>+1</button>
                <button onClick={this.remover}>-1</button>
                <hr/> 
            </div>
            
        );
    }

}


class ListaProdutos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            produtos: ""
        };

    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ produtos: produtos })
        }, 1000);
    }

    render() {
        if (!this.state.produtos) {
            return <p>Carrinho vazio</p>; 
        }
        let listaProdutos = this.state.produtos.map((item) => {
            return (
                <Product 
                nome={item.nome} 
                />
            );
        })

        return (
            {listaProdutos}
        );
    }


}

export default ListaProdutos;