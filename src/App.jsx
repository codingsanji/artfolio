import { BrowserRouter } from "react-router-dom";
import {About , Contact , Experience , Hero , Navbar , Tech , Works , StarsCanvas } from './components';


const App = () => {
  return(
    <BrowserRouter>
      <div>
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App