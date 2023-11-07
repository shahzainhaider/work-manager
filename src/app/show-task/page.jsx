'use client'
import UserContext from '@/context/userContext'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'

const page = () => {
  const context = useContext(UserContext)
  const {user} = context
  const [data,setData] = useState([])

  async function showTask(){  
    try {
      const httpAxios = axios.create({baseURL:process.env.BASE_URL})
      const result =await httpAxios.get(`/api/users/${user._id}/work`)
      const data = await result.data
          return data
    } catch (error) {
        console.log(error)
    }
}

useEffect(()=>{
  async function loadData(){
    try {
      const data = await showTask()
      setData([...data])

    } catch (error) {
      console.log(error)
    }

  }
  loadData()
},[user])
  
console.log('data  ',data)
  
  return (
    <>
    <div className="container grid grid-cols-12">
      <div className="col-span-6 col-start-4 p-4">
        {
          data.map((item,id)=>{
            const {title,content,status } = item
            return <div className="" key={id} >
              {content}
              </div>
            
          })
        }

      </div>


    </div>
      
    </>
  )
}

export default page
