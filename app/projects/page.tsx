import Footer from '@/components/main/Footer'
import Navbar from '@/components/main/Navbar'
import Projects from '@/components/main/Projects'
import React from 'react'

const page = () => {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 max-md:gap-10">
        {/* <Navbar /> */}
        <Projects />
        {/* <Footer /> */}
      </div>
    </main>
  )
}

export default page
