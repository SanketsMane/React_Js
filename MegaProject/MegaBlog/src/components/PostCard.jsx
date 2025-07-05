import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight } from 'lucide-react'

function PostCard({ $id, title, featuredimage, content, userId, $createdAt }) {
    return (
        <div className="card group">
            <Link to={`/post/${$id}`} className="block">
                <div className="relative overflow-hidden rounded-t-xl">
                    {featuredimage ? (
                        <img 
                            src={appwriteService.getFilePreview(featuredimage)} 
                            alt={title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    ) : (
                        <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                                    <span className="text-2xl font-bold text-blue-600">
                                        {title.charAt(0).toUpperCase()}
                                    </span>
                                </div>
                                <p className="text-blue-600 font-medium">No Image</p>
                            </div>
                        </div>
                    )}
                </div>
                
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                        {title}
                    </h3>
                    
                    {content && (
                        <p className="text-gray-600 mb-4 line-clamp-3">
                            {content.replace(/<[^>]*>/g, '').substring(0, 120)}...
                        </p>
                    )}
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                                <User className="h-4 w-4" />
                                <span>Author</span>
                            </div>
                            {$createdAt && (
                                <div className="flex items-center space-x-1">
                                    <Calendar className="h-4 w-4" />
                                    <span>{new Date($createdAt).toLocaleDateString()}</span>
                                </div>
                            )}
                        </div>
                        
                        <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default PostCard