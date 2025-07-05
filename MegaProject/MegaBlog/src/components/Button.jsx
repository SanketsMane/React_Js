import React from 'react'

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button 
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${bgColor} ${textColor} ${className}`} 
            {...props}
        >
            {children}
        </button>
    )
}