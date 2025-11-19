import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Benefits } from "../components/Benefits";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { useEffect } from "react";


export default function HomePage() {
 
  // Скролл к нужной секции, если в URL есть хэш (#services, #contact и т.д.)
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />     
        <About />        
        <Benefits />      
        <Testimonials />
        <Contact />       
      </main>
      <Footer />
    </div>
  );
}