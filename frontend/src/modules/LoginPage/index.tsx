import { useState } from "react";
import loginApi from "./api/login";
import { useRouter } from "next/router";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
  
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    };
  
    const handleLogin = async () => {
      // Implemented Login logic
      console.log('Logging in with username:', username, 'and password:', password);
      try {
        const userData = await loginApi.loginUser(username, password);
        console.log('User logged in:');
        console.log(userData);
        // Handle successful login to redirect to homePage based on userRole:
        if(userData){
          router.push('/home');
        }

      } catch (error) {
        console.error('Error logging in:', error);
        // Handle login error, e.g., display an error message
      }
    };
  
    const handleSignup = () => {
      // Implement navigation to signup page.
      console.log('Navigating to the signup page');
    };
  
    return (
      <div>
        <h1>User Login</h1>
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