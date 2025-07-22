import React from 'react'

export default function Main() {
  return (
    <section className="bg-black text-white py-60 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Izquierda: Textos */}
        <div className="flex-1">
          <p className="uppercase text-sm font-semibold text-white/70 mb-2">
            We are <span className="text-white font-bold">Monteno NFT</span>
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Collect Next <br /> Generation NFTs <br /> Today
          </h1>
          <p className="text-lg text-white/80 mb-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          </p>
          <button className="px-6 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition">
            Get Connected
          </button>
        </div>

        {/* Derecha: Grid de imágenes */}
        <div className="flex-1 grid grid-cols-3 gap-4">
          {/* Puedes usar tus propias imágenes aquí */}
         {/*
          {[
            '1.png', '2.png', '3.png',
            '4.png', '5.png', '6.png',
            '7.png', '8.png', '9.png'
          ].map((img, index) => (
            <div key={index} className="bg-purple-700 p-3 rounded-xl flex items-center justify-center">
              <img src={`/assets/nft/${img}`} alt={`NFT ${index + 1}`} className="w-full object-contain" />
            </div>
          ))}*/}
        </div>
      </div>
    </section>
  )
}
