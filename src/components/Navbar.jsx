import React from 'react'

const Navbar = () => {
    return (
        <div className='mt-10 w-full flex justify-center items-center text-center gap-8 rounded-2xl'>
            <button className='w-15 font-bold text-xl text-blue-600 rounded-xl border-blue-300 border-2'>All </button>
            <button className='w-20 font-bold text-xl text-blue-600 rounded-xl border-blue-300 border-2'>Action </button>
            <button className='w-22 font-bold text-xl text-shadow-white rounded-xl border-white bg-black text-gray-50 border-2'>Thriller </button>
            <button className='w-28 font-bold text-xl text-blue-600 rounded-xl border-green-300 border-2'> Animation</button>
            <button className='w-22 font-bold text-xl text-sky-300 rounded-xl border-sky-400 border-2'> Horror</button>
            <button className='w-18 font-bold text-xl text-white rounded-xl border-green-300 border-2'>Sci-Fi </button>
        </div>
    )
}

export default Navbar
