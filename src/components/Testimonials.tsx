import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

export function Testimonials() {
  const testimonials = [
    {
      name: "Алексей Михайлов",
      avatar: "/images/Men.jpg",
      text: "Отличный сервис! Водитель приехал вовремя, помог с багажом. Автомобиль чистый и комфортный. Обязательно обращусь снова!",
      initials: "АМ"
    },
    {
      name: "Мария Петрова",
      avatar: "/images/Girl.jpg",
      text: "Очень понравилась экскурсия! Водитель рассказал много интересного о городе и показал потрясающие места. Спасибо!",
      initials: "МП"
    },
    {
      name: "Дмитрий Соколов",
      avatar: "/images/Men2.jpg",
      text: "Пользуюсь услугами регулярно для поездок в аэропорт. Всегда надежно, комфортно и по адекватной цене. Рекомендую!",
      initials: "ДС"
    },
    {
      name: "Елена Васильева",
      avatar: "/images/Girl1.jpg",
      text: "Замечательная поездка! Водитель очень приятный и профессиональный. Машина удобная, чистая. Всё на высшем уровне!",
      initials: "ЕВ"
    },
    {
      name: "Игорь Николаев",
      avatar: "/images/Men1.jpg",
      text: "Отличный трансфер из аэропорта! Встретили с табличкой, быстро доставили в отель. Очень доволен обслуживанием.",
      initials: "ИН"
    },
    {
      name: "Анна Смирнова",
      avatar: "/images/Girl2.jpg",
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
                <Avatar className="w-12 h-12 shrink-0">
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
