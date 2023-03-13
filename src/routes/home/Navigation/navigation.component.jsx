import {Outlet} from 'react-router-dom'
import {Fragment} from 'react'
import {ReactComponent as CrwnLogo} from  '../../../assets/crown.svg'
import {useSelector, useDispatch} from 'react-redux'
import { selectCurrentUser } from '../../../store/user.selector'
import CartIcon from '../../../components/cart-icon/cart-icon.component'

import { signOutStart } from '../../../store/user/user.action'
import CartDropdown from '../../../components/cart-dropdown/cart-dropdown.component'
import { selectIsCartOpen } from '../../../store/cart/cart.selector'
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles'


const Navigation = () => {

const currentUser = useSelector(selectCurrentUser)
  //const {isCartOpen}= useContext(CartContext)
  const isCartOpen = useSelector(selectIsCartOpen)
  const dispatch = useDispatch()

  const signOutUser = ()=> dispatch(signOutStart())
 
    return (
        <Fragment> 
         
        <NavigationContainer >
        <LogoContainer  to='/'>
        <CrwnLogo className='logo'/>
        </LogoContainer>
          
          <NavLinks>
            <NavLink to='/shop'>SHOP</NavLink>
            {currentUser ? (
              <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
            ):(
              
            <NavLink  to='/auth'>SIGN IN</NavLink>)}
            <CartIcon/>
          </NavLinks>
          {isCartOpen && <CartDropdown/>}
        </NavigationContainer>
        <Outlet />
      
        </Fragment>
      
    );
  };

  export default Navigation;