import React from 'react'
import { CiCalendar } from "react-icons/ci";


const Inquiry = ({className}) => {
    return (
        <div className={`${className} flex items-center space-x-4 bg-white shadow-md border p-10 w-[80%] mx-auto`}>

            <div className='flex flex-col '>
                <label htmlFor="">Search Destination*</label>
                <input name='destination' placeholder='Destination' type="text" required className='bg-gray-100 rounded-md py-3  px-2' />
            </div>

            <div className='flex flex-col'>
                <label htmlFor="">Pax Number*</label>
                <input name='paxNo' placeholder='no. of people' type="text" required className='bg-gray-100 rounded-md py-3  px-2' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="checkIn">Checkin Date*</label>
                <div className='flex items-centers justify-center bg-gray-100 pr-3'>
                  
                <input id='checkIn' name='checkInDate' placeholder='no. of people' type="date" required className='bg-gray-100 rounded-md py-3  px-2' />
                
                <CiCalendar className='my-auto'/>
                </div>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="checkout">Checkout Date*</label>
                <div  className='flex items-centers justify-center bg-gray-100 pr-3'>
                <input id='checkout' name='checkOutDate' placeholder='no. of people' type="date" required className='bg-gray-100 rounded-md py-3  px-2' />
                <CiCalendar className='my-auto'/>
                </div>
            </div>
            <div>
            <button className='bg-red-600 px-5 py-3 mt-5 hover:bg-red-700 rounded-md text-white'>INQUIRE NOW </button>

            </div>
           
        </div>
    )
}

export default Inquiry
