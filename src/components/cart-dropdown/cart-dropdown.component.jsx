import './cart-dropdown.styles.scss';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const navigateCheckout = () => {
    navigate('checkout');
    setIsCartOpen(false);
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button buttonType="button" onClick={navigateCheckout}>
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
