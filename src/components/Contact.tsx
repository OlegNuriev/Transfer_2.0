import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { TelegramIcon, WhatsAppIcon, MaxIcon } from "./MessengerIcons";
import { CONTACTS } from "../config/contacts";

export function Contact() {
  /*const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    consent: false
  });*/
  

 /* const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast.error("Необходимо дать согласие на обработку персональных данных");
      return;
    }
    toast.success("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", email: "", message: "", consent: false });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };*/

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-4 py-1 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-600">Свяжитесь с нами</span>
          </div>
          <h2 className="mb-4">Закажите поездку прямо сейчас</h2>
          {/*<p className="text-gray-600">
            Оставьте заявку, и мы свяжемся с вами в течение 15 минут
          </p>*/}
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            
              <h3 className="mb-6">Контактная информация</h3>
              
              <div className="space-y-4">
                <a 
                  href={`tel:${CONTACTS.phone}`}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Позвоните нам</div>
                    <div className="text-gray-900">{CONTACTS.phoneDisplay}</div>
                    {/*<div className="text-sm text-gray-500">В удобное время</div>*/}
                  </div>
                </a>

                <a 
                  href={`mailto:${CONTACTS.email}`}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Напишите нам</div>
                    <div className="text-gray-900">{CONTACTS.email}</div>
                    <div className="text-sm text-gray-500">Ответим в течение часа</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Мы работаем</div>
                    <div className="text-gray-900">По всему городу</div>
                    <div className="text-sm text-gray-500">Подача в любую точку</div>
                  </div>
                </div>
              </div>
          {/*  <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Ваше имя</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Иван Иванов"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={CONTACTS.phoneDisplay}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">Email (необязательно)</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ivan@example.com"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="message">Детали поездки</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Расскажите о вашей поездке: откуда, куда, когда..."
                  rows={4}
                  required
                  className="mt-1"
                />
              </div>

                <div className="flex items-start gap-3 p-4 bg-gray-100 rounded-lg">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked: boolean | "indeterminate" | undefined) =>
                  setFormData({ ...formData, consent: Boolean(checked) })
                  }
                  className="mt-1 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <Label htmlFor="consent" className="cursor-pointer leading-relaxed">
                  Я согласен на{" "}
                  <a 
                    href="/privacy-policy.html" 
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    обработку персональных данных
                  </a>{" "}
                  в соответствии с законодательством Российской Федерации
                  </Label>
                </div>
                </div>

              <Button type="submit" size="lg" className="w-full group">
                <Send className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Отправить заявку
              </Button>
            </form> */}
          </div>

          <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="mb-3">Быстрая связь</h4>
              <p className="text-gray-600 mb-4">
                Свяжитесь с нами удобным для Вас способом. 
              </p>
              <div className="space-y-3">
                <a href={`tel:${CONTACTS.phone}`} className="block">
                  <Button variant="outline" className="w-full">
                    <Phone className="mr-2 w-4 h-4" />
                    Позвонить
                  </Button>
                </a>
                <a 
                  href={CONTACTS.telegram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">
                    <TelegramIcon className="mr-2 w-4 h-4" />
                    Написать в Telegram
                  </Button>
                </a>
                <a 
                  href={`https://wa.me/${CONTACTS.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-green-500 hover:bg-green-600">
                    <WhatsAppIcon className="mr-2 w-4 h-4" />
                    Написать в WhatsApp
                  </Button>
                </a>
               {/* <a 
                  href={CONTACTS.maxAI} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-purple-500 hover:bg-purple-600">
                    <MaxIcon className="mr-2 w-4 h-4" />
                    Написать в Max
                  </Button>
                </a>*/}
              </div>
            </div>
          </div>
        </div>
     {/*</div> */} 
    </section>
  );
}