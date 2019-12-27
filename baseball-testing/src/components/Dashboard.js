import React from 'react';

import { Container, Col, Row, Button } from 'reactstrap';

const Dashboard = (props) => {

    let inning = props.inning;

    var bothTeams = false;
    
    let ball;
    let strike;
    let outs;
    // let fouls;
    let hits;
    // let runs;

    let score;

    let setStrike;
    let setBall;
    // let setFoul;
    let setOut;
    // let setRun;
    let setHit;
    let setScore;

    if(props.atBat === 'home'){

        ball = props.homeBall;
        strike = props.homeStrike;
        outs = props.homeOut;
        // fouls = props.homeFouls;
        hits = props.homeHits;
        // runs = props.homeRuns;
        score = props.homeScore;

        // console.log(ball, strike, outs, fouls, hits, runs)

        setStrike = props.setHomeStrike;
        setBall = props.setHomeBall;
        // setFoul = props.setHomeFoul;
        setOut = props.setHomeOut;
        // setRun = props.setHomeRun;
        setHit = props.setHomeHits;
        setScore = props.setHomeScore;
    } else {

        ball = props.awayBall;
        strike = props.awayStrike;
        outs = props.awayOut;
        // fouls = props.awayFouls;
        hits = props.awayHits;
        // runs = props.awayRuns;
        score = props.homeScore;

        // console.log(ball, strike, outs, fouls, hits, runs)

        setStrike = props.setAwayStrike;
        setBall = props.setAwayBall;
        // setFoul = props.setAwayFoul;
        setOut = props.setAwayOut;
        // setRun = props.setAwayRun;
        setHit = props.setAwayHits;
        setScore = props.setAwayScore;
    }

    const resetGame = () => {
        props.resetGame();
    }

    const changeInning = () => {
        if(inning === 9 && bothTeams === true){
            resetGame();
        } else {
            props.setAtBat('home');
            props.setInning(inning + 1);
        }
    }

    const checkInning = () => {
        if(outs === 2 && bothTeams === false){
            props.setAtBat('away');
            setOut(0);
            setStrike(0);
            bothTeams = true;
        }
        else if(bothTeams === true) {
            changeInning();
            bothTeams = false;
            setOut(0);
        }
        if(props.atBat === 'away' && outs === 2 && bothTeams === true){
            changeInning();
            bothTeams = true;
            setOut(0)
        }
    }

    const strikeButton = () => {
        if(strike < 2) {
            setStrike(strike + 1);
        } else{
            setStrike(0);
            setOut(outs + 1);
            checkInning();
        }
        // console.log('Strikes' + strike)
    }

    const ballButton = () => {
        if(ball < 3){
            setBall(ball + 1);
        } else {
            setHit(hits + 1)
            addScore();
            setBall(0);
        }
        // console.log('Balls' + ball)
    }

    const hitButton = () => {
        setBall(0);
        setStrike(0);
        setHit(hits + 1);

        addScore()

        // console.log('Hit' + hits)
    }

    const foulButton = () => {
        if(strike === 0 || strike === 1) {
            setStrike(strike + 1);
        }
        // console.log('Foul' + strike)
    }

    const addScore = () => {
        if(hits > 3) {
            setScore(score + 1);
        }
    }

    return (
        <div>
            <Container style={{textAlign: 'center'}}>
                <Row style={{marginTop: '40px', marginLeft: '40px'}}>
                    <Col sm='2'><Button onClick={(e) => strikeButton()}>STRIKE</Button></Col>
                    <Col sm='2'><Button onClick={(e) => ballButton()}>BALL</Button></Col>
                    <Col sm='2'><Button onClick={(e) => foulButton()}>FOUL</Button></Col>
                    <Col sm='2'><Button onClick={(e) => hitButton()}>HIT</Button></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard;