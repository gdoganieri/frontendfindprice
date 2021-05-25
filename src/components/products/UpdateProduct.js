import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Button, Form} from "react-bootstrap";
import {updateProduct} from "./ProductsActions";

class UpdateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: this.props.product.product_name,
      category: this.props.product.category,
      description: this.props.product.description
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onUpdateClick = () => {
    const {product} = this.props;
    this.props.updateProduct(product.id, {
      product_name: this.state.product_name,
      category: this.state.category,
      description: this.state.description,
    });
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="contentId">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              name="product_name"
              placeholder={this.props.product.product_name}
              default = {this.props.product.product_name}
              value={this.product_name}
              onChange={this.onChange}
            />
            <Form.Label>Product Category</Form.Label>
            <Form.Control
              type="text"
              name="category"
              placeholder={this.props.product.category}
              default = {this.props.product.category}
              value={this.category}
              onChange={this.onChange}
            />
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder={this.props.product.description}
              default = {this.props.product.description}
              value={this.description}
              onChange={this.onChange}
            />
          </Form.Group>
        </Form>
        <Button variant="success" onClick={this.onUpdateClick}>
          Update product
        </Button>
      </div>
    );
  }
}

UpdateProduct.propTypes = {
  updateProduct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { updateProduct })(withRouter(UpdateProduct));