import * as React from "react"
import "./Sidebar.css"
export default function Sidebar() {
  return (
    <section className="sidebar">
      <button className="toggle-button"><img src="../src/arrow.png" alt="arrow" id="toggle-image"/></button>
      <button className="toggle-button"><img src="../src/icons8-shopping-cart-64.png" alt="Shopping Cart" id="toggle-image"/></button>
      <button className="toggle-button"><img src="../src/dollar_sign.png" alt="Dollar Sign" id="toggle-image"/></button>
      <button className="toggle-button"><img src="../src/checklist.png" alt="checklist" id="toggle-image"/></button>
    </section>
  )
}
