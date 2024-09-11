import useGenres from "./useGenres";




const useGenreName = (genreId?:number) => {
    const { data: genres } = useGenres();
    const selectedGenre = genres?.results.find((g) => g.id === genreId);
    return selectedGenre
}

export default useGenreName