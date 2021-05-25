import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import UpdateProduct from "./UpdateProduct";
import {deleteProduct, updateProduct} from "./ProductsActions";
import {Button} from "react-bootstrap";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false
        };
    }

    onUpdateClick() {
        this.setState({showComponent: !this.state.showComponent});
    }

    onDeleteClick = () => {
        const {product} = this.props;
        this.props.deleteProduct(product.id);
    };

    render() {
        const {product} = this.props;
        return (
            <div>
                <hr/>
                <p>
                    (id:{product.id}) {product.product_name}
                </p>
                {this.state.showComponent ? (
                    <UpdateProduct product={product}/>
                ) : null}

                <Button variant="secondary" size="sm" onClick={() => this.onUpdateClick()}>
                    Update
                </Button>{" "}
                <Button variant="danger" size="sm" onClick={this.onDeleteClick}>
                    Delete
                </Button>
            </div>
        );
    }
}

Product.propTypes = {
    product: PropTypes.object.isRequired
};
const mapStateToProps = state => ({});

export default connect(mapStateToProps, {deleteProduct, updateProduct})(
    withRouter(Product)
);