import './reset-password-component.scss';
import { sendUserPasswordResetEmail } from '../../utilities/firebase/firebase-utility';
const ResetPassword = () => {
   const ResetPassword = async() => {
      const emailId = prompt("Enter your EmailId for Reset Password");
      if(emailId){
         try {
            await sendUserPasswordResetEmail(emailId);
            alert("SuccessFully Send Email to "+ emailId + "\nPlease Check Inbox or Spam Email");
         }catch (error){
            if (error.code === 'auth/user-not-found'){
               alert("Email Doesn't Exist\nPlease Create One Account");
            }
         }
      }
      else{
         alert("System Error Please Reload or ReEnter your Email");
      }
   };
   return (
      <div className='ResetPassword'>
         <span onClick={ResetPassword}>
            Forgot password?
         </span>
      </div>
   ); 
};
export default ResetPassword;