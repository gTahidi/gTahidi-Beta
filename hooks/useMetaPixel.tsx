"use client"
import { useEffect } from 'react';

const useMetaPixel = (pixelId: string): void => {
  useEffect(() => {
    // Check if Pixel script already exists
    if (document.getElementById(`fb-pixel-${pixelId}`)) return;

    // Create Pixel script element
    const script = document.createElement('script');
    script.id = `fb-pixel-${pixelId}`;
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.src = `https://connect.facebook.net/en_US/fbevents.js`;
    document.head.appendChild(script);

    // Initialize Pixel with the given ID
    script.onload = () => {
      if (!window.fbq) {
        window.fbq = function () {
          (window.fbq as any).queue = (window.fbq as any).queue || [];
          (window.fbq as any).queue.push(arguments);
        };
        (window.fbq as any).loaded = true;
      }
      window.fbq('init', pixelId);
      window.fbq('track', 'PageView');
    };

    // Include noscript tag for fallback
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = `https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`;
    noscript.appendChild(img);
    document.body.appendChild(noscript);

    // Cleanup the script when the component unmounts
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (noscript.parentNode) {
        noscript.parentNode.removeChild(noscript);
      }
    };
  }, [pixelId]);
};

export default useMetaPixel;
