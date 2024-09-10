import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";




const apiClient=new APIClient<Genres>('/genres')

export interface Genres{
    id:number,
    name:string,
    image_background:string,
}

const useGenres=()=>useQuery({
    queryKey:['genres'],
    queryFn:apiClient.getAll,
    staleTime:24*60*60*1000,
})

//in here we are just refferncing the function


export default useGenres;