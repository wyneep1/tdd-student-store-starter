import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios'
import ProductDetail from "../Products/ProductDetail"
import NotFound from "../NotFound"
import Footer from "../Footer/Footer"
import About from "../About/About"
import Contact from "../Contact/Contact"
export default function App() {
  const [products, setProducts] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false); //tells us if sidebar is in the open or closed state
  const [shoppingCart, setShoppingCart] = React.useState(false); //Each object in the array should have two fields: itemId which stores the id of the item being purchased
  //The `quantity` field should store a number representing how many of that item the user is purchasing.
  const[checkOutForm, setCheckOutForm] = React.useState({value:0, name:""});
  //`checkoutForm` - the user's information that will be sent to the API when they checkout
  
  //store items API

  React.useEffect(()=>{
    async function fetchItems(){
      setIsFetching(true);
      try{
       const response = await axios.get("https://codepath-store-api.herokuapp.com/store");
          console.log("App.jsx tries", response?.data?.products);
          if(response?.data?.products){
            setProducts(response?.data?.products);
          }
        }catch(err){
        console.log(err.response);
        setError(err.response);
      } finally{
        setIsFetching(false);
      }
      }
      fetchItems();
    }, []);

    if(isFetching){
      return <h1>Loading ... </h1>
    }
      

  function handleOnToggle(){
    //should toggle the open/closed state of the `Sidebar`
    if(input === true){
      setIsOpen(false);
    }
    else{
      setIsOpen(true);
    }
  }

  function handleAddItemToCart(productID){
    if(shoppingCart.find(productID)){
      shoppingCart.find(productID).quantity++;
    }
    else{
      setShoppingCart((prevCart) => [...prevCart, {...shoppingCart, itemId:productID, quantity:1}])
    }
//It should accept a single argument - `productId`
//Should add that product to the `shoppingCart` if it doesn't exist, and set its quantity to `1`
//If it does exist, it should increase the quantity by `1`
//It should add the price of the product to the total price of the `shoppingCart`.
  }
  function handleRemoveItemFromCart(productID){
    if(shoppingCart.find(productID)){
      shoppingCart.find(productID).quantity--;
      if(shoppingCart.find(productID).quantity <=0){
        shoppingCart.filter((element => (element.itemId != productID)));
      }
    }
    else{
      return;
    }
   // should accept a single argument - `productId`
   //should decrease the quantity of the item in the `shoppingCart` by `1`, but only if it already exists.
   //If it doesn't exist, the function should do nothing.
   //If the new quantity is `0`, it should remove the item from the `shoppingCart`
  }
  function handleOnCheckoutFormChange(name, value){
    setCheckOutForm({value:value, name: name})
  //It should receive two arguments:
  //`name` - the `name` attribute of the input being 
  //`value` - the new value to set for that input
  //should update the `checkoutForm` object with the new value from the correct input(s)
  }
  function handleOnSubmitCheckoutForm(){
  //It should submit the user's order to the API
  //To submit the user's order, it should leverage the `axios.post` method to send a `POST` request to the `/store` endpoint.
  }
  return (
    <div className="app">
      <BrowserRouter>
        <main>
        <Navbar/>
        <Sidebar isOpen={isOpen} shoppingCart={shoppingCart} products={products} checkOutForm={checkOutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} handleOnToggle={handleOnToggle}/>
          <Routes>
            <Route path="/" element={<Home isFetching={isFetching} handleAddItemToCart={handleAddItemToCart} products={products} handleRemoveItemFromCart={handleRemoveItemFromCart}/>} />
            <Route path="/products/:productId" element={<ProductDetail />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* YOUR CODE HERE! */}
          <About/>
          <Contact/>
          <Footer/>
        </main>
      </BrowserRouter>
    </div>
  )
}
//put these 
           // <Route path="*" element={<NotFound />} />
