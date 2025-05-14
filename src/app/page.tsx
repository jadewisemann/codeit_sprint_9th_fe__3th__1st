'use client';

import { useState } from 'react';
import Input from './components/Input';

const Home = () => {
  const [value, setValue] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValue(e.target.value);
  };
  return (
    <div className='mx-auto mt-10 max-w-xl space-y-6'>
      <h1 className='mb-4 text-2xl font-bold'>🔍 Input Size 테스트</h1>

      <Input
        label='sm'
        id='sm'
        name='sm'
        value={value}
        type='select'
        onChange={handleChange}
        placeholder='sm'
        size='sm'
      />

      <Input
        label='md'
        id='md'
        name='md'
        value={value}
        type='select'
        onChange={handleChange}
        placeholder='md'
        size='md'
      />

      <Input
        label='lg'
        id='lg'
        name='lg'
        value={value}
        type='password'
        onChange={handleChange}
        placeholder='lg'
        size='lg'
      />

      <Input
        label='xl'
        id='xl'
        name='xl'
        value={value}
        type='password'
        onChange={handleChange}
        placeholder='xl'
        size='xl'
      />
    </div>
  );
};

export default Home;
