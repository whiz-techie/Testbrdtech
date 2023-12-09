import React from 'react'
import { Icon, IconButton, VStack, useColorModeValue, useDisclosure, chakra, Flex, Button,VisuallyHidden,HStack,Box,CloseButton } from '@chakra-ui/react';
import { motion } from "framer-motion"
import BannerImage from './Sections/BannerImage';
import tempimage from '../assets/logo192.png'

const Banner = () => {
    const bg = useColorModeValue("white", "gray.800");
    return (
      <Box pos="relative" overflow="hidden" bg={bg} mt={10}>

        
        <Box 
        className=' flex flex-col-reverse md:flex-row '
        maxW="7xl" mx="auto">
          
          <Box
          className=''
            // pos="relative"
            pb={{
              base: 8,
              sm: 16,
              md: 20,
              lg: 28,
              xl: 32,
            }}
            maxW={{
              lg: "2xl",
            }}
            w={{
              lg: "full",
            }}
            zIndex={1}
            bg={bg}
            border="solid 1px transparent"
          >
            
            {/* <Icon
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
            </Icon> */}
            <Box
            className='hello'
              mx="auto"
              maxW={{
                base: "7xl",
              }}
              px={{
                base: 4,
                sm: 6,
                lg: 8,
              }}
              mt={{
                base: 3,
                sm: 12,
                md: 16,
                lg: 20,
                xl: 28,
              }}
            >
              <div className="">
              <Box
             
                // w="full"
                textAlign={{
                  sm: "center",
                  lg: "left",
                }}
                justifyContent="left"
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
                  >
                    Data to enrich your{" "}
                  </chakra.span>
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
                    online business
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
                    lg: 0,
                  }}
                  color="#707F94"
                >
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                  lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                  fugiat aliqua.
                </chakra.p>
                </Box>
           
              </div>
           
              </Box>

              
            </Box>
            <Box
            className=' flex justify-center sm:items-center'
            pb={{
              md: 20,
              lg: 28,
              xl: 32,
            }}
            maxW={{
              lg: "2xl",
            }}
            w={{
              lg: "full",
            }}
            zIndex={1}
            bg={bg}
            border="solid 1px transparent"
          >
              <motion.div
                animate={{
                scale: [2, 1, 1],
                rotate: [0, 0, 540],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                opacity: ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"]
                
            }}
            transition={{ ease: "easeInOut", duration: 2}}
            >

              <div>
                <img src={tempimage} />
              </div>
    </motion.div>

              
            </Box>
            
          </Box>
          
      </Box>
    );
  };

export default Banner