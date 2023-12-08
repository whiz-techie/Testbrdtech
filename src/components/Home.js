import React from 'react'
import Timeline from './Sections/Timeline'
import Cards from './Sections/Cards'
import Banner from './Banner'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Cards/>
        <div className=' grid grid-cols-5 '>
          <div></div>
        <Timeline/>
        </div>
       
    </div>
  )
}

export default Home