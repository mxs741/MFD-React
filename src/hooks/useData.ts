import { useEffect, useState } from "react";
import { CategoryType } from "../types/types";
import axios from "axios";

export const useData = (name: string, id: string) => {
  const [data, setData] = useState<CategoryType>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    axios
      .get(`https://rickandmortyapi.com/api/${name}/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, [name, id]);

  return { data, isLoading, error };
};
