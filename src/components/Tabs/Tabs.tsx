'use client';

import { useState } from 'react';
import { TabsContext } from './TabsContext';

interface ITabsProps {
  defaultValue?: string;
  children: React.ReactNode;
}

const Tabs = ({ defaultValue, children }: ITabsProps) => {
  const [tabValue, setTabValue] = useState(defaultValue);

  const toggleTabs = (value?: string) => {
    setTabValue(value);
  };

  const TabsValue = {
    value: tabValue,
    toggleTabs,
  };

  return <TabsContext value={TabsValue}>{children}</TabsContext>;
};

export default Tabs;
