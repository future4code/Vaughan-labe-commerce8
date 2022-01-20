
import React from 'react';
import styled from 'styled-components';



const Input = styled.input`
margin: 0 0  20px 10px;
width:60%;
`

const InputLabel = styled.label`
margin: 20px 0  0 10px;
width:60%;
`





class Filter extends React.Component {

   



    valorData = (e) => {
        this.props.valorDataApp(e)
    }

    render() {


        return (
            <>
                <InputLabel>"Valor mínimo:"</InputLabel>
                
                <Input   placeholder="Valor minimo" 
                id={1}  
                type={"number"} onChange={this.valorData} />

                <InputLabel>"Valor máximo:"</InputLabel>

                <Input   placeholder="Valor maximo"
                id={2}  
                type={"number"} onChange={this.valorData} />
                
                <InputLabel>"Busca por nome"</InputLabel>

                <Input   placeholder="Busca por nome"
                id={3}  
                type={"text"} onChange={this.valorData} />
           </>
        )
    }
}

export default Filter;
