 import React from 'react';

 import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

 import './cart-icon.styles.scss';


 const CardIcon = () => (
     <div className='cart-icon'>
         <ShoppingIcon className='shopping-icon' />
         <span className='item-count'></span>
     </div>
 );

 export default CardIcon;