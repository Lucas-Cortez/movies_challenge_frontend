import { Flex, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { IMovieData } from "../../interfaces/IMovieData";
import { MovieCard } from "../../modules/MovieCard";
import { MovieDrawer } from "../../modules/MovieDrawer";

function Main() {
  const { isLoading, value, error } = useFetch<IMovieData>("/movie");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [drawerMovie, setDrawerMovie] = useState<IMovieData | null>(null);

  const handleDrawerClick = (movie: IMovieData) => {
    onOpen();
    setDrawerMovie(movie);
    console.log(movie);
  };

  if (isLoading) return <h1>loading...</h1>;
  if (error) return <h1>error...</h1>;

  return (
    <>
      <Flex justify={"center"} width="100%" m="auto" pt={10}>
        <SimpleGrid columns={[1, null, 2, null, 3, 4]} spacing="40px">
          {value.map((res) => (
            <MovieCard onClick={() => handleDrawerClick(res)} movie={res} />
          ))}
        </SimpleGrid>
      </Flex>
      <MovieDrawer isOpen={isOpen} onClose={onClose} movie={drawerMovie} />
    </>
  );
}

export { Main };
