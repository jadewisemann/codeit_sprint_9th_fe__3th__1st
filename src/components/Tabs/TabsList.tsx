'use client';

import React from 'react';
import { TabsListContext, useTabsContext } from './TabsContext';

interface ITabsListProps {
  className?: string;
  children: React.ReactNode;
}

const TabsList = ({ className, children }: ITabsListProps) => {
  useTabsContext();
  return (
    <TabsListContext value={{}}>
      <div className={className}>{children}</div>
    </TabsListContext>
  );
};

export default TabsList;
