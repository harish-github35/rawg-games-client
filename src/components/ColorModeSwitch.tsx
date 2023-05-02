import { HStack, Text } from "@chakra-ui/layout";
import { Show, useMediaQuery } from "@chakra-ui/media-query";
import { useColorMode } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/switch";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const [isLg] = useMediaQuery("(min-width: 992px)");

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        size={isLg ? "md" : "sm"}
      />
      <Show above="lg">
        <Text fontSize="1xl" whiteSpace="nowrap">
          Dark Mode
        </Text>
      </Show>
    </HStack>
  );
};

export default ColorModeSwitch;
