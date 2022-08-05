import { AddIcon } from "@chakra-ui/icons";
import { Button, Flex, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axios";
import { useFetch } from "../../hooks/useFetch";
import { IMovieData } from "../../interfaces/IMovieData";
import { MovieCard } from "../../modules/MovieCard";
import { MovieDrawer } from "../../modules/MovieDrawer";

function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [drawerMovie, setDrawerMovie] = useState<IMovieData | null>(null);

  const [data, setData] = useState<IMovieData[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  const [offset, setOffset] = useState(0);
  const [limit] = useState(10);

  const handleDrawerClick = (movie: IMovieData) => {
    onOpen();
    setDrawerMovie(movie);
  };

  const loadPaginatedData = async () => {
    setError(false);
    if (!data.length) {
      setLoading(true);
    }
    try {
      const data = await axiosInstance.get(`/movie?offset=${offset}&limit=${limit}`);
      setData((prev) => [...prev, ...data.data]);
      if (data.data.length < limit) {
        setButtonDisabled(true);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadAllData = async () => {
    setError(false);
    if (!data.length) {
      setLoading(true);
    }
    try {
      const data = await axiosInstance.get(`/movie/all`);
      setData((prev) => [...prev, ...data.data]);
      if (data.data.length < limit) {
        setButtonDisabled(true);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMoreClick = () => {
    setOffset((prev) => prev + 10);
  };

  useEffect(() => {
    loadPaginatedData();
  }, [offset]);

  if (isLoading) return <h1>loading...</h1>;
  if (error) return <h1>error...</h1>;

  return (
    <>
      <Flex justify={"center"} width="100%" m="auto" pt={10}>
        <SimpleGrid columns={[1, null, 2, null, 3, 4]} spacing="40px">
          {data.map((res) => (
            <MovieCard key={res.id} onClick={() => handleDrawerClick(res)} movie={res} />
          ))}
        </SimpleGrid>
      </Flex>
      <MovieDrawer isOpen={isOpen} onClose={onClose} movie={drawerMovie} />
      <Flex mt="40px" w={"100%"} justify="center">
        <Button
          onClick={handleLoadMoreClick}
          disabled={buttonDisabled}
          rightIcon={<AddIcon />}
          colorScheme="red"
          variant="outline"
          _hover={{ bgColor: "gray.600" }}
        >
          Load more
        </Button>
      </Flex>
    </>
  );
}

export { Main };
