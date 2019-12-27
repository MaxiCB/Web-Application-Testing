import React from 'react';

// Import needed components from reactstrap
import { Container, Col, Row } from 'reactstrap';
// Import Custom components
import NumSquare from './NumSquare';

const Display = (props) => {
    // console.log(props);

    let balls;
    let strikes;
    let outs;

    if(props.atBat === 'home') {
        balls = props.homeBall;
        strikes = props.homeStrike;
        outs = props.homeOut;
    } else {
        balls = props.awayBall;
        strikes = props.awayStrike;
        outs = props.awayOut;
    }

    return (
        <div className='large'>
            {/* / Top Section. Guest - Inning - Home \ */}
            <Container>
                <Row>
                    <Col sm='3' style={{ color: props.atBat === 'home' ? 'green': 'white'}}>HOME</Col>
                    <Col sm='3'><NumSquare number={props.inning}/></Col>
                    <Col sm='3' style={{ color: props.atBat === 'away' ? 'green': 'white'}}>AWAY</Col>
                </Row>
                <Row>
                    <Col sm='3'><NumSquare number={props.homeScore}/></Col>
                    <Col sm='3'>INNING</Col>
                    <Col sm='3'><NumSquare number={props.awayScore}/></Col>
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
                    <Col sm='3'><NumSquare number={balls}/></Col>
                    <Col sm='3'><NumSquare number={strikes}/></Col>
                    <Col sm='3'><NumSquare number={outs}/></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Display;