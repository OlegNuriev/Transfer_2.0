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
  title = "Трансфер и индивидуальные экскурсии | Черное море",
  description = "Комфортабельный трансфер из/в аэропорт и индивидуальные экскурсии по побережью Черного моря. Опытный водитель с стажем 15+ лет. Бизнес-класс автомобиль. Работаем 24/7.",
  keywords = "трансфер, экскурсии, черное море, аэропорт, индивидуальные экскурсии, комфортабельный автомобиль, водитель гид, побережье, Роза Хутор, горы",
  ogTitle,
  ogDescription,
  ogImage = "https://images.unsplash.com/photo-1560706834-97a5cdf62110?w=1200&h=630&fit=crop",
  canonical
}: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('og:title', ogTitle || title, true);
    updateMetaTag('og:description', ogDescription || description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', 'website', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', ogTitle || title);
    updateMetaTag('twitter:description', ogDescription || description);
    updateMetaTag('twitter:image', ogImage);

    // Additional SEO tags
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('author', 'Тур/Трансфер');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Canonical link
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.href = canonical;
    }

    // Language
    document.documentElement.lang = 'ru';
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonical]);

  return null;
}
