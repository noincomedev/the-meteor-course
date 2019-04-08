import React, { Component } from "react";

const Stateless = ({ title }) => (
  <div className="container col align-center justify-center">
    <h2>{title}</h2>
    <p>
      This is a stateless component. There is no state available on this
      components, just the props. we use CamelCase for naming react components.
    </p>
  </div>
);

class App extends Component {
  state = {
    count: 0
  };

  updateCount = () => this.setState({ count: (this.state.count += 1) });

  render() {
    const { count } = this.state;
    return (
      <div className="container col align-center justify-center">
        <Stateless title="TITLE AS PROP" />
        <h1>THIS IS A REACT STATEFULL COMPONENT</h1>
        <p>
          Statefull components inherit component lifecicle and also have state!{" "}
          <br />
          The state of a component is like the components memory! You can store
          values there and when it gets updated, react get rerendered!
        </p>
        <h1>{count}</h1>
        <button onClick={this.updateCount}>count++</button>
      </div>
    );
  }
}

export default App;
