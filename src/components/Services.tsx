import { Card } from "./ui/card";
import { ImageWithFallback } from "./plug/ImageWithFallback";
import { Plane, MapPin, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Services() {
  const services = [
    {
      icon: Plane,
      title: "Трансфер из/в аэропорт",
      description: "Встретим с табличкой, поможем с багажом и доставим в аэропорт или из аэропорта в любую точку города вовремя.",
      image: "https://images.unsplash.com/photo-1736104761587-d9babea20923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwdHJhbnNmZXIlMjBjYXJ8ZW58MXx8fHwxNzYyMjUwNDE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Встреча с табличкой", "Помощь с багажом", "Контроль рейса"],
      link: "/routes#transfer"
    },
    {
      icon: MapPin,
      title: "Индивидуальные экскурсии",
      description: "Покажем самые интересные места города по индивидуальному маршруту. Расскажем историю и покажем скрытые жемчужины.",
      image: "https://images.unsplash.com/photo-1514315234814-ceafc3e7f19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwdG91ciUyMGd1aWRlfGVufDF8fHx8MTc2MjI1ODMxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Гибкий маршрут", "Интересный рассказ", "Остановки для фото"],
      link: "/routes#excursions"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-4 py-1 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-600">Наши услуги</span>
          </div>
          <h2 className="mb-4">Что мы предлагаем</h2>
          <p className="text-gray-600">
            Индивидуальный подход к каждому клиенту. Комфорт, безопасность и пунктуальность — наши главные приоритеты.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href={service.link}>
                  <Button variant="outline" className="w-full group">
                    Подробнее о маршрутах
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}