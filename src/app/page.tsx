'use client';

import { useState } from 'react';
import Input from './components/Input';

const Home = () => {
  const [email, setEmail] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setEmail(e.target.value);
  };

  return (
    <div className='space-y-6 rounded-lg bg-gray-50 p-6 shadow-md'>
      <Input
        label='이메일'
        id='email'
        name='email'
        type='email'
        value={email}
        onChange={handleChange}
        placeholder='example@email.com'
        error={{
          required: true,
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          validateMessage: '유효한 이메일 형식을 입력해주세요',
        }}
        size='md'
      />
    </div>
  );
};

export default Home;
