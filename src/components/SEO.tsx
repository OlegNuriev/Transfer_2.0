import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

export function SEO({
  title = "Трансфер из Сочи | Экскурсии в Абхазию и Красную Поляну 2025–2026",
  description = "Комфортабельный трансфер из аэропорта Сочи в Красную Поляну, Роза Хутор, Адлер. Индивидуальные экскурсии в Абхазию от 6500 ₽: озеро Рица, Гегский водопад, Новый Афон. 24/7, фиксированные цены.",
  keywords = "трансфер Сочи, экскурсии Абхазия из Сочи, Красная Поляна трансфер, такси аэропорт Сочи, экскурсия Абхазия 2025, Роза Хутор",
  ogTitle,
  ogDescription,
  ogImage = "https://tourtransfer.ru/og-sochi-transfer.jpg", 
  canonical,
}: SEOProps) {
  useEffect(() => {
    // ── Title ────────────────────────────────────────
    document.title = title;

    // ── Helper для meta-тегов ────────────────────────
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;

      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }

      el.content = content;
    };

    const removeMeta = (name: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      const el = document.querySelector(`meta[${attr}="${name}"]`);
      if (el) el.remove();
    };

    // ── Основные meta ────────────────────────────────
    setMeta("description", description);
    setMeta("keywords", keywords);

    // Open Graph
    setMeta("og:title", ogTitle || title, true);
    setMeta("og:description", ogDescription || description, true);
    setMeta("og:image", ogImage, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", window.location.href, true);
    setMeta("og:locale", "ru_RU", true);

    // Twitter / X Cards
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", ogTitle || title);
    setMeta("twitter:description", ogDescription || description);
    setMeta("twitter:image", ogImage);
    // setMeta("twitter:site", "@твой_аккаунт");  

    // Дополнительные полезные теги
    setMeta("robots", "index, follow");
    setMeta("referrer", "strict-origin-when-cross-origin");
    setMeta("author", "Тур/Трансфер");          

    // Canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonical;
    } else if (canonicalLink) {
      canonicalLink.remove();
    }

    // ── Cleanup при размонтировании / смене ─────────
    return () => {
      
      removeMeta("og:url", true);
      removeMeta("og:locale", true);
      
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonical]);

  return null;
}