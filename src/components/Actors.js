import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <>
          <h1>Actors Page</h1>
  {actors.map((ele) => (
      <div>
          <p>Name: {ele.name}</p>
          <ul>
              {ele.movies.map((e) => (
                  <li >{e}</li>
              ))}
          </ul>
      </div>
  ))}
 </>
  );
};

export default Actors;
