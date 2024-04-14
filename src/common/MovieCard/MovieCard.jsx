import React from 'react'
import { Badge } from 'react-bootstrap'
import './MovieCard.style.css'
import { useMovieGenreQuery } from '../../hooks/useMovieGenre'
import { getGenre } from '../../hooks/getGenre'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'

const MovieCard = ({movie}) => {
  const navigate = useNavigate();
  const {data:genreData} = useMovieGenreQuery();
  const genreNameList = getGenre(genreData,movie.genre_ids)
  const getMovieId = (id) => {
    navigate(`/movies/${id}`)
  }
  return (
    <div
        style={{backgroundImage:"url("+`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`+")"}}
        className='movie-card'
        onClick={()=>(getMovieId(movie.id))}
    >
     <div className='overlay'>
        <h3>{movie.title}</h3>
        {genreNameList.map((id)=><Badge bg="danger" className='me-1'>{id}</Badge>)}
        <p className='mt-3'>
            <span><FontAwesomeIcon icon={faStar} className='text-warning'/> {Math.round(movie.vote_average*100)/100}</span><br/>
            <span><FontAwesomeIcon icon={faHeart} className='text-danger'/> {Math.round(movie.popularity)}</span><br/>
            <span>{movie.adult?'over18':''}</span>
            <span><FontAwesomeIcon icon={faCheck} className='text-info'/> {movie.release_date}</span>
        </p>
     </div>
    </div>
  )
}

export default MovieCard
