import React from 'react'
import DestinationCard from './DestinationCard';
import Image from '../assets/bhoothnath.jpeg'
import gangasagar from '../assets/gangasagar.jpeg'
import janakpur from '../assets/janakpur.png'
import Vivah from '../assets/Vivah.jpeg'

import { RiStarSFill } from "react-icons/ri";

const Destination = () => {
    return (
        <div className='mt-28 px-28'>
            <div className='flex '>
                <div className='w-1/2 space-y-2 justify-center items-center'>
                    <div className='flex items-center space-x-1'>
                        <div className='h-[3px] w-9 bg-red-500'></div>
                        <h1 className='text-red-400 text-[1.1rem] font-semibold'>Popular Destination</h1>
                    </div>
                    <h2 className='font-extrabold text-4xl'>TOP NOTCH DESTINATION</h2>
                </div>
                <p className='w-1/2 text-[1rem]'>Lorem ipsum dolor sit amet aliquid aspernatur porro vel tempora consectetur possimus dolorum dignissimos excepturi provident quas quam quisquam explicabo.</p>
            </div>
            <div className='flex space-x-5'>
                <DestinationCard Image={janakpur} label='Janaki Mandir'/>
                <DestinationCard Image={Vivah} label='Vivah Mandap'/>
                <div className=''>
                    <div className='w-[390px] h-[265px] bg-white shadow relative p-2' >
                        <img src={gangasagar} alt="" className='  h-full object-cover ' />
                        <h2 className='absolute bg-blue-600 text-white px-3 py-2 z-[2] left-8 top-4 '>Janakpurdham</h2>
                        <h2 className='font-bold text-xl absolute bottom-10 left-6 z-[2] text-white bg-black/60 px-3 hover:bg-black/90 shadow drop-shadow-xl'>GangaSagar</h2>
                        <div className='flex absolute bottom-3 left-6'>
                            <RiStarSFill size={20} className='text-red-600' />
                            <RiStarSFill size={20} className='text-red-600' />
                            <RiStarSFill size={20} className='text-red-600' />
                            <RiStarSFill size={20} className='text-red-600' />
                        </div>
                    </div>

                    <div className='w-[390px] h-[265px] bg-white shadow relative p-2' >
                        <img src={Image} alt="" className='  h-full object-cover ' />
                        <h2 className='absolute bg-blue-600 text-white px-3 py-2 z-[2] left-8 top-4 '>Janakpurdham</h2>
                        <h2 className='font-bold text-xl absolute bottom-10 left-6 z-[2] text-white bg-black/60 px-3 hover:bg-black/90 shadow drop-shadow-xl'>Bhooth Nath</h2>
                        <div className='flex absolute bottom-3 left-6'>
                            <RiStarSFill size={20} className='text-red-600' />
                            <RiStarSFill size={20} className='text-red-600' />
                            <RiStarSFill size={20} className='text-red-600' />
                            <RiStarSFill size={20} className='text-red-600' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination
