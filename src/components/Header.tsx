// components/Header.tsx
import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCarrito } from '../context/CarritoContext';
import Carrito from './Carrito';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const { carrito, eliminarDelCarrito } = useCarrito();
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const router = useRouter();

  const totalItems = carrito.length;

  // Ocultar el ícono del carrito en la página de finalización
  const mostrarIconoCarrito = router.pathname !== '/finalizar';

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#333',
        color: '#fff',
        padding: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
      }}>
        <h1 style={{ margin: 0 }}>Carnicería Online</h1>
        {mostrarIconoCarrito && ( // Mostrar el ícono solo si no estamos en la página de finalización
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => setMostrarCarrito(!mostrarCarrito)}
          >
            <FaShoppingCart size={24} />
            {totalItems > 0 && (
              <div
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  borderRadius: '50%',
                  padding: '4px 8px',
                  fontSize: '12px',
                  marginLeft: '8px',
                }}
              >
                {totalItems}
              </div>
            )}
          </div>
        )}
      </header>

      {/* Pop-up del carrito */}
      {mostrarIconoCarrito && ( // Mostrar el pop-up solo si no estamos en la página de finalización
        <div
          style={{
            position: 'fixed',
            top: '80px',
            right: mostrarCarrito ? '0' : '-100%', // Ocultar completamente cuando esté cerrado
            width: '400px',
            height: '80vh', // Altura del pop-up
            backgroundColor: '#fff',
            boxShadow: '-2px 0 8px rgba(0, 0, 0, 0.1)',
            transition: 'right 0.3s ease-in-out',
            zIndex: 999,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ flex: 1, overflowY: 'auto' }}>
            <Carrito carrito={carrito} onEliminar={eliminarDelCarrito} />
          </div>
          <button
            style={{
              backgroundColor: 'green',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              width: '100%',
              marginTop: '8px', // Reducir el margen superior
            }}
            onClick={() => {
              setMostrarCarrito(false); // Cerrar el pop-up
              router.push('/finalizar'); // Redirigir a la página de finalización
            }}
            disabled={carrito.length === 0}
          >
            Finalizar Compra
          </button>
        </div>
      )}
    </>
  );
};

export default Header;