import { useState } from 'react';
import './App.css';
import Break from './components/break';
import Session from './components/session';
import TimeLeft from './components/TimeLeft';

function App() {

  const [sessionLength, setSessionLength] = useState(60 * 25)

  const decrementSessionLength = () => {
      const newSessionLength = sessionLength - 60;
      if (newSessionLength < 0) {
          setSessionLength(0);
      } else {
          setSessionLength(newSessionLength);
      }
  }
  
  const incrementSessionLength = () => {
      setSessionLength(sessionLength + 60)
  }
  
  const [breakLength, setBreakLength] = useState(300)

    const decrementBreakLength = () => {
        const newBreakLength = breakLength - 60;
        if (newBreakLength < 0) {
            setBreakLength(0);
        } else {
            setBreakLength(newBreakLength);
        }
    }
    
    const incrementBreakLength = () => {
        setBreakLength(breakLength + 60)
    }



  return (
    <div className="App">
      <Break
      breakLength={breakLength}
      incrementBreakLength={incrementBreakLength}
      decrementBreakLength={decrementBreakLength}
       />
      <TimeLeft sessionLength={sessionLength} />
      <Session
      sessionLength={sessionLength}
      decrementSessionLength={decrementSessionLength}
      incrementSessionLength={incrementSessionLength}

       />
    </div>
  );
}

export default App;
