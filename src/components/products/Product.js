import React, { Component } from "react";
import PropTypes from "prop-types";

class Product extends Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <p>{product.content}</p>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired
};
export default Product;