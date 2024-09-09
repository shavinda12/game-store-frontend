import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, AxiosRequestConfig, CanceledError } from "axios";


export interface FetchingData <T>{
    count:number,
    results:T[]
}

const useData=<T>(endPoint:string,requestConfig?:AxiosRequestConfig,deps?:any[])=>{
    const [data,setData]=useState<T[]>([]);
    const [errors,setErrors]=useState('')
    const [isLoading,setLoading]=useState(false);

    const getDataList=async(controller:AbortController)=>{
        try{
            console.log(`platform id is ${requestConfig?.params.selectedPlatform}`)
            const result=await apiClient.get<FetchingData<T>>(endPoint,{signal:controller.signal,...requestConfig});
            setData(result.data.results);
            console.log(result.data.results);
            setLoading(false)
        }catch(error){
            if(error instanceof CanceledError)return
            setErrors((error as AxiosError).message)
            setLoading(false)
        }
    } 

    useEffect(()=>{
        setLoading(true)
        const controller=new AbortController()
        getDataList(controller)
        return ()=>controller.abort()
    },deps?[...deps]:[])

    return {data,errors,isLoading}
}

export default useData;