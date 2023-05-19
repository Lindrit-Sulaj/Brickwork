import { 
  Hero, 
  Stats, 
  Services, 
  Sustainability, 
  Team, 
  Contact,
  Projects,
  WorkProcess,
  Testimonials,
  Blog } from '@/containers'

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
      <WorkProcess />
      <Testimonials />
      <Blog />
    </main>
  )
}
