import React from 'react'

const Navbar = () => {
  return (
    <div className='px-20 py-3 bg-black flex justify-between items-center'>
      <div className='text-white'>logo</div>
      <ul className='flex space-x-10 text-white'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Tours</li>
        <li className='cursor-pointer'>Page</li>
        <li className='cursor-pointer'>Blog</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>
      <button className='bg-red-500 px-4 py-2 text-white'>BOOK NOW</button>
    </div>
  )
}

export default Navbar
