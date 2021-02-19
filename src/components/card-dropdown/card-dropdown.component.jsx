import React from 'react';

import './card-dropdown.styles.scss';

import CustomButton from './../custom-button/custom-button.component';

const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cart-item'/>
        <CustomButton> GO TO CHECKOUT</CustomButton>
    </div>
);

export default CartDropDown;