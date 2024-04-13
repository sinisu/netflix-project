import { useQuery } from '@tanstack/react-query'
import api from '../utils/api'

const fetchMovieDetail = (id) => {
    return id
    ?api.get(`/movie/${id}`)
    :api.get(`/movie/popular`)
}

export const useMovieDetail = (id) => {
    return useQuery({
        queryKey:['movie-detail',id],
        queryFn: ()=>fetchMovieDetail(id),
        select:(result)=>result.data
    })
}
