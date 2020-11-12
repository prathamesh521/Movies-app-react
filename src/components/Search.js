import React,{ useState } from 'react'


const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const Search = ({ getMovies }) => {
    const [searchMovie, setSearchMovie] = useState('');

   
    const handleOnSubmit = (e) => {
        e.preventDefault();

        fetch(SEARCHAPI + searchMovie)
        .then(res => res.json())
        .then(data => {
        console.log(data.results);
        getMovies(data.results);
      })

      setSearchMovie('');
    }

    const handleOnChange = (e) => {
        setSearchMovie(e.target.value)
    }

    // const refreshPage = () =>{
    //     window.location.reload(true);
    // }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                {/* <button  className="label">Home</button> */}
                <label className="label">Movie<span>zzzzz</span></label>
                <input type="text" className="search" placeholder="Search Movie.." 
                value={searchMovie} onChange={handleOnChange} />
            </form>
        </div>
    )
}

export default Search
