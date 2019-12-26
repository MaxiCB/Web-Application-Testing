import React from 'react';

// Import needed components from reactstrap
import { Container, Col, Row } from 'reactstrap';

const Display = (props) => {
    return (
        <div style={{textAlign: 'center'}}>
            {/* / Top Section. Guest - Inning - Home \ */}
            <Container>
                <Row>
                    <Col xs='6' sm='4' style={{backgroundColor: 'red'}}>HOME</Col>
                    <Col xs='6' sm='4' style={{backgroundColor: 'red'}}>INNING ELEMENT</Col>
                    <Col xs='6' sm='4' style={{backgroundColor: 'red'}}>AWAY</Col>
                </Row>
                <Row>
                    <Col xs='6' sm='4'>Home Score Element</Col>
                    <Col xs='6' sm='4'>INNING</Col>
                    <Col xs='6' sm='4'>Away Score Element</Col>
                </Row>
            </Container>
            {/* / Bottom Section. Ball - Strike - Out \ */}
            <Container>
                <Row>
                    <Col xs='6' sm='4' style={{backgroundColor: 'red'}}>BALL</Col>
                    <Col xs='6' sm='4' style={{backgroundColor: 'red'}}>STRIKE</Col>
                    <Col xs='6' sm='4' style={{backgroundColor: 'red'}}>OUT</Col>
                </Row>
                <Row>
                    <Col xs='6' sm='4' style={{backgroundColor: 'red'}}>[BAL]L</Col>
                    <Col xs='6' sm='4' style={{backgroundColor: 'red'}}>[STRIKE]</Col>
                    <Col xs='6' sm='4' style={{backgroundColor: 'red'}}>[OUT]</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Display;