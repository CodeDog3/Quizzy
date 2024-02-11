import { withCoalescedInvoke } from "next/dist/lib/coalesced-function"
import { useEffect, useState } from "react"

export const useWindowY = (initial = 100) =>{

    const [height, setHeight] = useState(initial)


    useEffect(()=>{
        const findHeight = () =>{
           setHeight(window.scrollY) 
        }
        window.addEventListener("scroll", findHeight)
        return ()=>{
        window.removeEventListener("scroll",findHeight)
        }
    },[height])

    return height;
}