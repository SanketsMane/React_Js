import React from 'react'
import { Container, PostForm } from '../components'
import { PenTool } from 'lucide-react'

function AddPost() {
  return (
    <div className='min-h-screen bg-gray-50 py-8'>
        <Container>
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                        <PenTool className="h-8 w-8 text-blue-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Write a New Post</h1>
                    <p className="text-gray-600">Share your thoughts with the world</p>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <PostForm />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default AddPost