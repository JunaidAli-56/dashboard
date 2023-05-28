import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="root">
        {/* <Navbar /> */}
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
