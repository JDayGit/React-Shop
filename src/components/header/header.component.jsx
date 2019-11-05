import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

// import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
     <div className='header'>
          <Link className='logo-container' to="/">
               <img className='cactus' src='https://image.flaticon.com/icons/svg/43/43369.svg' alt='logo'/>
          </Link>
          <div className='options'>
               <Link className='option' to='/shop'>SHOP</Link>
               <Link className='option' to='/contact'>CONTACT</Link>
          {    
               // if current user is NOT null
               currentUser ? 
               // render this
               <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
               // if current user IS null
               :
               // render this
               <Link className='option' to='/signin'>SIGN IN</Link>
          }
          </div>
     </div>
); 
export default Header;