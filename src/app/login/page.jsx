'use client'
import Image from 'next/image'
import loginImg from '../../assets/login.svg'
import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import UserContext from '@/context/userContext'


const page = () => {
  const context = useContext(UserContext)
  const {setUser} = context

  const router = useRouter()
  const [loginData, setLoginData] = useState({ email: '', password: "" });

  const login = async (loginData) => {
    const httpAxios = axios.create({ baseURL: process.env.BASE_URL })
    const response = await httpAxios.post('/api/login', loginData)
    const data = await response.data
    return data
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
        const data = await login(loginData)
        setUser(data.user)
        toast.success(data.message)
        router.push('/profile/user')

    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-10 sm:col-span-6 md:col-span-4 col-start-2 sm:col-start-4 md:col-start-5 p-4">
          <div className="iamge flex justify-center">
            <Image src={loginImg} width={160} alt='signup banner' />
          </div>
          <h1 className='text-3xl text-center font-semibold my-8'>LogIn !!</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className='text-lg '>Email</label>
            <input type="text" id='name' className='block px-3 py-2 tracking-wide border border-slate-400 w-full outline-none rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors duration-200 ease-in-out' name='email' onChange={(e) => { setLoginData({ ...loginData, email: e.target.value }) }} value={loginData.email} />
            <label htmlFor="password" className='text-lg block mt-4' >Password</label>
            <input type="password" id='password' className='block px-3 py-2 tracking-wide border border-slate-400 w-full outline-none rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors duration-200 ease-in-out' name='password' onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }} value={loginData.password} />
            <div className="flex w-full justify-center gap-4 mt-8 items-center">
              <button className='px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-800'>Login</button>
              <button className='px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-800'>Clear</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default page
