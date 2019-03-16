import React, { Component } from 'react';
import './App.css';

class App extends Component {
state = {
  num:0
}






  render() {
    function fact (n){
      if (n==0) {return 1} else {
        return fact(n-1)*n
      }
    
    }
    return (
      <div>
      <button onClick={(e)=>this.setState({num:0})}>0</button>

      <button onClick={(e)=>this.setState({num:1})}>1</button>
      <button onClick={(e)=>this.setState({num:2})}>2</button>
      <button onClick={(e)=>this.setState({num:3})}>3</button>
      <button onClick={(e)=>this.setState({num:4})}>4</button>
      <button onClick={(e)=>this.setState({num:5})}>5</button>
       <p> le factoriel de {this.state.num}   est {fact(this.state.num)}</p>
      </div>
    );
  }
}

export default App;
