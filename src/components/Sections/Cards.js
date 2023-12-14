import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion"
const Cards = () => {
  
  return (
    <div className="lg:flex align lg:justify-around grid grid-cols-1 justify-around place-items-center sm:grid-cols-2 lg:grid-cols-3">
      <motion.div
      className="max-w-[300px] pb-[30px] lg:pb-[0]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1}}
      >
        <Card maxW='sm' className="min-h-[200px]">
          <CardBody className=" ">
    <Image
    className="w-[100%] h-[150px] min-h-[130px]"
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgaMLqMFyF0m2wIJ6gHkCvo3aqn0FxvpJQYuA0F0S6azKC6kX1O5Z0IbSMQ_lfSNi2J70&usqp=CAU'      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Unique Value Proposition</Heading>
      <Text>
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </Text>
    </Stack>
          </CardBody>
        </Card>
      </motion.div>
      <motion.div
      className="max-w-[300px] pb-[30px] lg:pb-[0] "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1}}
      >
        <Card maxW='sm' className="min-h-[200px]">
  <CardBody className="">
    <Image
    className="w-[100%] h-[150px] min-h-[130px]"
      src='
      https://blog.tatanexarc.com/wp-content/uploads/2023/09/Scope-of-business-finance-Benefits-importance-Features.jpg'      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Concept of Gold-Backed Cryptocurrency</Heading>
      <Text>
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </Text>

    </Stack>
  </CardBody>
  {/* <Divider /> */}
        </Card>
      </motion.div>
      
      <motion.div
      className="max-w-[300px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1}}
      >
        <Card maxW='sm' className="min-h-[200px]">
  <CardBody>
    <Image
    className="w-[100%] h-[150px] min-h-[130px]"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-3-bbAsxKmWnPNkV8Xrm_YGXYUkZjhSQdjD3mAM3s3LiWvAY6jFYvp4jkR6OQmQLcQs&usqp=CAU"
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Company Goal</Heading>
      <Text>
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </Text>

    </Stack>
  </CardBody>
  {/* <Divider /> */}
        </Card>
      </motion.div>
    


</div>
  )
}

export default Cards