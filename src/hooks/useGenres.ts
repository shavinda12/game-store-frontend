import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Genres } from "../entities/Genres";




const apiClient=new APIClient<Genres>('/genres')

const useGenres=()=>useQuery({
    queryKey:['genres'],
    queryFn:apiClient.getAll,
    staleTime:24*60*60*1000,
})

//in here we are just refferncing the function


export default useGenres;