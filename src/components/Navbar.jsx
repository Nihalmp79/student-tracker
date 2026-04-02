import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-white border-b border-gray-200 px-6 py-4' >
        <div className='max-w-4xl mx-auto flex item-center justify-between'>
            <h1 className='text-xl font-bold text-gray-900'>StudentTracker</h1>
            <div className='flex gap-6'>
                <Link to="/" className='text-gray-600 hover:text-blue-600 transition duration-200'>Home</Link>
                <Link to="/students" className='text-gray-600 hover:text-blue-600 transition duration-200'>Students</Link>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 transition duration-200">About</Link>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar
