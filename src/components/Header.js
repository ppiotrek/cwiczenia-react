import React from 'react';
import Menu from './Menu';
import logo from'../logo.svg';
import css from'./logo.css';


const logoStyle = {
    width: '100px',
    height: '20px',

};

const Header = () => {
    return (
        <div className="header">
                Header
            <img alt="" style={logoStyle} src={logo}/>
            <Menu/>
        </div>
    );
};

export default Header;