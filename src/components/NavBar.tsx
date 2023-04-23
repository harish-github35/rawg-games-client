import { HStack, Image, Text } from "@chakra-ui/react";
import LogoImage from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={LogoImage} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
