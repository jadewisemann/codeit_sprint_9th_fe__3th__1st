import { useState } from 'react';
import clsx from 'clsx';
import { ChevronDown, Eye, EyeOff } from 'lucide-react';

interface InputProps {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  placeholder?: string;
  type?: string;
  error?: string;
  onBlur?: () => void;
  label?: string;
  id?: string;
  name?: string;
  isPassword?: boolean;
  useSelect?: boolean;
  options?: { label: string; value: string }[];
  defaultOptionLabel?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

const Input = ({
  value,
  onChange,
  placeholder = '',
  type = 'text',
  error,
  onBlur,
  label,
  id,
  name,
  isPassword = false,
  useSelect = false,
  options = [],
  defaultOptionLabel = '선택해주세요',
  disabled,
  readOnly,
}: InputProps) => {
  const [show, setShow] = useState(false);
  const inputType = isPassword ? (show ? 'text' : 'password') : type;

  const isUnselected = useSelect && value === '';

  const inputClass = clsx(
    'w-full rounded-xl px-4 py-2',
    useSelect && 'appearance-none pr-10',
    isPassword && 'pr-10',
    error
      ? 'border border-red-500 focus:border-red-500 focus:ring-red-500 focus:outline-red-500'
      : isUnselected
        ? 'border border-orange-400 focus:border-orange-400 focus:ring-orange-400 focus:outline-orange-400'
        : 'border border-gray-300  focus:border-black focus:ring-black focus:outline-black'
  );

  const renderOption = (option: { label: string; value: string }) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  );

  return (
    <div>
      {label && (
        <label
          id={`${id}-label`}
          htmlFor={id}
          className='mb-2 block text-lg font-bold text-gray-700'
        >
          {label}
        </label>
      )}
      {useSelect ? (
        <div className='relative'>
          <select
            value={value}
            onChange={onChange}
            className={inputClass}
            name={name}
            id={id}
            disabled={disabled}
            aria-labelledby={label ? `${id}-label` : undefined}
          >
            <option value=''>{defaultOptionLabel}</option>
            {options?.map(renderOption)}
          </select>
          <div
            className='pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-gray-500'
            aria-hidden='true'
          >
            <ChevronDown size={20} />
          </div>
        </div>
      ) : (
        <div className='relative'>
          <input
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={inputType}
            onBlur={onBlur}
            className={inputClass}
            disabled={disabled}
            readOnly={readOnly}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
          />
          {isPassword && (
            <button
              type='button'
              onClick={() => setShow(!show)}
              aria-label={show ? '비밀번호 숨기기' : '비밀번호 보기'}
              className='absolute top-1/2 right-3 -translate-y-1/2 text-gray-500'
            >
              {show ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}
        </div>
      )}
      {error && (
        <p id={`${id}-error`} className='mt-1 text-sm text-red-500'>
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
