
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





class InputComponente extends React.Component {

   



    valorData = (e) => {
        // e.persist();
        this.props.valorDataApp(e)
        // console.log(e.target.value)
        // this.setState({ 
        //     valor:e.target.value
        // })
    }

    render() {


        return (
            <>
                <InputLabel>{this.props.inputLabel}</InputLabel>
                {/* <Input value={this.state.valor} type={this.props.type} onChange={this.valorData} /> */}
                <Input id={this.props.id}   type={this.props.type} onChange={this.valorData} />
            </>


        )
    }
}

export default InputComponente;
