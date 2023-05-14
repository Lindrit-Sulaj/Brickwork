import React from 'react'

export default function Team() {
  return (
    <section className='px-6 md:px-8 my-14'>
      <div className="max-w-screen-web mx-auto">
        <div>
          <p className='text-mikado text-center text-lg font-semibold'>We are professionals</p>
          <h2 className='font-bold text-center text-2xl md:text-3xl mt-1'>Meet the Team</h2>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-8'>
          <TeamMember
            name='Isabella Rivers'
            title='Co-Founder'
            image='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          <TeamMember
            name='Benjamin Hayes'
            title='Chairman'
            image='https://images.pexels.com/photos/3831159/pexels-photo-3831159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          />
          <TeamMember
            name='Ava Morgan'
            title='Instructor'
            image='https://images.pexels.com/photos/8960933/pexels-photo-8960933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          <TeamMember
            name='Ethan Sullivan'
            title='Project Manager'
            image='https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        </div>
      </div>
    </section>
  )
}

function TeamMember({ name = '', title = '', image = '' }) {
  return (
    <div className='border-solid border-[1px] border-neutral-100 pb-4'>
      <img className='aspect-square object-cover' src={image} alt={`${name}, ${title} at Brickwork`} />
      <h4 className='font-semibold text-center mt-3 text-lg'>{name}</h4>
      <p className='text-center font-medium text-neutral-600'>{title}</p>
    </div>
  )
}