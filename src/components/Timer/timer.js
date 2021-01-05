import React, {useState, useEffect } from 'react'


import bells from './sounds/bells.wav'
import clap from './sounds/clap.wav'






const TimerApp = () => {
    // main timer variables 
    const [counter, setCounter] = useState(0)
    const [mins, setMins] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [start, setStart] = useState(false)
    // break variables 
    const [breaks, setBreaks] = useState(0)
    const [breakMins, setBreakMins] =useState(0)
    // audio variables 
    const [ audio ] = useState(new Audio(bells))
    const [ audio2 ] = useState(new Audio(clap))
    const [ playing, setPlaying ] = useState(false)


  
   
    
    
    // responsible for countdown timer 
    useEffect(() => {
        const timer = 
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
            return () => clearInterval(timer);
    },  [counter]);

    // responsible for interating minutes 
    useEffect(() => {
            counter === 0 && mins > 0 && setTimeout(() => setMins(mins - 1), setBreakMins(breakMins - 1), setCounter(59), 1000);
    },[counter, mins, breakMins])

    // sets playing flag to true if start flag is true 
   useEffect(() => {
       if(start === true){
           setPlaying(true)
        }
    },[start])
    
    // responsible for playing sound when timer and break is finished 
    useEffect(() => {
        if(playing === true && breakMins === 0 && counter === 0 ){
            audio.play()
        }
    })

    useEffect(() => {
        if(playing === true && mins === 0 && counter === 0 ){
            audio2.play()
        }
    })
 
   
    return(
        <div className="section">
            <div className="timer u-center-text">
                <h2 className="heading-secondary u-margin-bottom-3">Timer</h2>
                <div className="timer__container">

                    {/* break time  */}
                    <div className="timer__break">
                        <h3 className="heading-tertiary">Break Time:</h3>   
                        <span className="timer__mins">{breaks} minutes</span>

                        {/* add 5 minutes button doesn't show unless there is 5 minutes are more added first to session  */}
                        {minutes > 4 && start === false ? <button className="btn btn--lg" onClick={() => setBreaks(breaks + 5)}>+ 5 mins</button> : null}

                        {/* minus 5 minutes button doesn't show unless there is 5 minutes are more added first  */}
                        {breaks > 4 && start === false ? <button className="btn btn--lg" onClick={() => setBreaks(breaks - 5)}>- 5 mins</button> : null}
                    </div>

                    {/* Main timer  */}
                    <div className="timer__main">
                        <h3 className="heading-tertiary">Timer:</h3>
                        {counter < 10 ? <span className="timer__mins">{mins}:0{counter}</span>:<span className="timer__mins">{mins}:{counter}</span>}
                        {minutes < 5 ? null: <button className="btn btn--lg" onClick={() => {setMins(minutes-1); 
                            setBreakMins(breaks-1);  
                            setCounter(59); 
                            setStart(true)}}
                        >Start Timer</button>}<br />
                        
                        <span>Break Time Left:</span><br />
                        {counter < 10 && breakMins > -1 ? <h3>{breakMins}:0{counter}</h3>: breakMins > -1 ? <h3>{breakMins}:{counter}</h3>:null}
                            
                        {/* button to reset timer  */}
                        <div className="timer__reset">
                            <button className="btn btn--lg" onClick={() => {setCounter(0); setMins(0); setMinutes(0); setBreaks(0);setBreakMins(0); setPlaying(false); setStart(false)}}>Reset Timer</button>
                        </div>
                    </div>

                    {/* Session time  */}
                    <div className="timer__session"> 
                        <h3 className="heading-tertiary">Session Time:</h3>
                        <span className="timer__mins">{minutes} minutes</span>
                        {start === false ? <button className="btn btn--lg" onClick={() => setMinutes(minutes + 5) }>+ 5 mins</button> : null}
                        {minutes > 4 && start === false ? <button className="btn btn--lg" onClick={() => setMinutes(minutes - 5)}>- 5 mins</button> : null}<br />   
                    </div>

                    {/* App Description  */}
                    <div className="timer__description u-margin-top-3 u-padding-rl-3">
                        <p>
                            This app lets you set a session time and a break time. You can add and subtract minutes to the session time
                            and to the break time. A sound plays when the break timer ends, if set, and a sound plays when the session timer 
                            ends as well. This is my first attempt at using React Hooks for an entire app. Seems to be working okay, but
                            I still need a lot of work on using the Hooks. I like the simplicity and power of the Hooks but still have to get used to using 
                            them. Thank you for stopping in!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default TimerApp








