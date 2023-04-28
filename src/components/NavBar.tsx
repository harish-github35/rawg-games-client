import { SimpleGrid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import LogoImage from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";

const NavBar = () => {
  const { colorMode } = useColorMode();
  return (
    <SimpleGrid
      padding="10px"
      spacing={2}
      templateColumns="50px 1fr auto"
      alignItems="center"
    >
      <Link to="/">
        <Image
          filter={colorMode === "dark" ? "grayscale(100%)" : "none"}
          src={LogoImage}
          boxSize="50px"
          objectFit="cover"
        />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </SimpleGrid>
  );
};

export default NavBar;
