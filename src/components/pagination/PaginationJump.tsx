'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { usePaginationContext } from './PaginationContext';

interface IPaginationJumpProps {
  position?: 'down' | 'up';
  className?: string;
  inputClassName?: string;
  children?: React.ReactNode;
}

const PaginationJump = ({
  position = 'down',
  className,
  inputClassName,
  children,
}: IPaginationJumpProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { changePage, queryString } = usePaginationContext();

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const closeAndNavigate = useCallback(() => {
    const raw = inputRef.current?.value;

    if (raw && !isNaN(+raw)) {
      const page = +raw;
      changePage(page);
      const params = new URLSearchParams(searchParams.toString());
      params.set(queryString, page.toString());
      router.push(`?${params.toString()}`);
    }

    setIsOpen(false);
  }, [changePage, router, queryString, searchParams]);

  useEffect(() => {
    if (!isOpen) return;

    const onClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current
        && !containerRef.current.contains(e.target as Node)
      ) {
        closeAndNavigate();
      }
    };

    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [isOpen, closeAndNavigate]);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      closeAndNavigate();
    }
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div ref={containerRef} className='relative inline-block'>
      <button onClick={handleToggle} className={`cursor-pointer ${className}`}>
        {children ?? '...'}
      </button>

      {isOpen && (
        <input
          ref={inputRef}
          data-position={position}
          onKeyDown={handleKeyDown}
          placeholder='Page #'
          className={`absolute mt-1 p-1 data-[position=down]:top-full data-[position=up]:bottom-full ${inputClassName}`}
        />
      )}
    </div>
  );
};

export default PaginationJump;
