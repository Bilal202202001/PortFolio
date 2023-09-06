import Image from 'next/image'
import NavBar from './components/nav'
import Section from './components/section'
import About from './components/about'
import Services from './components/services'
import Resume from './components/resume'
import CV from './components/cv'
import Projects from './components/projects'
import Certifications from './components/certification'
import Reviews from './components/reviews'
import Blogs from './components/blogs'
import Contact from './components/contact'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className='flex flex-col items-start justify-start bg-gray-950 w-full h-auto text-white'>
      <NavBar/>
      <Section/>
      <About/>
      <Services/>
      <Resume/>
      <CV/>
      <Projects/>
      <Certifications/>
      <Reviews/>
      <Blogs/>
      <Contact/>
      <Footer/>
      </div>
    </main>
  )
}
