import { FC } from 'react';
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Item } from '../../store/cart/cart.types';

type ProductCardProps = {
  product: Item;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
