import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { Games } from './useGames';



const apiClient=new APIClient<Games>('/games');

const useGameDetails = (slug?:string) => {  
    return useQuery({
    queryKey:['singleGameDetails',slug],
    queryFn:()=>{
        return apiClient.getGameDetails(slug!)}//in here slice can be null.to avoid that we use !.we can use getGameDetails(id|"") also
})}

export default useGameDetails