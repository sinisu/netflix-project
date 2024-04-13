import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchMovieRecommend = (id) => {
    return api.get(`movie/${id}/recommendations`)
}

export const useMovieRecommendQuery = (id) => {
    console.log(id)
    return useQuery ({
        queryKey:['movie-recommend'],
        queryFn: ()=>fetchMovieRecommend(id),
        select:(result)=>result.data
    })
}