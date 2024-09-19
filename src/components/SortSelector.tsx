import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import useGameQueryStore from "../stores/store";

const SortSelector = () => {
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const sortOrder = [
    { value: "", lable: "Relevance" },
    { value: "-added", lable: "Date added" },
    { value: "name", lable: "Name" },
    { value: "-released", lable: "Release date" },
    { value: "-metacritic", lable: "Popularity" },
    { value: "-rating", lable: "Average rating" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        Order By:Relevance
      </MenuButton>
      <MenuList>
        {sortOrder.map((sort) => (
          <MenuItem key={sort.value} onClick={() => setSortOrder(sort.value)}>
            {sort.lable}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
