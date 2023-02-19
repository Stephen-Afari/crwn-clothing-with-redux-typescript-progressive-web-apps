import {Routes,Route} from 'react-router-dom';
import Category from '../category/category.component'
import './shop.styles.scss'
import CategoriesPreview from '../categories-preview/categories-preview.component';

const Shop=()=>{
    
  return (
    <div className='shop-component'>
<Routes>
    <Route index element={<CategoriesPreview/>}/>
    <Route path=':category' element={<Category/>}/>
</Routes>
    </div>
  )

}

export default Shop

