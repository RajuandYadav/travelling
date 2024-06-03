import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
    <form className='flex flex-col text-600 space-y-4 p-11 shadow drop-shadow-md border'>
      <h1 className='font-bold text-2xl text-center py-5'>LOGIN</h1>
      <div>
        <input name='username' placeholder='username' type="email" required className='bg-gray-100 rounded-md py-3 md:w-[500px] px-2'/>
      </div>
      <div>
        <input name='password' placeholder='password' type='password' required className='bg-gray-100 rounded-md py-3 md:w-[500px] px-2'/>
      </div>
      <Link to={'/'} className='bg-red-500 flex justify-center items-center text-white py-1 rounded-md hover:bg-red-600'>
      <button className=''>login </button>
      </Link>
    </form>
    </div>
  )
}

export default LoginPage
