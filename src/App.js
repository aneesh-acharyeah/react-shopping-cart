// App.js
import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      }
      return [...prevItems, { ...product, quantity: 1 }];
    })
  }
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }
const updateQuantity=(productId,newQuantity)=>{
  if(newQuantity<=0){
    removeFromCart(productId);
    return;
  }
  setCartItems((prevItems)=>prevItems.map((item)=>item.id === productId ? {...item,quantity:newQuantity}:item))
}

return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <ProductList addToCart={addToCart} />
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
}
export default App;
