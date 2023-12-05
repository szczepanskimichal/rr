import { useState } from "react";

export const usePagination = () => {
  const [activePage, setActivePage] = useState(1);
  const handleNext = () => {
    setActivePage((p) => p + 1);
  };
  const handlePrev = () => {
    setActivePage((p) => p - 1);
  };
  return {
    activePage,
    handleNext,
    handlePrev,
  };
};
