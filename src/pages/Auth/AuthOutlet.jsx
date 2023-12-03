import React from 'react';
import { Stack, useTheme, Typography } from '@mui/material';
import { FormSX } from './Auth.styles';
import loginBgImage from '@/assets/images/login_page_bg.png';

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
      }}
    >
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
