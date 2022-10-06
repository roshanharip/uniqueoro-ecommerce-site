import './form-component.scss';
const Form = ({label,labelName,...otherProps}) =>{
   return(
      <div className="Form">
         <input {...otherProps} className='form-input'/>
         <label className={`${otherProps.value.length? 'shrink':''} form-input-label`} htmlFor={`${label}`} >{labelName}</label>
      </div>
   );
}
export default Form;