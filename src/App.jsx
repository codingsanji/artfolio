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
<<<<<<< HEAD
=======

  )
>>>>>>> 474645a5bfd1d51bd0ff41f8a840ee5ebcb044c5

  )
}

export default App