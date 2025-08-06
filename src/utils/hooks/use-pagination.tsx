import { useState } from 'react';

const usePagination = <T,>(cards: T[], cardQuantityPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCard = currentPage * cardQuantityPage;
  const indexOfFirstCard = indexOfLastCard - cardQuantityPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const numPage = [];

  for (let i = 1; i <= Math.ceil(cards.length / cardQuantityPage); i++) {
    numPage.push(i);
  }

  return {
    currentCards,
    numPage,
    currentPage,
    setCurrentPage,
  };
};

export default usePagination;
