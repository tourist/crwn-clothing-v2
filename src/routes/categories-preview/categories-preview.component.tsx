import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { selectCategoriesIsLoading } from '../../store/categories/category.selector';
import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => (
          <CategoryPreview
            key={title}
            title={title}
            products={categoriesMap[title]}
          />
        ))
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
