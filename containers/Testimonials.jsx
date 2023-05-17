"use client"
import React, { useState } from 'react'

const data = [
  {
    name: 'John Doe',
    profession: 'CEO',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maxime sunt delectus at cum temporibus placeat, vitae reprehenderit ducimus! Obcaecati, sed porro cum cupiditate fugit in odit laborum incidunt?',
    image: 'https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg'
  },
  {
    name: 'Alex Hunter',
    profession: 'Engineer',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maxime sunt cum temporibus placeat, vitae reprehenderit ducimus! Distinctio obcaecati, sed porro cum cupiditate fugit in odit laborum incidunt?',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZZYSsnncqDhroX4Ud9rgHCxpDeyLSN5PdG71BuDAk-ulL4CQCFtjL4lKVH26UIW9EOo&usqp=CAU',
  },
  {
    name: 'Miles Cooper',
    profession: 'UI Designer',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maxime sunt delectus at cum temporibus placeat, vitae. Distinctio obcaecati, sed porro cum cupiditate fugit in odit laborum incidunt?',
    image: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'
  }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const handleClick = (type) => {
    if (type == "prev") {
      if (current === 0) {
        setCurrent(data.length - 1);
        return;
      };

      setCurrent(current - 1);
    } else if (type == "next") {
      if (current === data.length - 1) {
        setCurrent(0);
        return;
      };

      setCurrent(current + 1)
    }
  }

  return (
    <section className='testimonials-bg text-white py-16 my-6 px-6 md:px-8'>
      <div className="max-w-screen-md mx-auto">
        <div>
          <p className='text-mikado text-center text-lg font-semibold'>Testimonials</p>
          <h2 className='font-bold text-center text-2xl md:text-3xl mt-1'>What our clients say</h2>
        </div>
        <Testimonial
          handleClick={handleClick}
          name={data[current].name}
          profession={data[current].profession}
          text={data[current].text}
          image={data[current].image}
        />
      </div>
    </section>
  )
}

function Testimonial({ text, handleClick, image, name, profession }) {
  return (
    <div className='w-full flex flex-col md:flex-row md:justify-between mt-10 gap-4 md:px-6'>
      <button className='hidden md:block' onClick={() => handleClick('prev')}>
        <i className="fa-solid fa-chevron-left fa-xl"></i>
      </button>
      <div className='grow'>
        <p className='text-center text-neutral-300 text-[17px] max-w-2xl mx-auto'>
          {text}
        </p>
        <div className='flex justify-center gap-4 items-center mt-10'>
          <img className='w-16 h-16 rounded-full object-cover object-center' src={image} alt={name} />
          <div>
            <p className='font-semibold text-lg'>{name}</p>
            <p className='text-neutral-300'>{profession}</p>
          </div>
          <hr className='w-10 border-none h-1 bg-mikado' />
        </div>
      </div>
      <button className='hidden md:block' onClick={() => handleClick('next')}>
        <i className="fa-solid fa-chevron-right fa-xl"></i>
      </button>
      <div className='flex md:hidden gap-2'>
        <button className='w-1/2 bg-[rgba(0,0,0,0.3)] py-3' onClick={() => handleClick('prev')}>
          <i className="fa-solid fa-chevron-left fa-lg"></i>
        </button>
        <button className='w-1/2 bg-[rgba(0,0,0,0.3)] py-3' onClick={() => handleClick('next')}>
          <i className="fa-solid fa-chevron-right fa-lg"></i>
        </button>
      </div>
    </div>
  )
}