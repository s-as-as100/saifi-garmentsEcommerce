 import './App.css';
 import {connect} from 'react-redux';
 import * as React from 'react'
 
 import {Route, Switch,} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/homepage/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/homepage/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth,createUserProfileDocument} from './firebase/firebase.utils';
import { SetCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
   
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {SetCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          SetCurrentUser({
            
              id: snapShot.id,
              ...snapShot.data()
            
          });

          
        });
      }

     SetCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

   render() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact  path ='/' component ={Homepage} />
      <Route  path ='/shop' component ={ShopPage} />
      <Route path='/signin' component ={SignInAndSignUpPage} />
      </Switch>
    </div>
    
     
  );
}
 }
  const mapDispatchToProps = dispatch => ( {
  SetCurrentUser: user => dispatch(SetCurrentUser(user))
  })



 export default connect(null,mapDispatchToProps)(App);