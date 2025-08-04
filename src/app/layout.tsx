import { Metadata } from 'next';
import Script from 'next/script';
import React from 'react';

export const metadata: Metadata = {
  title: 'orient.tm - Новости Туркменистана и мира Orient',
  description:
    'Мы информируем о событиях, происшествиях и тенденциях, которые влияют на жизнь Туркменистана и всего Центрально-Азиатского региона. Ежедневно контент пополняется свежими и достоверными новостями.',
  keywords:
    'Новости Туркменистана, новости мира, последние новости, актуальные новости, президент, Гурбангулы Бердымухаммедов, События, Общество, Экономика, Культура, Экомир, Спорт. Технологии, независимое, информационное агентство, информагентство Туркменистана, страны, интересные новости, фото, видео, объявления, в Ашхабаде, в Туркменистане.',
  openGraph: {
    title: 'orient.tm - Новости Туркменистана и мира Orient',
    description:
      'Мы информируем о событиях, происшествиях и тенденциях, которые влияют на жизнь Туркменистана и всего Центрально-Азиатского региона. Ежедневно контент пополняется свежими и достоверными новостями.',
    images: [
      {
        url: 'https://orient.tm/favicon.ico',
        width: 32,
        height: 32,
        alt: 'Orient Logo',
      },
    ],
    siteName: 'orient.tm',
    url: 'https://orient.tm',
  },
  icons: {
    icon: [
      {
        url: '/Orient Icon 32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/cropped-cropped-orienticon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/Orienticon 180x180.png',
      },
      {
        rel: 'msapplication-TileImage',
        url: '/cropped-cropped-orienticon-270x270.png',
      },
    ],
  },
  verification: {
    google: 'accy-ms20t2deMnVYyynghmvKcJE5pTYOI42r8gAAkM',
    yandex: '9d83831cdb407bac',
  },
  other: {
    canonical: 'https://orient.tm',
  },
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <meta
          name="google-site-verification"
          content="GEfDQ_LMP4ly0tTnTcuX2Kr7WKri-Ql89FDLmYAKJXg"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <Script
          strategy="beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4375305456879458"
          crossOrigin="anonymous"
        />
        {/* Gogle tag (gtag.js) */}
        <Script
          strategy="beforeInteractive"
          type="text/javascript"
          src="https://www.googletagmanager.com/gtag/js?id=G-HHRB3PCSBQ&cx=c&gtm=45je57u1v9207009356za200&tag_exp=101509157~103116026~103200004~103233427~104684208~104684211~105087538~105087540~105103161~105103163"
        />
        <Script
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-WLMPE51G0P"
        />
        <Script
          strategy="beforeInteractive"
          id="dataLayer"
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-WLMPE51G0P');",
          }}
        />
        <Script
          strategy="beforeInteractive"
          id="ld+json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              '{ "@context": "http://schema.org", "@type": "NewsArticle", "isAccessibleForFree": true, "isPartOf": { "productID": "CAowwqzaCw:openaccess", "@type": ["Product"] } }',
          }}
        />
      </head>
      {children}
    </html>
  );
}

export default Layout;
