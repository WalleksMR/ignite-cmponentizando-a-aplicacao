import { useEffect, useState } from 'react';
import { Button } from './Button';
import { api } from '../services/api';

import { movieContext } from '../contexts/MoviesContext';

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

export function SideBar() {  
  const {moviesList, getGenreId} = movieContext();
  
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  
  
useEffect(() => {
  api.get<GenreResponseProps[]>('genres').then(response => {
    setGenres(response.data);
  });
}, []);

useEffect(() => {
  api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
    moviesList(response.data);
  });
  api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
    getGenreId(response.data);
  })
}, [selectedGenreId]);

function handleClickButton(id: number) {
  setSelectedGenreId(id);
}
  // Complete aqui
  return (

    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}