import React, { useEffect, useState } from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment)

const TimeLeft = ({
    sessionLength, breakLength
}) => {
    const [currentSession, setCurrentSession] = useState("Session");
    const [ intervalId, setIntervalId] = useState(null);
    const [ timeLeft, setTimeLeft ] = useState(sessionLength);
    // change timeLeft whenever sessionLength changes
    useEffect(()=>{
        setTimeLeft(sessionLength)
    }, [sessionLength]);
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

    

    const formattedTimeLeft = moment.duration(timeLeft, "s").format("mm:ss", {trim: false})
    return (
        <div>
           <p id="timer-label">{currentSession}</p>
           <p id="time-left">{formattedTimeLeft}</p>
           <button onClick={handleStartStop}>{isStarted? "Stop" : "Start"}</button>
        </div>
    )
}

export default TimeLeft