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
      content: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAddClick = () => {
    const product = {
      content: this.state.content
    };
    this.props.addProduct(product);
  };

  render() {
    return (
      <div>
        <h2>Add new product</h2>
        <Form>
          <Form.Group controlId="contentId">
            <Form.Label>Product</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="content"
              placeholder="Enter product"
              value={this.content}
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