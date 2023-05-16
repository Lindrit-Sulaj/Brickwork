import React from 'react'

export default function StartProject() {
  return (
    <section className='w-full bg-mikado py-10'>
      <div className='max-w-screen-lg mx-auto flex justify-between items-start md:items-center px-6 gap-6 md:px-10 flex-col md:flex-row'>
        <div>
          <h2 className='font-bold text-2xl md:text-3xl mt-1'>Want to work with us?</h2>
          <p className='md:text-lg font-medium mt-2'>Our team of engineers and architects is ready to work on your project!</p>
        </div>
        <button className='py-4 px-5 bg-yaleBlue hover:bg-oxfordBlue text-white font-medium'>Get Started</button>
      </div>
    </section>
  )
}
