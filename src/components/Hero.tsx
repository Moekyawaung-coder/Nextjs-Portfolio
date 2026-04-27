import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center bg-gray-950 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-4"
      >
        Hi, I'm Moe Kyaw Aung
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl text-gray-300"
      >
        Android Developer | Kotlin • Jetpack • Firebase • REST APIs
      </motion.p>
    </section>
  )
}
