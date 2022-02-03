//for useEffect change title with btn click
import React,{useState, useEffect} from "react";

function HookCounterFive() {
  const [count,setCount] =  useState(0)

  useEffect(()=>{
      document.title =`you clicked${count}times`
  })

    return ( 
        <div>
            <button onClick={() => setCount(count + 1)}>Count of hooks{count}</button>
        </div>
     );
}

export default HookCounterFive;