import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Binding this manually
    this.sayWelcome = this.sayWelcome.bind(this);
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello = () => {
    console.log("Hello! You clicked the increment button.");
  };

  sayWelcome(message) {
    alert(`Message: ${message}`);
  }

  handleClick = (event) => {
    // Synthetic event example
    alert('I was clicked');
    console.log(event); // SyntheticEvent
  };

  render() {
    return (
      <div style={{ marginBottom: '30px' }}>
        <h2>Counter</h2>
        <p>Current Count: {this.state.count}</p>
        <button onClick={() => {
          this.increment();
        }}>
          Increment
        </button>
        <button onClick={this.decrement}>Decrement</button>
        <br /><br />
        <button onClick={() => this.sayWelcome('Welcome!')}>
          Say Welcome
        </button>
        <br /><br />
        <button onClick={this.handleClick}>
          OnPress
        </button>
      </div>
    );
  }
}

export default Counter;
