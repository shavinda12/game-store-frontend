import useData from "./useData"
import { Platforms } from "./useGames"


const usePlatform=()=>useData<Platforms>("/platforms/lists/parents")

export default usePlatform
