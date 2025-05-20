import About from '@/pages/About'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col  max-md:gap-10">
        <Navbar />
        <About />
        <Footer />
      </div>
    </main>
  )
}

export default page
