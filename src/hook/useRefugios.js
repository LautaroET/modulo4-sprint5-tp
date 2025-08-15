import { useState, useEffect } from "react";
import { fetchAllRefugios } from "../services/apiService";

export const useRefugios = (searchValue = "") => {
  const [refugios, setRefugios] = useState([]);
  const [allRefugios, setAllRefugios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [amount, setAmount] = useState(12);

  useEffect(() => {
    setIsLoading(true);
    const getRefugios = async () => {
      try {
        const data = await fetchAllRefugios(searchValue);
        setAllRefugios(data);
        setRefugios(data.slice(0, amount));
      } catch (error) {
        console.error("Error fetching refugios:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getRefugios();
  }, [amount, searchValue]);

  const handleShowMore = () => {
    setAmount((prevAmount) => prevAmount + 12);
  };

  return { refugios, allRefugios, isLoading, handleShowMore };
};
