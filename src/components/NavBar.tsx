import { HStack, Image, Text } from "@chakra-ui/react";
import LogoImage from "../assets/logo.webp";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchInput from "./SearchInput";

interface NavBarProps{
  setSearchInput:(value:string)=>void
}

const NavBar = ({setSearchInput}:NavBarProps) => {
  return (
    <HStack p="10px">
      <Image src={LogoImage} boxSize="60px" />
      <SearchInput setSearchInput={(value)=>setSearchInput(value)}/>
      <DarkModeSwitch />
    </HStack>
  );
};

export default NavBar;
