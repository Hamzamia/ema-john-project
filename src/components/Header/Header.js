import { getByAltText } from '@testing-library/dom';
import React from 'react';
import img from '../../images/logo.png';
import './Header.css'
const Header = () => {
    return (
        <div className="header">

            <img className="logo" src={img} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">oredr</a>
                <a href="/inventory">Inventory</a>
            </nav>
        </div>
    );
};

export default Header;