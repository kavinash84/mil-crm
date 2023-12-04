import React from 'react';
import { Typography, Stack, Container } from '@mui/material';
import Counter from '@/components/Counter/Counter';
import TemplateTester from '@/components/TemplateTester/TemplateTester';

function Home() {
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <TemplateTester />
      {/* <Counter /> */}
    </Container>
  );
}

export default Home;
