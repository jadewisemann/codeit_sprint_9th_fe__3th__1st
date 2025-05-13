'use client';

import { useState } from 'react';
import Input from './components/Input';

const Home = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValue(e.target.value);
  };

  const festivalOptions = [
    { label: '서울재즈페스티벌', value: 'seoul_jazz' },
    { label: '월드디제이페스티벌', value: 'world_dj' },
    { label: '그린플러그드', value: 'greenplugged' },
  ];

  return (
    <div>
      <Input
        label='페스티벌 선택'
        id='festival'
        name='festival'
        useSelect
        value={value}
        onChange={handleChange}
        options={festivalOptions}
        defaultOptionLabel='페스티벌을 선택해 주세요'
      />
    </div>
  );
};

export default Home;
