import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherFormProps }) => (
     <div className='group'>
          <input 
               className='form-input' 
               onChange={handleChange}
               {...otherFormProps}
          />

          {    
          // if a developer wants a label, create a label. 
               label ? 
               (<label className={`${otherFormProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
               </label>)
               :null
          }    

     </div>
);

export default FormInput;