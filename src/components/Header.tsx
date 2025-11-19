// src/components/Header.tsx
import { Button } from "./ui/button";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import { TelegramIcon, WhatsAppIcon } from "./MessengerIcons";
import { CONTACTS } from "../config/contacts";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    // Если не на главной — переходим на главную с хэшем
    if (window.location.pathname !== "/" && window.location.pathname !== "") {
      window.location.href = `/#!${sectionId}`;
      return;
    }

    // Если уже на главной — просто скроллим
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl">🌴</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">{CONTACTS.companyName}</div>
              <div className="text-xs text-gray-500">{CONTACTS.companyDescription}</div>
            </div>
          </a>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("services")} className="text-gray-600 hover:text-blue-600 transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection("about")} className="text-gray-600 hover:text-blue-600 transition-colors">
              О нас
            </button>
            <button onClick={() => scrollToSection("benefits")} className="text-gray-600 hover:text-blue-600 transition-colors">
              Преимущества
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-gray-600 hover:text-blue-600 transition-colors">
              Контакты
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={`tel:${CONTACTS.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4" />
              <span>{CONTACTS.phoneDisplay}</span>
            </a>
            <a href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
              <TelegramIcon className="w-5 h-5" />
            </a>
            <a href={`https://wa.me/${CONTACTS.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors">
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <Button onClick={() => scrollToSection("contact")}>
              Заказать
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("services")} className="text-left text-gray-600 hover:text-blue-600">
                Услуги
              </button>
              <button onClick={() => scrollToSection("about")} className="text-left text-gray-600 hover:text-blue-600">
                О нас
              </button>
              <button onClick={() => scrollToSection("benefits")} className="text-left text-gray-600 hover:text-blue-600">
                Преимущества
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-left text-gray-600 hover:text-blue-600">
                Контакты
              </button>
              <a href={`tel:${CONTACTS.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                <Phone className="w-4 h-4" />
                {CONTACTS.phoneDisplay}
              </a>
              <div className="grid grid-cols-3 gap-3 pt-2">
                <a href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                  <TelegramIcon className="w-5 h-5" />
                  <span className="text-xs">Telegram</span>
                </a>
                <a href={`https://wa.me/${CONTACTS.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg">
                  <WhatsAppIcon className="w-5 h-5" />
                  <span className="text-xs">WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}