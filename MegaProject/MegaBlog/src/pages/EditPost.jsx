import React, { useEffect, useState } from 'react'
import { Container, PostForm } from '../components'
import appwriteService from "../appwrite/config"
import { useNavigate, useParams } from 'react-router-dom'
import { Edit } from 'lucide-react'

function EditPost() {
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                }
            }).finally(() => {
                setLoading(false)
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-lg font-semibold text-gray-700">Loading post...</p>
                </div>
            </div>
        )
    }
    
    return post ? (
        <div className='min-h-screen bg-gray-50 py-8'>
            <Container>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                            <Edit className="h-8 w-8 text-green-600" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Edit Post</h1>
                        <p className="text-gray-600">Update your story</p>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <PostForm post={post} />
                    </div>
                </div>
            </Container>
        </div>
    ) : null
}

export default EditPost