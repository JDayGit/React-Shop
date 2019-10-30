import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../../../components/custom-button/custom-button.component';

class SignIn extends React.Component {
     constructor(props){
          super(props);

          this.state = {
               email: '',
               password: ''
          }
     }

     // end of constructor

     handleSubmit = event => {
          event.preventDefault();
          this.setState({ email: '', password: '' });
     }

     handleChange = event => {
          const { value, name } = event.target;
          this.setState({ [name]: value });
     }

     render(){
          return (
               <div className='sign-in'>
                    <h2>I already have an account</h2>
                    <span>Sign-in with your email and password</span>
                    
                    <form onSubmit={this.handleSubmit}>
                         <FormInput 
                              name='email' 
                              type='email' 
                              value={this.state.email}
                              label='Email'
                              handleChange={this.handleChange}
                              required={true} 
                         />
                         <FormInput 
                              name='password'
                              type='password'
                              value={this.state.password} 
                              label='Password'
                              handleChange={this.handleChange}
                              required={true} 
                         />
                         <CustomButton type='submit'>SIGN IN</CustomButton>
                         <CustomButton id='google' type='submit'>SIGN IN WITH GOOGLE</CustomButton>
                    </form>
               </div>
          );
     }
}

export default SignIn;