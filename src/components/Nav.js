import { IconButton, VStack, useColorModeValue, useDisclosure, chakra, Flex, Button,VisuallyHidden,HStack,Box,CloseButton, LightMode } from '@chakra-ui/react';
// import { AiOutlineMenu } from "@chakra-ui/icons" 
import { HamburgerIcon } from '@chakra-ui/icons'
import React from 'react'
import logo from "./../assets/Finance_logo.png"
import { Link } from 'react-router-dom';

const Nav = () => {
    const bg = useColorModeValue("#ffffff", "gray.800");
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
              <chakra.h1 color={'black'} fontSize="xl" fontWeight="medium" ml="2">
                <img src={logo} />
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
                <Button className='navbutton' color={'black'} variant="ghost">Home</Button>
                </a>
                <a href='/services'>
                <Button className='navbutton' color={'black'} variant="ghost">Services</Button>
                </a>
                <a href='/team'>
                <Button className='navbutton' color={'black'} variant="ghost">Team</Button>
                  </a>
                  <a href='/swap'>
                  
                  <Button className='navbutton' color={'black'} variant=""><p className='w-[70px] h-[38px] p-[6px] rounded-[6px] text-white swapbutton'>Swap</p></Button>
                    </a>
                  <a href='/about'>
                  
                  <Button className='navbutton' mr={10} color={'black'} variant="ghost">About</Button>
                    </a>
                    <a href='/contact'>
                  
                  <Button className='navbutton' color={'black'} variant="ghost">Contact Us</Button>
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
                className='' color={'black'}
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
                <Button className='navbutton' color={'black'} variant="ghost">Home</Button>
                </a>
                <a href='/services'>
                <Button className='navbutton' color={'black'} variant="ghost">Services</Button>
                </a>
                <a href='/team'>
                <Button className='navbutton' color={'black'} variant="ghost">Team</Button>
                  </a>

                  <a className='' href='/swap'>
                  
                  <Button className=' swapbutton navbutton'color={'black'} variant=""><p className='text-white'>Swap</p></Button>
                    </a>
                  
                  <a href='/about'>
                  
                  <Button className='navbutton'color={'black'} variant="ghost">About</Button>
                    </a>

                    <a href='/contact'>
                  
                  <Button className='navbutton' color={'black'} variant="ghost">Contact Us</Button>
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