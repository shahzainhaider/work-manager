"use client";
import Image from 'next/image'
import axios from "axios"
import { toast } from "react-toastify"
import note from '../../assets/notes.svg'
import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar';

const page = () => {
  const [progress,setProgress] = useState(0)
  const [task, setTask] = useState({
    title: '',
    content: '',
    status: 'none',
    userId: '653a79b1290dcc2df58c690a'
  });
  
  async function addTask(task){  
    try {
      const httpAxios = axios.create({baseURL:process.env.BASE_URL})
      const result =await httpAxios.post('/api/works',task)
      setProgress(40)
      const data = await result.data
      setProgress(100)
        
        return data
    } catch (error) {
        console.log(error)
    }
}

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addTask(task)
      toast.success('Task Added Successfully!!')
      setTask({
        ...task,
        title: '',
        content: '',
        status: 'none'
      })
    } catch (error) {
      console.log(error)
      toast.error('Failed to Add Task !')
    }
  }

  // clear function
  const clearForm = () =>{
  }


  return (
    <>
    <LoadingBar transitionTime='500' progress={progress} color='red' loaderSpeed='1000' height='3px' />
      <div className="grid grid-cols-12">

        <div className="col-span-10 sm:col-span-6 md:col-span-4 col-start-2 sm:col-start-4 md:col-start-5 p-4">
          <div className="iamge flex justify-center">
            <Image src={note} width={150} alt='' />
          </div>
          <h1 className='text-3xl text-center font-semibold my-8'>Add Your Todos !!</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="add_title" className='text-lg '>Title</label>
            <input type="text" id='add_title' className='block px-3 py-2 tracking-wide border border-slate-400 w-full outline-none rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors duration-200 ease-in-out' name='add_title' onChange={(event) => {
              setTask({
                ...task,
                title: event.target.value
              })
            }}
              value={task.title} />
            <label htmlFor="add_content" className='text-lg block mt-6'>Content</label>
            <textarea rows={4} type="text" id='add_content' className='block px-3 py-2 tracking-wide border border-slate-400 w-full outline-none rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors duration-200 ease-in-out' name='add_content' onChange={(event) => {
              setTask({
                ...task,
                content: event.target.value
              })
            }}
              value={task.content} />
            <label htmlFor="add_content" className='text-lg block mt-6'>Status</label>
            <select className='block px-3 py-2 tracking-wide border border-slate-400 w-full outline-none rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors duration-200 ease-in-out' name='add_status' onChange={(event) => {
              setTask({
                ...task,
                status: event.target.value
              })
            }}
              value={task.status}>
              <option value="none" disabled className='bg-blue-300 rounded-lg text-center'>Select Status</option>
              <option value="pending" className='text-center'>Pending</option>
              <option value="compeleted" className='text-center'>Compeleted</option>
            </select>
            <div className="flex w-full justify-center gap-4 mt-8 items-center">
              <button className='px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-800'>Add task</button>
              <button onClick={clearForm} className='px-3 py-2 rounded-md bg-red-600 text-white hover:bg-red-800'>Clear</button>
            </div>
          </form>
        </div>
      </div>
          <ToastContainer/>
    </>
  )
}

export default page
