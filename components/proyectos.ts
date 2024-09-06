"use client";
import { Proyecto } from "./types";

export const proyectos: Proyecto[] = [
  {
    id: 1,
    nombre: "Quantum Trader",
    color: "#45455A",
    imagen:"/placeholder.svg?height=200&width=300",
    secciones: [
      {
        titulo: "Visión General",
        descripcion: "Videojuego para Android y PC en el que deberás controlar una línea de precios de diferentes criptomonedas y activos financieros.",
        media: { tipo: 'imagen', url: "/placeholder.svg?height=300&width=400" },
        alineacion: 'izquierda'
      },
      {
        titulo: "Controla el tiempo y la ansiedad",
        descripcion: "En Quantum Trader tendrás que predecir los movimientos del mercado para no quedar en bancarrota. Tus principales herramientas serán el control del tiempo y la ansiedad. Pero cuidado, no agotes tu Quantum Juice!",
        media: { tipo: 'imagen', url: "/placeholder.svg?height=300&width=400" },
        alineacion: 'derecha'
      },
      {
        titulo: "Estilo minimalista",
        descripcion: "La parte visual del juego es lo que más orgullo me da. Teniendo pocos conocimientos de diseño, intenté crear un estilo simple y minimalista.",
        media: { tipo: 'video', url: "https://example.com/proyecto-a-demo.mp4" },
        alineacion: 'izquierda'
      },
      {
        titulo: "Música propia",
        descripcion: "La música está compuesta por mi en su totalidad. Compuesta con Ableton Live y con un estilo MIDI bastante simple",
        media: { tipo: 'video', url: "https://example.com/proyecto-a-demo.mp4" },
        alineacion: 'derecha'
      }
    ]
  },
  {
    id: 2,
    nombre: "Twitch Overlay",
    color: "#8E7FA6",
    imagen:"/placeholder.svg?height=200&width=300",
    secciones: [
      {
        titulo: "Concepto",
        descripcion: "Un programa para mejorar y personalizar mis propios Stream en Twitch, dando posibilidad a los espectadores de interactuar de forma más directa.",
        media: { tipo: 'imagen', url: "/placeholder.svg?height=300&width=400" },
        alineacion: 'derecha'
      },
      {
        titulo: "Funcionalidades",
        descripcion: "Integración con el chat de Twitch y OBS. Manejo por controlador MIDI. Comandos de usuarios y canjeo de puntos. Reproducción de videos personalizados y efectos de pantalla.",
        media: { tipo: 'imagen', url: "/placeholder.svg?height=300&width=400" },
        alineacion: 'izquierda'
      },
      {
        titulo: "Tecnologías",
        descripcion: "Desarrollado en Unity con C# como lenguaje principal.",
        media: { tipo: 'imagen', url: "/placeholder.svg?height=300&width=400" },
        alineacion: 'derecha'
      }
    ]
  },
  {
    id: 3,
    nombre: "PochengueTV",
    color: "#FFB26C",
    imagen:"/pochengueTV/pochengue.png?height=200&width=300",
    secciones: [
      {
        titulo: "¿De qué trata?",
        descripcion: "Creación de contenido para las redes sociales relacionados con el mundo de los videojuegos, la tecnología y el entretenimiento.",
        media: { tipo: 'imagen', url: "/placeholder.svg?height=300&width=400" },
        alineacion: 'izquierda'
      },
      {
        titulo: "Todo por entretener",
        descripcion: "El objetivo del canal es entretener y sacar unas risas.",
        media: { tipo: 'video', url: "https://example.com/proyecto-c-tech.mp4" },
        alineacion: 'derecha'
      },
      {
        titulo: "La educación es lo primero",
        descripcion: "Cuando una tecnología me interesa realmente me encanta profundizar a fondo e intentar explicarlo de modo sencillo.",
        media: { tipo: 'video', url: "https://example.com/proyecto-c-tech.mp4" },
        alineacion: 'izquierda'
      },
      {
        titulo: "Redes Sociales",
        descripcion: "Principalmente Instagram y TikTok, pero incursionando en videos largos en YouTube y streams en Twitch.",
        media: { tipo: 'video', url: "https://example.com/proyecto-c-tech.mp4" },
        alineacion: 'derecha'
      }
    ]
  }
];
