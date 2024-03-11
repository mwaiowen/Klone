// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import logo from '../assets/Images/logo.jpg';
import {HiHome,
        HiMagnifyingGlass,
        HiStar,
        HiPlayCircle,
        HiTv
} from "react-icons/hi2"
import {HiPlus, HiDotsVertical} from "react-icons/hi";
import HeaderItem from './HeaderItem';

function Header() {
    const[toggle,setToggle] =useState(true)
    const menu =  [
        {
            name:"Home",
            icon:HiHome
        },
        {
            name:"Search",
            icon:HiMagnifyingGlass
        },
        {
            name:"Watch List",
            icon:HiPlus
        },
        {
            name:"Originals",
            icon:HiStar
        },
        {
            name:"Movies",
            icon:HiPlayCircle
        },
        {
            name:"Series",
            icon:HiTv
        }
    ]
  return (
    /*this is is to style the header*/
    <div className='flex items-center gap-60 justify-between p-5 '>
        <div className='flex gap-8 items-center'>
    <img src={logo} className='w-[80px] md:w-[115px] object-cover'/>
    <div className=' hidden md:flex gap-8'>
    {menu.map((item)=>(
        // eslint-disable-next-line react/jsx-key
        <HeaderItem name={item.name} Icon={item.icon}/>
    ))}
    </div>
    <div className='flex md:hidden gap-5'>
    {menu.map((item, index)=>index<3&&(
        // eslint-disable-next-line react/jsx-key
        <HeaderItem name={""} Icon={item.icon}/>
    ))}
    <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
        
        <HeaderItem name={""} Icon={HiDotsVertical}/>
       {toggle? <div className='absolute mt-3 bg-[#121212]
        border-[1px] border-gray-700 p-3 px-5 py-4 '>
        {menu.map((item, index)=>index>2&&(
        // eslint-disable-next-line react/jsx-key
        <HeaderItem name={item.name} Icon={item.icon}/>
        ))} 
        </div>:null }
    </div>
    </div>
    </div>
    <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png"
    className=' w-[40px] rounded-full '/>
    </div>
    
  )
}

export default Header
