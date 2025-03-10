import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'; // Importar el componente Image de Next.js
import type { Producto } from '../../src/types';
import { useCarrito } from '../../src/context/CarritoContext';

const productos: Producto[] = [
  // Pollo
  {
    id: 0,
    nombre: 'Patas de Pollo',
    imagen: '/images/chicken/pata.png',
    precioPorKilo: 8.99,
    category: 'pollo',
  },
  {
    id: 1,
    nombre: 'Alitas de Pollo',
    imagen: '/images/chicken/alitas.jpg',
    precioPorKilo: 8.99,
    category: 'pollo',
  },
  {
    id: 2,
    nombre: 'Pechuga de Pollo',
    imagen: '/images/chicken/pechuga.jpg',
    precioPorKilo: 10.99,
    category: 'pollo',
  },
  {
    id: 3,
    nombre: 'Pollo Entero',
    imagen: '/images/chicken/entero.jpg',
    precioPorKilo: 12.99,
    category: 'pollo',
  },
  {
    id: 4,
    nombre: 'Muslo de Pollo',
    imagen: '/images/chicken/muslo.png',
    precioPorKilo: 9.99,
    category: 'pollo',
  },
  // Vaca
  {
    id: 5,
    nombre: 'Lomo de Vaca',
    imagen: '/images/cow/lomo.jpg',
    precioPorKilo: 18.99,
    category: 'vaca',
  },
  {
    id: 6,
    nombre: 'Costilla de Vaca',
    imagen: '/images/cow/costilla.jpg',
    precioPorKilo: 15.99,
    category: 'vaca',
  },
  // Cerdo
  {
    id: 7,
    nombre: 'Chuleta de Cerdo',
    imagen: '/images/pig/chuleta.jpg',
    precioPorKilo: 12.99,
    category: 'cerdo',
  },
  {
    id: 8,
    nombre: 'Pierna de Cerdo',
    imagen: '/images/pig/pierna.jpg',
    precioPorKilo: 14.99,
    category: 'cerdo',
  },
  // Cordero
  {
    id: 9,
    nombre: 'Solomillo de Cordero',
    imagen: '/images/lamb/solomillo.jpg',
    precioPorKilo: 20.99,
    category: 'cordero',
  },
];

const ProductoPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [cantidad, setCantidad] = useState(0.1); // Cambiar a 0.1 como valor inicial
  const { agregarAlCarrito } = useCarrito();

  // Buscar el producto por ID
  const producto = productos.find((p) => p.id === parseInt(id as string));

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito({ producto, cantidad });
    router.push('/');
  };

  return (
    <div style={{ padding: '16px', textAlign: 'center' }}>
      <h1>{producto.nombre}</h1>
      <Image
        src={producto.imagen}
        alt={producto.nombre}
        width={300} // Ancho de la imagen
        height={300} // Alto de la imagen
        style={{ borderRadius: '8px' }}
      />
      <p>${producto.precioPorKilo} / kg</p>
      <div>
        <label>Cantidad (kg): </label>
        <input
          type="range"
          min="0.1"
          max="20"
          step="0.1" // Permitir incrementos de 0.1
          value={cantidad}
          onChange={(e) => setCantidad(parseFloat(e.target.value))} // Convertir a número decimal
        />
        <span>{cantidad.toFixed(1)} kg</span> {/* Mostrar con un decimal */}
      </div>
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
        onClick={handleAgregarAlCarrito}
      >
        Agregar al carrito
      </button>
      <button
        style={{
          backgroundColor: 'red',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          margin: '8px',
        }}
        onClick={() => router.push(`/categories/${producto.category}`)}
      >
        Atrás
      </button>
    </div>
  );
};

export default ProductoPage;