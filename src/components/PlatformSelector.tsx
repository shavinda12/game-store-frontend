import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import usePlatform from "../hooks/usePlatform";
import usePlatformName from "../hooks/usePlatformName";
import useGameQueryStore from "../store";


const PlatformSelector = () => {

  const setPlatformId=useGameQueryStore(s=>s.setPlatformId);
  const gameQuery=useGameQueryStore(s=>s.gameQuery)

  const { data } = usePlatform();
  const selectedPlatform=usePlatformName(gameQuery.platformId);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        {selectedPlatform?.name ? selectedPlatform.name : "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem onClick={() => setPlatformId(platform.id)} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
