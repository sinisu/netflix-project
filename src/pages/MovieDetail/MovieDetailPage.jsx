import React from 'react'
import MovieInfo from './component/MovieInfo/MovieInfo'
import MovieReview from './component/MovieReview/MovieReview'
import MovieRecommend from './component/MovieRecommend/MovieRecommend'
import './MovieDetailPage.style.css'


const MovieDetailPage = () => {
  return (
    <div>
      <MovieInfo />
      <MovieReview />
      <MovieRecommend />
    </div>
  )
}

export default MovieDetailPage


