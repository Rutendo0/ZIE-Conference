import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Speakers from "@/sections/Speakers";
import Schedule from "@/sections/Schedule";
import Venue from "@/sections/Venue";
import Registration from "@/sections/Registration";
import Sponsors from "@/sections/Sponsors";
import Contact from "@/sections/Contact";
import Newsletter from "@/sections/Newsletter";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Update page title
    document.title = "ZIE International Conference 2025";

    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Zimbabwe Institution of Engineers International Conference 2025. Join us for innovation & sustainability in engineering, building Zimbabwe's future. October 15-17, 2025.");
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.setAttribute('name', 'description');
      newMetaDescription.setAttribute('content', "Zimbabwe Institution of Engineers International Conference 2025. Join us for innovation & sustainability in engineering, building Zimbabwe's future. October 15-17, 2025.");
      document.head.appendChild(newMetaDescription);
    }

    // Add Open Graph tags for social media sharing
    const ogTags = [
      { property: 'og:title', content: 'ZIE International Conference 2025' },
      { property: 'og:description', content: 'Join us for innovation & sustainability in engineering, building Zimbabwe\'s future. October 15-17, 2025.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:image', content: 'https://www.zie.co.zw/storage/app/public/logo/logo-1682675626.png' }
    ];

    ogTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const newTag = document.createElement('meta');
        newTag.setAttribute('property', tag.property);
        newTag.setAttribute('content', tag.content);
        document.head.appendChild(newTag);
      }
    });
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Speakers />
      <Schedule />
      <Venue />
      <Registration />
      <Sponsors />
      <Contact />
      <Newsletter />
    </>
  );
}
