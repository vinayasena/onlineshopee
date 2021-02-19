import React,{useContext} from "react";
import Link from "next/link";
import {DataContext} from '../store/GlobalsState';
import {addToCart} from '../store/Actions'

function Product({ product }) {

  const {state, dispatch} =  useContext(DataContext);
  const {cart} = state;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <h4>${product.price}</h4>
        <p className="card-text">{product.description}</p>
        <div className="row justify-content-between mx-0">
          <Link href={`product/${product.id}`}>
            <a className="btn btn-info" style={{ marginRight: "5px", flex: 1 }}>
              View
            </a>
          </Link>
          <button
            className="btn btn-success"
            style={{ marginLeft: "5px", flex: 1 }}
            onClick={()=>dispatch(addToCart(product, cart))}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
