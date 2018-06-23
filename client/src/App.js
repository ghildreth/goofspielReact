import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './Cards';

class App extends Component {
  state = {
    response: '',
    deckOfCards: ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king' ],
  };

  componentDidMount() {
    this.callApi()
    .then(res => this.setState({ response: res.express }))
    .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if(response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Goofspiel</h1>
        </header>
        <p className="App-intro">{this.state.repsonse}</p>
        <Cards deckOfCards={this.state.deckOfCards}/>
      </div>
      
  
    );
  }
}

export default App;
