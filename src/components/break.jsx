import React from "react";
import { useState } from "react";
import moment from "moment";

const Break = () => {
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