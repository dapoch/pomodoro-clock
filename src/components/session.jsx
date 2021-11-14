import React from "react";
import moment from "moment";

const Session = ({
sessionLength,
incrementSessionLength,
decrementSessionLength
}) => {

    const sessionLengthInMinutes = moment.duration(sessionLength, "s").minutes()

    return ( 
        <div>
            <p id="session-label">Session</p>
            <p id="session-length">{sessionLengthInMinutes}</p>
            <button id="session-increment" onClick={incrementSessionLength}>+</button>
            <button id="session-decrement" onClick={decrementSessionLength}>-</button>
        </div>
        
        );
}

export default Session