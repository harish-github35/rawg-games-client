import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  text: string;
}

const GameDesc = ({ text }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!text) return null;
  if (text.length <= 300) return <Text>{text}</Text>;

  const content =
    !expanded && text.length > 300 ? text.substring(0, 300) + "..." : text;

  return (
    <Text>
      {content}
      <Button
        display="inline-block"
        size="xs"
        fontWeight="bold"
        onClick={() => setExpanded(!expanded)}
        ml={2}
        colorScheme="blue"
      >
        {expanded ? "Show less" : "Show more"}
      </Button>
    </Text>
  );
};

export default GameDesc;
