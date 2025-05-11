import { useState } from "react";

type InputProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
}

export default function Input({
    value,
    onChange,
    placeholder = "",
    type = "text",
}: InputProps) {
    return (
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        className='w-full rounded-md border border-gray-300 px-4 py-2 focus:border-black focus:outline-none'
      />
    );
}