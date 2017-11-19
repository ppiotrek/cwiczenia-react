import React from 'react';
import {Nav, NavItem} from 'react-bootstrap'

const Menu = () => {
    return (
        <div>
            <Nav bsStyle="pills" activeKey={0} >
                <NavItem eventKey={0}>Home</NavItem>
                <NavItem eventKey={1}>Profile</NavItem>
                <NavItem eventKey={2}>Dashboard</NavItem>
            </Nav>

        </div>
    );
};

export default Menu;