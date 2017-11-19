import React from 'react';
import {Nav, NavItem} from 'react-bootstrap'
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>

        </ul>


            {/*<Nav bsStyle="pills" activeKey={0} >*/}
                {/*<NavItem eventKey={0}>Home</NavItem>*/}
                {/*<NavItem eventKey={1}>Profile</NavItem>*/}
                {/*<NavItem eventKey={2}>Dashboard</NavItem>*/}
            {/*</Nav>*/}

        </div>
    );
};

export default Menu;