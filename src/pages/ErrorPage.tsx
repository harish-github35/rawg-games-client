import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { isRouteErrorResponse, useRouteError } from "react-router";
import NavBar from "../components/NavBar";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  const error = useRouteError();
  const isNotfound = isRouteErrorResponse(error);

  return (
    <>
      <Helmet>
        <title>
          {isNotfound ? "404 Page Not Found | Rawg Games Client" : "Error"}
        </title>
      </Helmet>
      <NavBar />
      <Flex paddingTop={10} justifyContent="center" alignItems="center">
        <Box>
          <Heading fontSize="6xl">
            {isNotfound ? "404 page not found" : "Error"}
          </Heading>
          <Text fontSize="2xl">
            {isNotfound
              ? "Invalid url"
              : "Ahere was a error while fetching the apge"}
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default ErrorPage;
