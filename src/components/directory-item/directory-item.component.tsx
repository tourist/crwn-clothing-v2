import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';

export type DirectoryCategory = {
  id: number;
  imageUrl: string;
  title: string;
  route: string;
};

type DirectoryItemsProps = {
  category: DirectoryCategory;
};

const DirectoryItem = ({ category }: DirectoryItemsProps) => {
  const { imageUrl, title, route } = category;
  return (
    <DirectoryItemContainer to={route}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
