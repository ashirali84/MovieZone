import React, { useState } from 'react';
import { movies } from './MovieZone/data.jsx';

const App = () => {
  const [movie, setMovie] = useState(movies);

  const FilterMovie = (cat) => {
    setMovie(movies.filter((data) => data.category === cat));
  };

  return (
    <>
      {/* Responsive Button Nav */}
      <div className='mt-10 w-full flex flex-wrap justify-center items-center gap-4 px-4'>
        <button
          onClick={() => setMovie(movies)}
          className='px-4 py-2 text-sm sm:text-base font-bold text-blue-600 rounded-xl border-blue-300 border-2 hover:bg-blue-50 transition'
        >
          All
        </button>

        <button
          onClick={() => FilterMovie("Action")}
          className='px-4 py-2 text-sm sm:text-base font-bold text-blue-600 rounded-xl border-blue-300 border-2 hover:bg-blue-50 transition'
        >
          Action
        </button>

        <button
          onClick={() => FilterMovie("Thriller")}
          className='px-4 py-2 text-sm sm:text-base font-bold text-white bg-black border-white border-2 rounded-xl hover:bg-gray-900 transition'
        >
          Thriller
        </button>

        <button
          onClick={() => FilterMovie("Animation")}
          className='px-4 py-2 text-sm sm:text-base font-bold text-blue-600 rounded-xl border-green-300 border-2 hover:bg-green-50 transition'
        >
          Animation
        </button>

        <button
          onClick={() => FilterMovie("Horror")}
          className='px-4 py-2 text-sm sm:text-base font-bold text-sky-300 rounded-xl border-sky-400 border-2 hover:bg-sky-900 transition'
        >
          Horror
        </button>

        <button
          onClick={() => FilterMovie("Sci-Fi")}
          className='px-4 py-2 text-sm sm:text-base font-bold text-white rounded-xl border-green-300 border-2 hover:bg-green-900 transition'
        >
          Sci-Fi
        </button>
      </div>

      {/* Movie Cards */}
      <div className='bg-black min-h-screen flex justify-center items-center px-4'>
        <div className='max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10'>
          {movie.map((data) => (
            <div
              key={data.id}
              className='rounded-2xl flex flex-col items-center text-center p-2 text-white'
            >
              <img
                className='w-full h-75 object-cover border-green-400 rounded-xl border-2 hover:border-yellow-300 hover:scale-105 transition-all duration-300'
                src={data.poster_path}
                alt={data.title}
              />
              <h3 className='mt-2 text-sm font-semibold line-clamp-2'>{data.title}</h3>
              <h3 className='text-xs text-gray-400'>{data.release_date}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
