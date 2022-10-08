import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import './cart-icon-component.scss';

import {ReactComponent as CartSvg} from '../../assests/images/shopping-bag.svg';
const CartIcon = () => {
   const { isCartOpen, setCartOpen,countItem } = useContext(CartContext);
   const onClickHandler = () => {
      isCartOpen ? setCartOpen(false) : setCartOpen(true);
   };
   return(
      <div className='CartIcon' onClick={onClickHandler}>
         <CartSvg className='CartImg'/> 
         <span className='CartCounts'>{countItem}</span>
      </div>
   );
};
export default CartIcon;
