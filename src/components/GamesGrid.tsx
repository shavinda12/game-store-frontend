import { SimpleGrid } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import LoadingSkeleton from './LoadingSkeleton'
import GameCardContainer from './GameCardContainer'
import { Genres } from '../hooks/useGenres'


interface GamesGridProps{
  selectedGenre:Genres|null
}


const GamesGrid = ({selectedGenre}:GamesGridProps) => {
    const{data,errors,isLoading}=useGames(selectedGenre) //in here useGame function is called
    const skeletons=[1,2,3,4,5,6]
  return (
    <>
    {errors&&<p>{errors}</p>}
    <SimpleGrid columns={{sm:1,md:2,lg:3}} spacing={10}>
      {isLoading && skeletons.map((skeleton)=>(<GameCardContainer><LoadingSkeleton key={skeleton}/></GameCardContainer>))}
        {data.map((rows)=>(
            <GameCard game={rows}/>
        ))}
    </SimpleGrid>
    </>
  )
}

export default GamesGrid