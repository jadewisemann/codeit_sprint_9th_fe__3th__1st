import { createContext, useContext } from 'react';

interface IPaginationContext {
  startPage?: number;
  page: number;
  totalPage?: number;
  queryString: string;
  changePage: (page: number) => void;
}

export const PaginationContext = createContext<IPaginationContext | null>(null);

export const usePaginationContext = () => {
  const ctx = useContext(PaginationContext);

  if (!ctx) {
    throw Error(
      '<Pagination>과 관련된 컴포넌트는 <Pagination>컴포넌트 내부에서만 사용해야합니다!'
    );
  }

  return ctx;
};
