import { useEffect, useState } from "react";

function DocTitlTwo() {
    const [Count,setCount] = useState(0)
    useEffect (()=>{
        document.title =`count${Count}`
    },[Count])
    return ( 
        <div>
            <button onClick={()=> setCount(Count+1)}>Count - {Count}</button>
        </div>
     );
}

export default DocTitlTwo;