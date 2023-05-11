import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { loginUser } from '../../redux/Actions/user';
import Loader from '../loader/Loader';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector(state => state.user);

  const submitHandler = async e => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  if (isAuthenticated) return <Navigate to={'/'} />;
  return loading ? (
    <Loader />
  ) : (
    <Container maxW={'container.xl'} p={'16'} minHeight={'100vh'}>
      <form onSubmit={submitHandler}>
        <VStack
          spacing={'4'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
          alignItems={'stretch'}
        >
          <Heading textAlign={'center'}>Welcome Back</Heading>
          <Input
            placeholder="Email"
            type="email"
            required
            focusBorderColor="blue"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
          <Input
            placeholder="Password"
            type="password"
            required
            focusBorderColor="blue"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
          <Button type="submit" colorScheme="blue" disabled={loading}>
            Log In
          </Button>
          <Text padding={10} textAlign={'right'}>
            Already have Account ?{' '}
            <Button variant={'link'} colorScheme="blue">
              <Link to={'/register'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
