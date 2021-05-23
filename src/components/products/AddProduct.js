import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { addProduct } from "./ProductsActions";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: "",
      category: "",
      description: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAddClick = () => {
    const product = {
      product_name: this.state.product_name,
      category: this.state.category,
      description: this.state.description,
    };
    this.props.addProduct(product);
  };

  render() {
    return (
      <div>
        <h2>Add new product</h2>
        <Form>
          <Form.Group controlId="contentId">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              name="product_name"
              placeholder="Enter product name"
              value={this.product_name}
              onChange={this.onChange}
            />
            <Form.Label>Product Category</Form.Label>
            <Form.Control
              type="text"
              name="category"
              placeholder="Enter product category"
              value={this.category}
              onChange={this.onChange}
            />
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="Enter product description"
              value={this.description}
              onChange={this.onChange}
            />
          </Form.Group>
        </Form>
        <Button variant="success" onClick={this.onAddClick}>
          Add product
        </Button>
      </div>
    );
  }
}

AddProduct.propTypes = {
  addProduct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { addProduct })(withRouter(AddProduct));