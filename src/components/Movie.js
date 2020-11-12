import React from 'react'

const Movie = ({ movieData }) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";

    return (
        <div className="Movie-Data" id="home">
            <img src={IMGPATH + movieData.poster_path} alt={movieData.title} />
            <div className="Movie-info">
                <h3>{movieData.title}</h3>
                <span>{movieData.vote_average}</span>
            </div>
            <div className="Movie-Overview">
                <h3>Overview:</h3>
                <p>
                    {movieData.overview}
                </p>
            </div>
        </div>
    )
}

export default Movie;
