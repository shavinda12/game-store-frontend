import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client"
import { Platforms } from "../entities/Platforms"

const apiClient=new APIClient<Platforms>('/platforms/lists/parents')

const usePlatform=()=>useQuery({
    queryKey:['platform'],
    queryFn:apiClient.getAll,
    staleTime:24*60*60*1000,
    
})

export default usePlatform
