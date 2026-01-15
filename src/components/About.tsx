import { ImageWithFallback } from "./plug/ImageWithFallback";
import { Check, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";


export function About() {
  const features = [
    "Комфортабельный автомобиль с просторным салоном",
    "Климат-контроль для вашего комфорта",
    "Чистый и ухоженный салон",
    "Вместительный багажник",
    "Зарядка для телефона",
    "Высокий потолок - легко садиться и выходить"
  ];

  const carImages = [
    {
      src: "/images/Авто.jpg",
      alt: "Салон автомобиля"
    },
    {
      src: "/images/Salon_Avto.png",
      alt: "Кожаные сиденья"
    },
    {
      src: "/images/Авто в каньон.jpg",
      alt: "Панель приборов"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carImages.length) % carImages.length);
  };

  const openModal = (index: number) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const nextModalImage = () => {
    setModalImageIndex((prev) => (prev + 1) % carImages.length);
  };

  const prevModalImage = () => {
    setModalImageIndex((prev) => (prev - 1 + carImages.length) % carImages.length);
  };

  // Функция для получения источника изображения
  const getImageSrc = (image: typeof carImages[0]) => {
    return typeof image.src === 'string' ? image.src : image.src;
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1 bg-blue-100 rounded-full mb-4">
              <span className="text-blue-600">О нашем автомобиле</span>
            </div>
            <h2 className="mb-4">Ваш комфорт — наша забота</h2>
            <p className="text-gray-600 mb-6">
              Мы предоставляем услуги на комфортабельном автомобиле бизнес-класса. 
              Наш автомобиль всегда в идеальном состоянии — чистый, исправный и готовый к любой поездке.
            </p>
            <p className="text-gray-600 mb-8">
              Опытный водитель с многолетним стажем обеспечит безопасную и приятную поездку. 
              Знаем город как свои пять пальцев и всегда найдем оптимальный маршрут.
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <ImageWithFallback
                src={getImageSrc(carImages[currentImageIndex])}
                alt={carImages[currentImageIndex].alt}
                className="w-full h-[400px] object-cover"
                onClick={() => openModal(currentImageIndex)}
              />
              
              {/* Navigation buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-5 h-5 text-gray-900" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-5 h-5 text-gray-900" />
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? "bg-white w-8" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl max-w-xs">
              <div className="text-3xl mb-1">20+</div>
              <div>лет безаварийного вождения</div>
            </div>
          </div>
        </div>
      </div>

      {/* Full screen modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-screen-lg w-full h-[90vh] p-0 bg-black">
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
            >
              <X className="w-5 h-5 text-gray-900" />
            </button>

            <button
              onClick={prevModalImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>

            <img
              src={getImageSrc(carImages[modalImageIndex])}
              alt={carImages[modalImageIndex].alt}
              className="max-w-full max-h-full object-contain"
            />

            <button
              onClick={nextModalImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-50">
              {carImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setModalImageIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === modalImageIndex ? "bg-white w-10" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}