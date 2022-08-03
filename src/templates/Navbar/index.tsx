import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Flex, Heading, useColorMode, useColorModeValue } from "@chakra-ui/react";

function Navbar() {
  // const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex h={16} align={"center"} justify={"space-between"} bg={"gray.300"} px={12} w="100%">
        <Box>
          <Heading as="h4" size="lg">
            Logo
          </Heading>
        </Box>
        <Flex align={"center"} w={140} justify={"space-between"}>
          {/* <Button size={"sm"} colorScheme="purple" variant="outline" onClick={toggleColorMode}>
              {useColorModeValue(<MoonIcon />, <SunIcon />)}
            </Button> */}
          <Heading as={"h3"} size={"sm"}>
            Olá Lucas
          </Heading>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </Flex>
      </Flex>
    </>
  );
}

export { Navbar };
