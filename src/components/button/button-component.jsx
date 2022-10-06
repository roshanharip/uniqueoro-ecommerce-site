import './button-component.scss';
const BUTTON_STYLE_TYPE = {
   'google-signin': 'googleSignin',
   'inverted' :'inverted',
   'default' : 'default',
};
const Button = ({buttonText,buttonType,...addProps})=>{
   return(
      <div>
         <button className={`${BUTTON_STYLE_TYPE[buttonType]} button-container`} {...addProps}>
            {buttonText}
         </button>
      </div>
   );
};
export default Button;