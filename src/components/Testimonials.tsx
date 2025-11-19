import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

export function Testimonials() {
  const testimonials = [
    {
      name: "Алексей Михайлов",
      avatar: "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Отличный сервис! Водитель приехал вовремя, помог с багажом. Автомобиль чистый и комфортный. Обязательно обращусь снова!",
      initials: "АМ"
    },
    {
      name: "Мария Петрова",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      text: "Очень понравилась экскурсия! Водитель рассказал много интересного о городе и показал потрясающие места. Спасибо!",
      initials: "МП"
    },
    {
      name: "Дмитрий Соколов",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      text: "Пользуюсь услугами регулярно для поездок в аэропорт. Всегда надежно, комфортно и по адекватной цене. Рекомендую!",
      initials: "ДС"
    },
    {
      name: "Елена Васильева",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      text: "Замечательная поездка! Водитель очень приятный и профессиональный. Машина удобная, чистая. Всё на высшем уровне!",
      initials: "ЕВ"
    },
    {
      name: "Игорь Николаев",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      text: "Отличный трансфер из аэропорта! Встретили с табличкой, быстро доставили в отель. Очень доволен обслуживанием.",
      initials: "ИН"
    },
    {
      name: "Анна Смирнова",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      text: "Спасибо за прекрасную экскурсию! Увидели много красивых мест, получили массу впечатлений. Всё было организовано отлично!",
      initials: "АС"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-4 py-1 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-600">Отзывы клиентов</span>
          </div>
          <h2 className="mb-4">Что говорят наши клиенты</h2>
          <p className="text-gray-600">
            Мы ценим каждого клиента и стараемся сделать каждую поездку особенной
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
