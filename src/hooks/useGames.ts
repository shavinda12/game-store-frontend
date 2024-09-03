import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { AxiosError, CanceledError } from "axios"

interface Games{
    id:number,
    name:string
}

interface GameList{
    count:number
    results:Games[]
}


const useGames=()=>{
    const[games,setGames]=useState<Games[]>([]);
    const [error,setError]=useState('');

    const getGameList=async (controller:AbortController)=>{   
        try{
            const result=await apiClient.get<GameList>('/games',{signal:controller.signal})
            setGames(result.data.results)

        }catch(error){
            if(error instanceof (CanceledError)) return
            setError((error as AxiosError).message)
        }
    }

    useEffect(()=>{
        const controller=new AbortController()
        getGameList(controller)
        return ()=>controller.abort()
    },[])
    return {games,error}
    
    
}
export default useGames;