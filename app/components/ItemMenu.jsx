"use client"
import Image from 'next/image'
import Link from 'next/link'
import {useState } from 'react'
export default function ItemMenu({handlehover,text,img}) {
  let [moveY,setMovey]=useState(0)
  let [moveX,setMovex]=useState(0)
  let handleMove=e=>{
     setMovex(e.nativeEvent.offsetX||0)
     setMovey(e.nativeEvent.offsetY||0)
  }
  
  return (
    <li className='
         w-fit h-fit relative group
         flex justify-center items-center  '>
       <Link 
          onMouseLeave={()=>handlehover(true)} 
          onMouseEnter={()=>handlehover(false)}
          onMouseMove={(e)=>handleMove(e)}
          href={'/'}
          className='relative z-20' >
           <h1 className='
              hover:opacity-70 cursor-none
              text-6xl font-medium uppercase text-white '>
             {text}
           </h1>
        </Link>   
        <div 
         style={{top:`${moveY}px`,left:`${moveX}px`}}
          className={`
               group-hover:opacity-90 opacity-0 
               absolute flex items-center justify-center
               -translate-x-1/2 -translate-y-1/2 duration-150 
               pointer-events-none z-10
            `}>
           <Image
             className='absolute 
              group-hover:scale-100 scale-0 delay-200 duration-150
              rounded-sm z-10 '
             src={img}
             width={250} 
             height={200} 
             alt={text}/>
          <h6  className='uppercase font-extrabold  text-[15vw] text-stroke text-transparent z-20 '>
            {text}
          </h6>
       </div>
    </li>
  )
}
