import { useQuery } from '@tanstack/react-query'
import api from '../utils/api'

const fetchFilterMovies = ({genre}) => {
    console.log(genre)
    return genre?api.get(`discover/movie?with_genres=${genre}`):api.get(`movie/popular`)
}

export const useFilterMoviesQuery = ({genre}) => {   
    return useQuery({
        queryKey:['movie-filter',genre],
        queryFn: () => fetchFilterMovies({genre}),
        select:(result)=>result.data
    })
}