import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <div className='header'>

<div className='header-links'>
<div className="left">
<Link to='/'> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="logo" className='header-icon-img' /></Link>

</div>
<div className="right">

<Link to='/movies/popular'><span>Popular</span></Link>
<Link to='/movies/top_rated'><span>Top Rated</span></Link>
<Link to='/movies/upcoming'><span>Upcoming</span></Link>
</div>

</div>

    </div>
  )
}

export default Header