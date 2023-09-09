import React, { useState } from 'react';
import axios from 'axios';
function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', { username, password });
      
            if (response.status === 200) {
              // Successful login, you can redirect or perform other actions here
              console.log(response.data.message);
            } else {
              // Handle login error
              console.error('Login failed');
            }
          } catch (error) {
            console.error(error);
          }
        console.log('Username:', username);
        console.log('Password:', password);
    }
    return (
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username/Email:</label>
                    <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                    type="text"
                    value={password}
                    onChange={handlePasswordChange}
                />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
export default LoginForm;