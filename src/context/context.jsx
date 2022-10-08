import { createContext, useState, useEffect} from "react";
import {onUserAuthStateChanged} from '../utilities/firebase/firebase-utility'
export const UserContext = createContext({
   currentUser : null,
   setCurrentUser : () => null,
});
export const UserProvider = ({children}) => {
   const [currentUser, setCurrentUser] = useState(null);
   const value = {currentUser,setCurrentUser};
   useEffect(() => {
      const subscribe = onUserAuthStateChanged((user)=>{
         setCurrentUser(user);
      });
      return subscribe;
   }, [])
   
   return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}