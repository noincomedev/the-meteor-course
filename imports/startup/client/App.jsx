import React, { Component } from "react";

const Stateless = ({ children, title }) => (
  <div className="container col align-center justify-center">
    <h2>{title}</h2>
    {children}
  </div>
);

const Subheading = () => (
  <p>
    This is a stateless component. There is no state available on this
    components, just the props. we use CamelCase for naming react components.
  </p>
);

class App extends Component {
  constructor(props) {
    super(props);
    const { title } = props;
    this.state = {
      count: title ? 0 : 100
    };
  }

  componentDidMount() {
    console.log("DID MOUNT");
  }

  componentDidUpdate() {
    console.log("DID UPDATE");
  }

  updateCount = () => this.setState({ count: (this.state.count += 1) });

  render() {
    console.log("RENDER");
    console.log(this.props);

    const { count } = this.state;
    return (
      <div className="container col align-center justify-center">
        <Stateless title="TITLE AS PROP">
          <Subheading />
        </Stateless>
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