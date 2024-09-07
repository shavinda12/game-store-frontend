import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchInputProps{
    setSearchInput:(value:string)=>void
}


const SearchInput = ({setSearchInput}:SearchInputProps) => {
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <form style={{width:"100%"}}
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) setSearchInput(searchRef.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input ref={searchRef} borderRadius={20} placeholder="Search here..." />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
