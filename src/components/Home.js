import React from 'react';
import {Button} from 'react-bootstrap';

const Home = () => {
    const handleClick = () => {
        alert('bu!')
    }
     return (
        <div>
            <Button bsStyle="warning" onClick={handleClick}>Button</Button>
        </div>
    );
};

export default Home;