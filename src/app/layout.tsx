import './globals.css';
import AppProvider from '@/providers';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppProvider>{children}</AppProvider>;
}
