import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import './App.css'
import authService from "./appwrite/auth"
import { login, logout } from './Store/authSlice'
import { Header, Footer } from './components'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .catch((error) => {
      console.error("Authentication error:", error);
      dispatch(logout())
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-col bg-white'>
      <Header />
      <main className='flex-1 bg-white'>
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : (
    <div className='min-h-screen flex items-center justify-center bg-white'>
      <div className='text-center'>
        <div className='animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4'></div>
        <p className='text-lg font-semibold text-gray-700'>Loading...</p>
      </div>
    </div>
  )
}

export default App