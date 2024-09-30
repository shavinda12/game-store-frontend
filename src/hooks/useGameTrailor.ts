import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Trailor } from "../entities/Trailor";




const useGameTrailor=(gameId:number)=>{
    const apiClient=new APIClient<Trailor>(`/games/${gameId}/movies`)
    return useQuery({
    queryKey:['gameTrailor',gameId],
    queryFn:apiClient.getAll
})}

export default useGameTrailor;