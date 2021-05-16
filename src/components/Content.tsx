
import { movieContext } from '../contexts/MoviesContext';
import { MovieCard } from './MovieCard';

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}


export function Content() {
  // Complete aqui
const { movies, selectedGenre} = movieContext();
  return (
<>
    <h1>teste</h1>
    <div className="container">
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>

    <main>
      <div className="movies-list">
        { movies ? 

        movies.map(movie => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))
      
      : []}
      </div>
    </main>
  </div>
  </>
  )
}