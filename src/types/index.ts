export interface Producto {
    id: number;
    nombre: string;
    imagen: string;
    precioPorKilo: number;
    category: string; // Categoría del producto (pollo, vaca, cerdo, cordero)
  }
  
  export interface CarritoItem {
    producto: Producto;
    cantidad: number;
  }