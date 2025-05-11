'use client';

import { useState } from 'react';
import DropdownSelectItem from './DropdownSelectItem';

interface DropdownSelectProps {
  initialValue: string;
  items: { id: number; value: string }[];
}

const DropdownSelect = ({ initialValue, items }: DropdownSelectProps) => {
  const [dropdownValue, setDropdownValue] = useState(initialValue);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const onSelectItem = (value: string) => {
    setDropdownValue(value);
    setIsOpen(false);
  };

  return (
    <div>
      <div onClick={toggleDropdown}>{dropdownValue}</div>
      {isOpen && (
        <div>
          {items.map((item) => (
            <DropdownSelectItem
              key={item.id}
              value={item.value}
              onSelectItem={onSelectItem}
            >
              {item.value}
            </DropdownSelectItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownSelect;
