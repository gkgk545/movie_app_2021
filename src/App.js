import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  }; // Object

  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };

  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };

  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}
// setState 호출 => react는 class Component에 있는 새로운 state와 함께 render() 호출

export default App;
