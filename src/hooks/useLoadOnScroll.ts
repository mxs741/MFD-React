import axios from "axios";
import { useEffect, useState } from "react";
import { CategoryType } from "../types/types";

export const useLoadOnScroll = (category: string, page: number) => {
  const [data, setData] = useState<CategoryType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    setData([]);
  }, [category]);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    axios
      .get(`https://rickandmortyapi.com/api/${category}`, {
        params: {
          page: page,
        },
      })
      .then((res) => {
        setData((prev) => [...prev, ...res.data.results]);
        setHasMore(+res.data.info.pages > page);
      })
      .catch(() => {
        setError(true);
        setHasMore(false);
      })
      .finally(() => setIsLoading(false));
  }, [category, page]);

  return { data, hasMore, isLoading, error };
};
