import { Center, Container, Spinner } from '@chakra-ui/react';
import React from 'react';

const Loader = () => {
  return (
    <Container
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      minHeight={'100vh'}
    >
      <Spinner boxSize={45} />
    </Container>
  );
};

export default Loader;
