import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import {addProduct, getCategories} from "./ProductsActions";
import axios from "axios";

var values;
class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: "",
      category: "",
      description: "",
      options:[],
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount() {
    this.fetchOptions()

  }
  fetchOptions(){
    axios
        .get("/categories")
        .then((response) => {
  this.setState({options: response.data},function () {console.log(this.state.options);});
}, (error) => {
  console.log(error);


});

  }

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
              as="select"
              name="category"
              placeholder="Enter product category"
              value={this.category}
              onChange={this.onChange}
            >
                { this.state.options.map((option, key) => <option key={key} >{option.category}</option>) }
           </Form.Control>
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
  addProduct: PropTypes.func.isRequired,
  getCategories : PropTypes.func.isRequired,
};

const mapStateToProps = state => ({options: state.options});

export default connect(mapStateToProps, { addProduct ,getCategories})(withRouter(AddProduct));