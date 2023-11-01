'use client'
import React, { useState } from 'react'
import signup from '../../assets/signup.svg'
import Image from 'next/image'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar';
import { ToastContainer, toast } from 'react-toastify'


const page = () => {
    const [progress,setProgress] = useState(0)
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        about: '',
        profileURL: 'https://w7.pngwing.com/pngs/981/645/png-transparent-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette-symbol-thumbnail.png'
    })

    const addUser = async (user) => {
        const httpAxios = axios.create({ baseURL: process.env.BASE_URL })
        const response = await httpAxios.post('/api/users', user)
        setProgress(40)
        const data = await response.data
        setProgress(100)
        return data
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addUser(data);
            toast.success('User Added Successfully!!')
            setData({
            ...data,
            name:'',
            email: '',
            password: '',
            about: ''
            })
            
        } catch (error) {
            setProgress(0)
            console.log(error);
            toast.error('Failed to Add User')
        }
    }

    return (
        <>
        <LoadingBar transitionTime='500' progress={progress} color='red' loaderSpeed='1000' height='3px' />
            <div className="grid grid-cols-12">
                <div className="col-span-10 sm:col-span-6 md:col-span-4 col-start-2 sm:col-start-4 md:col-start-5 p-4">
                    <div className="iamge flex justify-center">
                        <Image src={signup} width={150} alt='signup banner' />
                    </div>
                    <h1 className='text-3xl text-center font-semibold my-8'>Signup Here !!</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username" className='text-lg '>Username</label>
                        <input type="text" id='username' className='block px-3 py-2 tracking-wide border border-slate-400 w-full outline-none rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors duration-200 ease-in-out' name='username' onChange={(e) => { setData({ ...data, name: e.target.value }) }} value={data.name} />
                        <label htmlFor="email" className='text-lg block mt-6 '>Email</label>
                        <input type="text" id='email' className='block px-3 py-2 tracking-wide border border-slate-400 w-full outline-none rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors duration-200 ease-in-out' name='email' onChange={(e) => { setData({ ...data, email: e.target.value }) }} value={data.email} />
                        <label htmlFor="password" className='text-lg block mt-6 '>Password</label>
                        <input type="password" id='password' className='block px-3 py-2 tracking-wide border border-slate-400 w-full outline-none rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors duration-200 ease-in-out' name='password' onChange={(e) => { setData({ ...data, password: e.target.value }) }} value={data.password} />
                        <label htmlFor="about" className='text-lg block mt-6'>About</label>
                        <textarea rows={2} type="text" id='add_content' className='block px-3 py-2 tracking-wide border border-slate-400 w-full outline-none rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors duration-200 ease-in-out' name='about' onChange={(e) => { setData({ ...data, about: e.target.value }) }} value={data.about} />
                        <div className="flex w-full justify-center gap-4 mt-8 items-center">
                            <button className='px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-800'>Signup</button>
                            <button  className='px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-800'>Clear</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}

export default page
