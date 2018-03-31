import React, { Component } from 'react';

class ProductCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            productDetail: "",
            productCategory: "",
            categoryList: ["Normal", "Special", "Extra Special"],
        }
    }
    componentDidMount() {
        if (this.props.selectedProduct) {
            this.setState({
                productName: this.props.selectedProduct.name,
                productCategory: this.props.selectedProduct.category,
                productDetail: this.props.selectedProduct.detail
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = e => {
        e.preventDefault();
        if (this.props.selectedProduct) {
            this.props.editProduct(this.props.selectedProduct.index, this.state);
        }
        else {
            this.props.addProduct(this.state);
        }
    }
    render() {
        return (
            <div className="col-lg-4">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="productName"
                            value={this.state.productName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Product Details</label>
                        <input
                            className="form-control"
                            type="text"
                            value={this.state.productDetail}
                            onChange={this.onChange}
                            name="productDetail"
                        />
                    </div>
                    <div className="form-group">
                        <label>Product Type</label>
                        <select
                            className="form-control"
                            onChange={this.onChange}
                            name="productCategory"
                            value={this.state.productCategory}>
                            {this.state.categoryList.map(item => {
                                return <option key={item}>{item}</option>
                            })}
                        </select>
                    </div>
                    <button>Save</button>
                </form>
            </div>
        );
    }
}

export default ProductCreate;