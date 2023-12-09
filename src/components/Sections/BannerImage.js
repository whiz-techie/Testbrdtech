import React from 'react'
import { motion } from "framer-motion"

const BannerImage = () => (
    <motion.div
    className=' bg-red-400'
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
    />
  )
export default BannerImage