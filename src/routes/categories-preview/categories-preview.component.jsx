import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,  
} from "../../store/categories/category.selector";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import "./categories-preview.styles.scss";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <>
      <div className="category-preview-container">
        {isLoading ? (
          <Spinner />
        ) : (
          Object.keys(categories).map((title) => {
            const products = categories[title];
            return (
              <CategoryPreview key={title} title={title} products={products} />
            );
          })
        )}
      </div>
    </>
  );
};

export default CategoriesPreview;
