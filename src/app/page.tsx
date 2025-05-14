'use client';

import { useState } from 'react';
import Input from './components/Input';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleEmailChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setPassword(e.target.value);
  };

  const handlePhoneChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setPhone(e.target.value);
  };

  return (
    <div>
      <Input
        id='email'
        name='email'
        label='이메일'
        type='email'
        value={email}
        onChange={handleEmailChange}
        placeholder='example@domain.com'
        required
        pattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
        validateMessage='올바른 이메일 형식을 입력해주세요'
      />

      <Input
        id='password'
        name='password'
        label='비밀번호'
        type='password'
        value={password}
        onChange={handlePasswordChange}
        placeholder='비밀번호를 입력하세요'
        required
        minLength={8}
        pattern={/^(?=.*[a-zA-Z])(?=.*\d).{6,}$/}
        validateMessage='비밀번호는 영문과 숫자를 포함하여 8자 이상이어야 합니다'
      />

      <Input
        id='phone'
        name='phone'
        label='전화번호'
        type='text'
        value={phone}
        onChange={handlePhoneChange}
        placeholder='010-1234-5678'
        pattern={/^010-\d{3,4}-\d{4}$/}
        validateMessage='010-1234-5678 형식으로 입력해주세요'
      />
    </div>
  );
};

export default Home;
