interface DropdownSelectItemProps {
  value: string;
  onSelectItem: (value: string) => void;
  children: React.ReactNode;
}

const DropdownSelectItem = ({
  value,
  onSelectItem,
  children,
}: DropdownSelectItemProps) => (
  <div onClick={() => onSelectItem(value)}>{children}</div>
);

export default DropdownSelectItem;
