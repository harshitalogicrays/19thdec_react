import React from 'react'
import ImageSlider from './ImageSlider'

const Home = () => {
  return (
    <div>
        <ImageSlider/>
        <h1>Home Page</h1>
        <section className="py-10 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-700">Email: support@example.com</p>
        <p className="text-gray-700">Phone: +1234567890</p>
      </section>
      <footer className="bg-blue-600 text-white p-4 text-center mt-10">
        © 2025 All Rights Reserved.
      </footer>
    </div>
  )
}

export default Home
