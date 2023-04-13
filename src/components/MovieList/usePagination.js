import { useState } from 'react';

const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPages = Math.ceil(data.length / itemsPerPage);

  const currentData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const nextPage = () => {
    setCurrentPage(Math.min(currentPage + 1, maxPages));
  };

  const prevPage = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  return { currentData, nextPage, prevPage, currentPage, maxPages };
};

export default usePagination;
