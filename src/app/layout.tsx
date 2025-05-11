import type { Metadata } from 'next';
import { Poppins, Montserrat } from 'next/font/google';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import Loader from '@/components/common/Loader';
import '@/styles/globals.css';

// Font configuration
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Destinus | Pacotes de Viagens Rodoviários e Aéreos',
  description: 'A Destinus oferece os melhores pacotes de viagens rodoviários e aéreos para os destinos mais incríveis do Brasil e exterior.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/png" href="/assets/icons/favicon.png" />
      </head>
      <body className={`${poppins.variable} ${montserrat.variable}`}>
        <Loader />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}