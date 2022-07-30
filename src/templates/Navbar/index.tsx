import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Flex, Heading, useColorMode } from "@chakra-ui/react";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={"gray.300"} px={12}>
        <Flex h={16} align={"center"} justify={"space-between"}>
          <Box>
            <Heading as="h4" size="lg">
              Logo
            </Heading>
          </Box>
          <Flex align={"center"} w={220} justify={"space-between"}>
            <Button variant="outline" onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Heading as={"h3"} size={"sm"}>
              Olá Lucas
            </Heading>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export { Navbar };
