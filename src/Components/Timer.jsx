import {React,useState,useEffect,useRef} from 'react'
import useDocumentTiltle from './Hooks/useDocumentTiltle';

const Timer = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef();
    

    useEffect(() => {
      intervalRef.current = setInterval(()=>{setTimer(prevTimer => prevTimer+1)},1000);
      return () => {
        clearInterval(intervalRef.current )
      }
    }, [])
    useDocumentTiltle(timer)
  return (
    <div>Timer -{timer}
    <button onClick={()=>{clearInterval(intervalRef.current )}}>stop</button> 
    {/* but the inteval is not defined in this scope */}
    </div>
  )
}

export default Timer