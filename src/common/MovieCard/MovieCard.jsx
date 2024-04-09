import React from 'react'
import { Badge } from 'react-bootstrap'
import './MovieCard.style.css'
import { useMovieGenreQuery } from '../../hooks/useMovieGenre'
import { getGenre } from '../../hooks/getGenre'

const MovieCard = ({movie}) => {

  const {data:genreData} = useMovieGenreQuery();
  const genreNameList = getGenre(genreData,movie.genre_ids)

  return (
    <div
        style={{backgroundImage:"url("+`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`+")"}}
        className='movie-card'
    >
     <div className='overlay'>
        <h3>{movie.title}</h3>
        {genreNameList.map((id)=><Badge bg="danger" className='me-1'>{id}</Badge>)}
        <div>
            <div>{movie.vote_average}</div>
            <div>{movie.popularity}</div>
            <div>{movie.adult?'over18':''}</div>
        </div>
     </div>
    </div>
  )
}

export default MovieCard
