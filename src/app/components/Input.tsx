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
  useSelect?: boolean;
  options?: { label: string; value: string }[];
  defaultOptionLabel?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoComplete?: string;
  required?: boolean;
  minLength?: number;
  pattern?: RegExp;
  validateMessage?: string;
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
  useSelect = false,
  options = [],
  defaultOptionLabel = '선택해주세요',
  disabled,
  readOnly,
  autoComplete,
  required,
  minLength,
  pattern,
  validateMessage,
}: InputProps) => {
  const [show, setShow] = useState(false);
  const [touched, setTouched] = useState(false);

  const isPasswordType = type === 'password';
  const inputType = isPasswordType && show ? 'text' : type;

  const isUnselected = useSelect && touched && value === '';

  const inputClass = clsx(
    'w-full rounded-xl px-4 py-2',
    useSelect && 'appearance-none pr-10',
    isPasswordType && 'pr-10',
    error
      ? 'border border-red-500 focus:outline-red-500'
      : isUnselected
        ? 'border border-orange-400 focus:outline-orange-400'
        : 'border border-gray-300 focus:outline-gray-800'
  );

  const chevronClass = clsx(
    'pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 transition-colors',
    isUnselected
      ? 'text-orange-400'
      : 'text-gray-300 group-focus-within:text-gray-800'
  );

  const renderOption = (option: { label: string; value: string }) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  );

  const handleBlur = () => {
    setTouched(true);
    onBlur?.();
  };

  const autoCompleteValue =
    autoComplete
    ?? (type === 'email'
      ? 'email'
      : isPasswordType
        ? 'current-password'
        : type === 'new-password'
          ? 'new-password'
          : 'off');

  const shouldShowError =
    touched
    && ((required && !value)
      || (minLength && value.length < minLength)
      || (pattern && !pattern.test(value)));

  const errorMessage =
    validateMessage
    ?? (!value && required
      ? `${label}을 입력하세요`
      : minLength && value.length < minLength
        ? `${minLength}자 이상 입력하세요`
        : pattern && !pattern.test(value)
          ? '형식이 올바르지 않습니다'
          : '');

  return (
    <div>
      {label && (
        <label
          id={`${id}-label`}
          htmlFor={id}
          className='mb-2 block text-lg font-bold text-gray-800'
        >
          {label}
        </label>
      )}
      {useSelect ? (
        <div className='group relative'>
          <select
            value={value}
            onChange={onChange}
            onBlur={handleBlur}
            className={inputClass}
            name={name}
            id={id}
            disabled={disabled}
            aria-labelledby={label ? `${id}-label` : undefined}
          >
            <option value=''>{defaultOptionLabel}</option>
            {options?.map(renderOption)}
          </select>
          <div className={chevronClass} aria-hidden='true'>
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
            onBlur={handleBlur}
            className={inputClass}
            disabled={disabled}
            readOnly={readOnly}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
            autoComplete={autoCompleteValue}
          />
          {isPasswordType && (
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
      {shouldShowError && (
        <p id={`${id}-error`} className='mt-1 text-sm text-red-500'>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default Input;
