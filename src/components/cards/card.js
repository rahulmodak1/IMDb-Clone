import React, { useState, useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom';
import './card.css'


function Card({ movie }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)

    }, [])
    return (
        <div>
            {
                isLoading
                    ?
                    <div className='cards'>
                        <SkeletonTheme baseColor='#404258' highlightColor='#EEEEEE'>
                            <Skeleton height={300} duration={2} />
                        </SkeletonTheme>
                    </div>
                    : <Link to={`/movie/${movie.id}`}>
                        <div className='cards'>
                            <img className='cards-img' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.original_title} />
                            <div className="cards-overlay">
                                <div className="cards-title">{movie.original_title}</div>
                                <div className="cards-runtime-details">
                                    {movie.release_date}
                                    <span className='cards-rating'>{movie.vote_average}
                                        <i className="fa-solid fa-star"></i></span>


                                </div>
                                <div className="cards-description">{movie.overview.slice(0, 118) + '...'}</div>
                            </div>

                        </div>

                    </Link>
            }
        </div>
    )
}

export default Card