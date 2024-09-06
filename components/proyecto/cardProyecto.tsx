import React from 'react';
import Image from 'next/image';
import { Proyecto } from '../types';

interface ProyectoCarouselProps {
  proyecto: Proyecto;
  onClick: () => void;
}

export function CardProyecto({ proyecto, onClick }: ProyectoCarouselProps) {
  return (
    <div
      className="relative aspect-video cursor-pointer overflow-hidden rounded-lg"
      onClick={onClick}
    >
      <Image
        src={proyecto.imagen}
        alt={proyecto.nombre}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h2 className="text-white text-2xl font-bold">{proyecto.nombre}</h2>
      </div>
    </div>
  );
}