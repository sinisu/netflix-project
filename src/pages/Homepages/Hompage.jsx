import React from 'react'
import Banner from './component/Banner/Banner'
import PopularMovieSlide from './component/PopularMovieSlide/PopularMovieSlide'
import TopRatedMovieSlide from './component/TopRatedMovieSlide/TopRatedMovieSlide'
import UpcominMovieSlider from './component/UpcomingMovieSlider/UpcomingMovieSlider'

const Hompage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
      <TopRatedMovieSlide />
      <UpcominMovieSlider />
    </div>
  )
}

export default Hompage
