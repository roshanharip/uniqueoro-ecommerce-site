import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import CartItems from '../cart-items/cart-items-component';
import Button from '../button/button-component';
import './cart-dropdown-component.scss';
const CartDropDown = () => {
   const { cartItems,countItem } = useContext(CartContext);
   return(
      <div className='CartDropDown' >
         <div className='CartItem'>
            {
               cartItems.map((item,index) => (
                  <CartItems key={index} itemName={item.name} quantity={item.quantity} imageUrl={item.imageUrl} price={ item.price} />
               ))
            }
         </div>
         <Button buttonText={countItem ? 'Go To Checkout' : 'Add Items'} buttonType="default"/>
      </div>
   );
};
export default CartDropDown;