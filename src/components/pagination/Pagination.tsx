'use client';

import { useState } from 'react';
import { PaginationContext } from './PaginationContext';

interface IPaginationProps {
  totalPage?: number;
  startPage?: number;
  defaultPage?: number;
  queryString?: string;
  children: React.ReactNode;
}

const Pagination = ({
  startPage,
  totalPage,
  defaultPage,
  queryString = 'page',
  children,
}: IPaginationProps) => {
  const [page, setPage] = useState(defaultPage || 1);

  const changePage = (page: number) => {
    setPage(page);
  };

  const PaginationValue = {
    page,
    startPage,
    queryString,
    totalPage,
    changePage,
  };

  return (
    <PaginationContext value={PaginationValue}>{children}</PaginationContext>
  );
};

export default Pagination;
