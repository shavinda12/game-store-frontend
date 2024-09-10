import { useQuery } from "@tanstack/react-query"
import { GameQuery } from "../App"
import apiClient from "../services/api-client"
import { FetchingData } from "../services/api-client"
import { Platforms } from "./usePlatform"



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
    queryFn:()=>
        apiClient.get<FetchingData<Games>>("/games",{
            params:{
                genres:gameQuery.genre?.id,
                parent_platforms:gameQuery.platform?.id,
                ordering:gameQuery?.sortOrder,
                search:gameQuery?.search  
            }
        })
        .then(res=>res.data)

})
    
export default useGames;




