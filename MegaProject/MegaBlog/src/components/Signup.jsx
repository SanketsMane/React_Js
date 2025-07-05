import React, { useState } from 'react'
import authService from "../appwrite/auth"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../Store/authSlice"
import { Button, Input } from "./index"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import { UserPlus, Eye, EyeOff, Mail, Lock, User } from 'lucide-react'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const create = async (data) => {
        setError("")
        setLoading(true)
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <UserPlus className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Create your account</h2>
                    <p className="mt-2 text-gray-600">Join our community of writers and readers</p>
                </div>

                <div className="card">
                    <div className="p-8">
                        {error && (
                            <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit(create)} className="space-y-6">
                            <div className="relative">
                                <Input
                                    label="Full Name"
                                    placeholder="Enter your full name"
                                    className="pl-12"
                                    {...register("name", {
                                        required: "Full name is required",
                                    })}
                                />
                                <User className="absolute left-4 top-9 h-5 w-5 text-gray-400" />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                                )}
                            </div>

                            <div className="relative">
                                <Input
                                    label="Email Address"
                                    placeholder="Enter your email"
                                    type="email"
                                    className="pl-12"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                            message: "Email address must be valid"
                                        }
                                    })}
                                />
                                <Mail className="absolute left-4 top-9 h-5 w-5 text-gray-400" />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                )}
                            </div>

                            <div className="relative">
                                <Input
                                    label="Password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className="pl-12 pr-12"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 8,
                                            message: "Password must be at least 8 characters"
                                        }
                                    })}
                                />
                                <Lock className="absolute left-4 top-9 h-5 w-5 text-gray-400" />
                                <button
                                    type="button"
                                    className="absolute right-4 top-9 text-gray-400 hover:text-gray-600"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                                {errors.password && (
                                    <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                                )}
                            </div>

                            <Button
                                type="submit"
                                className="w-full flex items-center justify-center space-x-2"
                                disabled={loading}
                            >
                                {loading ? (
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                ) : (
                                    <>
                                        <UserPlus className="h-5 w-5" />
                                        <span>Create Account</span>
                                    </>
                                )}
                            </Button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-gray-600">
                                Already have an account?{' '}
                                <Link
                                    to="/login"
                                    className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200"
                                >
                                    Sign in here
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup