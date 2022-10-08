import { Fragment, useContext } from 'react';
import {Outlet,Link} from 'react-router-dom';
import { signOutUser } from '../../utilities/firebase/firebase-utility';
import { UserContext } from '../../context/context';
import { CartContext } from '../../context/cart-context';
import CartIcon from '../../components/cart-icon/cart-icon-component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown-component';
import './navigation.styles.scss';
import { ReactComponent as CrownLogo } from '../../assests/images/crown.svg';
const Navigation =()=>{
   const {currentUser} = useContext(UserContext);
   const {isCartOpen} = useContext(CartContext);
   return(
      <Fragment>
         <div className='Navigation'>
            <div className="navLogoContainer">
               <Link className="navLogoLink" to='/'>
                  <CrownLogo />
               </Link>
            </div>
            <div className='navLinksContainer'>
               <Link className="navShopLink navLink" to='/shop'>Shop</Link>
               <Link className="navShopLink navLink" to='/contact'>Contact</Link>
               {
                  currentUser ? (<span onClick={signOutUser}>SIGN OUT</span>):
                  (<Link className="navShopLink navLink" to='/signin'>SIGN IN</Link>)
               }
               <CartIcon/>
            </div>
         </div>
         {isCartOpen&& <CartDropDown />}     
         <Outlet />
   </Fragment>
   );
}
export default Navigation;