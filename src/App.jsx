import AboutSection from "./components/AboutSection"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import NavJumbo from "./components/NavJumbo"
import PortfolioSection from "./components/PortfolioSection"
import Vision from "./components/Vision"

function App() {
  
  return (
    <>
      <div className="">
        <NavJumbo />
        <AboutSection />
        <Vision />
        <PortfolioSection />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
