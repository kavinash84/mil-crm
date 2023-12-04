import React from 'react';
import { Stack, useTheme, Typography } from '@mui/material';
import { FormSX } from './Auth.styles';
import loginBgImage from '@/assets/images/login_page_bg.png';
import logo1 from '@/assets/images/logo1.png';

function AuthOutlet({ children, header }) {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundImage: `url(${loginBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        position: 'relative',
      }}
    >
      <div
        style={{ width: '35%', position: 'absolute', top: '42%', left: '10%' }}
      >
        <img
          src={logo1}
          alt="logo1"
          style={{ width: '100%', objectFit: 'contain' }}
        />
      </div>
      <form>
        <Stack
          gap={3}
          sx={{
            ...FormSX,
            border: `1px solid ${theme.palette.grey[100]}`,
            backgroundColor: '#f5f5f5f7',
          }}
        >
          {header && (
            <Typography textAlign="left" variant="h1Hero">
              {header}
            </Typography>
          )}
          {children}
        </Stack>
      </form>
    </div>
  );
}

export default AuthOutlet;
