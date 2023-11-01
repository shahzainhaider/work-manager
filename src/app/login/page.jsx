'use client'

import Image from 'next/image'
import login from '../../assets/login.svg'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-10 sm:col-span-6 md:col-span-4 col-start-2 sm:col-start-4 md:col-start-5 p-4">
          <div className="iamge flex justify-center">
            <Image src={login} width={150} alt='signup banner'/>
          </div>
          <h1 className='text-3xl text-center font-semibold my-8'>LogIn !!</h1>
          <form onSubmit={'handleSubmit'}>
            <label htmlFor="name" className='text-lg '>Name</label>
            <input type="text" id='name' className='block px-3 py-2 tracking-wide border border-slate-400 w-full outline-none rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors duration-200 ease-in-out' name='add_title'/>
            <label htmlFor="email" className='text-lg '>Email</label>
            <input type="text" id='add_title' className='block px-3 py-2 tracking-wide border border-slate-400 w-full outline-none rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors duration-200 ease-in-out' name='email'/>
            <div className="flex w-full justify-center gap-4 mt-8 items-center">
              <button className='px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-800'>Signup</button>
              <button onClick={''} className='px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-800'>Clear</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default page
