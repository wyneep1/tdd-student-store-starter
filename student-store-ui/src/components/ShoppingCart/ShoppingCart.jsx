import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart(props) {
    return (
        <div className="shopping-cart">
            {props.isOpen ?<div className="open">
                <h3>Shopping Cart<i className="cart-plus side-icon"></i></h3>
                {Object.keys(props.shoppingCart).length === 0 ? <div className="notification">
                    No items added to the cart yet. Start shoppping now!
                </div> : <Cart products={props.products} shoppingCart={props.shoppingCart}/>}

            </div> : <span className="cart-icons">
                <i className="cart-plus side-icon"></i>
                <i className="dollar side-icon"></i>
                <i className="check side-icon"></i>
            </span>}
        </div>
    )
}
export function Cart(props){
    var IdArray = []
    var total = 0
    for (const item in props.shoppingCart){
        IdArray.push(item)
        const product = props.products.filter((p) => p.id === parseInt(item))
        total += (product[0].price * props.shoppingCart[product[0].id])
    }
    const taxes = total * 0.0875
    const totalPrice = total + taxes

    return (
        <div className="cart-table">
            <div className="header">
                <div className="header-row">
                    <span className="flex-2">Name</span>
                    <span className="center">Quantity</span>
                    <span className="center">Unit Price</span>
                    <span className="center">Cost</span>
                </div>
                {
                    IdArray.map((id) => {
                        const product = props.products.filter((p) => p.id === parseInt(id))
                        return <Product setTotal={props.setTotal}product={product} shoppingCart={props.shoppingCart}key={id}/>
                    })
                }
            </div>
            <div className="totals">
                <div className="subtotal">
                    <span className="label">Subtotal</span>
                    <span></span>
                    <span></span>
                    <span className="center subtotal-price">
                        {"$" + total.toFixed(2)}
                    </span>
                </div>
                <div className="taxes">
                    <span className="label">Taxes and Fees</span>
                    <span></span>
                    <span></span>
                    <span className="center tax">
                        {"$" + taxes.toFixed(2)}
                    </span>
                </div>
                <div className="total">
                    <span className="label">Total</span>
                    <span></span>
                    <span></span>
                    <span className="center total-price">
                        {"$" + totalPrice.toFixed(2)}
                    </span>
                </div>
            </div>
        </div>
    )
}

export function CheckOutInfo(props) {
    const order = props?.order
    const receipt = order.receipt?.lines
    console.log(props)
    if(!props.makeReceipt) {
        return (
            <div className="checkout-success">
                <h3>Checkout Info<i className="check side-icon"></i></h3>
                <div className="content">
                    <p>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the
                    order, it will be delivered to your dorm room.</p>
                    
                </div>
            </div>
        )
    }
    else {
        var output = receipt ? [...receipt] : []
        output?.shift()
        return (
            <div className="checkout-success">
                <h3>Checkout Info<i className="check side-icon"></i></h3>
                <div className="card">
                    <header className="card-head">
                        <h4 className="card-title">Receipt</h4>
                    </header>
                    <section className="card-body">
                        <p className="header">{receipt ? receipt[0] : ""}</p>
                        <ul className="purchase">
                            {
                                output.map((line) => (
                                    <li key={line}>{line}</li>
                                ))
                            }
                        </ul>
                    </section>
                    <footer className="card-foot">
                        
                        <button className="button" onClick={() => {props.setMakeReceipt(false); props.setIsOpen(false)}} >Exit</button>
                    </footer>
                </div>
            </div>
        )
    }
}

export function Product(props) {
    return (
        <div className="product-row">
            <span className="cart-product-name flex-2">{props.product[0].name}</span>
            <span className="cart-product-quantity center">{props.shoppingCart[props.product[0].id]}</span>
            <span className="cart-product-price center">{"$" + props.product[0].price}</span>
            <span className="cart-product-subtotal center">{"$"+(props.product[0].price * props.shoppingCart[props.product[0].id]).toFixed(2)}</span>
        </div>
    )
}
