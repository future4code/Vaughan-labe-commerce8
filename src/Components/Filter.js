
import React from 'react';
import styled from 'styled-components';
import iconeFiltro from '../imgs/filter.svg';
import iconeValor from '../imgs/paid.svg';
import iconeBusca from '../imgs/search.svg';



const Input = styled.input`
margin: 5px 0  20px 10px;
width:70%;
/* font-size:1.1rem; */
border: 1px solid white;
box-shadow: 0 0 4px  rgba(187, 236, 225, 1); 
`

const InputLabel = styled.label`
margin: 20px 0  10px 10px;
width:60%;
font-weight: 600;

`

const FiltrosH2 = styled.h3`
  margin: 10px 10px;
`;




class Filter extends React.Component {





    valorData = (e) => {
        this.props.valorDataApp(e)
    }

    render() {


        return (

            <div>
                <FiltrosH2><img src={iconeFiltro} alt="Ícone de Filtro"/> Filtros</FiltrosH2>
                <InputLabel><img src={iconeValor} alt="Ícone de Cifrão"/> Valor mínimo:</InputLabel>

                <Input placeholder="Valor minimo"
                    id={1}
                    type={"number"} onChange={this.valorData} />
                <br/>

                <InputLabel><img src={iconeValor} alt="Ícone de Cifrão"/> Valor máximo:</InputLabel>
               
                <Input placeholder="Valor maximo"
                    id={2}
                    type={"number"} onChange={this.valorData} />
                <br/>
                <InputLabel><img src={iconeBusca} alt="Ícone de Cifrão"/> Busca por nome</InputLabel>

                <Input placeholder="Busca por nome"
                    id={3}
                    type={"text"} onChange={this.valorData} />
            </div>
        )
    }
}

export default Filter;
