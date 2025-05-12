'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { usePaginationContext } from './PaginationContext';

interface IPaginationPrevButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const PaginationPrevButton = ({
  className,
  children,
}: IPaginationPrevButtonProps) => {
  const { page, startPage, queryString, changePage } = usePaginationContext();

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  params.set(queryString, (page - 1).toString());

  const isActive = startPage && page > startPage;

  if (!isActive) {
    return (
      <Link
        data-disabled={!isActive}
        className={`${className} data-[disabled=true]:pointer-events-none`}
        href={''}
      >
        {children ?? '<'}
      </Link>
    );
  }

  const handleChangePage = () => {
    changePage(page - 1);
  };

  return (
    <Link
      onClick={handleChangePage}
      href={`?${params.toString()}`}
      className={className}
    >
      {children ?? '<'}
    </Link>
  );
};

export default PaginationPrevButton;
