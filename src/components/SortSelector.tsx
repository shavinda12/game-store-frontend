import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";


interface SortSelectorProps{
    selectSort:(sort:string)=>void
}

const SortSelector = ({selectSort}:SortSelectorProps) => {
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
          <MenuItem key={sort.value} onClick={()=>selectSort(sort.value)}>{sort.lable}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
