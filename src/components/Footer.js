import { Box, Divider, Flex, HStack, Icon, Image, Link, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaFacebookF, FiTwitter, GrInstagram, FaLinkedinIn } from '@chakra-ui/icons'
import logo from "../assets/Finance_logo.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div >
      <Box
      className=''
  bg="white"
  _dark={{
    bg: "gray.500",
  }}
>
  <Stack
    direction={{
      base: "column",
      lg: "row",
    }}
    w="full"
    justify="space-around"
    p={10}
  >
    {/* <Flex justify="center">
      <Image
        src="http://placehold.jp/2a2a2c/ffffff/200x100.png?text=Company%20Logo&css=%7B%22font-size%20%22%3A%22%2016px%22%7D"
        alt="Company Logo"
        rounded="lg"
        width={{
          base: "150px",
          lg: "200px",
        }}
        height={{
          base: "75px",
          lg: "100px",
        }}
        my={{
          base: 2,
          lg: 0,
        }}
      />
    </Flex> */}
    <HStack
          alignItems="start"
          flex={1}
          justify="space-around"
          fontSize={{
            base: "12px",
            md: "16px",
          }}
          color="gray.800"
          _dark={{
            color: "white",
          }}
          textAlign={{
            base: "center",
            md: "left",
          }}
    >
      <Flex justify="start" direction="column">
          <Image width={"100px"} height={"110px"} src={logo} ></Image>
      </Flex>  
   
    </HStack>
    <HStack
      alignItems="start"
      flex={1}
      justify="space-around"
      fontSize={{
        base: "12px",
        md: "16px",
      }}
      color="gray.800"
      _dark={{
        color: "white",
      }}
      textAlign={{
        base: "center",
        md: "left",
      }}
    >
      <Flex className=' font-semibold text-[#EBA91F]' justify="start" direction="column">
        <Link href='/' textTransform="uppercase">Home</Link>
        <Link href='/services' textTransform="uppercase">Services</Link>
        <Link href='contact' textTransform="uppercase">Contact us</Link>
        
      </Flex>

      <Flex className=' font-semibold text-[#EBA91F]' justify="start" direction="column">
        <Link href='/team' textTransform="uppercase">Team</Link>
        <Link href='/swap' textTransform="uppercase">Swap</Link>
        <Link href='/about' textTransform="uppercase">About</Link>
      </Flex>
    </HStack>

  </Stack>
  <Divider
    w="95%"
    mx="auto"
    color="gray.600"
    _dark={{
      color: "#F9FAFB",
    }}
    h="3.5px"
  />
  <VStack py={3}>
    <HStack justify="center">
      <Link>
        <FaFacebook
          color="gray.800"
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
          
        />
      </Link>
      <Link>
        <FaTwitter
          color="gray.800"
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
        />
      </Link>
      <a>
        
      </a>
      <Link>
        <FaInstagram
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
        />
      </Link>
      <Link>
        <FaLinkedin
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
        />
      </Link>
    </HStack>

    <Text
      textAlign="center"
      fontSize="smaller"
      _dark={{
        color: "white",
      }}
    >
      &copy;Copyright. All rights reserved.
    </Text>
  </VStack>
</Box>

    </div>
  )
}

export default Footer