import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-geist' });

export const metadata: Metadata = {
  title: 'Heck Holdings | AI Agent Infrastructure for Everyday Businesses',
  description:
    'Heck Holdings builds practical artificial intelligence systems, AI agent infrastructure, agentic workflows, and automation solutions for everyday businesses.',
  openGraph: {
    title: 'Heck Holdings | AI Agent Infrastructure for Everyday Businesses',
    description:
      'Practical AI systems that eliminate repetitive work and help businesses focus on growth.',
    url: 'https://heckholdings.com',
    siteName: 'Heck Holdings',
    type: 'website'
  },
  metadataBase: new URL('https://heckholdings.com')
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
