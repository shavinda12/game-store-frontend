import { HStack, Image, Text } from '@chakra-ui/react'
import LogoImage from '../assets/logo.webp'
import React from 'react'

const NavBar = () => {
  return (
    <HStack>
        <Image src={LogoImage} boxSize="60px"/>
        <Text>Navigation Bar</Text>
    </HStack>
  )
}

export default NavBar