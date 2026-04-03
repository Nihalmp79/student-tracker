import React from 'react'
import useFetch from '../hooks/useFetch'


const Home = () => {
   const {data, loading, error} = useFetch("https://dummyjson.com/quotes/random")
  return (
    <div className='min-h-screen bg-gray-50'>
        <div className='max-w-4xl mx-auto px-6 py-12'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>
                Welcome to student tracker
            </h1>
            <p className='text-gray-500 text-lg mb-8'>
                Track your students progress in one place
            </p>
            {loading && <p className='text-gray-400'>Loading...</p>}
            {error && <p className='text-red-500'>{error}</p>}
             {data && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-blue-800 italic text-lg">"{data.quote}"</p>
          </div>
        )}
        </div>
    </div>
  )
}

export default Home
