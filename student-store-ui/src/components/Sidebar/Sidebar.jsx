import * as React from "react"
import ShoppingCart from "../ShoppingCart"
import "./Sidebar.css"
export default function Sidebar({isOpen, shoppingCart, products, checkOutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle }) {
  return (
    <section className={isOpen ? "sidebar" : "sidebar closed"}>
      <button className="toggle-button" onClick={handleOnToggle}><img src="../src/arrow.png" alt="arrow" id="toggle-image"/></button>
      <button className="toggle-button" onClick={handleOnToggle}><img src="../src/icons8-shopping-cart-64.png" alt="Shopping Cart" id="toggle-image"/></button>
      <button className={isOpen ? "closed" : "checkout-Btn"}><img src="../src/dollar_sign.png" alt="Dollar Sign" id="toggle-image"/></button>
      <button className={isOpen ? "closed" : "checkout-Btn"}><img src="../src/checklist.png" alt="checklist" id="toggle-image"/></button>
      <ShoppingCart isOpen={isOpen} products={products} shoppingCart={shoppingCart} checkOutForm={checkOutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}/>
    </section>
  )
}
