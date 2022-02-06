import { useEffect, useState } from "react";
import useDocTitle from "./hooks/useDocTitle";

function DocTitlwOne() {
    const [Count,setCount] = useState(0)
 useDocTitle(Count)
    return ( 
        <div>
            <button onClick={()=> setCount(Count+1)}>Count - {Count}</button>
        </div>
     );
}

export default DocTitlwOne;