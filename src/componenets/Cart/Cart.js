import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartAddHandler = (item) => {
    cartCtx.addItem({
        ...item,
        amount : 1
    })
  };
  const cartRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key = {item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={cartAddHandler.bind(null,item)}
            onRemove={cartRemoveHandler.bind(null,item.id)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        {hasItems && <button className={classes.button}>Order</button>}
        <button onClick={props.onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default Cart;
