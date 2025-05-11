'use client';

import { useState } from 'react';
import Input from './components/Input';

export default function Home() {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Input value={value} onChange={handleChange} />
    </div>
  );
}
