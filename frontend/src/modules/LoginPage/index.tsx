import { useState } from "react";
import loginApi from "./api/login";
import { useRouter } from "next/router";
import { Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { LoginForm, LoginPaper } from "./styles";
import Snackbar from "@mui/material/Snackbar";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
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
        // Handle successful login to redirect to homePage based on userRole:
        if(userData){
          router.push('/home');
        }
        else{
          setSnackbarMessage("Login failed. Incorrect username or password.");
          setIsSnackbarOpen(true);
        }

      } catch (error) {
        console.error('Error logging in:', error);
        // Handle login error by displaying an error message
        setSnackbarMessage("Login failed: "+ error);
        setIsSnackbarOpen(true);
      }
    };
  
    const handleSignup = () => {
      // Implement navigation to signup page.
      console.log('Navigating to the signup page');
    };
  
    return (
      <Container component="main" maxWidth="xs" style={{ padding: '20px' }}>
        <LoginPaper>
          <Paper elevation={3}>
            <Typography variant="h5" style={{ marginTop: '10px' }}>
              User Login
              </Typography>
            <LoginForm>
            <form noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                style={{ marginBottom: '10px' }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                style={{ marginBottom: '20px' }}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleLogin}
              >
                Login
              </Button>
              <Grid container justifyContent="flex-end" style={{ marginTop: '10px' }}>
                <Grid item>
                  <Button variant="text" onClick={handleSignup}>
                    Signup
                  </Button>
                </Grid>
              </Grid>
            </form>
            </LoginForm>
            <Snackbar
              open={isSnackbarOpen}
              autoHideDuration={4000} // Adjust the duration as needed
              onClose={() => setIsSnackbarOpen(false)}
              message={snackbarMessage}
            />
        </Paper>
      </LoginPaper>
    </Container>
    );
  };
  
  export default LoginPage;