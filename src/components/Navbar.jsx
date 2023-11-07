"use client";
import UserContext from '@/context/userContext';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'

const Navbar = () => {
    const router = useRouter()
    const context = useContext(UserContext)
    const {user, setUser} = context

    const logout = async () => {
        const httpAxios = axios.create({ baseURL: process.env.BASE_URL })
        const response = await httpAxios.post('/api/logout')
        const data = await response.data
        return data
      }

      const doLogout = async()=>{
        try {
            const data = await logout()
            setUser(undefined)
            router.push('/login')
        } catch (error) {
            console.log(error)
        }
      }



    return (
        <>
            <nav className='sticky top-0' >
                <div className="flex px-8 text-white justify-between drop-shadow-md py-4 items-center bg-blue-500">
                    <Link href={"#!"} className="text-3xl font-semibold">WORK MANAGER</Link>
                    {user && <div className="">
                        <ul className='flex gap-6 items-center'>
                            <Link rel="preload" href={'/'} className='hover:scale-110 active:scale-90'>Home</Link>
                            <Link rel="preload" href={'/add-task'} className='hover:scale-110 active:scale-90'>Add task</Link>
                            <Link rel="preload" href={'/show-task'} className='hover:scale-110 active:scale-90'>Show tasks</Link>
                        </ul>
                    </div>}
                    {user && <div className="">
                        <ul className='flex gap-4 items-center'>
                            <Link rel="preload" href={'/login'} className='hover:scale-110 active:scale-90'>{user.name}</Link>
                            <li className='h-6 w-[2px] bg-black/20'></li>
                            <button onClick={doLogout}  className='hover:scale-110 active:scale-90'>Logout</button>
                        </ul>
                    </div>}
                    {!user && <div className="">
                        <ul className='flex gap-4 items-center'>
                            <Link rel="preload" href={'/login'} className='hover:scale-110 active:scale-90'>Login</Link>
                            <li className='h-6 w-[2px] bg-black/20'></li>
                            <Link rel="preload" href={'/signup'} className='hover:scale-110 active:scale-90'>Signup</Link>
                        </ul>
                    </div>}
                </div>
            </nav>
        </>
    )
}

export default Navbar