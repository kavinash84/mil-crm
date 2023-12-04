import {
  Box,
  Stack,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Link,
  IconButton,
  FormControl,
  InputLabel,
} from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '@emotion/react';
import AuthOutlet from './AuthOutlet';
// import loginBgImage from '@/assets/images/login_page_bg.png';

function Login() {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const loginHandler = async (e) => {
    e.preventDefault();
    const user = email.current.value.replace(/\s+/g, '');
    const pwd = password.current.value.replace(/\s+/g, '');
    if (user === '') {
      // Please enter your email.
      email.current.focus();
    } else if (pwd === '') {
      // 'Please enter your password.'
      password.current.focus();
    } else {
      // do login stuff
    }
  };

  /** Focus email input when component mounted. */
  useEffect(() => {
    email.current.focus();
  }, []);

  return (
    <AuthOutlet header="Login">
      <TextField
        inputRef={email}
        type="email"
        label="E-mail"
        variant="outlined"
        autoComplete="off"
        required
      />

      {/* <FormControl variant="standard">
        <InputLabel shrink htmlFor="bootstrap-input">
          Bootstrap
        </InputLabel>
        <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" />
      </FormControl> */}

      <Stack gap={3}>
        <TextField
          inputRef={password}
          type={showPassword ? 'text' : 'password'}
          label="Password"
          variant="outlined"
          sx={{ '& .MuiInputBase-root ': { pr: '4px' } }}
          autoComplete="new-password"
          InputProps={{
            // <-- This is where the toggle button sis added.
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Link
          variant="CTA2"
          textAlign="right"
          // onClick={() => navigate('/forgot-password')}
          // sx={{ fontSize: '16px !important', weight: '300 !important', color: '#3d3d3d !important' }}
        >
          Forgot password?
        </Link>

        <Button variant="contained" onClick={loginHandler}>
          Login
        </Button>
      </Stack>
      {/* <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="body2" component="p">
          Dont you have an account?
        </Typography>
        <Link
          variant="body2"
          sx={{ display: 'inline', ml: 1 }}
          onClick={() => navigate('/register')}
        >
          Register
        </Link>
      </Box> */}
    </AuthOutlet>
  );
}

export default Login;
