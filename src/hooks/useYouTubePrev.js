import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"


const fetchYouTubePrev = (id) => {
    return api.get(`movie/${id}/videos`)
}

export const useYouTubePrevQuery = (id) => {
    return useQuery({
        queryKey:['youtube-prev'],
        queryFn: ()=>fetchYouTubePrev(id),
        select:(result)=>result.data
    })
}