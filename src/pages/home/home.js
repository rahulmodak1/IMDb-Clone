import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './home.css'
import MoviesList from '../moviesList/moviesList';

function Home() {
    const [PopularMovies, setPopularMovies] = useState([]);
    const popularMoviesCall = async () => {
        const getData = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')

        setPopularMovies(getData.data.results)
    }
    useEffect(() => {
        popularMoviesCall()
    }, [])
    return (
        <div className='posters'>

            <Carousel 
            autoPlay={true}
            infiniteLoop = {true}
            showThumbs ={false} 
            transitionTime = {3} 
            showStatus = {true}
            >

                {PopularMovies.map((movie , i) => {
                    return <Link to={`/movie/${movie.id}`} key={i}>
                        <div className='poster-img'> <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.original_title} /> </div>
                        <div className="overlay">
                            <div className="poster-title">{movie.original_title}</div>
                            <div className="poster-runDetails">
                                <div className="release-date">
                                    {movie.release_date}
                                    <span className='poster-rating'>
                                        {movie.vote_average}
                                        <i className="fa-solid fa-star"></i>
                                    </span>
                                </div>

                            </div>
                            <div className="poster-description">{movie.overview}</div>
                        </div>

                    </Link>
                })}
            </Carousel>
<MoviesList/>
        </div>
    )
}

export default Home