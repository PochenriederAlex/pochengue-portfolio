"use client"

import React, { useState, useCallback, useEffect } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { CarouselApi } from '@/components/ui/carousel'
import type { EmblaCarouselType } from 'embla-carousel'
import { proyectos } from '../proyectos'
import { SeccionProyecto } from '../proyecto/seccionProyecto'
import { CardProyecto } from '../proyecto/cardProyecto'

export default function Portfolio() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(proyectos[0])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setCurrent(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api, onSelect])

  useEffect(() => {
    const proyecto = proyectos[current]
    if (proyecto) {
      setProyectoSeleccionado(proyecto)
    }
  }, [current])

  if (!proyectoSeleccionado) {
    return <div>Cargando...</div>
  }

  return (
    <div 
      className="min-h-screen p-8 transition-colors duration-500"
      style={{ backgroundColor: proyectoSeleccionado.color }}
    >
      <h1 className="text-3xl font-bold text-center mb-8">Pochengue</h1>
      
      <Carousel className="w-full max-w-3xl mx-auto mb-12" setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          {proyectos.map((proyecto, index) => (
            <CarouselItem key={proyecto.id}>
              <CardProyecto
                proyecto={proyecto}
                onClick={() => setProyectoSeleccionado(proyecto)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="max-w-4xl mx-auto space-y-12">
        {proyectoSeleccionado.secciones.map((seccion, index) => (
          <SeccionProyecto key={index} seccion={seccion} />
        ))}
      </div>
    </div>
  )
}