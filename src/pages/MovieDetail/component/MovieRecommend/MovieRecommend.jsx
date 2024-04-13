import React from 'react'
import { useMovieRecommendQuery } from '../../../../hooks/useMovieRecommend'
import { useParams } from 'react-router-dom'
import MovieSlider from '../../../../common/MovieSlider/MovieSlider'
import { responsive } from '../../../../constants/responsive';
import './MovieRecommend.style.css'
import { Alert, Col } from 'react-bootstrap';

const MovieRecommend = () => {
    let {id} = useParams();
    let recommendMovies = [];
    const {data, isLoading, isError, error} = useMovieRecommendQuery(id);
    if (data) {
        recommendMovies = data.results;
    }
    if (isLoading) {
      return <h1>Loading...</h1>
    }
    if (isError) {
      return <Alert>{error.message}</Alert>
    }
  return (
    <div className='recommend-area'>
        <Col lg={10} className='recommend-center'>
           <MovieSlider
          title={'RECOMMENDATION MOVIES'}
          movies={recommendMovies}
          responsive={responsive}
          infinite={false}/> 
        </Col>
      
    </div>
  )
}

export default MovieRecommend
