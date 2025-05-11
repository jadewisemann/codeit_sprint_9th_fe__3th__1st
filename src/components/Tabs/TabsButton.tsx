'use client';

import React from 'react';
import { useTabsContext, useTabsListContext } from './TabsContext';

interface ITabsButtonProps {
  value?: string;
  className?: string;
  children: React.ReactNode;
}

const TabsButton = ({ value, className, children }: ITabsButtonProps) => {
  useTabsListContext();
  const { toggleTabs } = useTabsContext();

  const handleToggleTabs = () => {
    toggleTabs(value);
  };

  return (
    <button className={className} onClick={handleToggleTabs}>
      {children}
    </button>
  );
};

export default TabsButton;
