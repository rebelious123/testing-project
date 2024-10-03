import React from "react";
import Navrbar from "./Components/Navbar/Navrbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Tittle from "./Components/Tittle/Tittle";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";


const App = () => {
  return (
    <div>
      <Navrbar />
      <Hero />
      <div className="container">
        <Tittle subtitle="OUR PROGRAM" title="WHAT WE OFFER" />
        <Programs />
        <About />
        <Tittle subtitle="Gallery" title="Campus Photos" />
        <Campus />
        <Tittle subtitle="TESTIMONIALS" title="What Student Says" />
        <Testimonials/>
        <Tittle subtitle="Contact Us" title="Get in Touch With Us" />
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
