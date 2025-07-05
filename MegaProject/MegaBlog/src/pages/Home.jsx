import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PenTool, BookOpen, Users, TrendingUp } from 'lucide-react'

function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts && posts.documents) {
                setPosts(posts.documents)
            }
        }).catch((error) => {
            console.log("Error fetching posts:", error)
            setPosts([])
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-lg font-semibold text-gray-700">Loading posts...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-white py-20 lg:py-32">
                <Container>
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeIn">
                            Welcome to{' '}
                            <span className="text-blue-600">MegaBlog</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fadeIn">
                            Discover amazing stories, share your thoughts, and connect with writers from around the world.
                        </p>
                        
                        {!authStatus && (
                            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
                                <Link
                                    to="/signup"
                                    className="btn-primary inline-flex items-center justify-center space-x-2"
                                >
                                    <PenTool className="h-5 w-5" />
                                    <span>Start Writing</span>
                                </Link>
                                <Link
                                    to="/login"
                                    className="btn-secondary inline-flex items-center justify-center space-x-2"
                                >
                                    <BookOpen className="h-5 w-5" />
                                    <span>Read Stories</span>
                                </Link>
                            </div>
                        )}
                    </div>
                </Container>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-50">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                                <BookOpen className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">{posts.length}+</h3>
                            <p className="text-gray-600">Published Posts</p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                                <Users className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">1K+</h3>
                            <p className="text-gray-600">Active Writers</p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                                <TrendingUp className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">10K+</h3>
                            <p className="text-gray-600">Monthly Reads</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Posts Section */}
            <section className="py-16 bg-white">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Latest Stories
                        </h2>
                        <p className="text-xl text-gray-600">
                            Discover the most recent posts from our community
                        </p>
                    </div>

                    {posts.length === 0 ? (
                        <div className="text-center py-12">
                            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                                No posts yet
                            </h3>
                            <p className="text-gray-600 mb-8">
                                {authStatus ? 'Be the first to write a story!' : 'Login to read amazing stories from our writers.'}
                            </p>
                            {authStatus && (
                                <Link
                                    to="/add-post"
                                    className="btn-primary inline-flex items-center space-x-2"
                                >
                                    <PenTool className="h-5 w-5" />
                                    <span>Write First Post</span>
                                </Link>
                            )}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {posts.map((post) => (
                                <div key={post.$id} className="animate-fadeIn">
                                    <PostCard {...post} />
                                </div>
                            ))}
                        </div>
                    )}
                </Container>
            </section>
        </div>
    )
}

export default Home