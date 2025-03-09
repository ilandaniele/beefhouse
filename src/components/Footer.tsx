// components/Footer.tsx
import React from 'react';
import { useCarrito } from '../context/CarritoContext';
import { useRouter } from 'next/router';

const Footer: React.FC = () => {
  const { carrito } = useCarrito();
  const router = useRouter();

  // Determinar si estamos en la página de finalización
  const esPaginaFinalizar = router.pathname === '/finalizar';

  const handleFinalizarCompra = () => {
    router.push('/finalizar');
  };

  return (
    <footer style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#333',
      color: '#fff',
      padding: '16px',
      textAlign: 'center',
      zIndex: 1000,
    }}>
      {/* Mostrar el botón de "Finalizar Compra" solo si no estamos en la página de finalización */}
      {!esPaginaFinalizar && (
        <button
          style={{
            backgroundColor: carrito.length > 0 ? 'green' : 'gray',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            cursor: carrito.length > 0 ? 'pointer' : 'not-allowed',
          }}
          onClick={handleFinalizarCompra}
          disabled={carrito.length === 0}
        >
          Finalizar Compra
        </button>
      )}
    </footer>
  );
};

export default Footer;