'use client';

import React from 'react';
import { TabsListContext, useTabsContext } from './TabsContext';

interface ITabsListProps {
  children: React.ReactNode;
}

const TabsList = ({ children }: ITabsListProps) => {
  useTabsContext();
  return <TabsListContext value={{}}>{children}</TabsListContext>;
};

export default TabsList;
