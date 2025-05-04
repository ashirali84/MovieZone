import React, { useState } from 'react';
import { movies } from './MovieZone/data.jsx';


const App = () => {
  const [movie, setMovie] = useState(movies);
  const FilterMovie = (cat) => {
    setMovie(movies.filter((data) => data.category == cat))
  }

  return (
    <>
      <div className='mt-10 w-full flex justify-center items-center text-center gap-8 rounded-2xl'>
        <button onClick={() => setMovie(movies)} className='w-15 font-bold text-xl text-blue-600 rounded-xl border-blue-300 border-2'>All </button>

        <button onClick={() => FilterMovie("Action")} className='w-20 font-bold text-xl text-blue-600 rounded-xl border-blue-300 border-2'>Action </button>

        <button onClick={() => FilterMovie("Thriller")} className='w-22 font-bold text-xl text-shadow-white rounded-xl border-white bg-black text-gray-50 border-2'>Thriller </button>

        <button onClick={() => FilterMovie("Animation")} className='w-28 font-bold text-xl text-blue-600 rounded-xl border-green-300 border-2'> Animation</button>

        <button onClick={() => FilterMovie("Horror")} className='w-22 font-bold text-xl text-sky-300 rounded-xl border-sky-400 border-2'> Horror</button>

        <button onClick={() => FilterMovie("Sci-Fi")} className='w-18 font-bold text-xl text-white rounded-xl border-green-300 border-2'>Sci-Fi </button>

      </div>
      <div className='bg-black min-h-screen flex justify-center items-center'>

        <div className='max-w-6xl w-240 flex flex-wrap justify-center gap-8 py-10'>

          {movie.map((data) => (
            <div
              key={data.id}

              className='w-44 h-80   rounded-2xl flex flex-col items-center text-center p-2 text-white'
            >
              <img
                className='w-55 h-65 object-cover border-green-400 rounded-xl border-2 hover:border-yellow-300 hover:scale-105 transition-all duration-300'

                src={data.poster_path}

                alt={data.title}
              />
              <h3 className='mt-2 text-sm font-semibold line-clamp-2 h-10'>{data.title}</h3>

              <h3 className='text-xs text-gray-400'>{data.release_date}</h3>
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;

