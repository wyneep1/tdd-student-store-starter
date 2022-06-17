import * as React from "react"
import ProductCard from "./ProductCard";

export default function ProductGrid(props) {
let displayProducts ={};
if(props.category === "all"){
  displayProducts = props.products;
} else{
  displayProducts = props.products.filter(product =>{
    return product.category === props.category;
  })
}

if(props.searchBar !== ''){
  displayProducts = displayProducts.filter(product =>{
    return product.name.toLowerCase().includes(props.searchBar.toLowerCase());
  })
}

console.log("Entered product grid: ", props.products)
  return (

    <div className = "product-grid">
      {props.isFetching ?
				<h1>Loading...</h1>
				:
         displayProducts.map((product, index) => {
            return <ProductCard key = {product.id} 
                                showDescription={false} 
                                product={product}
                                productId = {product.id}/>;
         })}
    </div>
  )
}