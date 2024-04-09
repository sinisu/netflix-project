import React from 'react'
import './MovieSlider.style.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieSlider = ({title,movies, responsive}) => {
  return (
    <div className='mt-4'>
      <h3 className='slide-margin'>{title}</h3>
        <Carousel
            infinite={true}
            centerMode={true}
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={1500}
            removeArrowOnDeviceType={["tablet","mobile"]}
            autoPlay={responsive !== "mobile" ? true : false}
            // deviceType={this.props.deviceType}
            >
            {movies.map((movie,index)=><MovieCard movie={movie} key={index} />)}
        </Carousel>
    </div>
  )
}

export default MovieSlider
