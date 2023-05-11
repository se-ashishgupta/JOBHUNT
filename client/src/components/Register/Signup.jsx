import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/Actions/user';
import Loader from '../loader/Loader';

const Signup = () => {
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector(state => state.user);

  const handleImageChange = e => {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatar(Reader.result);
      }
    };
    Reader.readAsDataURL(file);
  };

  const submitHandler = async e => {
    e.preventDefault();
    dispatch(registerUser(avatar, name, email, phone, password));
  };
  if (isAuthenticated) return <Navigate to={'/'} />;
  return loading ? (
    <Loader />
  ) : (
    <Container maxW={'container.xl'} p={'16'}>
      <form onSubmit={submitHandler}>
        <VStack
          spacing={'4'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
          alignItems={'stretch'}
        >
          <Heading textAlign={'center'}>JOB HUNT</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} src={avatar} alt="User" />
          <Input
            type="file"
            accept="image/png, image/jpeg,image/jpg"
            required
            onChange={handleImageChange}
          />

          <Input
            placeholder="Name"
            type="text"
            required
            focusBorderColor="blue"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
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
            placeholder="Mobile No"
            type="text"
            required
            focusBorderColor="blue"
            value={phone}
            onChange={e => {
              setPhone(e.target.value);
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
            Sign Up
          </Button>
          <Text padding={10} textAlign={'right'}>
            Already Signed Up ?{' '}
            <Button variant={'link'} colorScheme="blue">
              <Link to={'/login'}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
