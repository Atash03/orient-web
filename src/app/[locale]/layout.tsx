import AppProvider from '@/providers';
import '../globals.css';
import { Header } from '@/widgets/header';
import { hasLocale } from 'next-intl';
import { routing } from '@/shared/lib/i18n/routing';
import { notFound } from 'next/navigation';
import { Footer } from '@/widgets/footer';
import { Advertisement } from '@/entities/advertisement';
import { Suspense } from 'react';

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <AppProvider locale={locale}>
      <Suspense>
        <Advertisement addsIndex={1} height={100} />
      </Suspense>
      <Header />
      {children}
      <Footer />
    </AppProvider>
  );
}
