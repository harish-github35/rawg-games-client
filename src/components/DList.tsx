import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  dt: string;
  children: ReactNode | ReactNode[];
}

const DList = ({ dt, children }: Props) => {
  return (
    <Box>
      <Heading as="dt" fontSize="md" color="gray.600">
        {dt}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DList;
