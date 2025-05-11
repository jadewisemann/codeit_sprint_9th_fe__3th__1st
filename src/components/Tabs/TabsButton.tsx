'use client';

import React from 'react';
import { useTabsContext, useTabsListContext } from './TabsContext';

interface ITabsButtonProps {
  value?: string;
  children: React.ReactNode;
}

const TabsButton = ({ value, children }: ITabsButtonProps) => {
  useTabsListContext();
  const { toggleTabs } = useTabsContext();

  const handleToggleTabs = () => {
    toggleTabs(value);
  };

  return <button onClick={handleToggleTabs}>{children}</button>;
};

export default TabsButton;
