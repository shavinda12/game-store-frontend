import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client"

const apiClient=new APIClient<Platforms>('/platforms/lists/parents')

export interface Platforms{
    id:number,
    name:string,
    slug:string
}

const usePlatform=()=>useQuery({
    queryKey:['platform'],
    queryFn:apiClient.getAll,
    staleTime:24*60*60*1000,
    
})

export default usePlatform
