import React from 'react'

export default function Navbar() {
  return (
    <nav className="py-4 flex justify-between items-center bg-gray-900 text-white fixed w-full top-0 z-50 px-4">
      <h1 className="font-bold text-xl">Moe Kyaw Aung</h1>
      <ul className="flex gap-6">
        <li><a href="#about" className="hover:text-pink-500">About</a></li>
        <li><a href="#projects" className="hover:text-pink-500">Projects</a></li>
        <li><a href="#contact" className="hover:text-pink-500">Contact</a></li>
      </ul>
    </nav>
  )
}
