import React from 'react';
import { useRouter } from 'next/router';
import Producto from '../../components/Producto';

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

const Categoria: React.FC = () => {
  const router = useRouter();
  const { category } = router.query;

  if (!category) {
    return <div>Cargando...</div>;
  }

  const productosFiltrados = productos.filter((p) => p.category === category);

  return (
    <div style={{ padding: '16px', textAlign: 'center' }}>
      <h1>Productos de {category}</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {productosFiltrados.map((producto) => (
          <Producto
            key={producto.id}
            producto={producto}
            onSeleccionar={() => router.push(`/producto/${producto.id}`)}
          />
        ))}
      </div>
      <button
        style={{
          position: 'fixed',
          bottom: '100px',
          left: '40px',
          backgroundColor: 'red',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={() => router.push('/')}
      >
        Atrás
      </button>
    </div>
  );
};

export default Categoria;