import React, { Component } from 'react';

class MyComponent extends Component {
  state = { count: 0 };

  mouseOverHandler = (e) => {
    console.log('you moused over');
    console.log(e); //e is sysnthetic event instance
  }

  clickHandler = (e) => {
    console.log('you clicked');
    console.log(e); //e is sysnthetic event instance
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div className="container">
        <h1 onClick={this.clickHandler} onMouseOver={this.mouseOverHandler}>Haz click o pasa el ratón encima</h1>
        <div>Clicks:{this.state.count}</div>
      </div>
    )
  }
}

export default MyComponent;