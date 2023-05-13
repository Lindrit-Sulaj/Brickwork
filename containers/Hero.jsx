import React from 'react'
import Image from 'next/image'
import heroImage from '@/assets/heroImage.jpg'

export default function Hero() {
  return (
    <section className='hero-bg py-32 lg:py-44'>
      <div className='max-w-screen-lg mx-auto px-6 md:px-8'>
        <h4 className='text-gold text-lg font-medium'>Building Dreams</h4>
        <h1 className='text-[27px] md:text-3xl lg:text-5xl font-extrabold text-white mt-3'>Your Trusted Partner for Construction Solutions</h1>
        <p className='mt-5 text-[17px] text-neutral-200 md:text-neutral-300 md:text-lg max-w-3xl'>Unleashing the beauty of construction, we create timeless structures that stand the test of time. With unrivaled expertise and meticulous craftsmanship, we turn visions into reality, one brick at a time.</p>
        <div className='mt-5 flex gap-4'>
          <button className='bg-mikado hover:bg-gold font-medium px-5 py-3'>
            Our Services
          </button>
          <button className='border-solid bg-transparent border-[1px] border-white px-5 py-3 text-white font-medium hover:bg-[rgba(255,255,255,0.05)]'>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
