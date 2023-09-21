// src/App.js

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    axios.post('/api/register', { username, password })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogin = () => {
    axios.post('/api/login', { username, password })
      .then((response) => {
        console.log(response.data.message);
        // Store the JWT token and handle authentication
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Login System</h1>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default App;
