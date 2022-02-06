import React, { useState}from 'react';
import useCounter from './hooks/useCounter';




function CounterOne() {
   const [count,increment,decrement,reset]=useCounter(10,10)
   
    return (
        <div>
         Cout = {count}
         <button onClick={reset}>Reset</button>
         <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>
         
        </div>

);
}

export default CounterOne;