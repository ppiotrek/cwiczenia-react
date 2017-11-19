import React from 'react';

import {Grid, Row, Col, Button} from 'react-bootstrap';

const Home = () => {
    const handleClick = () => {
        alert('bu!')
    }
     return (
        <div>
            <Button bsStyle="warning" onClick={handleClick}>Button</Button>

            <Grid>
                <Row>
                    <Col xs={12} md={8}> Column 1</Col>
                    <Col xs={12} md={4}> Column 2</Col>
                </Row>

            </Grid>


        </div>
    );
};

export default Home;