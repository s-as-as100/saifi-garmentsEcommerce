 import './App.css';
import { React } from 'react';
import {Route, Switch,} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/homepage/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/homepage/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

 function App() {
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

export default App;
