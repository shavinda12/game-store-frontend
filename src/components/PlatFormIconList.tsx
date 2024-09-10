import { Platforms } from '../hooks/useGames'
import { HStack, Icon} from '@chakra-ui/react'
import{
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux
} from 'react-icons/fa'

import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from 'react-icons'

//in here more new things to learn
//********************************************************************************************* */


interface IconListProps{
    platform:Platforms[]
}

//further study about this type of object
const PlatFormIconList = ({platform}:IconListProps) => {
    const iconMap:{[key:string]:IconType}={    
        pc:FaWindows,  
        playstation:FaPlaystation,
        xbox:FaXbox,
        nintendo:SiNintendo,
        mac:FaApple,
        linux:FaLinux,
        ios:MdPhoneIphone,
        web:BsGlobe
    }
  return (
    <>
    <HStack marginY={4}>
    {platform.map((platform)=>( //icon mapping
        <Icon as={iconMap[platform.slug]} color='grey.500'/>
    ))}

    </HStack>
    
    </>
  )
}

export default PlatFormIconList