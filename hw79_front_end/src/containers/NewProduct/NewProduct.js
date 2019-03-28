import React, {Component, Fragment} from 'react';
import ProductForm from "../../components/ProductForm/ProductForm";
import {createProduct} from "../../store/actions/productsActions";
import {connect} from "react-redux";

class NewProduct extends Component {
    createProduct = productData => {
        this.props.onProductCreated(productData).then(() => {
           this.props.history.push('/');
        });
    };

    render() {
        return (
            <Fragment>
                <h2>New product</h2>
                <ProductForm onSubmit={this.createProduct} />
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onProductCreated: productData => dispatch(createProduct(productData))
});

export default connect(null, mapDispatchToProps)(NewProduct);