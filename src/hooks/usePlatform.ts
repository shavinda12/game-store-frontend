import { useQuery } from "@tanstack/react-query"
import { FetchingData } from "../services/api-client"
import apiClient from "../services/api-client"


export interface Platforms{
    id:number,
    name:string,
    slug:string
}

const usePlatform=()=>useQuery({
    queryKey:['platform'],
    queryFn:(()=>
        apiClient
        .get<FetchingData<Platforms>>('/platforms/lists/parents')
        .then(res=>res.data)
    ),
    staleTime:24*60*60*1000,
    
})

export default usePlatform
