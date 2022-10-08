import { createContext, useEffect, useState } from "react";
const addToCart = (cartItems, productToAdd) => {
   const existingItem = cartItems.find((cartItem) => 
      cartItem.id === productToAdd.id
   );
   if (existingItem) {
      return cartItems.map((cartItem) =>
         cartItem.id === productToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1} :
            cartItem
      )
   }
   return [...cartItems,{...productToAdd, quantity : 1}]
};
export const CartContext = createContext({
   isCartOpen: false,
   setCartOpen: () => { },
   cartItems: [],
   addItemsToCart: () => { },
   countItem : 0,
});
export const CartProvider = ({ children }) => {
   const [isCartOpen, setCartOpen] = useState(false);
   const [cartItems, setCartItems] = useState([]);
   const [countItem, setCountItem] = useState(0);
   const addItemsToCart = (productToAdd) => {
      setCartItems(addToCart(cartItems, productToAdd));
   };
   useEffect(() => {
      const newItemCount = cartItems.reduce((total, cartItem) =>  total + cartItem.quantity, 0);
      setCountItem(newItemCount);
    }, [cartItems]);
   const value = { isCartOpen, setCartOpen, addItemsToCart, cartItems,countItem};
   return (<CartContext.Provider value={value}>{children}</CartContext.Provider>);
};
