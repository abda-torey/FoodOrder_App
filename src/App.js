import Header from "./componenets/Layout/Header";
import { Fragment, useState } from "react";
import Meals from "./componenets/Meals/Meals";
import Cart from "./componenets/Cart/Cart";
import CartProvider from "./componenets/store/CartProvider";

function App() {
  const [CartIsShown, setCartIsShown] = useState(false);

  const CartIsHideHandler = () => {
    setCartIsShown(false)
  }
  const CartIsShwonHandler = () => {
    setCartIsShown(true)
  }
  return (
    <CartProvider>
      <Header onShow = {CartIsShwonHandler} />
      {CartIsShown && <Cart onClose = {CartIsHideHandler} />}
      
      <main>
    
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
