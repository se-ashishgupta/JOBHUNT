import React from 'react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/Actions/user';

const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link to={url}>
    <Button variant={'ghost'} onClick={onClose}>
      {title}
    </Button>
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.user);

  const logoutHandler = () => {
    dispatch(logoutUser());
  };
  return (
    <div>
      <ColorModeSwitcher />

      <Button
        onClick={onOpen}
        colorScheme="blue"
        width={12}
        height={12}
        rounded={'full'}
        position={'fixed'}
        top={6}
        left={6}
      >
        <RiMenu5Fill />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth={'1px'} textAlign={'center'}>
            JOB HUNT
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} alignItems={'flex-start'}>
              <LinkButton url="/" title="Home" onClose={onClose} />
              {isAuthenticated && (
                <LinkButton url="/profile" title="Profile" onClose={onClose} />
              )}
            </VStack>

            <HStack
              justifyContent={'space-evenly'}
              position={'absolute'}
              bottom={'2rem'}
              width={'80%'}
            >
              {isAuthenticated ? (
                <>
                  <VStack>
                    <HStack onClick={onClose}>
                      <Button onClick={logoutHandler}>
                        <RiLogoutBoxLine />
                        Logout
                      </Button>
                    </HStack>
                  </VStack>
                </>
              ) : (
                <>
                  <Link to={'/profile'}>
                    <Button colorScheme={'blue'} onClick={onClose}>
                      Login
                    </Button>
                  </Link>
                  <p>or</p>
                  <Link to={'/register'} onClick={onClose}>
                    <Button colorScheme={'blue'}>Sign Up</Button>
                  </Link>
                </>
              )}
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Header;
