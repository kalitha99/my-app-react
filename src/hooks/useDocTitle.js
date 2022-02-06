import { useEffect } from "react";

function useDocTitle(Count) {
    useEffect (()=>{
        document.title =`count${Count}`
    },[Count])
}

export default useDocTitle;