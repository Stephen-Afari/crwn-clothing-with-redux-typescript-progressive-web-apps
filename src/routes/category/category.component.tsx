import './category.styles.tsx'
import ProductCard from '../../components/product-card/product-card.component';
import { useParams } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector';
import Spinner from '../../components/spinner/spinner.component';
import { CategoryContainer, Title } from './category.styles';

type CategoryRouteParams ={
    category: string,
}
const Category = () => {
    const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)
    // console.log('render/re-rendering category component')
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        // console.log('effect fired calling setProducts')
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <Fragment>
          <Title>{category.toUpperCase()}</Title>
          <CategoryContainer>
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </CategoryContainer>
        </Fragment>
      );
    };
    
    export default Category;



