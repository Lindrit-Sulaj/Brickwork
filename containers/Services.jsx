import React from 'react'
import Link from 'next/link'

export default function Services() {
  return (
    <section className='px-6 md:px-8 my-14'>
      <div className='max-w-screen-web mx-auto'>
        <div>
          <p className='text-mikado text-center text-lg font-semibold'>Our services</p>
          <h2 className='font-bold text-center text-2xl md:text-3xl mt-1'>Quality Services</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 mt-6'>
          <Service
            title='Material Supply'
            text='Efficient material supply for seamless project execution.'
            image='https://ik.imagekit.io/0s9lwb2yr/Brickwork/tr:w-500/pexels-julia-volk-5207399_IoeHCXls0.jpg?updatedAt=1684007180696'
          />
          <Service
            title='Architecture'
            text='Innovative architecture for timeless creations'
            image="https://ik.imagekit.io/0s9lwb2yr/Brickwork/tr:w-500/pexels-mikael-blomkvist-8961065_YSEETVjsW.jpg?updatedAt=1684007312947" />
          <Service
            title='Consultancy'
            text='Strategic consultancy for seamless project success.'
            image='https://ik.imagekit.io/0s9lwb2yr/Brickwork/tr:w-500/pexels-anamul-rezwan-1216589_AJR9PYvDT.jpg?updatedAt=1684008283826'
          />

        </div>
      </div>
    </section>
  )
}

const Service = ({ title = '', text = '', image = "", iconImage = '' }) => {
  return (
    <div>
      <img className='shadow-md w-full h-52 md:h-60 object-cover' src={image} alt={title} />
      <div className=''>
        <h4 className='font-semibold text-xl text-center mt-4'>{title}</h4>
        <p className='text-center text-neutral-600 font-medium mt-2'>{text}</p>
        <Link href="/" className='text-center block mt-2 font-medium text-lg text-yellow-600'>Learn more</Link>
      </div>
    </div>
  )
}