import React from 'react'

export default function Projects() {
  return (
    <section className='px-6 md:px-8 my-14'>
      <div className='max-w-screen-web mx-auto'>
        <div>
          <p className='text-mikado text-center text-lg font-semibold'>Our Works</p>
          <h2 className='font-bold text-center text-2xl md:text-3xl mt-1'>Latest projects</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-rows-6 h-[380px] md:h-[500px] lg:h-[600px] mt-8">
          <Project
            grid='row-span-3'
            title='Bridge'
            image='https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          <Project
            grid='col-start-2 row-span-4'
            title='Bridge'
            image='https://images.pexels.com/photos/1680247/pexels-photo-1680247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          <Project
            grid='row-span-3 col-start-1'
            title='Bridge'
            image='https://images.pexels.com/photos/915697/pexels-photo-915697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          <Project
            grid='row-span-2 col-start-2'
            title='Bridge'
            image='https://images.pexels.com/photos/356871/pexels-photo-356871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          <Project
            grid='col-start-3 row-span-2 row-start-1' 
            title='Project'
            image='https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
          <Project 
            grid='col-start-3 row-start-3 row-span-4'
            image='https://images.pexels.com/photos/1599967/pexels-photo-1599967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title='Project' />
          <Project
            grid='row-span-4 col-start-4 row-start-1'
            title='Bridge'
            image='https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          <Project
            grid='col-start-4 row-start-5 row-span-2' 
            title='Project'
            image='https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        </div>
      </div>
    </section>
  )
}

const Project = ({ grid = '', image = '', title = '' }) => {
  return (
    <div className={`${grid} relative bg-blue-400`}>
      <img className='absolute object-cover w-full h-full' src={image} alt={title} />
    </div>
  )
}