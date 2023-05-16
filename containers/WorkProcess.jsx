import React from 'react'

export default function WorkProcess() {
  return (
    <section className='my-16'>
      <div className="max-w-screen-web mx-auto">
        <div>
          <p className='text-mikado text-center text-lg font-semibold'>Step by step</p>
          <h2 className='font-bold text-center text-2xl md:text-3xl mt-1'>Working process</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 mt-10'>
          <Step
            title='Planning'
            step='1'
            icon='fa-solid fa-swatchbook' />
          <Step
            title='Design'
            step='2'
            icon='fa-solid fa-compass-drafting' />
          <Step
            title='Building'
            step='3'
            icon='fa-solid fa-person-digging' />
          <Step
            title='Finish'
            step='4'
            icon='fa-solid fa-flag-checkered' />
        </div>
      </div>
    </section>
  )
}

const Step = ({ icon = '', step = '', title = '' }) => {
  return (
    <div className=''>
      <div className='relative mx-auto bg-neutral-200 w-24 outline outline-1 outline-offset-4 outline-neutral-200 h-24 flex items-center justify-center rounded-full'>
        <i className={`${icon} fa-2xl`}></i>
        <p className='absolute -bottom-3 bg-mikado w-7 h-7 flex justify-center items-center rounded-full font-semibold'>{step}</p>
      </div>
      <h5 className='text-center mt-8 font-semibold text-lg'>{title}</h5>
      <p className='text-center text-neutral-600 mt-2 max-w-[320px] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt.</p>
    </div>
  )
}