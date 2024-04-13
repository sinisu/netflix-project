import { useQuery } from '@tanstack/react-query'
import api from '../utils/api'

const fetchFilterMovies = ({genre,sort,page}) => {
    console.log(`discover/movie?with_genres=${genre.genre}&sort_by=${genre.sort}&page=${page}`)
    return genre
    ?api.get(`discover/movie?with_genres=${genre.genre}&sort_by=${genre.sort}&page=${page}`)
    :api.get(`movie/popular`)
}

export const useFilterMoviesQuery = ({genre,sort,page}) => {   
    return useQuery({
        queryKey:['movie-filter',{genre,sort,page}],
        queryFn: () => fetchFilterMovies({genre,sort,page}),
        select:(result)=>result.data
    })
}