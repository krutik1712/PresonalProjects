import ButtonGradient from './assets/svg/ButtonGradient'
import Benefits from './components/Benefits'
import Collaboration from './components/Collaboration'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/Hero'
import Pricing from './components/Pricing'
import Roadmap from './components/Roadmap'
import Services from './components/Services'

export default function App() {

  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[7.25rem] overflow-hidden'>
        <Header />
        <HeroSection />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  )
}