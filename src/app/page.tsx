'use client';

import { useState } from 'react';
import Input from './components/Input';

export default function Home() {
  const [value, setValue] = useState<string>('');
  const [touched, setTouched] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  const errorMessage = touched && !value ? '입력해주세요' : '';

  return (
    <div>
      <Input
        id='username'
        label='이름'
        value={value}
        onChange={handleChange}
        placeholder="이름을 입력해 주세요."
        onBlur={handleBlur}
        error={errorMessage}
      />
    </div>
  );
}
