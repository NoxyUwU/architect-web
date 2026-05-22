import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Architecture Portfolio',
  description: 'Modern architecture portfolio website',
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
