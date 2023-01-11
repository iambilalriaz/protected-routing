import { KeyboardEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../layouts';

const Login = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const onLogin = () => {
    if (username) {
      setUsername('');
      localStorage.setItem('user', username);
      navigate(localStorage.getItem('redirect_route') || '/');
    }
  };
  const handleEnterPress = (e: KeyboardEvent) => {
    if (e?.key === 'Enter') {
      onLogin();
    }
  };
  return (
    <Layout>
      <div className='login-form'>
        <p>Username</p>
        <input
          value={username}
          onChange={(e) => setUsername(e?.target?.value)}
          onKeyDown={handleEnterPress}
        />
        <button onClick={onLogin}>Submit</button>
      </div>
    </Layout>
  );
};

export default Login;
