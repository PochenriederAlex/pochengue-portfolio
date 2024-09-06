import Image from 'next/image'
import { SeccionProyecto as SeccionProyectoType } from '../types'

export function SeccionProyecto({ seccion }: { seccion: SeccionProyectoType }) {
  return (
    <section className={`flex flex-col ${seccion.alineacion === 'izquierda' ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-8`}>
      <div className={`w-full md:w-1/2 ${seccion.alineacion === 'izquierda' ? 'md:pr-4' : 'md:pl-4'}`}>
        <h3 className="text-2xl font-semibold mb-4">{seccion.titulo}</h3>
        <p>{seccion.descripcion}</p>
      </div>
      <div className="w-full md:w-1/2">
        {seccion.media.tipo === 'imagen' ? (
          <Image
            src={seccion.media.url}
            alt={`Imagen para ${seccion.titulo}`}
            width={400}
            height={300}
            className="rounded-lg"
          />
        ) : (
          <video
            src={seccion.media.url}
            controls
            className="w-full rounded-lg"
          >
            Tu navegador no soporta el elemento de video.
          </video>
        )}
      </div>
    </section>
  )
}