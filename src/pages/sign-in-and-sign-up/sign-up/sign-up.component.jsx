import React from 'react';

import './sign-up.styles.scss';

import {auth, createUserProfileDocument} from '../../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../../../components/custom-button/custom-button.component';

class SignUp extends React.Component {
     constructor(props){
          super(props);

          this.state = {
               displayName: '',
               email: '',
               password: '',
               confirmPassword: ''
          };
     }

     handleSubmit = async event => {
          event.preventDefault();

          const { displayName, email, password, confirmPassword } = this.state;

          if (password !==  confirmPassword){
               alert("Passwords don't match");
               return; 
          }

          // try statement allows you to define a block of code to be tested for errors while it is being executed. 
          // this is necessary becasue we're testing whether or not the account exits, passwords, match, etc. 
          
          try {
               const { user } = await auth.createUserWithEmailAndPassword(
                    email,
                    password
               );
               await createUserProfileDocument(user, { displayName });
               this.setState({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
               });
               } catch (error) {
               console.log(error);
          }
     };

     handleChange = event => {
          const { name, value } = event.target;

          this.setState({ [name]:value });
     }

     

     render(){
          const { displayName, email, password, confirmPassword } = this.state;
          return (
               <div className='sign-up'>
                    <h2 className='title'>I do not have an account</h2>
                    <span className='subtitle'>Sign up with your email and password</span>
                    <form className='sign-up-form' onSubmit={this.handleSubmit}>
                         <FormInput
                              type='text'
                              name='displayName'
                              value={displayName}
                              onChange={this.handleChange}
                              label='Name'
                              required={true}
                         />
                         <FormInput
                              type='email'
                              name='email'
                              value={email}
                              onChange={this.handleChange}
                              label='Email'
                              required={true}
                         />
                         <FormInput
                              type='password'
                              name='password'
                              value={password}
                              onChange={this.handleChange}
                              label='Password'
                              required={true}
                         />
                         <FormInput
                              type='password'
                              name='confirmPassword'
                              value={confirmPassword}
                              onChange={this.handleChange}
                              label='Confirm Password'
                              required={true}
                         />
                         <CustomButton type='submit'>Sign Up</CustomButton>
                    </form>
               </div>
          );
     }
}

export default SignUp; 