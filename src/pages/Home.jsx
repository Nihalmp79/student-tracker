import React from 'react'
import { useEffect, useState }  from 'react'


const Home = () => {
    const [quote, setQuote] = useState("");

    useEffect(() => {
        const fetchQuote = async () => {
            try{
                const response = await fetch("https://dummyjson.com/quotes/random");
                const data = await response.json();
                setQuote(data.quote);
            } catch {
                setQuote("Education is the most powerful weapon which you can use to change the world. - Nelson Mandela");
            }
        }
        fetchQuote();
    },[]);
  return (
    <div className='min-h-screen bg-gray-50'>
        <div className='max-w-4xl mx-auto px-6 py-12'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>
                Welcome to student tracker
            </h1>
            <p className='text-gray-500 text-lg mb-8'>
                Track your students progress in one place
            </p>
             {quote && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-blue-800 italic text-lg">"{quote}"</p>
          </div>
        )}
        </div>
    </div>
  )
}

export default Home
