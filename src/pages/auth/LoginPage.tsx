import React, { useState } from 'react';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulate login logic
      if (!email || !password) {
        throw new Error('Email and password are required');
      }
      // Assume a login function is available
      await login({ email, password, rememberMe });
      console.log('Login successful');
    } catch (error) {
      console.error('Login failed:', error);
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('An unknown error occurred');
      }
    }
  };

  return (
    <div className="login-page">
      <div className='bg-slate-400 h-10 w-full rounded-md z-100'></div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="rememberMe">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember Me
          </label>
        </div>
        <button type="submit">Login</button>
        <div className='bg-red-600 rounded-sm w-10 h-10'>new button</div>
      </form>
      <a href="/forgot-password">Forgot Password?</a>
    </div>
  );
};

function login(arg0: { email: string; password: string; rememberMe: boolean; }) {
  throw new Error('Function not implemented.');
}
