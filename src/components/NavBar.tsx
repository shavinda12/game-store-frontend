import { HStack, Image} from "@chakra-ui/react";
import LogoImage from "../assets/logo.webp";
import DarkModeSwitch from "./DarkModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";



const NavBar = () => {
  return (
    <HStack p="10px">
      <Link to="/">
      <Image src={LogoImage} boxSize="60px" objectFit="cover"/>
      </Link>
      <SearchInput/>
      <DarkModeSwitch />
    </HStack>
  );
};

export default NavBar;
