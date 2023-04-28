import { Spinner } from "@chakra-ui/spinner";
import { Box } from "@chakra-ui/layout";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import { Suspense } from "react";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Suspense
          fallback={
            <Box
              position="fixed"
              left="50%"
              top="50%"
              transform="translate(-50%, -50%)"
            >
              <Spinner />
            </Box>
          }
        >
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};

export default Layout;
