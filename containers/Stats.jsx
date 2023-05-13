import React from 'react'

export default function Stats() {
  return (
    <section className='px-4 -mt-8 md:-mt-14'>
      <div className='max-w-screen-lg shadow-md mx-auto flex flex-wrap'>
        <div className='w-full md:w-1/2 py-10 px-8 bg-mikado'>
          <p className='font-semibold'>Milestones and Achievements</p>
          <h2 className='text-2xl mt-2 font-bold'>25 years of undefeated success</h2>
          <p className='my-4 text-[17px]'>Experience our construction company's impressive achievements: on-time project delivery, extensive industry experience, and a growing list of delighted clients who trust our expertise.</p>
          <button className='bg-oxfordBlue text-white px-5 py-3 flex items-center gap-2'>work with us
            <i className="fa-solid fa-chevron-right fa-sm"></i></button>
        </div>
        <div className='w-full md:w-1/2 grid grid-cols-2 bg-white'>
          <Stat icon='fa-solid fa-rocket' number='432' description='Projects completed' />
          <Stat icon='fa-solid fa-award' number='24' description='Years of experience' />
          <Stat icon='fa-solid fa-user-group' number='73' description='Satisfied clients' />
          <Stat icon='fa-solid fa-building' number='21' description='Commercial buildings' />
        </div>
      </div>
    </section>
  )
}

const Stat = ({ icon = "", number = "", description = "" }) => {
  return (
    <div className='flex items-center px-6 py-4 md:py-0 gap-3 border-solid border-[1px] border-neutral-100'>
      <i className={`${icon} text-2xl md:text-3xl text-gold`}></i>
      <div>
        <p className='font-bold text-xl md:text-[27px]'>{number}</p>
        <p className='text-neutral-700'>{description}</p>
      </div>
    </div>
  )
}
