import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import LeetCode from './components/LeetCode'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LikeButton from './components/LikeButton'
import CustomCursor from './components/CustomCursor'

export default function App() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <LeetCode />
        <Projects />
        <Services />
        <Contact />
      </main>
      <LikeButton />
      <Footer />
    </>
  )
}

