import { useState } from "react";

import { createUserAuthEmailAndPassword, userDoc} from "../../utilities/firebase/firebase-utility";
import Form from "../form/form-component";
import './signup-form-component.scss';
import Button from "../button/button-component";
const defaultField  = {
   displayName : '',
   email : '',
   password : '',
   confirmpassword : '',
};
const SignUp = () => {
   const [formField, setformField]= useState(defaultField);
   const {displayName, email, password, confirmpassword} = formField;

   const onChangeHandler= (event) =>{
      const {name,value } = event.target;
      setformField({...formField,[name]:value});
   };
   const resetFormField = ()=>{ 
      setformField(defaultField);
   };
   const onSubmitform = async (event) =>{
      event.preventDefault();
      if (password === confirmpassword){
         try {
            const {user} =  await createUserAuthEmailAndPassword(email,password);
            await userDoc(user,{displayName});
            console.log(user);
            resetFormField();
         }catch(error){
            if (error.code  === 'auth/email-already-in-use'){
               alert("Email Already Exists");
            }else{
            console.log('Unexcepted Error Please Check It out',error.message);
            } 
         }
      }else{
         console.log(false);
         alert('password and CheckPassword must be Same');
         return;
      }
   };
   return (
      <div className="SignUp">
         <h2>Create One</h2>
         <span>Sign up with Email and Password</span>
         <form onSubmit= {onSubmitform}>
            <Form 
                  label="name"
                  labelName="Name"
                  type="text" id="name" required title="Enter Your Name" maxLength='15' onChange={onChangeHandler} name='displayName' value={displayName}
               />
            <Form 
               label="email"
               labelName="Email"
               type="email" id="email" required maxLength='30' title="Enter Your Email" onChange={onChangeHandler} name='email' value={email}
            />
            <Form 
               label="password"
               labelName="Password"
               type="password" id="password" required title="Enter Your Password" maxLength='35' onChange={onChangeHandler} name='password' value={password}
            />
            <Form 
               label="confirmPassword"
               labelName="Confirm Password"
               type="password" id="confirmPassword" required maxLength='35' title="Enter your Confirm Password which is same as Above One" onChange={onChangeHandler} name='confirmpassword' value={confirmpassword}
            />
            <Button buttonText='Sign up' buttonType='default' type="submit" id="signupsubmit"/>
         </form>
      </div>
   );
}
export default SignUp;