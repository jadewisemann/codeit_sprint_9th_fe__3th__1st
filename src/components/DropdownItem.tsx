interface DropdownItemProps {
  value: string;
  onClick: (value: string) => void;
  children: React.ReactNode;
}

const DropdownItem = ({ value, onClick, children }: DropdownItemProps) => (
  <div onClick={() => onClick(value)}>{children}</div>
);

export default DropdownItem;
