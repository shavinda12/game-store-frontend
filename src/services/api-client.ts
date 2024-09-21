import axios, {AxiosRequestConfig } from "axios";


export interface FetchingData <T>{
    count:number,
    next:string|null,
    results:T[]
}



const axiosInstace= axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'94b84c0f9d2841fc9369674f753f8eff'
    }
})

class APIClient<T>{
    endPoint:string;

    constructor(endPoint:string){
        this.endPoint=endPoint
    }

    getAll=(config:AxiosRequestConfig)=>{
        return axiosInstace.get<FetchingData<T>>(this.endPoint,config)
                           .then(res=> res.data)
    }

    getGameDetails=(slug:string|number)=>{
        return axiosInstace.get<T>(this.endPoint+'/'+slug)
                           .then(res=>res.data)
    }


}
export default APIClient

