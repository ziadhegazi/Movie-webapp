import React, { useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
// import movieCard from './components/movieCard';
import axios from "axios";
import MovieList from './components/movieList';
import Header from './components/Header';
import Detail from './components/Detail';

const App = () => {
  // Hooks
  const [movies, setMovies] = useState([]);
  const [id, setID] = useState("");
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")

  // API Fetching
  const fetchMovies = async () => {
    const  response = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=c30198ca9a0b79184b36140b958d82e3&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_watch_monetization_types=flatrate");
    console.log(response.data.results);
    
    // updating the movies array
    setMovies(response.data.results);
  }

  useEffect(() => fetchMovies(),[]);


  const moreDetail = (e) => {
    // console.log(e);
    setID(e.id)
    setName(e.title)
    setDesc(e.description)
  }
  

  return(
    <Router>
      <div>
        <Header />
        <switch>
          <Route path="/Movie-webapp" exact component={() => <MovieList list={movies} moredetail={moreDetail} />} />
          <Route path="/Movie-webapp/:id" component={() => <Detail id={id} name={name} description={desc} />} />
        </switch>
      </div>
    </Router>
  );
}
export default App;