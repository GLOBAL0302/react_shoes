import React from 'react';
import {Link} from "react-router-dom";
import AppContext from "../context";
import {useCard} from "../hooks/useCard";

const Header = (props) => {
  const {totalPrice} = useCard()
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className='d-flex align-center'>
                <Link to="">
                    <img width={40} height={40} src="/img/logo_shoes.png" alt=""/>
                    <div className="headerInfo">
                        <h3 className='text-uppercase'>React Snikers</h3>
                        <p>the best shoes store</p>
                    </div>
                </Link>
            </div>
            <ul className='headerRight d-flex'>
                <li className='mr-30 cu-p' onClick={props.onClickCartOpen}>
                    <img width={18} height={18} src="/img/cart.svg" alt="cart" />
                    <span>{totalPrice} rub</span>
                </li>
                <li className='mr-30 cu-p'>
                    <Link to="/favorites">
                        <img src="/img/favorite_sec.svg" alt="fav"/>
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                        <img src="/img/user.svg" alt="user"/>
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;