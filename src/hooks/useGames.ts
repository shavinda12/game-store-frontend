import { useQuery } from "@tanstack/react-query"
import { GameQuery } from "../App"
import APIClient, { FetchingData } from "../services/api-client"
import { Platforms } from "./usePlatform"


const apiClient=new APIClient<Games>('/games')

export interface Games{
    id:number,
    name:string,
    background_image:string,
    parent_platforms:{platform:Platforms}[],//special type of object want to learn more
    metacritic:number,
    rating_top:number
}


const useGames=(gameQuery:GameQuery)=>useQuery<FetchingData<Games>,Error>({
    queryKey:['games',gameQuery],
    queryFn:()=>apiClient.getAll({
        params:{
            genres:gameQuery.genre?.id,
            parent_platforms:gameQuery.platform?.id,
            ordering:gameQuery?.sortOrder,
            search:gameQuery?.search  
        }
    })
})

// in here we are calling apiClient.getAll() method as we want to pass the arguments to the function
    
export default useGames;




