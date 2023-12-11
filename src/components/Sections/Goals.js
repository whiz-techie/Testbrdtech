import React from 'react'
import tempimage from '../../assets/logo192.png'
import { motion } from "framer-motion"

const Goals = (image) => {
  return (
        <div className=' mt-[100px] flex flex-col justify-center '>
            <h1 className=' font-semibold text-[#EBA91F] sm:text-[50px] text-[30px] sm:mb-[70px] mb-[40px] '>
                GOALS
            </h1>
            <motion.div

            initial={{ opacity: 0, x: -60 }}
            animate={{x: 0,}}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.2}}

            className='flex justify-center flex-col sm:flex-row flex-wrap items-center '>
                <div className=' max-w-[40%]'>
                    <img src={tempimage} className='w-[100%]' />
                </div>
                <div className='flex lg:max-w-[100%] max-w-[70%] sm:max-w-[50%] items-start justify-center'>
                    <p className='flex text-gray-700 lg:w-[400px] lg:max-w-[100%] sm:max-w-[350px] max-w-[100%] text-center sm:text-left '>
                    Lorem ipsum dolor aute dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

            </motion.div>

            <motion.div
            
            initial={{ opacity: 0, x: 60 }}
            animate={{x: 0,}}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.2}}

            className='flex justify-center flex-col sm:flex-row-reverse flex-wrap items-center  '>
                <div className=' max-w-[40%]'>
                    <img src={tempimage} className='w-[100%]' />
                </div>
                <div className=' lg:max-w-[100%] max-w-[70%] sm:max-w-[50%] items-start justify-center'>
                    <p className='flex text-gray-700 lg:w-[400px] lg:max-w-[100%]  sm:max-w-[350px] max-w-[100%] text-center sm:text-left '>
                    Lorem ipsum dolor aute dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

            </motion.div>
            
            <motion.div 
            
            initial={{ opacity: 0, x: -60 }}
            animate={{x: 0,}}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.2}}

            className='flex justify-center flex-col sm:flex-row flex-wrap items-center '>
                <div className=' max-w-[40%]'>
                    <img src={tempimage} className='w-[100%] ' />
                </div>
                <div className=' lg:max-w-[100%] max-w-[70%] sm:max-w-[50%] items-start justify-center'>
                    <p className='flex text-gray-700 sm:max-w-[350px] max-w-[100%] text-center sm:text-left '>
                    Lorem ipsum dolor aute dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

            </motion.div>
            
            </div>

  )
}

export default Goals