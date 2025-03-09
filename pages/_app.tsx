// _app.tsx
import type { AppProps } from 'next/app';
import { CarritoProvider } from '../src/context/CarritoContext';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import '../src/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CarritoProvider>
      <div style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </CarritoProvider>
  );
}

export default MyApp;