import {
  Avatar,
  Container,
  HStack,
  Heading,
  Input,
  Button,
  Text,
  VStack,
  Box,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { uploadResume } from '../../redux/Actions/user';
import Loader from '../loader/Loader';
import { toast } from 'react-hot-toast';

const Profile = () => {
  const [resume, setResume] = useState('');
  const dispatch = useDispatch();
  const { isAuthenticated, user, loading, message } = useSelector(
    state => state.user
  );

  const handleImageChange = e => {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setResume(Reader.result);
      }
    };
    Reader.readAsDataURL(file);
  };
  const submitHandler = async e => {
    e.preventDefault();
    dispatch(uploadResume(resume));
  };
  useEffect(() => {}, [dispatch]);

  if (!isAuthenticated) return <Navigate to={'/login'} />;
  return loading ? (
    <Loader />
  ) : (
    <Container maxW={'container.xl'} p={'16'} minHeight={'100vh'}>
      <HStack
        justifyContent={['center', 'space-between']}
        flexDirection={['column', 'row']}
        textAlign={['center', 'left']}
        gap={10}
      >
        <Avatar src={user.avatar.url} boxSize={40} />
        <VStack alignItems={'left'}>
          <Deatils heading="Title:" text="Software Developer" />
          <Deatils
            heading="About:"
            text="This is Ashish Gupta Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repudiandae, dolore."
          />
        </VStack>
      </HStack>

      <HStack
        marginTop={10}
        width={'100%'}
        justifyContent={'space-between'}
        flexDirection={['column', 'row']}
        gap={5}
      >
        <Deatils heading="Name:" text={user.name} />
        <Deatils heading="Mobile No:" text={user.phone} />
        <Deatils heading="Email:" text={user.email} />
      </HStack>

      <VStack
        spacing={'4'}
        w={['full', '96']}
        m={'auto'}
        my={'16'}
        alignItems={'left'}
      >
        <Heading textAlign={'center'} color={'blue.900'}>
          Upload Resume
        </Heading>
        <Input
          type="file"
          accept=".pdf"
          required
          onChange={handleImageChange}
        />

        <Box textAlign={'center'}>
          {user.resume?.url ? (
            <>
              <a
                href={user.resume.url}
                children="Your Resume Uploaded Successfully"
              />
              <Text color={'purple'}>Upload Your New Resume Now..</Text>
            </>
          ) : (
            <>
              <Text>Upload Your Resume Now..</Text>
            </>
          )}
        </Box>
        <Button colorScheme="blue" disabled={loading} onClick={submitHandler}>
          Upload
        </Button>
      </VStack>
    </Container>
  );
};

const Deatils = ({ heading = '', text = '' }) => (
  <>
    <Heading color={'blue.900'}>{`${heading}`} </Heading>
    <Text>{text}</Text>
  </>
);

export default Profile;
