import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const siteTitle = 'Atelier Axis — Architecture Portfolio';
const siteDescription =
  'Modern architecture portfolio featuring residential, commercial, and urban design concepts by Atelier Axis.';

export const metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: siteTitle,
    template: '%s | Atelier Axis',
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-stone-950 text-stone-100 antialiased">
        <div className="min-h-screen">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
