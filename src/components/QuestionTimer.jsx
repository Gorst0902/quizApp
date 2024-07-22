import React, { useEffect, useState } from 'react'

export default function QuestionTimer({ timeOut, onTimeOut }) {
    const [remainingTime, setRemainingTime] = useState(timeOut);

    useEffect(() => {

        const timer = setTimeout(onTimeOut, timeOut);

        return () => {
            clearTimeout(timeOut);
        }
    }, [timeOut, onTimeOut])

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <progress id='question-time' max={timeOut} value={remainingTime} />
    )
}
