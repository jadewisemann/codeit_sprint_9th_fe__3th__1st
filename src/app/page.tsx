'use client';

import { useState } from 'react';
import Input from './components/Input';

const Home = () => {
  const [festival, setFestival] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFestival(e.target.value);
  };

  const festivalOptions = [
    { label: '서울재즈페스티벌', value: 'seoul-jazz' },
    { label: '월드디제이페스티벌', value: 'world-dj' },
    { label: '그린플러그드', value: 'greenplugged' },
  ];

  return (
    <div className='space-y-6 rounded-lg bg-gray-50 p-6 shadow-md'>
      <Input
        label='참여할 페스티벌'
        id='festival'
        name='festival'
        type='select'
        value={festival}
        onChange={handleChange}
        options={festivalOptions}
        defaultOptionLabel='페스티벌을 선택해주세요'
        size='md'
      />
    </div>
  );
};

export default Home;
