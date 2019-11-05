import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop-page.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){ 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // if userAuth object is not null
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // checking if the user data has changed 

        userRef.onSnapshot(snapShot => {
        // setting state of currentUser to our user's data. 
          this.setState({
            currentUser: {
              id: snapShot.id, 
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }
      // if user has signed-out, we setState of currentUser back to null.
      this.setState({ currentUser: userAuth });
    });
    console.log(this.state);
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact={true} path='/' component={HomePage} />
          <Route exact={true} path='/shop' component={ShopPage} />
          <Route exact={true} path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;