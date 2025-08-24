import { ReactNode } from 'react';
import QueryProvider from './query-provider';
import { inter } from '@/shared/lib/theme';
import { Locale, NextIntlClientProvider } from 'next-intl';

const AppProvider = ({ children, locale }: { children: ReactNode; locale: Locale }) => {
  return (
    <html lang={locale}>
      <body className={`flex min-h-screen flex-col antialiased`} style={inter.style}>
        <NextIntlClientProvider>
          <QueryProvider>{children}</QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default AppProvider;
