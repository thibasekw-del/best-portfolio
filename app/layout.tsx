import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'BEST. — Statistics, Data & Software',
  description: 'Meet BEST, a fourth-year Statistics student at KMITL exploring the intersection of data, business, and practical software.',
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
