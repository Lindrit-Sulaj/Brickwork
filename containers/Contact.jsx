import React from 'react';
import { Accordion } from '@/components';
import { AccordionGroup } from '@/components/Accordion';

export default function Contact() {
  return (
    <section className='px-6 md:px-8 mb-8'>
      <div className="max-w-screen-lg flex flex-wrap items-center mx-auto">
        <div className='w-full md:w-2/5 bg-yaleBlue text-white px-4 py-6 md:p-8'>
          <h2 className='font-bold text-2xl md:text-3xl mt-1'>Get in touch</h2>
          <form action="" className='mt-6'>
            <div className='mt-5'>
              <label className='block text-neutral-300' htmlFor="fullName">Full Name:</label>
              <input className='block w-full py-2 mt-2 bg-transparent border-solid border-[1px] border-blue-900 px-3 focus:border-blue-700 outline-none transition-all' type="text" id="fullName" placeholder='e.g. John Doe' />
            </div>
            <div className='mt-5'>
              <label className='block text-neutral-300' htmlFor="email">Email Address:</label>
              <input className='block w-full py-2 mt-2 bg-transparent border-solid border-[1px] border-blue-900 px-3 focus:border-blue-700 outline-none transition-all' type="email" id="email" placeholder='e.g. johndoe@gmail.com' />
            </div>
            <div className='mt-5'>
              <label className='block text-neutral-300' htmlFor="subject">Subject:</label>
              <input className='block w-full py-2 mt-2 bg-transparent border-solid border-[1px] border-blue-900 px-3 focus:border-blue-700 outline-none transition-all' type="text" id="subject" placeholder='e.g. House Construction' />
            </div>
            <div className='mt-5'>
              <label className='block text-neutral-300' htmlFor="message">Message:</label>
              <textarea className='block w-full py-2 mt-2 bg-transparent border-solid border-[1px] border-blue-900 px-3 focus:border-blue-700 outline-none transition-all' name="message" placeholder='Hi, I need a trusted construction company for building a commercial building...' id="message" cols="30" rows="6">

              </textarea>
            </div>
            <button type='submit' className='ml-auto block mt-5 px-4 py-3 bg-mikado hover:bg-gold text-black font-medium'>Send Message</button>
          </form>
        </div>
        <div className="w-full md:w-3/5 h-full bg-neutral-100 py-6 px-4 md:py-12 md:px-10">
          <h2 className='font-bold text-2xl md:text-[27px] mt-1 mb-4'>Our FAQ</h2>
          <AccordionGroup>
            <Accordion title="What types of projects do you specialize in?" text="Our expertise spans residential, commercial, and industrial projects, ranging from new constructions to renovations and expansions." />

            <Accordion title="How long does a project take?" text="Project durations vary based on complexity, size, and scope, but we strive to ensure efficient timelines and deliver projects on schedule." />

            <Accordion title="Do you provide warranty for your work?" text="Yes, we stand behind the quality of our workmanship and offer warranty coverage to provide our clients with peace of mind for their investment." />

          </AccordionGroup>
        </div>
      </div>
    </section>
  )
}
