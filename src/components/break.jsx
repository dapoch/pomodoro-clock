import React from "react";
import moment from "moment";

const Break = ({
    breakLength,
    incrementBreakLength,
    decrementBreakLength
}) => {
    
    const breakLengthInMinutes = moment.duration(breakLength, "s").minutes()

    return ( 
        <div>
            <p id="break-label">Break</p>
            <p id="break-length">{breakLengthInMinutes}</p>
            <button id="break-increment" onClick={incrementBreakLength}>+</button>
            <button id="break-decrement" onClick={decrementBreakLength}>-</button>
        </div>
        
        );
}

export default Break