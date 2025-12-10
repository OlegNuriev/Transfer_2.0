import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
//import heroImage from "figma:asset/5090972e2fcd48bfa30f8942af83caafa7f7fb0e.png";
import heroImage from '../assets/Фон Море.jpg';


export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Приморский город с горами"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-2xl">
          <div className="inline-block px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full mb-6 border border-blue-400/30">
            <span className="text-blue-200">Комфортные поездки по городу</span>
          </div>
          
          
          <h1 className="text-white mb-6">
  Трансфер из аэропорта Сочи<br />
  <span className="text-white mb-6">и экскурсии в Абхазию</span>
</h1>
          
          <p className="text-xl text-gray-200 mb-8">
            Комфортабельный автомобиль с профессиональным водителем. 
            Встретим в аэропорту, покажем город и доставим в любую точку.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={scrollToContact} className="group">
              Заказать поездку
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20" onClick={() => {
              const element = document.getElementById('services');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              Узнать больше
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <div className="text-3xl text-white mb-1">24/7</div>
              <div className="text-sm text-gray-300">Круглосуточно</div>
            </div>
            <div>
              <div className="text-3xl text-white mb-1">100%</div>
              <div className="text-sm text-gray-300">Надежность</div>
            </div>
            <div>
              <div className="text-3xl text-white mb-1">5★</div>
              <div className="text-sm text-gray-300">Рейтинг</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
