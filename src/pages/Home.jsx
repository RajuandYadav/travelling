import React from 'react'
import bgImg from '../assets/bg-image.jpg'
import Navbar from '../components/Navbar'
import Inquiry from '../components/Inquiry'
import Destination from '../components/Destination'

const Home = () => {
  return (
    <div>
      <div style={{backgroundImage:`url(${bgImg})`,}} className='h-[90vh] relative w-full bg-no-repeat bg-cover'>
        <Navbar />
        <div className='flex flex-col justify-center items-center h-full'>
         <div className='text-white px-44 text-center'>
            <h1 className='font-bold text-5xl md:text-8xl'>TRAVELLING AROUND THE WORLD</h1>
            <p className='pt-5 text-[1rem]'>Meets with clients to determine travel needs, budgets and preferences. Sells and coordinates transportation, accommodations, insurance, tours and activities. Advises clients regarding destinations, cultures, customs, weather and activities.</p>
            <button className='bg-red-600 px-5 py-3 mt-8 hover:bg-red-700 rounded-md'>Continue Reading</button>
         </div>
         </div>
         <Inquiry className={'absolute -bottom-28 left-28'}/>
         <Destination/>
      </div>
    </div>
  )
}

export default Home
