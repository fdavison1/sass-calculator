import React from 'react';
import Calculator from './Calculator'
import './App.css';


class App extends React.Component {
  state = {}
  render(){
    const {authenticated} = this.state;
    let body = null;
    if (authenticated) {
      body = (
        <div className="page-body">
          <div className="login-buttons">
            <button onClick={this.logout}>Logout</button>
          </div>
          <Calculator></Calculator>
        </div>
      );
    } else {
      body = (
        <div className="page-body">
          <div className="login-buttons">
            <button onClick={this.login}>Login</button>
          </div>
        </div>
      );
    }
  
    return (
      <div className="App">
        <h1>Calculator</h1>
        {body}
      </div>
    );
  }
}

export default App;
