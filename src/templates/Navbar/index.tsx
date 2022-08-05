import { RepeatIcon, TriangleDownIcon, UpDownIcon } from "@chakra-ui/icons";
import { Avatar, Box, Flex, Heading } from "@chakra-ui/react";
import { StyledIconButton } from "../../components/StyledIconButton";

function Navbar() {
  return (
    <>
      <Flex
        h={16}
        align={"center"}
        justify={"space-between"}
        bg={"gray.800"}
        color="gray.200"
        px={["40px", "80px"]}
        w="100%"
        position={"fixed"}
        zIndex={1}
      >
        <Box>
          <UpDownIcon color={"red.500"} w={8} h={8} />
        </Box>
        <Flex align={"center"} w={140} justify={"space-between"}>
          <StyledIconButton icon={<RepeatIcon />} aria-label="updateButton" />
          {/* <Heading as={"h3"} size={"sm"}>
            Olá Lucas
          </Heading>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" /> */}
        </Flex>
      </Flex>
      <Box h={16} />
    </>
  );
}

export { Navbar };
