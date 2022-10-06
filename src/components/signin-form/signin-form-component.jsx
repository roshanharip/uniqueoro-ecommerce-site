import './signin-form-component.scss';
import { Fragment, useState } from 'react';
import GoogleSignin from '../google-signin/google-signin-component';
import Form from '../form/form-component';
import Button from '../button/button-component';
import { signinUserAuthEmailAndPassword } from '../../utilities/firebase/firebase-utility';
const defaultField  = {
   email : '',
   password : '',
};
const Signin = ()=> {
   const [formField, setformField]= useState(defaultField);
   const {email, password} = formField;
   const onChangeHandler= (event) =>{
      const {name,value } = event.target;
      setformField({...formField,[name]:value});
   };
   const resetFormField = ()=>{ 
      setformField(defaultField);
   };
   const onSigninform = async (event) =>{
      event.preventDefault();
      try {
         const response = await signinUserAuthEmailAndPassword(email,password);
         console.log(response);
         resetFormField();
      }catch(error){
        switch(error.code){
         case 'auth/user-not-found':
            alert('Please Create One');
            break;
         case 'auth/wrong-password':
            alert('incorrect Password\nPlease Check Password');
            break;
         default:
            console.log(error.message);
            break;
        }
      }
   };
   return(
      <Fragment>
         <div className='Signin'>
            <h2>Already have a Account</h2>
            <span>Sign in with Email and Password</span>
            <form onSubmit={onSigninform}>
               <Form 
                  label="emailsignin"
                  labelName="Email"
                  type="email" id="emailsignin" required maxLength='30' onChange={onChangeHandler} name='email' value={email}
               />
               <Form 
                  label="passwordsignin"
                  labelName="Password"
                  type="password" id="passwordsignin" required maxLength='35' onChange={onChangeHandler} name='password' value={password}
               />
               <div className='buttonContainerInSignin'>
                  <Button buttonText='Sign in' buttonType='default' type="submit" id="signinButton"/>
                  <GoogleSignin />  
               </div>
            </form>
         </div>
      </Fragment>
   );
}
export default Signin;