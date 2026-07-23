import Navbar from "./components/layout/Navbar";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";

import Footer from "./components/layout/Footer";

import AIChat from "./components/AIChat";


function App() {


  return (

    <div className="
      min-h-screen
      overflow-x-hidden
      bg-slate-950
      text-white
    ">


      <Navbar />


      <main>

        <Hero />

        <About />

        <Skills />

        <Services />

        <Projects />

        <Education />

        <Contact />

      </main>



      <Footer />



      {/* AI Assistant */}

      <AIChat />


    </div>

  );

}


export default App;