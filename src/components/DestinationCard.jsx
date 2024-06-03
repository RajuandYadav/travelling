import React from 'react'
import { RiStarSFill } from "react-icons/ri";

const DestinationCard = ({Image, label}) => {
  return (
    <div className='w-[360px] h-[530px] bg-white shadow relative p-2' >
    <img src={Image} alt="" className='  h-full object-cover ' />
    <h2 className='absolute bg-blue-600 text-white px-3 py-2 z-[2] left-8 top-4 '>Janakpurdham</h2>


    <h2 className='font-bold text-xl absolute bottom-10 left-6 z-[2] text-white bg-black/60 px-3 hover:bg-black/90 shadow drop-shadow-xl'>{label}</h2>
    <div className='flex absolute bottom-3 left-6'>
        <RiStarSFill size={20} className='text-red-600' />
        <RiStarSFill size={20} className='text-red-600' />
        <RiStarSFill size={20} className='text-red-600' />
        <RiStarSFill size={20} className='text-red-600' />
    </div>

</div>
  )
}

export default DestinationCard
