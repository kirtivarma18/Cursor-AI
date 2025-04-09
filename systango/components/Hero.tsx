'use client'

import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 min-h-screen flex items-center bg-white" role="banner">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-[80px] font-bold leading-tight tracking-tight mb-8">
          <div className="font-display">ONE OF THE FEW.</div>
          <div className="font-display">LEADING IN</div>
          <div className="font-display">GOOGLE CLOUD AI.</div>
        </h1>
        
        <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-12">
          Innovative digital experiences, reimagined applications, and high-impact software—
          <br />
          all powered by Blockchain, Generative AI, Automation, & Cloud solutions.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-[#FF5533] text-white px-8 py-3 rounded text-lg font-medium hover:bg-[#FF6644] transition-colors duration-200"
          role="button"
          aria-label="Contact Us"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  )
}

export default Hero 