import { HStack, Image} from "@chakra-ui/react";
import LogoImage from "../assets/logo.webp";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchInput from "./SearchInput";



const NavBar = () => {
  return (
    <HStack p="10px">
      <Image src={LogoImage} boxSize="60px" />
      <SearchInput/>
      <DarkModeSwitch />
    </HStack>
  );
};

export default NavBar;
