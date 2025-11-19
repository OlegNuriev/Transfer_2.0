import { Shield, Clock, DollarSign, Heart, Navigation, MessageCircle } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Надежность",
      description: "Опытный водитель, исправный автомобиль и комфортная поездка"
    },
    {
      icon: Clock,
      title: "Пунктуальность",
      description: "Всегда приезжаем вовремя, контролируем время в пути"
    },
    {
      icon: DollarSign,
      title: "Честные цены",
      description: "Прозрачное ценообразование без скрытых платежей"
    },
    {
      icon: Heart,
      title: "Индивидуальный подход",
      description: "Учитываем все пожелания и создаем комфортные условия"
    },
    {
      icon: Navigation,
      title: "Знание дорог",
      description: "Оптимальные маршруты с учетом пробок и дорожной ситуации"
    },
    {
      icon: MessageCircle,
      title: "Легко связаться",
      description: "Всегда на связи, быстро отвечаем на все вопросы"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-4 py-1 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-600">Наши преимущества</span>
          </div>
          <h2 className="mb-4">Почему выбирают нас</h2>
          <p className="text-gray-600">
            Мы заботимся о каждой детали, чтобы ваша поездка была максимально комфортной и приятной
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
