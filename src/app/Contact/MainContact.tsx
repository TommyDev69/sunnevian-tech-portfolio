import React from 'react'
import ContactInfo from './ContactInfo'

export default function MainContact() {
  return (
    <div className='flex  space-x-12'>
       <div className="px-6 w-1/2  bg-black ">
       <h1 className="text-white text-left md:text-[30px] text-3xl font-bold capitalize">
           Contact us for the service you want to use
       </h1>
       </div>
       <ContactInfo />
    </div>
  )
}
