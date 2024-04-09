import React, { useEffect, useState } from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import Alert from 'react-bootstrap/Alert';
import './Banner.style.css'


const Banner = () => {

    const {data,isLoading,isError,error} = usePopularMoviesQuery();
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError){
        return <Alert variant='danger'>{error.message}</Alert>
    }

  return (
    <div style={{
        backgroundImage:'url('+`https://image.tmdb.org/t/p/original${data?.results[0].poster_path}`+')'
        }}
        className='banner mb-5'
    >
        <div className='text-white banner-text'>
            <h1>{data?.results[0].title}</h1>
            <p>{data?.results[0].overview}</p>
        </div>
    </div>
  )
}

export default Banner
