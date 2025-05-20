import Contact from '@/pages/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 max-md:gap-10">
        <Navbar />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default page
