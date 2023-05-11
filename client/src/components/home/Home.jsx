import { Button, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import vg from '../../assets/images/bg.png';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height={'100%'}
          justify={['center', 'space-between']}
          alignItems={'center'}
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing={6}
          >
            <Heading children="JOB HUNT" size={'2xl'} />
            <Heading children="GET JOB WITH US" size={'xl'} />
            <Text
              fontSize={'2xl'}
              fontFamily={'cursive  '}
              textAlign={['center', 'left']}
              children="Register Now To Get Your Dream Job"
            />
            <Link to="/register">
              <Button colorScheme="blue">Register Now !</Button>
            </Link>
          </VStack>
          <Image
            className="vector-graphics"
            boxSize={'md'}
            src={vg}
            objectFit={'contain'}
          />
        </Stack>
      </div>
    </section>
  );
};

export default Home;
