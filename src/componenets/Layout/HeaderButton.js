import { Fragment, useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderButton.module.css';
import CartContext from '../store/CartContext';

const HeaderButton = props => {
    const cartCtx = useContext(CartContext);
    const numberofCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);
  
    return (
        <Fragment>
            <button className={classes.button} onClick={props.onClick}>
                <span>
                    <CartIcon className={classes.icon}/>
                </span>
                <span>
                    Your Cart
                </span>
                <span className={classes.badge}>
                    {numberofCartItems}
                </span>
            </button>
        </Fragment>
    )
}

export default HeaderButton;
