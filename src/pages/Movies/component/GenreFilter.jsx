import React, { useState } from 'react'
import Select from 'react-select';
import { useMovieGenreQuery } from '../../../hooks/useMovieGenre';
import { useFilterMoviesQuery } from '../../../hooks/useFilterMovies';

const GenreFilter = () => {
    const [genre,setGenre] = useState('');
    const genreList = useMovieGenreQuery().data;
    const genreName = genreList?.map((item)=>{
      let label = {};
      label['label'] = item['name'];
      return label
    })
    console.log(genreName)
    // const options = [
    //   { value: 'chocolate', label: 'Chocolate' },
    //   { value: 'strawberry', label: 'Strawberry' },
    //   { value: 'vanilla', label: 'Vanilla' },
    // ];
    const handleChange = (label) => {
      let genreLower = label.label.toLowerCase()
      setGenre(genreLower)
    }
    const {data,isLoading,isError,error} = useFilterMoviesQuery({genre})
    console.log(data)
    if (isLoading) {
      return <h1>Loading ...</h1>
    }
    if (isError) {
      return <h1>{error.message}</h1>
    }
  return (
    <Select
      onChange={handleChange}
      options={genreName}
    />
  )
}

export default GenreFilter
