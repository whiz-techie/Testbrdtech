import { IconButton, VStack, useColorModeValue, useDisclosure, chakra, Flex, Button,VisuallyHidden,HStack,Box,CloseButton, LightMode } from '@chakra-ui/react';
// import { AiOutlineMenu } from "@chakra-ui/icons" 
import { HamburgerIcon } from '@chakra-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    const bg = useColorModeValue("#666DB3", "gray.800");
    const mobileNav = useDisclosure();
    return (
      <React.Fragment>
        <chakra.header
          bg={bg}
          w="full"
          px={{
            base: 2,
            sm: 4,
          }}
          py={4}
          shadow="md"
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Flex>
              <chakra.a
                href="/"
                title="Choc Home Page"
                display="flex"
                alignItems="center"
              >
                {/* <Logo /> */}
                <VisuallyHidden>Choc</VisuallyHidden>
              </chakra.a>
              <chakra.h1 color={'white'} fontSize="xl" fontWeight="medium" ml="2">
                logo
              </chakra.h1>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={1}
                mr={1}
                color="brand.500"
                display={{
                  base: "none",
                  md: "inline-flex",
                }}
              >
                <div className=''>

                <a href='/'> 
                <Button className='navbutton' color={'white'} variant="ghost">Home</Button>
                </a>
                <a href='/services'>
                <Button className='navbutton' color={'white'} variant="ghost">Services</Button>
                </a>
                <a href='/team'>
                <Button className='navbutton' color={'white'} variant="ghost">Team</Button>
                  </a>
                  <a href='/about'>
                  
                  <Button className='navbutton' mr={10} color={'white'} variant="ghost">About</Button>
                    </a>
                    <a href='/contact'>
                  
                  <Button className='navbutton' color={'white'} variant="ghost">Contact Us</Button>
                    </a> 
               
                </div>
              </HStack>
                
              <Box
              className=''
                display={{
                  base: "inline-flex",
                  md: "none",
                }}
              >
                <IconButton
                  display={{
                    base: "flex",
                    md: "none",
                  }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="gray.800"
                  _dark={{
                    color: "inherit",
                  }}
                  variant="ghost"
                  icon={<HamburgerIcon
                    value={{ color: 'blue', }}
                    />}
                  onClick={mobileNav.onOpen}
                />
  
                <VStack
                zIndex={100}
                className='navbutton' color={'white'}
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    
                    className='navclose '
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />
          <a href='/'> 
                <Button className='navbutton' color={'white'} variant="ghost">Home</Button>
                </a>
                <a href='/services'>
                <Button className='navbutton' color={'white'} variant="ghost">Services</Button>
                </a>
                <a href='/team'>
                <Button className='navbutton' color={'white'} variant="ghost">Team</Button>
                  </a>
                  <a href='/about'>
                  
                  <Button className='navbutton'color={'white'} variant="ghost">About</Button>
                    </a>
                    <a href='/contact'>
                  
                  <Button className='navbutton' color={'white'} variant="ghost">Contact Us</Button>
                    </a> 
                </VStack>
              </Box>
            </HStack>
          </Flex>
        </chakra.header>
      </React.Fragment>
    );
  };
  export default Nav