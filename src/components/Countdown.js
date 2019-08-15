import React, { useState } from 'react'

const daysUntil = () => {
    // Set the date we're counting down to
    const countDownDate = new Date("Nov 3, 2019").getTime();

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Return days until
    return (Math.floor(distance / (1000 * 60 * 60 * 24)) + 1);
}


const Countdown = (props) => {
    // Declare a new state variable
    const [days] = useState(daysUntil);
    return (
        <div id="Countdown">
            <p className="Countdown-Inner Countdown-Number">{days} </p>
            <p className="Countdown-Inner Countdown-Text">Days Left</p>
        </div>
    )
}


export default Countdown
