import { Text } from "@chakra-ui/layout";
import { Portal } from "@chakra-ui/portal";

interface Props {
  children: string;
}

const ErrorAlert = ({ children }: Props) => {
  return (
    <Portal>
      <Text
        bg="red.300"
        color="black"
        padding={1}
        textAlign="center"
        position="fixed"
        top="0"
        w="100%"
      >
        {children}
      </Text>
    </Portal>
  );
};

export default ErrorAlert;
