import React from 'react'
import { Icon, IconButton, VStack, useColorModeValue, useDisclosure, chakra, Flex, Button,VisuallyHidden,HStack,Box,CloseButton } from '@chakra-ui/react';


const Banner2 = ({text}) => {
    const bg = useColorModeValue("transparent", "gray.800");
    return (
      <Box className='mb-[30px]' pos="relative" overflow="hidden" bg={bg}>
        <Box maxW="7xl" mx="auto">
          <Box
            pos="relative"
            // pb={{
            //   base: 8,
            //   sm: 16,
            //   md: 20,
            //   lg: 28,
            //   xl: 32,
            // }}
            // maxW={{
            //   lg: "2xl",
            // }}
            w={{
              lg: "full",
            }}
            zIndex={1}
            bg={bg}
            border="solid 1px transparent"
          >
            <Icon
              display={{
                base: "none",
                lg: "block",
              }}
              position="absolute"
              right={0}
              top={0}
              bottom={0}
              h="full"
              w={48}
              color={bg}
              transform="translateX(50%)"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </Icon>
            <Box
              mx="auto"
            //   maxW={{
            //     base: "7xl",
            //   }}
              px={{
                base: 4,
                sm: 6,
                lg: 8,
              }}
              mt={{
                base: 10,
                sm: 12,
                md: 16,
                lg: 20,
                xl: 28,
              }}
            >
              <Box
                w="full"
                textAlign={{
                  sm: "center",
                  lg: "center",
                }}
                justifyContent="center"
                alignItems="center"
              >
                <chakra.h1
                  fontSize={{
                    base: "4xl",
                    sm: "5xl",
                    md: "6xl",
                  }}
                  letterSpacing="tight"
                  lineHeight="short"
                  fontWeight="extrabold"
                  color="gray.900"
                  _dark={{
                    color: "white",
                  }}
                >
                  <chakra.span
                    display={{
                      base: "block",
                      xl: "inline",
                    }}
                    color="#666DB3"
                    _dark={{
                      color: "#666DB3",
                    }}
                  >
                    {text}
                  </chakra.span>
                </chakra.h1>
                <chakra.p
                  mt={{
                    base: 3,
                    sm: 5,
                    md: 5,
                  }}
                  fontSize={{
                    sm: "lg",
                    md: "xl",
                  }}
                  maxW={{
                    sm: "xl",
                  }}
                  mx={{
                    sm: "auto",
                    // lg: 0,
                  }}
                  color="#707F94"
                >
                    our services are Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                    lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                    fugiat aliqua.
                </chakra.p>
                <Box
                  mt={{
                    base: 5,
                    sm: 8,
                  }}
                  display={{
                    sm: "flex",
                  }}
                  justifyContent={{
                    sm: "center",
                    lg: "center",
                  }}
                  fontWeight="extrabold"
                  fontFamily="fantasy"
                >
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

export default Banner2