"use client"
import React, { useState, useContext, createContext } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';

const AccordionContext = createContext();

function AccordionGroup({ children }) {
  const [openedAccordion, setOpenedAccordion] = useState('What types of projects do you specialize in?')

  return (
    <AccordionContext.Provider value={{
      openedAccordion,
      setOpenedAccordion
    }}>
      <div className='flex flex-col gap-2'>
        <LayoutGroup>
          {children}
        </LayoutGroup>
      </div>
    </AccordionContext.Provider>
  )
}

function Accordion({ title = '', text = '', }) {
  const { openedAccordion, setOpenedAccordion } = useContext(AccordionContext)
  const isOpened = openedAccordion === title;

  const handleClick = () => {
    if (isOpened) {
      setOpenedAccordion('');
      return;
    }

    setOpenedAccordion(title);
  }

  return (
    <div>
      <button onClick={handleClick} className={`flex pl-4 font-medium items-center justify-between w-full ${isOpened ? 'bg-black text-white' : 'bg-white border-solid border-[1px] border-neutral-200'}`}>
        <span className='grow text-left pr-2'>{title}</span>
        <i className={`fa-solid fa-chevron-${isOpened ? 'down' : 'right'} py-5 md:py-4 ${isOpened ? 'bg-mikado text-black px-4 md:px-6' : 'px-4 md:px-6'}`}></i>
      </button>
      { isOpened && (
        <p className='bg-white p-5 text-neutral-700 border-solid border-[1px] border-neutral-200'>
          { text }
        </p>
      ) }
    </div>
  )
}

export {
  AccordionGroup
}

export default Accordion;