import clsx from "clsx";
import { useState } from "react";

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  error?: string;
  onBlur?: () => void;
  label?: string;
  id?: string;
};

export default function Input({
  value,
  onChange,
  placeholder = '',
  type = 'text',
  error,
  onBlur,
  label,
  id,
}: InputProps) {
  const inputClass = clsx(
    'w-full rounded-xl px-4 py-2',
    error
      ? 'border border-red-500 focus:border-red-500 focus:ring-red-500 focus:outline-red-500'
      : 'border border-gray-300  focus:border-black focus:ring-black focus:outline-black'
  );

  return (
    <div>
      {label && (
        <label htmlFor={id} className="mb-2 block text-lg font-bold text-gray-700">
          {label}
        </label>
      )}
      <input
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        onBlur={onBlur}
        className={inputClass}
      />
      {error && <p className='mt-1 text-sm text-red-500'>{error}</p>}
    </div>
  );
}