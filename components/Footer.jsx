import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-oxfordBlue text-white py-6 px-6 md:px-8'>
      <div className="max-w-screen-lg mx-auto">
        <div className='flex flex-col gap-3 items-center md:flex-row md:justify-between'>
          <h2 className='flex items-center text-white gap-2'>
            <i className="fa-solid fa-helmet-safety fa-xl text-mikado"></i>
            <span className='text-xl font-bold'>Brickwork</span>
          </h2>
          <div className='font-medium flex gap-2 items-center text-slate-300'>
            <i className="fa-solid fa-envelope fa-lg"></i>
            <p>contact@brickwork.com</p>
          </div>
        </div>
        <div>
          <ul className='flex flex-col items-center gap-2 md:flex-row md:gap-5 text-[17px] text-slate-300 justify-center mt-8'>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
          </ul>
        </div>
        <p className='text-center text-slate-400 mt-5'>
          <i className="fa-solid fa-copyright mr-2"></i> Copyright { new Date().getFullYear() }
        </p>
      </div>
    </footer>
  )
}
