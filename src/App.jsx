import AboutSection from "./components/AboutSection"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import NavJumbo from "./components/NavJumbo"
import PortfolioSection from "./components/PortfolioSection"
import Values from "./components/Values"
import Vision from "./components/Vision"

function App() {
  
  return (
    <>
      <div className="overflow-hidden">
        <NavJumbo />
        <AboutSection />
        <Vision />
        <PortfolioSection />
        <Values />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
