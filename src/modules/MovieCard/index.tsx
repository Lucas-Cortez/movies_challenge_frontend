import { Box, ScaleFade } from "@chakra-ui/react";
import { IMovieData } from "../../interfaces/IMovieData";

interface Props {
  onClick(): void;
  movie: IMovieData;
}

function MovieCard({ onClick, movie }: Props) {
  return (
    <ScaleFade initialScale={0.5} in={true}>
      <Box
        w={300}
        height={450}
        bg="blue.500"
        boxShadow="xl"
        rounded="lg"
        style={{ cursor: "pointer" }}
        _hover={{ transform: "scale(1.05)", transition: "all 0.08s ease-in-out" }}
        onClick={onClick}
        bgImage={movie.image}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
      ></Box>
    </ScaleFade>
  );
}

export { MovieCard };
