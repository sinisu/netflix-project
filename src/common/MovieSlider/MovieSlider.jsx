import React from 'react'
import './MovieSlider.style.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieSlider = ({title,movies, responsive}) => {
  console.log(title)
  const getDevice = () => {
    if (/Android|iPhone/i.test(navigator.userAgent)||title==='RECOMMENDATION MOVIES') {
      return false
    } else { return true}
  }
  return (
    <div className='slide-margin'>
      <h3 className='slide-title'>{title}</h3>
        <Carousel
            infinite={true}
            centerMode={true}
            itemClass="movie-slider"
            containerClass="carousel-container"
            responsive={responsive}
            autoPlay={getDevice()}
            autoPlaySpeed={1500}
            removeArrowOnDeviceType={["tablet","mobile"]}
            >
            {movies.map((movie,index)=><MovieCard movie={movie} key={index} />)}
        </Carousel>
    </div>
  )
}

export default MovieSlider
