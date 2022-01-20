import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';
import Filter from './Components/Filter';

// import logo from './logo.svg';
import './App.css';



class App extends React.Component {
  state = {
    valor: '',
  }

  valorDataApp = (data,id) => {
    console.log(data,id)
    this.setState({
      valor:data,
    })
  }




  render() {

    // console.log(this.state.valor)

    return (



      <Filter valorDataApp={this.valorDataApp} />



    );
  }
}

export default App;
