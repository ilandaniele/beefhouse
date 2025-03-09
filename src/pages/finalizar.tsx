// pages/finalizar.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useCarrito } from '../context/CarritoContext';
import Image from 'next/image';

const Finalizar: React.FC = () => {
  const router = useRouter();
  const [numeroPedido, setNumeroPedido] = useState<string | null>(null);
  const { carrito, limpiarCarrito } = useCarrito();

  useEffect(() => {
    // Generar el número de pedido solo una vez
    setNumeroPedido(Math.random().toString(36).substring(7));

    // Limpiar el carrito después de que la página se haya renderizado
    return () => {
      limpiarCarrito();
    };
  }, [limpiarCarrito]);

  // Calcular el total de la compra
  const total = carrito.reduce((sum, item) => sum + item.producto.precioPorKilo * item.cantidad, 0);

  return (
    <div style={{ padding: '16px', textAlign: 'center' }}>
      <h1>¡Compra finalizada!</h1>
      {numeroPedido && (
        <p>Tu número de pedido es: <strong>{numeroPedido}</strong></p>
      )}
      <h2>Resumen de la compra</h2>
      <ul style={{ listStyle: 'none', padding: 0, maxWidth: '600px', margin: '0 auto' }}>
        {carrito.map((item, index) => (
          <li
            key={index}
            style={{
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '8px',
              borderBottom: '1px solid #ccc',
            }}
          >
            <Image
              src={item.producto.imagen}
              alt={item.producto.nombre}
              width={60}
              height={60}
              style={{ borderRadius: '8px' }}
            />
            <div style={{ textAlign: 'left', flex: 1 }}>
              <h3 style={{ margin: 0, fontSize: '16px' }}>{item.producto.nombre}</h3>
              <p style={{ margin: 0, fontSize: '14px' }}>Cantidad: {item.cantidad.toFixed(1)} kg</p>
              <p style={{ margin: 0, fontSize: '14px' }}>
                Precio: ${(item.producto.precioPorKilo * item.cantidad).toFixed(2)}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <p style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '16px' }}>
        <strong>Total:</strong> ${total.toFixed(2)}
      </p>
      <button
        style={{
          backgroundColor: 'green',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          margin: '8px',
        }}
        onClick={() => router.push('/')}
      >
        Volver al inicio
      </button>
    </div>
  );
};

export default Finalizar;