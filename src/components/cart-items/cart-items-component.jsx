import './cart-items-component.scss';
const CartItems = ({ itemName, quantity, imageUrl, price }) => {
   return (
      
      <div className="CartItems">
         <div style={{
            backgroundImage : `url(${imageUrl})`
         }} className="ImageItem">
         </div>
         <div className='ValueItem'>
            <h3>{itemName}</h3>
            <span>{quantity} x ${price}</span>
         </div>
      </div>
   );
};
export default CartItems;