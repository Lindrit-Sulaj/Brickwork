import { Hero, Stats, Services, Sustainability, Team } from '@/containers'

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <Stats />
      <Services />
      <Sustainability />
      <Team />
      <div className="h-[1400px]"></div>
    </main>
  )
}
