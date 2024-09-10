import axios, { AxiosRequestConfig } from "axios";


export interface FetchingData <T>{
    count:number,
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
                           .then(res=>res.data)
    }


}
export default APIClient

