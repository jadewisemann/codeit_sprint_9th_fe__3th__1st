'use client';

import { useState } from 'react';
import DropdownItem from './DropdownItem';

interface DropdownProps {
  initialValue: string;
  items: { id: number; value: string }[];
}

const Dropdown = ({ initialValue, items }: DropdownProps) => {
  const [dropdownValue, setDropdownValue] = useState(initialValue);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickItem = (value: string) => {
    setDropdownValue(value);
    setIsOpen(false);
  };

  return (
    <div>
      <div onClick={toggleDropdown}>{dropdownValue}</div>
      {isOpen && (
        <div>
          {items.map((item) => (
            <DropdownItem
              key={item.id}
              value={item.value}
              onClick={onClickItem}
            >
              {item.value}
            </DropdownItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
