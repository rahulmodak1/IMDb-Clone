import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './movie.css'

function Movie() {
    const [movie, setMovie] = useState([])
    const { id } = useParams()

    const getMovie = async () => {
        const movie = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        setMovie(movie.data)

    }
    useEffect(() => {
        getMovie()
    }, [])

    return (
        <div className='movie'>
            <div className="movie-poster"><img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" /></div>
            <div className="movie-details">
                <div className="movie-details-left">
                    <div className="movie-poster-box">
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.original_title} className="poster-box-img" />
                    </div>
                    </div>
                    <div className="movie-details-right">
                        <div className="details-right-top">
                            <div className='movie-title'>{movie.original_title}</div>
                            <div className="movie-tagline">{movie.tagline}</div>
                                        
                            <div className="rating-vote">{movie.vote_average}<i className="fa-solid fa-star"></i>
                                <span className='vote-count'> ({movie.vote_count}) votes</span>
                            </div>
                            <div className="movie-runtime">{movie.runtime} mins</div>
                            <div className="movie-release-date">Release date : {movie.release_date}</div>
                            <div className="movie-genres">
                                {movie.genres ? movie.genres.map((genre) => {
                                    return <span className='movie-genre'>{genre.name}</span>
                                }) : ''}
                            </div>
                        </div>
                        <div className="details-right-bottom">
                            <div className="movie-synopsis">
                                <p>Synopsis</p>
                                <p>{movie.overview} </p>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="useFul-links">
            <div className="useful-text">Useful Links</div>
                <div className="home-page-link"><a href={movie.homepage ? movie.homepage : ''} target='_blank' rel="noreferrer"> Homepage <i className="fa-solid fa-up-right-from-square"></i></a></div>
                <div className="imdb-link"><a href={`https://www.imdb.com/title/${movie.imdb_id}`} target='_blank' rel="noreferrer"> IMDb <i className="fa-solid fa-up-right-from-square"></i></a></div>

            </div>
            <div className="production-company">
            <div className="production-text"> Production Companies</div>
            <div className="production-names">

         
                {
                    movie.production_companies ? movie.production_companies.map((company) => {
                       return <>
                            <img src={company.logo} alt="" />
                            <p>{company.name}</p>
                        </>
                    }) : ''
                } 
                  </div>
            </div>
        </div>
    )
}

export default Movie