import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
      {movies.map((ele) => (
          <div >
              <p>Name: {ele.title}</p>
              <p>Time: {ele.time}</p>
              <ul>
                  {ele.genres.map((e) => (
                      <li >{e}</li>
                  ))}
              </ul>
          </div>
      ))}
    </div>
  );
};

export default Movies;
