import type { ReactNode } from 'react';
import { inter, lusitana, geist } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}