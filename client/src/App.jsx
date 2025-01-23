
import './App.css'
import Navbar from './sections/navbar/navbar'
import Hero from './sections/hero/Hero'
import About from './sections/about/About'
import WhyChooseUs from './sections/whyChooseUs/WhyChooseUs'
import "swiper/css"
import Projects from './sections/projects/Projects'
import Contact from './sections/contact/Contact'
import Footer from './sections/footer/Footer'




function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
