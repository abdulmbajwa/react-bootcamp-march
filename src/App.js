import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductCreate from "./ProductCreate";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import {Route} from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productCreateVisible: false,
      productListVisible: false,
      productDetailVisible: false,
      productList: [],
      selectedProduct: null,
    };
  }
  addProduct = product => {
    let productList = this.state.productList;
    productList.push({
      name: product.productName,
      detail: product.productDetail,
      category: product.productCategory
    });
    this.setState({
      productList: productList,
      productCreateVisible: false,
      productDetailVisible: false,
      productListVisible: true
    });
  }
  editProduct = (index, product) => {
    debugger;
    let productList = this.state.productList;
    let productToChange = this.state.productList[index];
    productToChange.name = product.productName;
    productToChange.category = product.productCategory;
    productToChange.detail = product.productDetail;
    productList[index] = productToChange;
    this.setState({
      productList, 
      productCreateVisible: false,
      productListVisible: true,
      productDetailVisible: false,
    });
  }
  selectForEdit = index => {
    this.setState({
      selectedProduct: { ...this.state.productList[index], index },
      productCreateVisible: true,
      productListVisible: false,
      productDetailVisible: false,
    });
  }
  displayForm = () => {
    this.props.history.push("/product/create");
    // this.setState({
    //   productCreateVisible: true,
    //   productListVisible: false,
    //   productDetailVisible: false,
    // })
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="row m-5">
          <div className="col-lg-12">
            <button onClick={this.displayForm}>Create</button>
          </div>
          <Route path="/product/create/?id" component={ProductCreate}/>
          {this.state.productCreateVisible === true && <ProductCreate
            addProduct={this.addProduct}
            selectedProduct={this.state.selectedProduct}
            editProduct={this.editProduct} />}
          {this.state.productDetailVisible === true && <ProductDetail />}
          {this.state.productListVisible === true && <ProductList list={this.state.productList} selectForEdit={this.selectForEdit} />}
        </div>
      </div>
    );
  }
}

export default App;
