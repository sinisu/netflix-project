import React, { useEffect, useState } from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Alert } from 'bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import MovieCard from '../../common/MovieCard/MovieCard'
import ReactPaginate from 'react-paginate';
import GenreFilter from './component/GenreFilter'
import { getGenre } from '../../hooks/getGenre'
import { useMovieGenreQuery } from '../../hooks/useMovieGenre'
import { useFilterMoviesQuery } from '../../hooks/useFilterMovies'
import api from '../../utils/api'
import { useQuery } from '@tanstack/react-query'
import MovieSearch from './component/MovieSearch/MovieSearch'


const MoviePage = () => {
  const [query,setQuery] = useSearchParams();
  const keyword = query.get('q');
  const [genre,setGenre] = useState('');
  const [page, setPage] = useState(1);
  const genreData = useMovieGenreQuery().data;
  const navigate = useNavigate();

  const handlePageClick = ({selected}) => {
    setPage(selected+1)
  }
  const getFilterGenre = (event) => {
    let genreName = event.target.innerText.toLowerCase();
    setGenre(genreName)
  }

  const { data, isLoading, isError, error } = useFilterMoviesQuery(genre);
  console.log(data)
  if (isLoading) {
    return <h1>Loading ...</h1>
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  }
  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          {genreData.map((item)=>(<button onClick={(event)=>getFilterGenre(event)}>{item.name}</button>))}
        </Col>
        <MovieSearch />
      </Row>
    </Container>
  )
}

export default MoviePage
