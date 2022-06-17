import * as React from "react"
import "./ProductCard.css"
import {
  BrowserRouter as Router,
  Route, 
  Link, 
} from "react-router-dom";

export default function ProductCard(props) {
  const [isSelected, setSelected] = React.useState(false);

  return (
    <div className="product-card">
        <img id="product-poster" src={props.product.image} />
        <h2 className="product-name">{props.product.name}</h2>
        <p className="product-price">${props.product.price}</p>
    </div>
  )
}