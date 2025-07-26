import React from 'react'
import gif_img from '../../assets/giphy.gif';

export default function Main() {
  return (
    <section className="bg-black text-white py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Izquierda: Textos */}
        <div className="flex-1">
          {/* Subtítulo con subrayado naranja */}
          <div className="mb-2">
            <p className="uppercase text-sm font-semibold text-white/70">
              We are <span className="text-white font-bold">Monteno NFT</span>
            </p>
            <div className="w-6 h-[2px] bg-orange-500 mt-1"></div>
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Collect Next <br /> Generation NFTs <br /> Today
          </h1>

          {/* Descripción */}
          <p className="text-lg text-white/80 mb-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          </p>

          {/* Botón con efecto animado */}
          <button className="relative group inline-block rounded-full px-8 py-3 font-semibold text-white border-2 border-orange-500 overflow-hidden z-10">
            {/* Fondo animado que se expande */}
            <span className="absolute inset-0 bg-orange-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left z-0"></span>

            {/* Texto encima del fondo */}
            <span className="relative z-10 block text-center group-hover:text-white transition-colors duration-300">
              Get Connected
            </span>
          </button>


        </div>

        {/* Derecha: Grid de imágenes */}
        {/* Derecha: GIF con efecto sombra arriba y abajo */}
        <div className="flex-1 relative">
          {/* GIF */}
          <div className="rounded-xl overflow-hidden relative z-10">
            <img
              src={gif_img}
              alt="animated workspace"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Sombra superior */}
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none z-20 rounded-t-xl"></div>

          {/* Sombra inferior */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-20 rounded-b-xl"></div>

          {/* Sombra izquierda */}
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none z-20 rounded-l-xl"></div>

          {/* Sombra derecha */}
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none z-20 rounded-r-xl"></div>
        </div>


      </div>
    </section>
  )
}
