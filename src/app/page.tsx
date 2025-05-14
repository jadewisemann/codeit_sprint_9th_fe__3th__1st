'use client';

import { useState } from 'react';
import Input from './components/Input';

const Home = () => {
  const [password, setPassword] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <Input
        label='비밀번호'
        id='password'
        name='password'
        value={password}
        onChange={handleChange}
        type='password'
        placeholder='비밀번호를 입력하세요'
        error={password ? '' : '비밀번호를 입력하세요'}
      />
    </div>
  );
};

export default Home;
