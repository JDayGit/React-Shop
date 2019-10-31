import React from 'react';

import './sign-in-and-register.styles.scss';

import SignIn from './sign-in/sign-in.component';
import Register from './register/register.component';

const SignInAndRegisterPage = () => (
     <div className='sign-in-and-register'>
          <SignIn />
          <Register />
     </div>
);

export default SignInAndRegisterPage;