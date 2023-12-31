import React from 'react'
import Timeline from './Sections/Timeline'
import Cards from './Sections/Cards'
import Banner from './Banner'
import Goals from './Sections/Goals'

const Home = () => {
  return (
    <div className='flex flex-col justify-around md:justify-between h-[650vh] sm:h-[200%] md:h-[200%]'>
        <Banner/>
      <span className=''>
        
        <Cards/>
      </span>
        {/* <div> */}

        <Goals />
        {/* </div> */}
        <div className='flex w-full justify-center mt-[40px]'>
        {/* <div className=' grid grid-cols-5 '> */}
          {/* <div></div> */}
        <Timeline/>
        {/* </div> */}
        </div>
          

    </div>
  )
}

export default Home