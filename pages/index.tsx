import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'; // Importar el componente Image de Next.js

const categories = [
  { nombre: 'Pollo', imagen: '/images/chicken/pollo.jpg' },
  { nombre: 'Vaca', imagen: '/images/cow/vaca.jpg' },
  { nombre: 'Cerdo', imagen: '/images/pig/cerdo.jpg' },
  { nombre: 'Cordero', imagen: '/images/lamb/cordero.jpeg' },
];

const Home: React.FC = () => {
  const router = useRouter();

  const handleSeleccionarCategoria = (category: string) => {
    router.push(`/categories/${category.toLowerCase()}`);
  };

  return (
    <div style={{ padding: '16px', textAlign: 'center' }}>
      <h1>Selecciona una categoría</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
        {categories.map((categoria) => (
          <div
            key={categoria.nombre}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '16px',
              cursor: 'pointer',
              textAlign: 'center',
              transition: 'transform 0.2s, box-shadow 0.2s',
              width: '200px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            onClick={() => handleSeleccionarCategoria(categoria.nombre)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div
              style={{
                width: '100%',
                height: '150px', // Alto fijo para el contenedor de la imagen
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                borderRadius: '8px',
                marginBottom: '8px',
              }}
            >
              <Image
                src={categoria.imagen}
                alt={categoria.nombre}
                width={200} // Ancho de la imagen
                height={150} // Alto de la imagen
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover', // Ajusta la imagen al contenedor sin distorsionar
                }}
              />
            </div>
            <h3 style={{ margin: 0 }}>{categoria.nombre}</h3> {/* Nombre fijo */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;