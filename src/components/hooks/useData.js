import { useEffect, useState } from "react";

export const useData = (activePage) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getCharacters = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${activePage}`
      );

      if (!response.ok) {
        setIsLoading(false);
        setError(true);
        throw new Error("Ops...");
      }

      const data = await response.json();
      console.log(data);
      setData(data.results);
      setIsLoading(false);
    };
    getCharacters().catch((err) => console.log(err));
  }, [activePage]);

  return {
    data,
    isLoading,
    error,
  };
};
