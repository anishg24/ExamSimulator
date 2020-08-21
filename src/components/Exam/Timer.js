import React, {useEffect, useRef} from "react";
import {useSessionStorageState} from '@umijs/hooks';
import Countdown from "react-countdown";

const Timer = ({length, toggle$}) => {
    const [time, setTime] = useSessionStorageState("timeLeft", length*1000);
    const [verbosity, setVerbosity] = useSessionStorageState("timeVerbosity", false);

    useEffect(() => {
        if(time <= 0){
            setTime(length*1000);
        }
    }, [time, length]);

    const timerRef = useRef();
    const handleStart = () => {
        sessionStorage.setItem("timerActive", "true")
        timerRef.current.start()
    };
    const handleStop = () => {
        sessionStorage.setItem("timerActive", "false")
        timerRef.current.pause()
    };

    toggle$.useSubscription(() => {
        if (timerRef.current.isPaused()) handleStart();
        else handleStop();
        // let interval = null;
        // while (isActive && seconds > 0) {
        //     interval = setInterval(() => setSeconds(seconds => seconds - 1), 1000);
        // }
        // clearInterval(interval);
    })

    const renderer = ({total, hours, minutes, seconds, completed}) => {
        sessionStorage.setItem("timeLeft", total);
        if (completed) return <h3>DONE</h3>;
        else if (verbosity) return <span>${hours} hours ${minutes} minutes ${seconds} seconds left</span>;
        else {
            return <span>{hours}:{minutes}:{seconds} left</span>;       // TODO: Manual zero padding.
        }
    }


    //
    // useUpdateEffect(() => {
    //     let interval = null;
    //     if (isActive){
    //         interval = setInterval(() => {
    //             setSeconds(seconds => seconds - 1);
    //         }, 1000);
    //     } else if (!isActive && seconds !== length) {
    //         clearInterval(interval);
    //     }
    //     return () => clearInterval(interval);
    // }, [isActive, seconds, length, dummy]);
    //
    // if (dummy === 0) setDummy(null);
    //
    // const getTimeLeft = () => {
    //     const duration = Moment.duration(seconds, "seconds");
    //     const hours = duration.hours();
    //     const minutes = duration.minutes();
    //     const second = duration.seconds();
    //     let result = '';
    //     if (verbose){
    //         if (hours > 0) result = result.concat(result, `${hours} hours `);
    //         if (minutes > 0) result = result.concat(result, `${minutes} minutes `);
    //         result = result.concat(`${second} seconds`)
    //     } else {
    //         result = `${hours}:${minutes}:${second}`
    //     }
    //     return result;
    // }

    return (
        // <h3 className={"timer-text"}
        //     onClick={() => setVerbosity(!verbose)}
        // >
        //     {getTimeLeft()} left
        // </h3>
        <div
            className={"timer-text"}
            onClick={() => setVerbosity(!verbosity)}
        >
            <Countdown
                date={Number(Date.now() + time)}
                autoStart={false}
                ref={timerRef}
                renderer={renderer}
                zeroPadTime={2}
            />
        </div>

    )
}

export default Timer;