import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import usePlatform from "../hooks/usePlatform";
import { Platforms } from "../hooks/useGames";

interface PlatformSelectorProps{
    onSelect:(platform:Platforms)=>void
    platform:Platforms|null
}


const PlatformSelector = ({onSelect,platform}:PlatformSelectorProps) => {
    const{data}=usePlatform()
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown/>}>
      {platform?.name?platform.name:"Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform)=>(<MenuItem onClick={()=>onSelect(platform)} key={platform.id}>{platform.name}</MenuItem>))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
