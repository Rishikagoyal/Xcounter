import './App.css';
import React, {Component} from 'react';

class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      count:0
    };
  }

  handleIncrement=()=>
  {
     this.setState(prev=>({
        count: prev.count+1
     }));
  };

  handleDecrement=()=>
  {
     this.setState(prev=>({
        count: prev.count-1
     }));
  };

  render()
  {
      return(
          <>

          <h1>Counter App</h1>
          <p>Count: <span>{this.state.count}</span></p>
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
          
          </>

      );
  }
}

export default App;