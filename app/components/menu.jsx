"use client"
import { useState } from "react"
import Cursor from "./cursor"
import ItemMenu from "./ItemMenu"
 let menuData=[
  {img:"/img1.jpg",text:"home"},
 {img:"/img3.jpg",text:"about"},
 {img:"/img4.jpg",text:"servies"},
 {img:"/img5.jpg",text:"protofolio"},
 {img:"/img2.jpg",text:"contact"}
]
export default function menu() {
  let [hover,setHover]=useState(true)
  return (
    <div 
       className="
         w-full h-full 
         flex justify-center items-center
         fixed cursor-none  z-40">
       <ul className="flex items-center gap-6 flex-col  ">
        {menuData.map(el=> 
           <ItemMenu 
              handlehover={setHover}
              text={el.text} 
              img={el.img}/>
         )}
       </ul>
       <Cursor offset={hover} />
    </div>
  )
}
