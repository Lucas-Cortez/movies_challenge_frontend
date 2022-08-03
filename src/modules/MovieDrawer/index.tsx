import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
} from "@chakra-ui/react";
import { IMovieData } from "../../interfaces/IMovieData";

interface Props {
  onClose(): void;
  isOpen: boolean;
  movie: IMovieData | null;
}

function MovieDrawer({ onClose, isOpen, movie }: Props) {
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size={[null, "full", "lg"]}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        {!!movie && <Image w={"100%"} src={movie.movie_banner} />}
        <DrawerHeader>{"Filme"}</DrawerHeader>
        <DrawerBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid officiis voluptas cumque, nostrum
          sed nobis accusantium, magni explicabo nisi a expedita id quaerat dolorum velit voluptate
          consequuntur culpa eveniet odit.
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export { MovieDrawer };
