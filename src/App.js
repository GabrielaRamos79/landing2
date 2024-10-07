import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./components/Carousel/Carousel";
import Client from "./components/Client/Client";
import Contact from "./components/Contact/Contact";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Project from "./components/Project/Project";
import Services from "./components/Services/Services";


function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Services />
      <Client />
      <Project />
      <Carousel />
      <ContactForm />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
