import React, { useEffect, useState } from 'react';
// Import custom hook to store information
import { useSetScore } from './hooks/useSetScore';
// Import UI components
import Display from './components/Display'
import Dashboard from './components/Dashboard';

const App = () => {

// Custom hook for setting inning and at bat team.
  const [inning, setInning] = useState(1);
  const [atBat, setAtBat] = useState('home');
// Game information store with custom hook
  const [homeBall, setHomeBall] = useState(0);
  const [awayBall, setAwayBall] = useState(0);
  const [homeStrike, setHomeStrike] = useState(0);
  const [awayStrike, setAwayStrike] = useState(0);
  const [homeOut, setHomeOut] = useState(0);
  const [homeHits, setHomeHits] = useState(0);
  const [homeRuns, setHomeRuns] = useState(0);
  const [awayOut, setAwayOut] = useState(0);
  const [awayHits, setAwayHits] = useState(0);
  const [awayRuns, setAwayRuns] = useState(0);
  const [homeFouls, setHomeFouls] = useState(0);
  const [awayFouls, setAwayFouls] = useState(0);

  // Team scores
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);


  const resetGame = () => {
    setInning(1);
    setAtBat('home');
    setHomeBall(0);
    setAwayBall(0);
    setHomeStrike(0);
    setAwayStrike(0);
    setHomeOut(0);
    setHomeHits(0);
    setHomeRuns(0);
    setAwayOut(0);
    setAwayHits(0);
    setAwayRuns(0);
    setAwayFouls(0);
    setHomeFouls(0);
    setHomeScore(0);
    setAwayScore(0);
  }

// Defining all props to pass into Display component and avoid doing it inline.
  const displayProps = {
    inning: inning,
    atBat: atBat,
    homeBall: homeBall,
    awayBall: awayBall,
    homeStrike: homeStrike,
    awayStrike: awayStrike,
    homeOut: homeOut,
    homeHits: homeHits,
    homeRuns: homeRuns,
    homeFouls: homeFouls,
    awayOut: awayOut,
    awayHits: awayHits,
    awayRuns: awayRuns,
    awayFouls: awayFouls,
    homeScore: homeScore,
    awayScore: awayScore
  }
// Defining all props to pass into Dashboard component and avoid doing it inline.
  const dashboardProps = {
    setInning: setInning,
    setAtBat: setAtBat,
    setHomeBall: setHomeBall,
    setAwayBall: setAwayBall,
    setHomeStrike: setHomeStrike,
    setAwayStrike: setAwayStrike,
    setHomeOut: setHomeOut,
    setHomeHits: setHomeHits,
    setHomeRuns: setHomeRuns,
    setHomeFouls: setHomeFouls,
    setAwayOut: setAwayOut,
    setAwayHits: setAwayHits,
    setAwayRuns: setAwayRuns,
    setAwayFouls: setAwayFouls,
    setHomeScore: setHomeScore,
    setAwayScore: setAwayScore,
    resetGame: resetGame
  }

  return (
    <div className='wrapper'>
      <Display {...displayProps}/>
      <Dashboard {...dashboardProps} {...displayProps}/>
    </div>
  );
}

export default App;
