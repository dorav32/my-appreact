import React, { useState, useEffect } from 'react';
import './Clock.css';  

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="clock-container">  
            <h2>{time.toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;
