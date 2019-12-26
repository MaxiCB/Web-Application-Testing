import React from 'react';

// Import needed components from reactstrap
import { Container, Col, Row } from 'reactstrap';
// Import Custom components
import NumSquare from './NumSquare';

const Display = (props) => {
    return (
        <div className='large'>
            {/* / Top Section. Guest - Inning - Home \ */}
            <Container>
                <Row>
                    <Col sm='3'>HOME</Col>
                    <Col sm='3'><NumSquare/></Col>
                    <Col sm='3'>AWAY</Col>
                </Row>
                <Row>
                    <Col sm='3'><NumSquare/></Col>
                    <Col sm='3'>INNING</Col>
                    <Col sm='3'><NumSquare/></Col>
                </Row>
            </Container>
            {/* / Bottom Section. Ball - Strike - Out \ */}
            <Container>
                <Row style={{marginBottom: '10px'}}>
                    <Col sm='3'>BALL</Col>
                    <Col sm='3'>STRIKE</Col>
                    <Col sm='3'>OUT</Col>
                </Row>
                <Row>
                    <Col sm='3'><NumSquare/></Col>
                    <Col sm='3'><NumSquare/></Col>
                    <Col sm='3'><NumSquare/></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Display;