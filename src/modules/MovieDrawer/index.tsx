import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Highlight,
  Image,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { RottenTomatoIcon } from "../../assets/icons/RottenTomatoIcon";
import { IMovieData } from "../../interfaces/IMovieData";
import { minReadable } from "../../utils";

interface Props {
  onClose(): void;
  isOpen: boolean;
  movie: IMovieData | null;
}

function MovieDrawer({ onClose, isOpen, movie }: Props) {
  if (!movie) return null;

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size={[null, "full", "lg"]}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <Image w={"100%"} src={movie.movie_banner} />

        <DrawerHeader bgColor={"gray.700"} color="white">
          <Flex w={"100%"} align={"center"} justify={"space-between"}>
            <Heading as="h1" size="md">
              {movie.title}
            </Heading>

            <Flex w={"160px"} justify={"space-between"}>
              <Tooltip hasArrow placement="top" label={`Rotten Tomato score: ${movie.rt_score}%`}>
                <Tag bgColor={"gray.400"}>
                  <TagLeftIcon boxSize="12px" as={RottenTomatoIcon} />
                  <TagLabel>{movie.rt_score}%</TagLabel>
                </Tag>
              </Tooltip>

              <Tooltip hasArrow placement="top" label={minReadable(movie.running_time)}>
                <Tag variant={"outline"} color={"red.500"} boxShadow="dark-lg">
                  <TagLabel>{minReadable(movie.running_time)}</TagLabel>
                </Tag>
              </Tooltip>
            </Flex>
          </Flex>
        </DrawerHeader>

        <DrawerBody bgColor={"gray.700"} color={"white"}>
          <Divider mb={3} borderColor={"gray.400"} />
          <Text>
            <Highlight query={"Producer:"} styles={{ px: "2", rounded: "full", bg: "gray.400" }}>
              Producer:
            </Highlight>
            {" " + movie.producer}
          </Text>
          <Text>
            <Highlight query={"Director:"} styles={{ px: "2", rounded: "full", bg: "gray.400" }}>
              Director:
            </Highlight>
            {" " + movie.director}
          </Text>
          <Divider my={3} borderColor={"gray.400"} />

          <Text>{movie.description}</Text>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export { MovieDrawer };
