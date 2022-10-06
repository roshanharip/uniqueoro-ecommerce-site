import {Fragment} from 'react';
import SignUp from '../../components/signup-form/signup-form-component';
import Signin from '../../components/signin-form/signin-form-component';
import './authentication-component.scss'
const Authentication = () => {
   
   
   return(
      <Fragment>
         <div className='Authentication'>
            <Signin />
            <SignUp />
         </div>
      </Fragment>
   );
 }
 export default Authentication;