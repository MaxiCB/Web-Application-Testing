import React from 'react';
// Import custom hook to store information
import { useSetScore } from './hooks/useSetScore';
// Import UI components
import Display from './components/Display'
import Dashboard from './components/Dashboard';

const App = () => {

  const [homeBall, setHomeBall] = useSetScore(0);
  const [awayBall, setAwayBall] = useSetScore(0);
  const [homeStrike, setHomeStrike] = useSetScore(0);
  const [awayStrike, setAwayStrike] = useSetScore(0);
  const [homeOut, setHomeOut] = useSetScore(0);
  const [homeHits, setHomeHits] = useSetScore(0);
  const [homeRuns, setHomeRuns] = useSetScore(0);
  const [awayOut, setAwayOut] = useSetScore(0);
  const [awayHits, setAwayHits] = useSetScore(0);
  const [awayRuns, setAwayRuns] = useSetScore(0);



  return (
    <div className='wrapper'>
      <Display/>
    </div>
  );
}

export default App;
