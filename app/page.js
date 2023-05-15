import { 
  Hero, 
  Stats, 
  Services, 
  Sustainability, 
  Team, 
  Contact,
  Projects } from '@/containers'

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <Stats />
      <Services />
      <Sustainability />
      <Team />
      <Contact />
      <Projects />
    </main>
  )
}
