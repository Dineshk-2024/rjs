import React from "react";

class Product extends React.Component {
  state = {
    qty: 1,
  };

  incriHandler = () => {
    this.setState({ qty: this.state.qty - 1 });
  };
a
  decreHandler = () => {
    this.setState({ qty: this.state.qty + 1 });
  };

  render() {
    return (
      <div>
        <h2> Message comp</h2>
        <h2> Wish Message : {this.state.qty}</h2>
        <button onClick={this.incriHandler}>sub</button>
        <button onClick={this.decreHandler}>add</button>
      </div>
    );
  }
}

export default Product;



