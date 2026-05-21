import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-geist' });

export const metadata: Metadata = {
  title: {
    default: 'Heck Holdings | AI Agent Infrastructure for Everyday Businesses',
    template: '%s | Heck Holdings'
  },
  description:
    'Heck Holdings builds practical artificial intelligence systems, AI agent infrastructure, agentic workflows, and automation solutions for everyday businesses.',
  keywords: [
    'AI agents',
    'business automation',
    'AI consulting',
    'agentic workflows',
    'AI infrastructure',
    'workflow automation'
  ],
  openGraph: {
    title: 'Heck Holdings | AI Agent Infrastructure for Everyday Businesses',
    description:
      'Practical AI systems that eliminate repetitive work and help businesses focus on growth.',
    url: 'https://heckholdings.com',
    siteName: 'Heck Holdings',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heck Holdings | AI Agent Infrastructure for Everyday Businesses',
    description: 'AI agents, agentic workflows, and automation systems for everyday businesses.'
  },
  alternates: {
    canonical: '/'
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
