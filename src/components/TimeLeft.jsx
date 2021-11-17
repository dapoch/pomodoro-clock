import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment)

const TimeLeft = ({
    timerLabel, 
    handleStartStop,
    startStopLabel,
    timeLeft
}) => {


    
    

    const formattedTimeLeft = moment.duration(timeLeft, "s").format("mm:ss", {trim: false})
    return (
        <div>
           <p id="timer-label">{timerLabel}</p>
           <p id="time-left">{formattedTimeLeft}</p>
           <button onClick={handleStartStop}>{startStopLabel}</button>
        </div>
    )
}

export default TimeLeft