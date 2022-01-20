import React from 'react';
import '../App.css';


import InputComponente from './input'



class Filter extends React.Component {

    render() {


        return (

                <InputComponente id={this.props.id} type={this.props.type} valorDataApp={this.props.valorDataApp} inputLabel={this.props.inputLabel} />
              
        
        )
    }
}

export default Filter;
