import React,{ useEffect, useState} from 'react'
import Movie from './components/Movie';
import Search from './components/Search';

import './App.css';

const apiUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"



const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  
  const [movies, setMovies] = useState([]);
  // const [searchMovie, setSearchMovie] = useState('');


  useEffect(() =>{
      fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        console.log(data.results) 
        setMovies(data.results);
      })
  }, [])

  // const handleOnSubmit = (e) => {
  //   e.preventDefault();

  //   fetch(SEARCHAPI+searchMovie)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data.results)
  //       setMovies(data.results);
  //     })

  //     setSearchMovie('');
  // }

  // const handleOnChange = (e) => {
  //   setSearchMovie(e.target.value)

  // }
  return (
    <div className="Container">
      <Search getMovies={(a) => setMovies(a)}/>
      {/* <header>
          <form onSubmit={handleOnSubmit}>
            <input 
              type="text" 
              className="search" 
              placeholder="Search Movie.." 
              value={searchMovie} 
              onChange={handleOnChange} 
            />
          </form>
      </header> */}
      <div className="Movies-container">
        {
          movies.map((movie) => (
            <Movie key={movie.id} movieData={movie} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
