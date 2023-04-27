import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const search = useGameQueryStore((s) => s.setSearchText);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="search-form"
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef.current) {
          search(inputRef.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement color="gray.300" children={<BsSearch />} />
        <Input
          ref={inputRef}
          borderRadius={20}
          placeholder="Search games"
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
