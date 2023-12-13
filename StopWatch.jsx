import React,{useEffect, useState} from 'react'

const StopWatch = () => {
  let [time,setTime]=useState(0);
 let  [run,setRun]= useState(false);   // run to check whether its running or not 

      useEffect(()=>{
        let interval;
         
        if(run){
            interval =setInterval(()=>{
                setTime(prevTime => prevTime + 1);
            },1000)
        }else{
            clearInterval(interval);
        }
     
        return ()=>{
            clearInterval(interval);
        }

      } ,[run]);
      const  handleRestart=()=>{
        setTime(0);
        setRun(false);
        
      }
      const  handlePause=()=>{
         setRunning(false);
      }
      const  handleStart=()=>{
        setRun(true);
      }

      const formatTime= seconds =>{
        const hours =Math.floor(seconds/3600)
        const minutes=Math.floor((seconds % 3600)/60);
        const remainingSeconds = seconds % 60 
         return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(remainingSeconds).padStart(2,'0')}`
      }
      

      

  return (
    <div>
        <h2>Stop Watch</h2>
        <div>{formatTime(time)}</div>
        <button type='button' onClick={ handleStart} disabled={run}>Start</button>
         <button type="reset" onClick={ handleRestart}>Reset</button>
         <button type='pause ' onClick={handlePause} disabled={!run}>Pause</button>

    </div>
  )
}

export default StopWatch