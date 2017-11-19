import React from 'react';


import {Grid, Row, Col, Button, FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox} from 'react-bootstrap';

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

            <form>
                <FormGroup>
                    <ControlLabel>Label</ControlLabel>
                    <FormControl type="text" placeholder="Enter text"/>
                    <HelpBlock>Hel Block</HelpBlock>
                </FormGroup>
                    <Checkbox inline>
                        1
                    </Checkbox>
                <FormGroup>
                    <FormControl componentClass='select' placeholder="select">
                            <option value="select">select</option>
                            <option value="other">...</option>
                        </FormControl>
                    </FormGroup>

            </form>


        </div>
    );
};

export default Home;