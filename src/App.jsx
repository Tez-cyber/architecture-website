import AboutSection from "./components/AboutSection"
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
        <Footer />
      </div>
    </>
  )
}

export default App
