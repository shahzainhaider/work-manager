'use client'
import React, { useEffect, useState } from 'react'
import UserContext from './userContext'
import axios from 'axios'

const UserProvider = ({ children }) => {
  const [progress, setProgress] = useState(0)
  const [user, setUser] = useState(undefined)

  async function userData() {
    const httpAxios = axios.create({ baseURL: process.env.BASE_URL })
    setProgress(20)
    const response = await httpAxios.get('/api/current')
    setProgress(60)
    const data = await response.data
    setProgress(100)
    return data
  }

  useEffect(() => {
    async function loadData() {
      try {
        const data = await userData()
        setUser({ ...data })
        
      } catch (error) {
        setUser(undefined)
      }
    }
    loadData()
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser, progress }} >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
