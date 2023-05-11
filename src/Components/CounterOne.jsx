import React from 'react'
import { useReducer , useState} from 'react'

const initialState = {
    firstCounter: 0
};
const reducer = (state, action) => {
    switch (action.pipe) {
        case 'increment':
            return { firstCounter: state.firstCounter + action.value };
        case 'decrement':
            return { firstCounter: state.firstCounter - action.value };
        case 'reset':
            return initialState;
        default:
            return state
    }
}

const CounterOne = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [value, setValue] = useState(0)


    return (
        <div>
            {/* <input type='number' onChange={(e)=>setValue(e.target.value)}></input> */}
            <div>Count - {count.firstCounter}</div>
            <button onClick={() => dispatch({ pipe: 'increment',value:5})}>Increase {value}</button>
            <button onClick={() => dispatch({ pipe: 'decrement',value:5 })}>Decrease {value}</button>
            <button onClick={() => dispatch({ pipe: 'reset' })}>Reset</button>
        </div>
    )
}

export default CounterOne