import { useInfiniteQuery} from "@tanstack/react-query"
import APIClient, { FetchingData } from "../services/api-client"
import useGameQueryStore from "../stores/store"
import {Games} from "../entities/Games"


const apiClient=new APIClient<Games>('/games')

const useGames=()=>{
    const{gameQuery}=useGameQueryStore()
    return useInfiniteQuery<FetchingData<Games>,Error>({
        queryKey:['games',gameQuery],
        queryFn:({pageParam=1})=>apiClient.getAll({
            params:{
                genres:gameQuery.genreId,
                parent_platforms:gameQuery.platformId,
                ordering:gameQuery?.sortOrder,
                search:gameQuery?.search,
                page:pageParam  
            }
        }),
        getNextPageParam:(lastPage,allPages)=>{
            return lastPage.next?allPages.length+1:undefined;
        }
    })
}
    

// in here we are calling apiClient.getAll() method as we want to pass the arguments to the function
    
export default useGames;




