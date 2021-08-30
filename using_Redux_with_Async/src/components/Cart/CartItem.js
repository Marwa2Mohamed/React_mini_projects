import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import {cartActions} from '../../store/index'

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  function removeItem(){
    dispatch(cartActions.removeItemFromCart(id))
  }
  function addItem(){
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price
    }))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${Number(total).toFixed(2)}{' '}
          <span className={classes.itemprice}>(${Number(price).toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick = {removeItem}>-</button>
          <button onClick = {addItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
