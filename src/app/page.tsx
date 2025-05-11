'use client';

import { useState } from 'react';
import Input from './components/Input';

export default function Home() {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const error = value.length < 1 ? '입력해주세요.' : '';

  return (
    <div>
      <Input value={value} onChange={handleChange} placeholder='할 일의 제목을 적어주세요.' error={error} />
    </div>
  );
}
