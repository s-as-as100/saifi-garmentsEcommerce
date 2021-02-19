import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';


import {connect} from 'react-redux';


import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from './../../firebase/firebase.utils';
import CardIcon from './../cart-icon/cart-icon.component';
import CartDropDown from './../card-dropdown/card-dropdown.component';

const Header = ( { currentUser, hidden}) => (
    <div className='header'>
     
     <Link className='logo-container' to="/">
  <Logo className='logo' />
     </Link>
         <div className='options'
         >
            <Link className='option' to='./shop'>
                SHOP
            </Link>
            
            <Link className='option' to='./shop'>
                CONTACT
            </Link>
           {
               currentUser ? 
               <div className='option' onClick= {()=> auth.signOut()} > SIGN OUT</div>
               :
               <Link className="option"  to='/signin'>SIGN IN </Link>
               
           }  
           <CardIcon/>

         </div>
         {hidden ? null : <CartDropDown/>}


    </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
  });


export default connect(mapStateToProps)(Header);
