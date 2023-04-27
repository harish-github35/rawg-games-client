import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const navigate = useNavigate();
  const search = useGameQueryStore((s) => s.setSearchText);

  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <form
      className="search-form"
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef.current) {
          search(inputRef.current.value);
          navigate("/");
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
        {/* {inputRef.current && inputRef.current.value !== "" && (
          <InputRightElement color="gray.300">
            <Button
              onClick={() => {
                if (inputRef.current) {
                  inputRef.current.value = "";
                }
                search("");
              }}
              color="gray.300"
              padding={0}
            >
              <BsFillXCircleFill size={20} />
            </Button>
          </InputRightElement>
        )} */}
      </InputGroup>
    </form>
  );
};

export default SearchInput;
