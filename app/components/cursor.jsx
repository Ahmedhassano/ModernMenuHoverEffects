"use client"
import { useState,useEffect } from "react"
export default function Cursor({offset}) {
  let [top,settop]=useState(0)
  let [left,setLeft]=useState(0)
  let handleMouseMove=(e)=>{
     settop((e.clientY-12.5))
     setLeft((e.clientX-12.5))
  }
  useEffect(()=>{
       window.addEventListener("mousemove",(e)=>{
        handleMouseMove(e)
    })  
  },[])
  return (
    <div
        style={{ top:`${top}px`,
        left:`${left}px`,
        outline:"3px solid #02cc02",
        outlineOffset:`${offset?"2px":"260px"}`,
      }} 
        className={`
         ${offset?"  ":" border-2 border-solid border-black bg-[#009000]"}
         w-5 h-5 absolute rounded-full 
         transition-[outline-offset] duration-150 
          pointer-events-none z-40 `}>
    </div>
  )
}
