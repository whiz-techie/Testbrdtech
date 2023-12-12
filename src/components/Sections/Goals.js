import React from 'react'
import { motion } from "framer-motion"
import logo from "./../../assets/Finance_logo.png"

const Goals = (image) => {
  return (
        <div className=' max-h-[1000px] h-[120vh] sm:[100vh] flex flex-col justify-between '>
            <h1 className=' font-semibold text-[#EBA91F] sm:text-[50px] text-[30px] '>
                GOALS
            </h1>
            <div className='flex flex-col justify-around h-[190vh]'>

            <motion.div

            initial={{ opacity: 0, x: -60 }}
            animate={{x: 0,}}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.2}}
            className='flex justify-center min-h-[200px]'
            >
                <div className='flex flex-col justify-around text-center sm:text-left items-center sm:flex-row sm:justify-between sm:w-[430px]'>
                    <img className='w-[50px] h-[55px] sm:w-[100px] sm:h-[110px] ' src={logo}/>
                    <p className='max-w-[300px]'>
                    Lorem ipsum dolor aute dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </motion.div>


            <motion.div

            initial={{ opacity: 0, x: -60 }}
            animate={{x: 0,}}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.2}}
            className='flex justify-center min-h-[200px]'
            >
                <div className='flex flex-col justify-around text-center sm:text-right items-center sm:flex-row-reverse sm:justify-between sm:w-[430px]'>
                    <img className='w-[50px] h-[55px] sm:w-[100px] sm:h-[110px] ' src={logo}/>
                    <p className='max-w-[300px]'>
                    Lorem ipsum dolor aute dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </motion.div>


            <motion.div

            initial={{ opacity: 0, x: -60 }}
            animate={{x: 0,}}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.2}}
            className='flex justify-center min-h-[200px]'
            >
                <div className='flex flex-col justify-around text-center sm:text-left items-center sm:flex-row sm:justify-between sm:w-[430px]'>
                    <img className='w-[50px] h-[55px] sm:w-[100px] sm:h-[110px] ' src={logo}/>
                    <p className='max-w-[300px]'>
                    Lorem ipsum dolor aute dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </motion.div>
                            
            </div>
            </div>

  )
}

export default Goals