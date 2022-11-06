import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './pages/home/home';
import Movie from './pages/moviesDetails/movie';
import MoviesList from './pages/moviesList/moviesList';

function App() {
  return (
    <div className="App">

<Router>
<Header/>
  <Routes>
    <Route index element = {<Home/>}/>
    <Route path='movie/:id' element ={<Movie/>} />
    <Route path='movies/:type' element ={<MoviesList/>} />
    <Route path='*' element ={<h1>Error Page</h1>} />


  </Routes>
  <Footer/>
</Router>

    </div>
  );
}

export default App;
