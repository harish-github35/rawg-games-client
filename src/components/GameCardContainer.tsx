import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";

const GameCardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      transition="transform .3s ease"
      _hover={{
        transform: "scale(1.05)",
      }}
      h="100%"
      minH="370px"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
