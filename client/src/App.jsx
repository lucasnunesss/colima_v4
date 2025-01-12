
import './App.css'
import Navbar from './sections/navbar/navbar'
import Hero from './sections/hero/Hero'
import About from './sections/about/About'
import WhyChooseUs from './sections/whyChooseUs/WhyChooseUs'
import "swiper/css"
import Portfolio from './sections/portfolio/Portfolio'

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Portfolio />
    </>
  )
}

export default App
