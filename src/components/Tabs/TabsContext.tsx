import { createContext, useContext } from 'react';

interface ITabsContext {
  value?: string;
  toggleTabs: (value?: string) => void;
}

export const TabsContext = createContext<ITabsContext | null>(null);

export const useTabsContext = () => {
  const ctx = useContext(TabsContext);

  if (!ctx) {
    throw Error(
      '<Tabs>와 관련된 컴포넌트는 <Tabs>컴포넌트 내부에서만 사용해야합니다!'
    );
  }

  return ctx;
};
