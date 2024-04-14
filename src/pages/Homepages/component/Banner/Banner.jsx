import React, { useState } from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import Alert from 'react-bootstrap/Alert';
import './Banner.style.css'
import { getGenre } from '../../../../hooks/getGenre';
import { useMovieGenreQuery } from '../../../../hooks/useMovieGenre';
import { useNavigate } from 'react-router-dom';


const Banner = () => {
    const navigate = useNavigate();
    const {data:genreData} = useMovieGenreQuery();
    const {data,isLoading,isError,error} = usePopularMoviesQuery();
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError){
        return <Alert variant='danger'>{error.message}</Alert>
    }
    const genreNameList = getGenre(genreData,data.results[0].genre_ids)
  return (
    <div style={{
        backgroundImage:'url('+`https://image.tmdb.org/t/p/original${data?.results[0].poster_path}`+')'
        }}
        className='banner mb-5'
        
    >
        <div className='text-white banner-text' onClick={()=>navigate(`/movies/${data?.results[0].id}`)}>
            <h1>{data?.results[0].title}</h1>
            <p>{data?.results[0].overview}</p>
            <div className='media-none'>
              {genreNameList.map((id,index)=>{
                if ( genreNameList.indexOf(id) === 0 ) {
                    return <span className='poster-badge'>{id}</span>
                } else {
                    return <span className='poster-badge'> · {id}</span>
                }
              })}  
            </div>
        </div>
    </div>
  )
}

export default Banner
