

export default function ShoppingCart(props){
    console.log(props);
    let shopArr = [{itemId:0, quantity:0}];
    props.shoppingCart.map(e => {
        if(e.quantity > 0){
            shopArr.push(e.itemId);
        }
    })

    console.log(shopArr);

    
    return (
        <div className="shopping-cart">
            <div className="cart">

            </div>
        </div>
    )
}