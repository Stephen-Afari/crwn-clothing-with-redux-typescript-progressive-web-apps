import './category.styles.scss'
import ProductCard from '../../components/product-card/product-card.component';
import { useParams } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector';
import Spinner from '../../components/spinner/spinner.component';

const Category = () => {
    const { category } = useParams();
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
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            {isLoading ? (<Spinner/>) : 
            (
                <div className='category-container'>
                {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
            )}
            
        </Fragment>

    )
}
export default Category;



