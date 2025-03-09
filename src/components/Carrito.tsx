// components/Carrito.tsx
import React from 'react';
import type { CarritoItem } from '../types';
import Image from 'next/image';

interface CarritoProps {
  carrito: CarritoItem[];
  onEliminar: (id: number) => void;
}

const Carrito: React.FC<CarritoProps> = ({ carrito, onEliminar }) => {
  return (
    <div style={{ padding: '16px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '20px', marginBottom: '16px' }}>Carrito de Compras</h1>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: '0' }}>
          {carrito.map((item) => (
            <li
              key={item.producto.id}
              style={{
                marginBottom: '12px', // Reducir el margen inferior
                display: 'flex',
                alignItems: 'center',
                gap: '12px', // Reducir el espacio entre elementos
                padding: '8px',
                borderBottom: '1px solid #ccc',
              }}
            >
              <Image
                src={item.producto.imagen}
                alt={item.producto.nombre}
                width={50} // Reducir el tamaño de la imagen
                height={50}
                style={{ borderRadius: '8px' }}
              />
              <div style={{ textAlign: 'left', flex: 1 }}>
                <h3 style={{ margin: 0, fontSize: '14px' }}>{item.producto.nombre}</h3>
                <p style={{ margin: 0, fontSize: '12px' }}>Cantidad: {item.cantidad.toFixed(1)} kg</p>
                <p style={{ margin: 0, fontSize: '12px' }}>
                  Precio: ${(item.producto.precioPorKilo * item.cantidad).toFixed(2)}
                </p>
              </div>
              <button
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  padding: '6px 12px', // Reducir el tamaño del botón
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '12px',
                }}
                onClick={() => onEliminar(item.producto.id)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Carrito;