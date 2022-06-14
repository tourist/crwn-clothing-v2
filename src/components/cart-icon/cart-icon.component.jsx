import { CartIconContainer, ItemCount } from './cart-icon.styles';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { setIsCartOpen } from '../../store/cart/cart.action';
import {
  selectIsCartOpen,
  selectCartCount,
} from '../../store/cart/cart.selector';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const CartIcon = () => {
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector(selectIsCartOpen);
  const cartCount = useAppSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
