import { create } from "zustand";

export  interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string | null;
    search?: string | null;
  }

interface GameQueryStore{
    gameQuery:GameQuery,
    setGenreId:(genreId:number)=>void,
    setPlatformId:(platformId:number)=>void,
    setSearchText:(searchText:string)=>void,
    setSortOrder:(sortOrder:string)=>void
}

const useGameQueryStore=create<GameQueryStore>(set=>({
    gameQuery:{},
    setGenreId:(genreId)=>set((store)=>({gameQuery:{...store.gameQuery,genreId}})),
    setPlatformId:(platformId)=>set((store)=>({gameQuery:{...store.gameQuery,platformId}})),
    setSearchText:(searchText)=>set(()=>({gameQuery:{search:searchText}})),
    setSortOrder:(sortOrder)=>set((store)=>({gameQuery:{...store.gameQuery,sortOrder}}))
}))

export default useGameQueryStore;