import usePlatform from "./usePlatform"

const usePlatformName=(id?:number)=>{
    const {data:platforms}=usePlatform();
    const selectedPlatformName=platforms?.results.find((p)=>p.id===id)
    return selectedPlatformName;
}
export default usePlatformName