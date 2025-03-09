// context/CarritoContext.tsx
import React, { createContext, useContext, useState } from 'react';
import type { CarritoItem } from '../types';

interface CarritoContextType {
  carrito: CarritoItem[];
  agregarAlCarrito: (item: CarritoItem) => void;
  eliminarDelCarrito: (id: number) => void;
  limpiarCarrito: () => void;
}

const CarritoContext = createContext<CarritoContextType | undefined>(undefined);

export const CarritoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [carrito, setCarrito] = useState<CarritoItem[]>([]);

  const agregarAlCarrito = (nuevoItem: CarritoItem) => {
    setCarrito((prev) => {
      // Buscar si el producto ya existe en el carrito
      const productoExistente = prev.find((item) => item.producto.id === nuevoItem.producto.id);

      if (productoExistente) {
        // Si existe, sumar las cantidades
        return prev.map((item) =>
          item.producto.id === nuevoItem.producto.id
            ? { ...item, cantidad: item.cantidad + nuevoItem.cantidad }
            : item
        );
      } else {
        // Si no existe, agregar el nuevo producto
        return [...prev, nuevoItem];
      }
    });
  };

  const eliminarDelCarrito = (id: number) => {
    setCarrito((prev) => prev.filter((item) => item.producto.id !== id));
  };

  const limpiarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, limpiarCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error('useCarrito debe usarse dentro de un CarritoProvider');
  }
  return context;
};