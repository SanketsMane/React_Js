import React, { useState } from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Menu, X, PenTool, Home, LogIn, UserPlus, BookOpen, Plus } from 'lucide-react'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true,
      icon: Home
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
      icon: LogIn
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
      icon: UserPlus
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
      icon: BookOpen
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
      icon: Plus
    },
  ]

  return (
    <header className='navbar-glass sticky top-0 z-50'>
      <Container>
        <nav className='flex items-center justify-between py-4'>
          {/* Logo */}
          <Link to="/" className='flex items-center space-x-2'>
            <PenTool className='h-8 w-8 text-blue-600' />
            <span className='text-2xl font-bold text-gray-800'>MegaBlog</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-1'>
            {navItems.map((item) => 
              item.active ? (
                <Link
                  key={item.name}
                  to={item.slug}
                  className='flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200'
                >
                  <item.icon className='h-4 w-4' />
                  <span>{item.name}</span>
                </Link>
              ) : null
            )}
            
            {authStatus && (
              <div className='ml-4 pl-4 border-l border-gray-200'>
                <LogoutBtn />
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden py-4 border-t border-gray-100'>
            <div className='flex flex-col space-y-2'>
              {navItems.map((item) => 
                item.active ? (
                  <Link
                    key={item.name}
                    to={item.slug}
                    className='flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className='h-5 w-5' />
                    <span>{item.name}</span>
                  </Link>
                ) : null
              )}
              
              {authStatus && (
                <div className='pt-4 border-t border-gray-100'>
                  <LogoutBtn />
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Header