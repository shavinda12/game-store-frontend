import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import usePlatform from "../hooks/usePlatform";
import { Platforms } from "../hooks/usePlatform";
import usePlatformName from "../hooks/usePlatformName";

interface PlatformSelectorProps {
  onSelect: (platform: Platforms) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({
  onSelect,
  selectedPlatformId,
}: PlatformSelectorProps) => {

  const { data } = usePlatform();
  const selectedPlatform=usePlatformName(selectedPlatformId);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        {selectedPlatform?.name ? selectedPlatform.name : "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem onClick={() => onSelect(platform)} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
