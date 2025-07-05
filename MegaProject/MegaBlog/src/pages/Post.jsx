import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import appwriteService from "../appwrite/config"
import { Button, Container } from "../components"
import parse from "html-react-parser"
import { useSelector } from "react-redux"
import { Edit, Trash2, ArrowLeft, Calendar, User } from 'lucide-react'

export default function Post() {
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const [deleting, setDeleting] = useState(false)
    const { slug } = useParams()
    const navigate = useNavigate()

    const userData = useSelector((state) => state.auth.userData)

    const isAuthor = post && userData ? post.userId === userData.$id : false

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post)
                else navigate("/")
            }).finally(() => {
                setLoading(false)
            })
        } else navigate("/")
    }, [slug, navigate])

    const deletePost = () => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            setDeleting(true)
            appwriteService.deletePost(post.$id).then((status) => {
                if (status) {
                    if (post.featuredimage) {
                        appwriteService.deleteFile(post.featuredimage)
                    }
                    navigate("/")
                }
            }).finally(() => {
                setDeleting(false)
            })
        }
    }

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
        <div className="min-h-screen bg-gray-50 py-8">
            <Container>
                {/* Back Button */}
                <div className="mb-6">
                    <Button
                        onClick={() => navigate(-1)}
                        className="flex items-center space-x-2 bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span>Back</span>
                    </Button>
                </div>

                <article className="max-w-4xl mx-auto">
                    {/* Featured Image */}
                    {post.featuredimage && (
                        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                            <img
                                src={appwriteService.getFilePreview(post.featuredimage)}
                                alt={post.title}
                                className="w-full h-64 md:h-96 object-cover"
                            />
                        </div>
                    )}

                    {/* Post Header */}
                    <div className="bg-white rounded-xl p-8 mb-8 shadow-lg">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                            <div className="flex-1">
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    {post.title}
                                </h1>
                                
                                {/* Post Meta */}
                                <div className="flex items-center space-x-6 text-gray-600">
                                    <div className="flex items-center space-x-2">
                                        <User className="h-4 w-4" />
                                        <span>By Author</span>
                                    </div>
                                    {post.$createdAt && (
                                        <div className="flex items-center space-x-2">
                                            <Calendar className="h-4 w-4" />
                                            <span>{new Date(post.$createdAt).toLocaleDateString()}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            {isAuthor && (
                                <div className="flex space-x-3 mt-4 md:mt-0">
                                    <Link to={`/edit-post/${post.$id}`}>
                                        <Button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700">
                                            <Edit className="h-4 w-4" />
                                            <span>Edit</span>
                                        </Button>
                                    </Link>
                                    <Button
                                        onClick={deletePost}
                                        disabled={deleting}
                                        className="flex items-center space-x-2 bg-red-600 hover:bg-red-700"
                                    >
                                        {deleting ? (
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                        ) : (
                                            <Trash2 className="h-4 w-4" />
                                        )}
                                        <span>{deleting ? 'Deleting...' : 'Delete'}</span>
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Post Content */}
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                        <div className="prose max-w-none">
                            {parse(post.content)}
                        </div>
                    </div>
                </article>
            </Container>
        </div>
    ) : null
}