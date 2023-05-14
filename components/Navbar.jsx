"use client"
import React from 'react'
import Link from 'next/link'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [navOpened, setNavOpened] = useState(false);
  const breakpoint = useMediaQuery()

  const open = () => setNavOpened(true);
  const close = () => setNavOpened(false);

  return (
    <nav className='max-w-screen-lg px-8 py-4 mx-auto w-full'>
      {breakpoint === "sm" ? (
        <div className='flex justify-between'>
          <h2 className='flex items-center gap-2 text-oxfordBlue'>
            <i className="fa-solid fa-helmet-safety fa-xl text-mikado"></i>
            <span className='text-xl font-bold'>Brickwork</span>
          </h2>
          <button onClick={open}>
            <i className="fa-solid fa-bars fa-lg"></i>
          </button>
        </div>
      ) : (
        <>
          <Company />
          <Links />
        </>
      )}

      <AnimatePresence>
        {navOpened && breakpoint === "sm" && (
          <Mobile close={close} />
        )}
      </AnimatePresence>
    </nav>
  )
}

function Mobile({ close }) {
  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '-100vw' }}
      transition={{ type: 'just' }} className='fixed top-0 left-0 h-screen w-full bg-white p-4'>
      <div className="flex justify-end">
        <button className='border-solid border-[1px] border-neutral-300 px-3 py-1' onClick={close}>
          <span>Close</span>
          <i className="fa-solid fa-xmark fa-xl ml-2 text-neutral-600"></i>
        </button>
      </div>
      <h2 className='flex items-center mt-4 gap-2 mb-4 text-oxfordBlue'>
        <i className="fa-solid fa-helmet-safety fa-xl text-mikado"></i>
        <span className='text-xl font-bold'>Brickwork</span>
      </h2>
      <div className='mb-8'>
        <h4 className="font-semibold text-lg mb-3">Links</h4>
        <ul className='flex flex-col gap-3'>
          <li className='text-neutral-800'>
            <Link href="/">Home</Link>
          </li>
          <li className='text-neutral-800'>
            <Link href="/">Company</Link>
          </li>
          <li className='text-neutral-800'>
            <Link href="/">Solutions</Link>
          </li>
          <li className='text-neutral-800'>
            <Link href="/">Projects</Link>
          </li>
          <li className='text-neutral-800'>
            <Link href="/">Features</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <h4 className='font-semibold text-lg'>Actions</h4>
        <div className='flex items-center gap-3'>
          <i className="fa-solid fa-phone fa-lg text-mikado"></i>
          <div>
            <p className='font-medium text-neutral-800 text-[15.5px]'>038349000000</p>
            <p className='text-neutral-500 text-sm'>Make a call</p>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <i className="fa-solid fa-envelope fa-lg text-mikado"></i>
          <div>
            <p className='font-medium text-neutral-800 text-[15.5px]'>contact@brickwork.com</p>
            <p className='text-neutral-500 text-sm'>Write an email</p>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <i className="fa-solid fa-map-location-dot fa-lg text-mikado"></i>
          <div>
            <p className='font-medium text-neutral-800 text-[15.5px]'>1105 Roosevelt Street CA</p>
            <p className='text-neutral-500 text-sm'>Get directions</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Company() {
  return (
    <div className='flex justify-between gap-4'>
      <h2 className='flex items-center gap-2 text-oxfordBlue'>
        <i className="fa-solid fa-helmet-safety fa-xl text-mikado"></i>
        <span className='text-xl lg:text-2xl font-bold'>Brickwork</span>
      </h2>
      <div className='flex gap-8'>
        <div className='flex items-center gap-3'>
          <i className="fa-solid fa-phone fa-lg text-mikado"></i>
          <div>
            <p className='font-medium text-neutral-800 text-[15.5px]'>038349000000</p>
            <p className='text-neutral-500 text-sm'>Make a call</p>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <i className="fa-solid fa-envelope fa-lg text-mikado"></i>
          <div>
            <p className='font-medium text-neutral-800 text-[15.5px]'>contact@brickwork.com</p>
            <p className='text-neutral-500 text-sm'>Write an email</p>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <i className="fa-solid fa-map-location-dot fa-lg text-mikado"></i>
          <div>
            <p className='font-medium text-neutral-800 text-[15.5px]'>1105 Roosevelt Street CA</p>
            <p className='text-neutral-500 text-sm'>Get directions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Links() {
  return (
    <div className='flex justify-between h-[50px] mt-4 bg-neutral-100'>
      <ul className='flex h-full items-center gap-5 px-4'>
        <li className='text-neutral-700 hover:text-neutral-500'>
          <Link href="/">Home</Link>
        </li>
        <li className='text-neutral-700 hover:text-neutral-500'>
          <Link href="/">Company</Link>
        </li>
        <li className='text-neutral-700 hover:text-neutral-500'>
          <Link href="/">Solutions</Link>
        </li>
        <li className='text-neutral-700 hover:text-neutral-500'>
          <Link href="/">Projects</Link>
        </li>
        <li className='text-neutral-700 hover:text-neutral-500'>
          <Link href="/">Features</Link>
        </li>
      </ul>
      <div className='flex h-full items-center gap-4'>
        <button className=''>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <button className='h-full bg-yaleBlue hover:bg-oxfordBlue px-3 text-white'>
          Get a quote
        </button>
      </div>
    </div>
  )
}