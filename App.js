import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop-page.component';
import SignInAndRegisterPage from './pages/sign-in-and-register/sign-in-and-register.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: null
    }
  }

  // called on componentWillUnmount. 
  unsubscribeFromAuth = null

  componentDidMount(){
    // listening to application state changes. subscription open when app is mounted. 
    // we also need to close the subscription when the app unmounts. 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log('CURRENT USER:', user);
    });
  }
  
  componentWillUnmount() {
    // this will ultimately close the authentication subscription. 
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact={true} path='/' component={HomePage} />
          <Route exact={true} path='/shop' component={ShopPage} />
          <Route exact={true} path='/signin' component={SignInAndRegisterPage} />
        </Switch>
      </div>
    );
  }
}

export default App;