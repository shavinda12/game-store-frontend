import { useQuery } from "@tanstack/react-query"
import { FetchingData } from "./useData"
import { Platforms } from "./useGames"
import apiClient from "../services/api-client"


const usePlatform=()=>useQuery({
    queryKey:['platform'],
    queryFn:(()=>
        apiClient
        .get<FetchingData<Platforms>>('/platforms/lists/parents')
        .then(res=>res.data)
    ),
    staleTime:24*60*60*1000
})

export default usePlatform
