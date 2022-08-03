import { useEffect, useState } from "react";
import { axiosInstance } from "../config/axios";

interface HookProps {
  url: string;
}

function useFetch<T>(url: string) {
  const [isLoading, setloading] = useState<boolean>(true);
  const [value, setValue] = useState<T[]>([]);
  const [error, setError] = useState<boolean | Error>(false);

  const fetch = async (url: string) => {
    try {
      const data = await axiosInstance.get(url);
      console.log(data);
      setValue(data.data);
    } catch (err) {
      setError(false);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetch(url);
  }, [url]);

  return { isLoading, value, error };
}

export { useFetch };
