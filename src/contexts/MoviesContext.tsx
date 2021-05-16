import {createContext, ReactNode, useContext, useState, useEffect} from 'react';

export const MoviesContext = createContext({} as MoviesContextData)

export function movieContext() {
  return useContext(MoviesContext)
}

type MoviesContextProviderProps = {
  children: ReactNode
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

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

type MoviesContextData = {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
  moviesList: (movie: MovieProps[]) => void;
  getGenreId: (genre: GenreResponseProps) => void;
}


export function MoviesContextProvider({children}: MoviesContextProviderProps) {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  const [movies, setMovies] = useState<MovieProps[]>([]);

  function moviesList(movie: MovieProps[]) {
    setMovies(movie)
  }

  function getGenreId(genre: GenreResponseProps){
    setSelectedGenre(genre)
  }

  return (
    <MoviesContext.Provider value={{
      movies,
      selectedGenre,
      moviesList,
      getGenreId
    }}>
      {children}
    </MoviesContext.Provider>
  )
}