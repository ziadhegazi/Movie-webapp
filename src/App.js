import React, { useState, useEffect} from 'react';
import './App.css';
// import movieCard from './components/movieCard';
import axios from "axios";
import MovieList from './components/movieList';

const App = () => {
  // Hooks
  const [movies, setMovies] = useState([]);

  // API Fetching
  const fetchMovies = async () => {
    const  response = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=c30198ca9a0b79184b36140b958d82e3&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_watch_monetization_types=flatrate");
    console.log(response.data.results);
    
    // updating the movies array
    setMovies(response.data.results);
  }

  useEffect(() => fetchMovies(),[]);
 
  return(
    <div>
      <MovieList list={movies} />
    </div>
  );
}
export default App;