import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert('Please fill all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
      });

      const { token } = response.data;

      // حفظ التوكن
      localStorage.setItem('token', token);

      // الانتقال إلى صفحة الـ Dashboard
      navigate('/dashboard');
    } catch (err) {
      console.error('Registration error:', err);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Create account</h2>
      <form onSubmit={handleRegister} className="form-group">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          placeholder="you@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          placeholder="Minimum 6 characters"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="btn-login">Register</button>
      </form>
    </div>
  );
};

export default Register;