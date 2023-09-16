import { useState } from "react";
import loginApi from "./api/login";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    };
  
    const handleLogin = async () => {
      // Here, you can implement the login logic, such as sending a POST request to your backend.
      console.log('Logging in with username:', username, 'and password:', password);
      try {
        const userData = await loginApi.loginUser(username, password);
        console.log('User logged in:', userData);
        // Handle successful login, such as setting user state or redirecting
      } catch (error) {
        console.error('Error logging in:', error);
        // Handle login error, e.g., display an error message
      }
    };
  
    const handleSignup = () => {
      // Here, you can implement the signup logic or navigate to the signup page.
      console.log('Navigating to the signup page');
    };
  
    return (
      <div>
        <h1>Login</h1>
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
            <button type="button" onClick={handleSignup}>
              Signup
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default LoginPage;