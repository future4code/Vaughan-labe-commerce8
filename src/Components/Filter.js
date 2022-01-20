import React from 'react';
import styled from 'styled-components';
import '../App.css';


import InputComponente from './input'


const FiltroDiv = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 23vw;
margin:10px;
padding:10px;
border: solid 1px black
`


const FiltrosH2 = styled.h2`
margin: 10px 10px;
`

class Filter extends React.Component {

    render() {


        return (
            <FiltroDiv>
                <FiltrosH2>
                    Filtros
                </FiltrosH2>

                <InputComponente id={id} type={"number"} valorDataApp={this.props.valorDataApp1} inputLabel={"Valor mínimo:"} />
                <InputComponente id={id}type={"number"} valorDataApp={this.props.valorDataApp2} inputLabel={"Valor máximo:"} />
                <InputComponente id={id}type={"text"} valorDataApp={this.props.valorDataApp3} inputLabel={"Busca por nome:"} />

            </FiltroDiv>

        )
    }
}

export default Filter;
