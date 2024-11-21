import { useEffect, useState } from "react";

interface Params {
  [key: string]: number;
}

interface Data {
  id: string;
  title: string;
}

export const useFetch = (baseUrl: string) => {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [params, setParams] = useState<Params | null>(null);
  const [error, setError] = useState(null);

  const refetch = ({ params }: { params: Params }) => setParams(params);

  useEffect(() => {
    setIsLoading(true);

    const url = new URL(baseUrl);

    if (params !== null) {
      url.searchParams.append("_limit", String(params._limit));
    }

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [baseUrl, params]);

  return { data, isLoading, error, refetch };
};
