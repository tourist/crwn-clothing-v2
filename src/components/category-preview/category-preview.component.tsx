import { FC } from 'react';
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles';
import ProductCard from '../product-card/product-card.components';
import { Item } from '../../store/cart/cart.types';

type CategoryPreviewProps = {
  title: string;
  products: Item[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
