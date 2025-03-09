import React from 'react';
import Image from 'next/image';
import type { Producto } from '../types';

interface ProductoProps {
  producto: Producto;
  onSeleccionar: () => void;
}

const Producto: React.FC<ProductoProps> = ({ producto, onSeleccionar }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '8px',
        cursor: 'pointer',
        textAlign: 'center',
        transition: 'transform 0.2s, box-shadow 0.2s',
        width: '200px',
      }}
      onClick={onSeleccionar}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
      }}
    >
      <Image
        src={producto.imagen}
        alt={producto.nombre}
        width={150}
        height={150}
        style={{ borderRadius: '8px' }}
      />
      <h3 style={{ margin: '8px 0', fontSize: '18px' }}>{producto.nombre}</h3>
      <p style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>
        ${producto.precioPorKilo} / kg
      </p>
    </div>
  );
};

export default Producto;