import './google-signin-component.scss';
import { userDoc, signInWithGooglePopup } from '../../utilities/firebase/firebase-utility';
import Button from '../button/button-component';
const GoogleSignin= ()=>{

   const userLog = async () => {
      const {user} = await signInWithGooglePopup();
      await userDoc(user);
   };
   return(
      <div className='GoogleSignin'>
         <Button buttonText='Signin with Google' buttonType='google-signin' onClick={userLog} id='googlepopup' style={{
         }} />
      </div>
   );
};
export default GoogleSignin;