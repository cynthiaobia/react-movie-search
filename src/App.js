import MovieDisplay from './components/MovieDisplay';
import Form from "./components/Form";
import { useState, useEffect } from 'react';

import './App.css';

function App() {

  const apiKey = 'dadfb70a';
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {

    try {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );

      const data = await res.json();

      setMovie(data);
      } catch(e) {
        console.error(e);
      }
  };

  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
      <h1>Movie Search</h1>
      <Form movieSearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
