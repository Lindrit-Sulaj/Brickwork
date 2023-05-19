import React from 'react'

export default function Blog() {
  return (
    <section className='my-16 px-6 md:px-8'>
      <div className="max-w-screen-web mx-auto">
        <h2 className='font-bold text-center text-2xl md:text-3xl mt-1'>Our Blog</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
          <Article
            image='https://images.pexels.com/photos/410696/pexels-photo-410696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title='Experiencing the Synergy of Architecture and Construction'
            date='Dec 22, 2023'
          />
          <Article
            image='https://images.pexels.com/photos/1029611/pexels-photo-1029611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title='Experiencing the Synergy of Architecture and Construction'
            date='Dec 22, 2023'
          />
          <Article
            image='https://images.pexels.com/photos/919179/pexels-photo-919179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title='Experiencing the Synergy of Architecture and Construction'
            date='Dec 22, 2023'
          />
        </div>
      </div>
    </section>
  )
}

export const Article = ({ image, title, date }) => {
  return (
    <div>
      <img className='h-44 w-full object-cover object-center' src={image} alt={title} />
      <p className='bg-neutral-200 inline-block mt-8 px-3 font-medium py-1'>{date}</p>
      <h4 className='font-semibold text-lg md:text-xl mt-4'>{title}</h4>
      <p className='mt-3 text-neutral-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <button className='mt-3 font-medium text-[17px] text-orange-500'>Learn more</button>
    </div>
  )
}