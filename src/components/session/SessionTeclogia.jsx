import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';

const baseTechnologies = [
  { name: 'Python', icon: <FaIcons.FaPython /> },
  { name: 'React', icon: <FaIcons.FaReact /> },
  { name: 'Django', icon: <FaIcons.FaLeaf /> },
  { name: 'Docker', icon: <FaIcons.FaDocker /> },
  { name: 'PostgreSQL', icon: <FaIcons.FaDatabase /> },
  { name: 'Tailwind CSS', icon: <FaIcons.FaCss3Alt /> },
  { name: 'Bootstrap', icon: <FaIcons.FaBootstrap /> },
];

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function SessionTecnologia() {
  const [technologies, setTechnologies] = useState(shuffleArray(baseTechnologies));

  useEffect(() => {
    const interval = setInterval(() => {
      setTechnologies(shuffleArray(baseTechnologies));
    }, 8000); // Cambia el orden cada 8 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black py-20 px-6">
      <h2 className="text-3xl font-bold mb-12 text-white text-center">Tecnologías que uso</h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-900 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="text-orange-500 text-5xl mb-2">{tech.icon}</div>
            <div className="text-white text-sm font-semibold text-center">{tech.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
