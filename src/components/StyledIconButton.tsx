import { IconButton, IconButtonProps } from "@chakra-ui/react";

function StyledIconButton({ icon, ...rest }: IconButtonProps) {
  return <IconButton {...rest} variant="ghost" color={"red.500"} icon={icon} _hover={{ bg: "gray.700" }} />;
}

export { StyledIconButton };
