import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Card from '../../components/cards/card'
import './moviesList.css'

function MoviesList() {
    const [moviesList, setMoviesList] = useState([])
    const { type } = useParams()

    const getMovies = async () => {
        const movieList = await axios.get(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        setMoviesList(movieList.data.results)
    }
    // useEffect(() => {
    //     getMovies()
    //  } , [])
    useEffect(() => {
        getMovies()
    }, [type])

    return (
        <div className='movies-list'>
            <h1>{type ? type : 'popular'}</h1>
            <div className="movies-list-cards">

                {moviesList.map((movie, i) => {
                    return <Card movie={movie} key={i} />

                })}
            </div>
        </div>
    )
}

export default MoviesList