import React from 'react';

const Header = (props) => {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className='d-flex align-center'>
                <img width={40} height={40} src="/img/logo_shoes.png" alt=""/>
                <div className="headerInfo">
                    <h3 className='text-uppercase'>React Snikers</h3>
                    <p>the best shoes store</p>
                </div>
            </div>
            <ul className='headerRight d-flex'>
                <li className='mr-30 cu-p' onClick={props.onClickCartOpen}>
                    <img width={18} height={18} src="/img/cart.svg" alt="cart" />
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img src="/img/user.svg" alt="user"/>
                </li>
            </ul>
        </header>
    );
};

export default Header;