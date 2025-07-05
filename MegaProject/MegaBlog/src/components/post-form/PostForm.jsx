import React, { useCallback, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Button, Input, RTE, Select } from "../index"  // ✅ Fixed: Changed from "./index" to "../index"
import appwriteService from "../../appwrite/config"  // ✅ Fixed: Changed from "../appwrite/config" to "../../appwrite/config"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { Upload, X, Image as ImageIcon } from 'lucide-react'

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues, formState: { errors } } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    })

    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)
    const [loading, setLoading] = useState(false)
    const [imagePreview, setImagePreview] = useState(null)

    const submit = async (data) => {
        setLoading(true)
        try {
            if (post) {
                // Update existing post
                const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null

                if (file) {
                    await appwriteService.deleteFile(post.featuredimage)
                }

                const dbPost = await appwriteService.updatePost(post.$id, {
                    ...data,
                    featuredImage: file ? file.$id : undefined,
                })

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                }
            } else {
                // Create new post
                const file = await appwriteService.uploadFile(data.image[0])

                if (file) {
                    const fileId = file.$id
                    data.featuredImage = fileId
                    const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id })

                    if (dbPost) {
                        navigate(`/post/${dbPost.$id}`)
                    }
                }
            }
        } catch (error) {
            console.error("Error submitting post:", error)
        } finally {
            setLoading(false)
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-")

        return ""
    }, [])

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true })
            }
        })

        return () => subscription.unsubscribe()
    }, [watch, slugTransform, setValue])

    useEffect(() => {
        if (post && post.featuredimage) {
            const imageUrl = appwriteService.getFilePreview(post.featuredimage)
            setImagePreview(imageUrl)
        }
    }, [post])

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                    <Input
                        label="Title"
                        placeholder="Enter post title"
                        {...register("title", { required: "Title is required" })}
                        onInput={(e) => {
                            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true })
                        }}
                    />
                    {errors.title && <p className="text-red-600 text-sm">{errors.title.message}</p>}

                    <Input
                        label="Slug"
                        placeholder="Post slug"
                        {...register("slug", { required: "Slug is required" })}
                    />
                    {errors.slug && <p className="text-red-600 text-sm">{errors.slug.message}</p>}

                    <Select
                        options={["active", "inactive"]}
                        label="Status"
                        {...register("status", { required: true })}
                    />
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Featured Image
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400 transition-colors">
                            <div className="space-y-1 text-center">
                                {imagePreview ? (
                                    <div className="relative">
                                        <img
                                            src={imagePreview}
                                            alt="Preview"
                                            className="mx-auto h-32 w-32 object-cover rounded-lg"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setImagePreview(null)}
                                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                                        >
                                            <X className="h-4 w-4" />
                                        </button>
                                    </div>
                                ) : (
                                    <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                                )}
                                <div className="flex text-sm text-gray-600">
                                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                                        <span>Upload a file</span>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="sr-only"
                                            {...register("image", { required: !post })}
                                            onChange={handleImageChange}
                                        />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                        {errors.image && <p className="text-red-600 text-sm mt-1">{errors.image.message}</p>}
                    </div>
                </div>
            </div>

            {/* Content Editor */}
            <div>
                <RTE label="Content" name="content" control={control} defaultValue={getValues("content")} />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
                <Button
                    type="submit"
                    disabled={loading}
                    className="flex items-center space-x-2"
                >
                    {loading ? (
                        <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            <span>{post ? "Updating..." : "Creating..."}</span>
                        </>
                    ) : (
                        <>
                            <Upload className="h-5 w-5" />
                            <span>{post ? "Update Post" : "Create Post"}</span>
                        </>
                    )}
                </Button>
            </div>
        </form>
    )
}