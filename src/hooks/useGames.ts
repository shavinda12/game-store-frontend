import { GameQuery } from "../App"
import useData from "./useData"
import { Genres } from "./useGenres"

export interface Platforms{
    id:number,
    name:string,
    slug:string
}

export interface Games{
    id:number,
    name:string,
    background_image:string,
    parent_platforms:{platform:Platforms}[]//special type of object want to learn more
    metacritic:number
}


const useGames=(gameQuery:GameQuery)=>useData<Games>("/games",
    {params:
        {
        genres:gameQuery.genre?.id,
        platforms:gameQuery.platform?.id,
        ordering:gameQuery?.sortOrder,
        search:gameQuery?.search
    }},
    [gameQuery]
)
export default useGames;





// use data is a common hoook which gives data from useGames and useGenres
//in here as this is acting like a common hook the parameters we are passed to the useData are optional.
//that's why {genres:selectedGenre?.id} it is having ?.
//so when we use useGenres it doesn't have these paameters.or when in the first load it doesn't have any parametrs.
//so that's why we make it optional
//so the useData hook acting like 
//localhost:9000/https://api.rawg.io/api/games
//localhost:9000/https://api.rawg.io/api/genres
//localhost:9000/https://api.rawg.io/api/games?genreid
//localhost:9000/https://api.rawg.io/api/games?platormId
//localhost:9000/https://api.rawg.io/api/games?genreid?platformId
//like wise we can call many api's using this common api with optional parameters