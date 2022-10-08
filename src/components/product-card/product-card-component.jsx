import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import './product-card-component.scss';
import Button from '../button/button-component';
const ProductCard = ({ product }) => {
   const { name, price, imageUrl } = product;
   const { addItemsToCart } = useContext(CartContext);
   const addProductToCart = () => {
      addItemsToCart(product);
   }
   return (
      <div className='Product'>
         <img src={imageUrl} alt={name} />
         <div className='SpanContainer'>
            <span className='ProductName name'>{name}</span>
            <span className='ProductPrice price'>${price}</span>
         </div>
         <Button buttonText='Add to Cart' buttonType='inverted' onClick={addProductToCart} />
      </div>
   );
};
export default ProductCard;