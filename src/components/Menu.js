import React from 'react';
import {Nav, NavItem} from 'react-bootstrap'

import {LinkContainer} from 'react-router-bootstrap';

const Menu = () => {
    return (
        <div>
        {/*<ul>*/}
            {/*<li><Link to="/">Home</Link></li>*/}
            {/*<li><Link to="/profile">Profile</Link></li>*/}
            {/*<li><Link to="/dashboard">Dashboard</Link></li>*/}

        {/*</ul>*/}


            <Nav bsStyle="pills" >
                <LinkContainer exact to="/"><NavItem>Home</NavItem></LinkContainer>
                <LinkContainer to="/profile"><NavItem>Profile</NavItem></LinkContainer>
                <LinkContainer to="/dashboard"><NavItem>Dashboard</NavItem></LinkContainer>
            </Nav>
        </div>
    );
};

export default Menu;