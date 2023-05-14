import { Hero, Stats, Services, Sustainability } from '@/containers'

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <Stats />
      <Services />
      <Sustainability />
      <div className="h-[1400px]"></div>
    </main>
  )
}
