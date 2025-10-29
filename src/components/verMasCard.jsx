"use client";
import Image from "next/image";

export default function VerMasCard({
  project,
  currentImage,
  nextImage,
  prevImage,
  closeModal,
}) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6">
      <div className="relative bg-neutral-900 rounded-2xl p-8 max-w-4xl w-full shadow-lg text-center">
        {/* Imagen */}
        <div className="relative flex justify-center mb-6">
          <Image
            src={project.images[currentImage]}
            alt={project.title}
            width={800}
            height={450}
            className="rounded-lg object-contain max-h-[70vh]"
          />
        </div>

        {/* Botones para cambiar imagen */}
        <div className="flex justify-between text-indigo-400 text-2xl mb-4">
          <button onClick={prevImage} className="hover:text-indigo-300">
            ←
          </button>
          <button onClick={nextImage} className="hover:text-indigo-300">
            →
          </button>
        </div>

        {/* Texto */}
        <h4 className="text-3xl font-semibold mb-2 text-indigo-400">
          {project.title}
        </h4>
        <p className="text-gray-300 mb-6 text-lg">{project.desc}</p>

         {/* 🔗 Botones de links */}
        <div className="">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition"
            >
              Ver en GitHub
            </a>
          )}

          {project.link2 && (
            <a
              href={project.link2}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 ml-4 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition"
            >
              Ver Desplegado
            </a>
          )}
        </div>

        {/* Cerrar */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-5 text-gray-400 hover:text-white text-3xl"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
