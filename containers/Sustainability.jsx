import React from 'react'

export default function Sustainability() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2'>
      <div className='text-white sustainability-bg py-10 md:py-16 px-8 md:px-12 lg:px-16 xl:px-24 xl:py-20'>
        <p className='text-mikado font-medium'>Sustainability</p>
        <h2 className='mt-2 text-2xl font-semibold lg:text-3xl lg:font-bold'>Commited to keeping people healthy & safe</h2>
        <p className='mt-4 text-neutral-300 text-[17px] max-w-xl'>We are committed to sustainable practices, integrating eco-friendly materials and energy-efficient solutions to minimize our carbon footprint.</p>
        <button className='mt-5 bg-mikado text-black flex items-center gap-2 px-5 py-3 font-medium hover:bg-gold'>work with us <i className="fa-solid fa-chevron-right"></i></button>
      </div>
      <div className='bestInField-bg py-8 md:py-12 px-8 md:px-12 lg:px-16 xl:px-24 xl:py-[65px]'>
        <h2 className='mt-2 text-2xl font-semibold lg:text-3xl lg:font-bold'>We are the best in the field</h2>
        <hr className='h-[2.5px] w-1/4 max-w-[70px] mt-3 border-none bg-black' />
        <p className='mt-4 font-medium'>With unparalleled expertise, we consistently outshine competitors, setting new benchmarks and delivering exceptional results that make us the unrivaled leaders in our field.</p>
        <div className='inline-grid grid-cols-2 gap-x-8 gap-y-6 mt-6'>
          <div className='flex gap-2 items-center font-semibold'>
            <i className="fa-xl fa-solid fa-leaf"></i>
            <p>Sustainability</p>
          </div>
          <div className='flex gap-2 items-center font-semibold'>
            <i className="fa-xl fa-solid fa-microchip"></i>
            <p>Modern Tech</p>
          </div>
          <div className='flex gap-2 items-center font-semibold'>
            <i className="fa-xl fa-solid fa-hourglass-end"></i>
            <p>Project on time</p>
          </div>
          <div className='flex gap-2 items-center font-semibold'>
            <i className="fa-xl fa-solid fa-compass-drafting"></i>
            <p>Latest Design</p>
          </div>
        </div>
      </div>
    </section>
  )
}
