import { useInfiniteQuery} from "@tanstack/react-query"
import APIClient, { FetchingData } from "../services/api-client"
import { Platforms } from "./usePlatform"
import useGameQueryStore from "../stores/store"


const apiClient=new APIClient<Games>('/games')

export interface Games{
    id:number,
    name:string,
    slug:string,
    description_raw:string,
    background_image:string,
    parent_platforms:{platform:Platforms}[],//special type of object want to learn more
    metacritic:number,
    rating_top:number
}



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




