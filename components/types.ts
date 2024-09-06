export interface Proyecto {
    id: number;
    nombre: string;
    color: string;
    imagen: string;
    secciones: SeccionProyecto[];
  }

  export interface SeccionProyecto {
    alineacion: 'izquierda' | 'derecha';
    titulo: string;
    descripcion: string;
    media: {
      tipo: 'imagen' | 'video';
      url: string;
    };
  }