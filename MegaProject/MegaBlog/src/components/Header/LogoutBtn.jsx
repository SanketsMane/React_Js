import React from 'react'
import { useDispatch } from 'react-redux'
import { LogOut } from 'lucide-react'
import authService from '../../appwrite/auth'
import { logout } from '../../Store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
    
    return (
        <button
            className='flex items-center space-x-2 px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200 font-medium'
            onClick={logoutHandler}
        >
            <LogOut className='h-4 w-4' />
            <span>Logout</span>
        </button>
    )
}

export default LogoutBtn