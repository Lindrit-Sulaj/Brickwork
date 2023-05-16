import { 
  Hero, 
  Stats, 
  Services, 
  Sustainability, 
  Team, 
  Contact,
  Projects } from '@/containers'

import { StartProject } from '@/components'

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
      <StartProject />
    </main>
  )
}
