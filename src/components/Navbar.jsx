"use client";
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='sticky top-0' >
                <div className="flex px-8 text-white justify-between drop-shadow-md py-4 items-center bg-blue-500">
                    <Link href={"#!"} className="text-3xl font-semibold">WORK MANAGER</Link>
                    <div className="">
                        <ul className='flex gap-6 items-center'>
                            <Link rel="preload" href={'/'} className='hover:scale-110 active:scale-90'>Home</Link>
                            <Link rel="preload" href={'/add-task'} className='hover:scale-110 active:scale-90'>Add task</Link>
                            <Link rel="preload" href={'/show-task'} className='hover:scale-110 active:scale-90'>Show tasks</Link>
                        </ul>
                    </div>
                    <div className="">
                        <ul className='flex gap-4 items-center'>
                            <Link rel="preload" href={'/login'} className='hover:scale-110 active:scale-90'>Login</Link>
                            <li className='h-6 w-[2px] bg-black/20'></li>
                            <Link rel="preload" href={'/signup'} className='hover:scale-110 active:scale-90'>Signup</Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar