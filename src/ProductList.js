import React from 'react';

const ProductList = props => {
    return (
        <div className="col-lg-12">
            <h1>Product List</h1>
            <div className="row">
                {props.list.map((product, index) => {
                    return (
                        <div key={index} className="col-lg-2">
                            <h3>{product.name}</h3>
                            <p>{product.detail}</p>
                            <p>{product.category}</p>
                            <button onClick={() => props.selectForEdit(index)}>Edit</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default ProductList;