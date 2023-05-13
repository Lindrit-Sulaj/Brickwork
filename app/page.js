import { Hero, Stats } from '@/containers'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <Stats />
      <div className="h-[1400px]"></div>
    </main>
  )
}
