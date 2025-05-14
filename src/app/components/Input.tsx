import { useState } from 'react';
import clsx from 'clsx';
import { ChevronDown, Eye, EyeOff } from 'lucide-react';

export type InputType =
  | 'text'
  | 'email'
  | 'password'
  | 'new-password'
  | 'tel'
  | 'select';

interface ValidationType {
  required?: boolean;
  minLength?: number;
  pattern?: RegExp;
  validateMessage?: string;
}

interface InputProps {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  placeholder?: string;
  type?: InputType;
  onBlur?: () => void;
  label?: string;
  id?: string;
  name?: string;
  options?: { label: string; value: string }[];
  defaultOptionLabel?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoComplete?: string;
  error?: ValidationType;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const SIZE_MAP = {
  sm: {
    input: 'text-sm py-1.5 px-3',
    label: 'text-sm',
    icon: 'right-3',
    iconSize: 16,
    inputPaddingRight: 'pr-8',
  },
  md: {
    input: 'text-md py-2 px-4',
    label: 'text-md',
    icon: 'right-3',
    iconSize: 18,
    inputPaddingRight: 'pr-9',
  },
  lg: {
    input: 'text-lg py-3 px-5',
    label: 'text-lg',
    icon: 'right-4',
    iconSize: 20,
    inputPaddingRight: 'pr-10',
  },
  xl: {
    input: 'text-xl py-4 px-6 pr-12',
    label: 'text-xl',
    icon: 'right-4',
    iconSize: 24,
    inputPaddingRight: 'pr-12',
  },
} as const;

const Input = ({
  value,
  onChange,
  placeholder = '',
  type = 'text',
  onBlur,
  label,
  id,
  name,
  options = [],
  defaultOptionLabel = '선택해주세요',
  disabled,
  readOnly,
  autoComplete,
  error,
  size = 'md',
  className,
}: InputProps) => {
  const [show, setShow] = useState(false);
  const [touched, setTouched] = useState(false);

  const isSelectType = type === 'select';
  const isPasswordType = type === 'password' || type === 'new-password';
  const inputType = isPasswordType && show ? 'text' : type;
  const isUnselected = isSelectType && touched && value === '';
  const sizeMap = SIZE_MAP[size];

  const baseInput = 'w-full rounded-xl';
  const rightPadding =
    isSelectType || isPasswordType ? sizeMap.inputPaddingRight : '';

  const inputClass = clsx(
    baseInput,
    sizeMap.input,
    rightPadding,
    isSelectType && 'appearance-none',
    touched && error?.required && !value
      ? 'border border-red-500 focus:outline-red-500'
      : isUnselected
        ? 'border border-orange-400 focus:outline-orange-400'
        : 'border border-gray-300 focus:outline-gray-800'
  );

  const chevronClass = clsx(
    'pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 transition-colors',
    sizeMap.icon,
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
    if (!touched) setTouched(true);
    onBlur?.();
  };

  let autoCompleteValue = autoComplete;

  if (!autoCompleteValue) {
    switch (type) {
    case 'email':
      autoCompleteValue = 'email';
      break;
    case 'password':
      autoCompleteValue = 'current-password';
      break;
    case 'new-password':
      autoCompleteValue = 'new-password';
      break;
    default:
      autoCompleteValue = 'off';
    }
  }

  const shouldShowError = (): boolean => {
    if (!touched) return false;
    if (error?.required && !value) return true;
    if (error?.minLength && value.length < error.minLength) return true;
    if (error?.pattern && !error.pattern.test(value)) return true;
    return false;
  };

  const showError = shouldShowError();

  const getErrorMessage = () => {
    if (error?.validateMessage) return error.validateMessage;
    if (!value && error?.required) return `${label}을 입력하세요`;
    if (error?.minLength && value.length < error.minLength)
      return `${error.minLength}자 이상 입력하세요`;
    if (error?.pattern && !error.pattern.test(value))
      return '형식이 올바르지 않습니다';
    return '';
  };

  const errorMessage = showError ? getErrorMessage() : '';

  return (
    <div className={className}>
      {label && (
        <label
          id={`${id}-label`}
          htmlFor={id}
          className={clsx(
            'mb-2 block text-lg font-bold text-gray-800',
            sizeMap.label
          )}
        >
          {label}
        </label>
      )}
      {isSelectType ? (
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
            <ChevronDown size={sizeMap.iconSize} />
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
            aria-invalid={showError}
            aria-describedby={showError ? `${id}-error` : undefined}
            autoComplete={autoCompleteValue}
          />
          {isPasswordType && (
            <button
              type='button'
              onClick={() => setShow(!show)}
              aria-label={show ? '비밀번호 숨기기' : '비밀번호 보기'}
              className={clsx(
                'absolute top-1/2 -translate-y-1/2 text-gray-500',
                sizeMap.icon
              )}
            >
              {show ? (
                <EyeOff size={sizeMap.iconSize} />
              ) : (
                <Eye size={sizeMap.iconSize} />
              )}
            </button>
          )}
        </div>
      )}
      {showError && (
        <p id={`${id}-error`} className='mt-1 text-sm text-red-500'>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default Input;
