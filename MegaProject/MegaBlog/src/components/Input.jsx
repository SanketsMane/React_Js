import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId()
    
    return (
        <div className='w-full'>
            {label && (
                <label 
                    className='inline-block mb-2 text-sm font-medium text-gray-700' 
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                className={`input-field ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input