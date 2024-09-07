import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"

interface GameHeadingProps{
    gameQuery:GameQuery
}


const GameHeading = ({gameQuery}:GameHeadingProps) => {
    const heading=`${gameQuery.platform?gameQuery.platform.name:""} ${gameQuery.genre?gameQuery.genre.name:""} Games`
  return (
    <Heading as='h1' size='4xl' my={5}>
        {heading}
    </Heading>
  )
}

export default GameHeading