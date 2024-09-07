import { Image, ImageProps } from '@chakra-ui/react'
import bulleye from '../assets/bulls-eye.webp'
import meh from '../assets/meh.webp'
import thumbsUp from '../assets/thumbs-up.webp'

interface EmojiProps{
    rating:number
}

const Emoji = ({rating}:EmojiProps) => {
    const emojiMap:{[key:number]:ImageProps}={
        3:{src:meh,alt:"meh",boxSize:"32px"},
        4:{src:thumbsUp,alt:"thumbsUp",boxSize:"25px"},
        5:{src:bulleye,alt:"bull eye",boxSize:"32px"}
    }

  return (
    <Image {...emojiMap[rating]} my={5}/>

  )
}

export default Emoji