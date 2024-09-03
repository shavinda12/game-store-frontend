import { HStack, Image, Text } from '@chakra-ui/react'
import LogoImage from '../assets/logo.webp'
import DarkModeSwitch from './DarkModeSwitch'


const NavBar = () => {
  return (
    <HStack justifyContent="space-between" p="10px">
        <Image src={LogoImage} boxSize="60px"/>
        <DarkModeSwitch/>
    </HStack>
  )
}

export default NavBar