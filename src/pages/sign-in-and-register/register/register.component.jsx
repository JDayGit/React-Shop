import React from 'react';

import './register.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../../../components/custom-button/custom-button.component';

class Register extends React.Component {
     constructor(props){
          super(props);

          this.state = {
               username: '',
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
               <div className='register'>
                    <h2>I would like to create an account</h2>
                    <span>Create an account with the form below</span>
                    <form onSubmit={this.handleSubmit}>
                         <FormInput 
                              name='username' 
                              type='username' 
                              value={this.state.username}
                              label='Username'
                              handleChange={this.handleChange}
                              required={true} 
                         />
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
                         <div className='buttons'>
                         <CustomButton type='submit'>SIGN UP</CustomButton>
                         <CustomButton type='submit' isGoogleSignIn>SIGN UP WITH GOOGLE</CustomButton>
                         </div>
                    </form>
               </div>
          );
     }
}

export default Register; 