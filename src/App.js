import { useState } from 'react';
import './App.css';
import Break from './components/break';
import Session from './components/session';
import TimeLeft from './components/TimeLeft';
import { useEffect } from "react";

function App() {
  const [currentSession, setCurrentSession] = useState("Session");
  const [intervalId, setIntervalId] = useState(null);
  const [sessionLength, setSessionLength] = useState(60 * 25)
  const [breakLength, setBreakLength] = useState(300)
  const [timeLeft, setTimeLeft] = useState(sessionLength);
  // change timeLeft whenever sessionLength changes
  useEffect(()=>{
      setTimeLeft(sessionLength)
  }, [sessionLength]);
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
  
  const isStarted = intervalId !== null;
    const handleStartStop = () => {
        if (isStarted) {
        // if we are in started mode:
        //we want to stop the timer
        //we use clearInterval
        clearInterval(intervalId)
        setIntervalId(null)
        } else {
        // if we are in stop mode we
        // decrement timeLeft by one every second (1000 ms)
        // to do this we use setInterval
        const newIntervalId = setInterval(()=>{
            setTimeLeft(prevTimeLeft => {
                if (prevTimeLeft - 1 >= 0){
                    return prevTimeLeft - 1;
                }
                if (currentSession === "Session") {
                    setCurrentSession("Break");
                    setTimeLeft(breakLength);
                } else if (currentSession === "Break") {
                    setCurrentSession("Session");
                    setTimeLeft(sessionLength);
                }
                
            });
        }, 100);
        setIntervalId(newIntervalId)
    };
            }



  

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

    const handleResetButton = () => {
        // clear timeout interval
        clearInterval(intervalId)
        // set intervalId null
        setIntervalId(null)
        // set the sessiontype to "session"
        setCurrentSession("Session")
        // reset the session length to 25 minutes
        setSessionLength(60 * 25)
        // reset the break length
        setBreakLength(60 * 5)
        // reset timer to 25 minutes
        setTimeLeft(60 * 25)

    }

  return (
    <div className="App">
      <Break
      breakLength={breakLength}
      incrementBreakLength={incrementBreakLength}
      decrementBreakLength={decrementBreakLength}
       />
      <TimeLeft 
      breakLength={breakLength} 
      timerLabel={currentSession} 
      sessionLength={sessionLength}
      handleStartStop={handleStartStop}
      startStopLabel={isStarted? "Stop" : "Start"}
      timeLeft={timeLeft}

       />
      <Session
      sessionLength={sessionLength}
      decrementSessionLength={decrementSessionLength}
      incrementSessionLength={incrementSessionLength}

       />
       <button id="reset" onClick={handleResetButton}>Reset</button>
    </div>
  );
}

export default App;
