import React, { useEffect, useState } from 'react'

const UseLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        try{
            return JSON.parse(localStorage.getItem(key)) || initialValue
        } catch {
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value,setValue]
}

export default UseLocalStorage
