import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/footer";
const App = () => {
  return (
    <div className="container mx-auto max-w-7xl" id="home">
      <Navbar />
      <Hero />
      <About />
      <Contact />
      {/*Projects*/}
      {/*Expreience*/}
      {/*Testimonial*/}
      <Footer />
    </div>
  );
};

export default App;
