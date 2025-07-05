import React from 'react'
import { Link } from 'react-router-dom'
import { PenTool, Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <PenTool className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">MegaBlog</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A modern blogging platform where writers share their stories and readers discover amazing content. 
              Join our community of passionate writers and readers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/all-posts" className="text-gray-400 hover:text-white transition-colors duration-200">
                  All Posts
                </Link>
              </li>
              <li>
                <Link to="/add-post" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Write Post
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 MegaBlog. All rights reserved by{' '}
            <span className="text-white font-semibold">Sanket Patil</span>
          </p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm mt-2 md:mt-0">
            <span>Developed By</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>Sanket Patil</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer