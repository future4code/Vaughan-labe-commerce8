
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
                <InputLabel>{this.props.inputLabel}</InputLabel>
                <Input   placeholder={this.props.placeholder} 
                id={this.props.id}  
                type={this.props.type} onChange={this.valorData} />
           </>
        )
    }
}

export default Filter;
