import { Phone, Mail } from "lucide-react";
import { TelegramIcon, WhatsAppIcon, MaxIcon } from "./MessengerIcons";
import { CONTACTS } from "../config/contacts";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white">🚗</span>
              </div>
              <div>
                <div className="text-white">{CONTACTS.companyName}</div>
                <div className="text-xs">{CONTACTS.companyDescription}</div>
              </div>
            </div>
            <p className="text-sm">
              Индивидуальные трансферы и экскурсии на комфортабельном автомобиле. 
              Ваш надежный партнер в пути.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#services" className="hover:text-blue-400 transition-colors">Трансфер из/в аэропорт</a></li>
              <li><a href="/#services" className="hover:text-blue-400 transition-colors">Индивидуальные экскурсии</a></li>
              <li><a href="/#about" className="hover:text-blue-400 transition-colors">О нас</a></li>
              <li><a href="/#benefits" className="hover:text-blue-400 transition-colors">Преимущества</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Контакты</h4>
            <div className="space-y-3 text-sm">
              <a href={`tel:${CONTACTS.phone}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>{CONTACTS.phoneDisplay}</span>
              </a>
              <a href={`mailto:${CONTACTS.email}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>{CONTACTS.email}</span>
              </a>
              <div className="flex gap-3 pt-2">
                <a 
                  href={CONTACTS.telegram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                  title="Telegram"
                >
                  <TelegramIcon className="w-5 h-5" />
                </a>
                <a 
                  href={`https://wa.me/${CONTACTS.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                  title="WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
                {/*<a 
                  href={CONTACTS.maxAI} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
                  title="Max AI"
                >
                  <MaxIcon className="w-5 h-5" />
                </a>*/}
              </div>
              <p>Работаем круглосуточно, без выходных</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© {currentYear} {CONTACTS.companyName}. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}