import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Benefits } from "../components/Benefits";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { SEO } from "../components/SEO";

 
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Трансфер из аэропорта Сочи → Красная Поляна, Адлер | Экскурсии в Абхазию"
        description="Трансфер из аэропорта Сочи в Адлер, Красную Поляну, Роза Хутор от 1500 ₽. Экскурсии в Абхазию (озеро Рица, Гегский водопад), по Сочи и Красной Поляне. Встреча с табличкой, бизнес-класс."
        ogImage="https://tourtransfer.ru/og-sochi-transfer.jpg"
        canonical="https://tourtransfer.ru/"
      />

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
