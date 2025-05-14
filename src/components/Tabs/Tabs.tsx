'use client';

import { useState } from 'react';
import { TabsContext } from './TabsContext';

interface ITabsProps {
  defaultValue?: string;
  className?: string;
  children: React.ReactNode;
}

const Tabs = ({ defaultValue, className, children }: ITabsProps) => {
  const [tabValue, setTabValue] = useState(defaultValue);

  const toggleTabs = (value?: string) => {
    setTabValue(value);
  };

  const TabsValue = {
    value: tabValue,
    toggleTabs,
  };

  return (
    <TabsContext value={TabsValue}>
      <div className={className}>{children}</div>
    </TabsContext>
  );
};

export default Tabs;
