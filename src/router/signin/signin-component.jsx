import { signInWithGooglePopup , userDoc} from '../../utilities/firebase/firebase-utility';

import {Fragment} from 'react';
const Signin = () => {
   const userLog = async () => {
      const {user} = await signInWithGooglePopup();
      const getUser = await userDoc(user);
   };
   return(
      <Fragment>
         <div className='Signin'>
            <h1>Sign In With Google</h1>
            <button onClick={userLog} >Sign in</button>
         </div>
      </Fragment>
   );
 }
 export default Signin;