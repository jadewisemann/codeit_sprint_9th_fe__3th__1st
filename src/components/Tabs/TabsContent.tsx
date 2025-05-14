'use client';

import React from 'react';
import { useTabsContext } from './TabsContext';

interface ITabsContentProps {
  value: string;
  children: React.ReactNode;
}

const TabsContent = ({ value, children }: ITabsContentProps) => {
  const { value: currentValue } = useTabsContext();

  if (value !== currentValue) {
    return null;
  }

  return children;
};

export default TabsContent;
