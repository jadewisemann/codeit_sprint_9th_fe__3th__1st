'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { usePaginationContext } from './PaginationContext';

interface IPaginationButtonProps {
  page: number;
  className?: string;
  children?: React.ReactNode;
}

const PaginationButton = ({
  className,
  page,
  children,
}: IPaginationButtonProps) => {
  const { page: currentPage, changePage, queryString } = usePaginationContext();

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  params.set(queryString, page.toString());

  const handleChangePage = () => {
    changePage(page);
  };

  return (
    <Link
      href={`?${params.toString()}`}
      data-is-active={page === currentPage}
      className={`${className} data-[is-active=true]:bg-gray-400`}
      onClick={handleChangePage}
    >
      {children ?? page}
    </Link>
  );
};

export default PaginationButton;
