import { HStack, Text } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/switch";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text fontSize="1xl" whiteSpace="nowrap">
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
