import { Button, Card, CardFooter, Text, CardBody, Heading, Image, Stack } from '@chakra-ui/react'
import React from 'react'
const item = [1,2,3]
const Servicecards = () => {
  return (
    <div className='flex justify-center'>
    <div className='flex w-[80%] '>
    <div className='flex flex-col'>

{item.map((_,i)=>{
    return(
<Card key={i} className=' m-[20px]'
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
//   variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md' >The perfect latte</Heading>

      <Text py='2' className=' text-gray-700'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Read More...
      </Button>
    </CardFooter>
  </Stack>
        </Card>
    )
    
})}
        
  
    </div>
    </div>
    </div>
  )
}

export default Servicecards