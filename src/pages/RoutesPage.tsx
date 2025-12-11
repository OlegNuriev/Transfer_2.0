import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ArrowLeft, Clock, MapPin, Phone, ChevronLeft, ChevronRight, X } from "lucide-react";
import { TelegramIcon, WhatsAppIcon, MaxIcon } from "../components/MessengerIcons";
import { ImageWithFallback } from "../components/plug/ImageWithFallback";
import { useState } from "react";
import { Dialog, DialogContent } from "../components/ui/dialog";
import { Toaster } from "../components/ui/sonner";
import { CONTACTS } from "../config/contacts";
import { SEO } from "../components/SEO";
import { Link } from "react-router-dom";

interface RouteImage {
  url: string;
  alt: string;
}

interface Route {
  id: string;
  title: string;
  duration: string;
  distance: string;
  description: string;
  images: RouteImage[];
  includes: string[];
  price: string;
}

export default function RoutesPage() {
  const routes: Route[] = [
    {
      id: "roza-khutor",
      title: "Роза Хутор или Красная Поляна",
      duration: "6-7 часов",
      distance: "100 км",
      description: "Посещение курорта мирового уровня, построенного к Олимпиаде 2014 года. Великолепные виды на горы Кавказа, современная инфраструктура, канатные дороги. Зимой — катание на лыжах и сноубордах, летом — пешие прогулки и велопрогулки по живописным маршрутам.",
      images: [
        {
          url: "/images/RosaKhutor.jpg",
          alt: "Горный курорт"
        },
        {
          url: "/images/РозаХутор.png",
          alt: "Городская Ратуша в Новый год"
        },
        {
          url: "/images/snow1.jpg",
          alt: "Панорама гор зимой"
        },
        {
          url: "/images/Роза Долина.png",
          alt: "Панорама гор зимой"
        }
      ],
      includes: [
        "Канатная дорога на высоту 2320м (по желанию, оплачивается отдельно) ",
        "Панорамные виды на горы",
        "Олимпийская деревня",
        "Пешеходная зона набережной реки Мзымта",
        "Красивые фото в горах"
      ],
      price: "от 5 000"
    },

{
    id: "abkhazia",
    title: "Экскурсия в Абхазию (Гагра, озеро Рица)",
    duration: "8-12 часов",
    distance: "300 км",
    description: "Путешествие по Абхазии с посещением самых ярких мест: солнечная Гагра с рестораном «Гагрипш» и парком принца Ольденбургского, Бзыбское ущелье и крепость X века, Голубое озеро, Юпшарский каньон с водопадом «Мужские слёзы», смотровая «Прощай Родина», высокогорное озеро Рица и дача Сталина. Гибкий маршрут — по вашему желанию меняем программу прямо в поездке.",
    images: [
      {
        url: "/images/Рица.jpg",
        alt: "Озеро Рица в горах Абхазии"
      },
      {
        url: "/images/Колоннада.jpg",
        alt: "Колоннада в Гаграх"
      },
      {
        url: "/images/Гагра и Черное Море.jpg",
        alt: "Гагра и Черное море"
      },
      {
        url: "/images/ГолубоеОзеро.jpg",
        alt: "Голубое озеро"
      }
    ],
    includes: [
      "Гагра: колоннада, парк принца Ольденбургского, ресторан «Гагрипш»",
      "Голубое озеро и Юпшарский каньон",
      "Озеро Рица и дача Сталина",
      "Остановки для фото в самых красивых местах",
      "Смотровая площадка «Прощай Родина»"
    ],
    price: "от 8 500"
  },
    
    {
      id: "coastal-tour",
      title: "Экскурсия в Абхазию (Гагра, Новый Афон)",
      duration: "6-10 часов",
      distance: "220 км",
      description: "Однодневное путешествие по классической Абхазии с акцентом на Гагру и Новый Афон. Белые скалы, ресторан «Гагрипш», парк принца Ольденбургского, Анакопийская крепость, Новоафонский монастырь, рукотворный водопад, Лебединое озеро и знаменитая Новоафонская пещера. Гибкий маршрут — меняем программу по вашим пожеланиям прямо в поездке.",
      images: [
        {
          url: "/images/Гагра Львы.jpg",
          alt: "Зимний Театр"
        },
        {
          url: "/images/Afon3.jpg",
          alt: "Станция «Псырцха»"
        },
        {
          url: "/images/peshchera.jpg",
          alt: "Новоафонская пещера"
        },
        {
          url: "/images/Afon.jpg",
          alt: "Водопад"
        }
      ],
      includes: [
        "Смотровые площадки",
        "Гагра: пляж Белые скалы, ресторан «Гагрипш», парк принца Ольденбургского",
        "Новый Афон: Анакопийская крепость, монастырь, рукотворный водопад",
        "Лебединое озеро и заброшенная ж/д станция Псырцха",
        "Новоафонская пещера (вход оплачивается отдельно)"
      ],
      price: "от 8 500"
    },
    {
      id: "waterfalls",
      title: "Водопады и каньоны",
      duration: "5-6 часов",
      distance: "70 км",
      description: "Увлекательное путешествие к природным жемчужинам региона. Посетите живописные водопады, прогуляйтесь по каньонам, насладитесь свежим горным воздухом и первозданной природой. Идеально для любителей природы и активного отдыха.",
      images: [
        {
          url: "/images/Waterfall2.jpg",
          alt: "Водопад"
        },
        {
          url: "/images/Каньон.jpg",
          alt: "Каньон"
        },
        {
          url: "/images/ПастьДракона.jpg",
          alt: "Пасть Дракона"
        },
        {
          url: "/images/Змейка.jpg",
          alt: "Водопад Змейка"
        }
      ],
      includes: [
        "Посещение водопадов",
        "Прогулка по каньону",
        "Живописные пейзажи",
        "Возможность искупаться",
        "Фотографии на память"
      ],
      price: "от 4 000"
    }
  ];

  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const handleRouteClick = (route: Route) => {
    setSelectedRoute(route);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedRoute) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedRoute.images.length);
    }
  };

  const prevImage = () => {
    if (selectedRoute) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedRoute.images.length) % selectedRoute.images.length);
    }
  };

  const openModal = (index: number) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const nextModalImage = () => {
    if (selectedRoute) {
      setModalImageIndex((prev) => (prev + 1) % selectedRoute.images.length);
    }
  };

  const prevModalImage = () => {
    if (selectedRoute) {
      setModalImageIndex((prev) => (prev - 1 + selectedRoute.images.length) % selectedRoute.images.length);
    }
  };

  return (

    
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Header />
      <SEO
        title="Экскурсии в Абхазию из Сочи 2025 | Озеро Рица, Гегский водопад, Новый Афон"
        description="Индивидуальные экскурсии в Абхазию из Сочи и Адлера: озеро Рица, Гегский водопад, Новый Афон, Гагра. Также Красная Поляна и Роза Хутор. Цены от 6500 ₽ с человека. Комфортный трансфер, опытный гид."
        ogImage="https://tourtransfer.ru/og-abkhazia.jpg"
        canonical="https://tourtransfer.ru/excursions"
      />
      {/* Hero section with image */}
      <div className="relative h-64 bg-gradient-to-r from-slate-700 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <ImageWithFallback
            src="/images/Фон.jpg"
            alt="Экскурсионные маршруты"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-800/70"></div>
        {/* Decorative circles */}
        <div className="absolute top-0 right-1/4 w-48 h-48 bg-slate-400 rounded-full opacity-20 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-slate-500 rounded-full opacity-10 translate-y-1/2"></div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-white">Экскурсионные маршруты</h1>
          <p className="max-w-2xl text-gray-200">
            Откройте для себя красоту Сочи и Черноморского побережья
          </p>
        </div>
      </div>
  
      <main className="pt-12 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" className="group">
                <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                На главную
              </Button>
            </Link>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
  Индивидуальные экскурсии из Сочи в Абхазию и Красную Поляну
</h2>
<p className="text-xl text-gray-600 mb-8">
  Комфортабельный автомобиль • Опытный водитель-гид • Доступные цены 
</p>
            <p className="text-gray-600">
              Индивидуальные экскурсии на комфортабельном авто с опытным водителем-гидом
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8" id="excursions">
            {routes.map((route) => (
              <Card key={route.id} className="overflow-hidden">
                <div className="grid md:grid-cols-5 gap-6 p-6">
                  <div className="md:col-span-2">
                    <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                      <ImageWithFallback
                        src={selectedRoute?.id === route.id ? selectedRoute.images[currentImageIndex].url : route.images[0].url}
                        alt={selectedRoute?.id === route.id ? selectedRoute.images[currentImageIndex].alt : route.images[0].alt}
                        className="w-full h-64 object-cover"
                        onClick={() => {
                          handleRouteClick(route);
                          openModal(0);
                        }}
                      />
                      
                      {selectedRoute?.id === route.id && (
                        <>
                          <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100"
                          >
                            <ChevronLeft className="w-4 h-4 text-gray-900" />
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100"
                          >
                            <ChevronRight className="w-4 h-4 text-gray-900" />
                          </button>

                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {route.images.map((_, index) => (
                              <button
                                key={index}
                                onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                                className={`w-1.5 h-1.5 rounded-full transition-all ${
                                  index === currentImageIndex ? "bg-white w-6" : "bg-white/50"
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="md:col-span-3">
                    <h2 className="mb-3 text-3xl font-bold text-gray-900">
  {route.title.includes("Абхазия") ? (
    <>Экскурсия в <span className="text-blue-600">Абхазию</span> из Сочи</>
  ) : route.title.includes("Красная Поляна") ? (
    <>Экскурсия на <span className="text-green-600">Красную Поляну</span> и Роза Хутор</>
  ) : (
    route.title
  )}
</h2>
                    <div className="flex gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{route.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{route.distance}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{route.description}</p>

                    <div className="mb-6">
                      <h4 className="mb-2">Что входит:</h4>
                      <ul className="space-y-1.5">
                        {route.includes.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                          <div className="text-sm text-gray-500 mb-1">Стоимость:</div>
                          <div className="text-blue-600">{route.price} ₽</div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <a href={`tel:${CONTACTS.phone}`}>
                            <Button variant="outline" size="sm">
                              <Phone className="w-4 h-4 mr-1" />
                              Позвонить
                            </Button>
                          </a>
                          <a href={`https://wa.me/${CONTACTS.whatsapp}`} target="_blank" rel="noopener noreferrer">
                            <Button className="bg-green-500 hover:bg-green-600" size="sm">
                              <WhatsAppIcon className="w-4 h-4 mr-1" />
                              WhatsApp
                            </Button>
                          </a>
                          <a href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer">
                            <Button className="bg-blue-500 hover:bg-blue-600" size="sm">
                              <TelegramIcon className="w-4 h-4 mr-1" />
                              Telegram
                            </Button>
                          </a>
                          {/*<a href={CONTACTS.max} target="_blank" rel="noopener noreferrer">
                            <Button className="bg-purple-500 hover:bg-purple-600" size="sm">
                              <MaxIcon className="w-4 h-4 mr-1" />
                              MAX 
                            </Button>
                          </a>*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="max-w-5xl mx-auto mt-12" id="transfer">
            <Card className="p-6">
              <h2 className="mb-4">Трансфер из/в аэропорт</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600 mb-4">
                    Надежный и комфортный трансфер в любое время суток. Встретим с табличкой, поможем с багажом, контролируем время вылета.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                      <span className="text-sm text-gray-600">Встреча с табличкой в зале прилета</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                      <span className="text-sm text-gray-600">Помощь с багажом</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                      <span className="text-sm text-gray-600">Контроль рейса, адаптация к задержкам</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                      <span className="text-sm text-gray-600">Комфортная поездка в любую точку города</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                      <span className="text-sm text-gray-600">Бесплатная детское кресло (по запросу)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="mb-4">Тарифы</h4>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Аэропорт → Город (центр)</span>
                        <span className="text-blue-600">от 2 000 ₽</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Город → Аэропорт</span>
                        <span className="text-blue-600">от 2 000 ₽</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Аэропорт → Горные районы</span>
                        <span className="text-blue-600">от 3 500 ₽</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">
                      * Точная стоимость зависит от адреса. Уточняйте при заказе.
                    </p>
                    <div className="space-y-2">
                      <a href={`tel:${CONTACTS.phone}`} className="block">
                        <Button className="w-full">
                          <Phone className="mr-2 w-4 h-4" />
                          Заказать трансфер
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
      <Toaster />

      {/* Full screen modal */}
      {selectedRoute && (
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
                src={selectedRoute.images[modalImageIndex].url}
                alt={selectedRoute.images[modalImageIndex].alt}
                className="max-w-full max-h-full object-contain"
              />

              <button
                onClick={nextModalImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
              >
                <ChevronRight className="w-6 h-6 text-gray-900" />
              </button>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-50">
                {selectedRoute.images.map((_, index) => (
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
      )}
    </div>
  );
}