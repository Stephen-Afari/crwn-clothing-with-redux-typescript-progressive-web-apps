import {Routes,Route} from 'react-router-dom';
import Category from '../category/category.component'
import './shop.styles.scss'
import { useDispatch } from 'react-redux';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import {useEffect} from 'react'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import {fetchCategoriesStart} from '../../store/categories/category.action'

const Shop=()=>{
const dispatch = useDispatch()
  useEffect(()=> {

  dispatch(fetchCategoriesStart())
    },[])  
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

