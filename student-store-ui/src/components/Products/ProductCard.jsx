import * as React from "react"
import "./ProductCard.css"
import {
  BrowserRouter as Router,
  Route, 
  Link, 
} from "react-router-dom";

export default function ProductCard({ product, productId, quantity = 0, handleAddItemToCart, handleRemoveItemFromCart, showDescription }) {

  return (
    <div className="product-card">
        <Link to={"products/" + product.id}>
        <img id="product-poster" src={product.image}/>
        </Link>
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">${product.price}</p>
        {showDescription &&
            <p className="product-description">{product.description}</p>
        } 
          <button type="button" className="add" onClick={() => handleAddItemToCart(productId)}>+</button>
          <button type="button" className="remove" onClick={() => handleRemoveItemFromCart(productId)}>-</button>
          <p className="product-quantity">{quantity}</p>
    </div>
  )}

  