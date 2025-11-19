// src/App.tsx
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import RoutesPage from "./pages/RoutesPage";
import { Toaster } from "./components/ui/sonner";
import { SEO } from "./components/SEO";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a[href]");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      const url = new URL(href, window.location.origin);

      // Внешние ссылки и target="_blank" — не трогаем
      if (url.origin !== window.location.origin || link.getAttribute("target") === "_blank") {
        return;
      }

      e.preventDefault();

      // Если переходим на другую страницу — обновляем путь
      if (url.pathname !== window.location.pathname) {
        window.history.pushState({}, "", url.pathname + url.search + url.hash);
        setCurrentPath(url.pathname);
        window.scrollTo(0, 0);
      }

      // Если есть hash — скроллим (даже на текущей странице)
      if (url.hash) {
        const id = url.hash.slice(1);
        setTimeout(() => {
          const el = document.getElementById(id);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };

    window.addEventListener("popstate", handlePopState);
    document.addEventListener("click", handleLinkClick as EventListener);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("click", handleLinkClick as EventListener);
    };
  }, []);

  const renderPage = () => {
    if (currentPath === "/routes" || currentPath === "/routes/") {
      return (
        <>
          <SEO
            title="Популярные маршруты - Тур/Трансфер | Экскурсии по Черному морю"
            description="Индивидуальные экскурсии: Роза Хутор, панорама побережья, водопады и каньоны. Комфортабельный автомобиль, опытный водитель-гид. Цены от 3500₽."
            keywords="экскурсии сочи, роза хутор, экскурсии по побережью, водопады, каньоны, индивидуальные туры, цены на экскурсии"
          />
          <RoutesPage />
        </>
      );
    }

    return (
      <>
        <SEO />
        <HomePage />
      </>
    );
  };

  return (
    <>
      {renderPage()}
      <Toaster />
    </>
  );
}


