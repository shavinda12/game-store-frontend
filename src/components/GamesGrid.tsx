import { SimpleGrid } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'

const GamesGrid = () => {
    const{games,error}=useGames()
  return (
    <>
    {error&&<p>{error}</p>}
    <SimpleGrid columns={{sm:1,md:2,lg:2}} spacing={10}>
        {games.map((rows)=>(
            <GameCard game={rows}/>
        ))}
    </SimpleGrid>
    </>
  )
}

export default GamesGrid