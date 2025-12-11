import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RoutesPage from "./pages/RoutesPage";
import { Toaster } from "./components/ui/sonner";
import { SEO } from "./components/SEO";
import { useEffect } from "react";

function SEOWrapper() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (location.pathname === "/routes" || location.pathname === "/routes/") {
    return (
      <SEO
        title="Экскурсии в Абхазию из Сочи 2025 | Озеро Рица, Гегский водопад, Новый Афон"
        description="Индивидуальные экскурсии в Абхазию из Сочи: озеро Рица, Гегский водопад, Новый Афон, Гагра. Также Красная Поляна, Роза Хутор. Цены от 6500 ₽ с человека."
        ogImage="https://tourtransfer.ru/og-abkhazia.jpg"
        canonical="https://tourtransfer.ru/routes"
      />
    );
  }

  return <SEO />; // для главной
}

export default function App() {
  return (
    <BrowserRouter>
      <SEOWrapper />
      <Routes>
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/routes/" element={<RoutesPage />} />
        <Route path="/*" element={<HomePage />} /> {/* все остальные, включая / */}
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}


