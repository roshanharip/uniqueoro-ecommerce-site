import {Outlet,Link} from 'react-router-dom';
import { Fragment } from 'react';
import './navigation.styles.scss';
import { ReactComponent as CrownLogo } from '../../assests/images/crown.svg';
const Navigation =()=>{
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
               <Link className="navShopLink navLink" to='/signin'>SIGN IN</Link>

            </div>
         </div>
         <Outlet />
   </Fragment>
   );
}
export default Navigation;