import { signInWithGooglePopup , userDoc} from '../../utilities/firebase/firebase-utility';
import {Fragment} from 'react';
import SignUp from '../../components/signup-form/signup-form-component';
import Button from '../../components/button/button-component';
const Signin = () => {
   
   const userLog = async () => {
      const {user} = await signInWithGooglePopup();
      await userDoc(user);
   };
   return(
      <Fragment>
         <div className='Signin'>
            <h1>Sign In With Google</h1>
            <Button buttonText='SignIn With Google' buttonType='google-signin' onClick={userLog} id='googlepopup' />
         </div>
         <SignUp />
      </Fragment>
   );
 }
 export default Signin;