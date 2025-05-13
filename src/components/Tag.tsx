'use client';

import { PropsWithChildren, useState } from 'react';
import Image from 'next/image';

interface TagProps {
  variant?: 'sm' | 'md' | 'lg';
  isRemovable?: boolean;
  className?: string;
}

const Tag = ({
  variant = 'md',
  isRemovable = false,
  className,
  children,
}: PropsWithChildren<TagProps>) => {
  const [isRemoved, setIsRemoved] = useState(false);

  const handleRemoveTag = () => {
    setIsRemoved(true);
  };

  const classArray = [
    // default
    'px-3 py-1 rounded-md inline-flex justify-center align-center',

    // size variant
    variant === 'sm' && 'text-sm',
    variant === 'md' && 'text-base',
    variant === 'lg' && 'text-lg',

    className,
  ];

  const tagClasses = classArray.join(' ');

  return (
    <>
      {!isRemoved && (
        <span className={tagClasses}>
          <label>{children}</label>
          {isRemovable && (
            <button className='ml-1 cursor-pointer' onClick={handleRemoveTag}>
              <Image
                src='/assets/ico__X.svg'
                alt='remove btn'
                width={12}
                height={12}
              />
            </button>
          )}
        </span>
      )}
    </>
  );
};

export default Tag;
