3import React from 'react'
import Image from 'next/image'
import profilePic from '../../public/images/profile.jpg'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300">
            I'm an Android Developer with nearly 2 years of experience building secure and scalable mobile applications. Passionate about Kotlin, Jetpack frameworks, Firebase integration, and RESTful APIs.
          </p>
        </div>
        <div className="flex-1">
          <Image src={profilePic} alt="Moe Kyaw Aung" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  )
}
