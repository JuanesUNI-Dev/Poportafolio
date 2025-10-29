"use client";
import { useState } from "react";
import Image from "next/image";
import VerMasCard from "./verMasCard";

export default function Projects() {
  const projects = [
    {
      title: "Ani-Thing Store",
      desc: "Este proyecto es un sistema de gestión de inventario moderno construido con Next.js 14+ (App Router) y MongoAtlas MongoDB. Permite la administración completa de productos, incluyendo autenticación de usuarios, conexión a la base de datos y generación de reportes de inventario en formato PDF.",
      link: "https://github.com/JuanesUNI-Dev/AnimeProductsStockViewer",
      link2: "https://anime-products-stock-viewer.vercel.app/",
      images: ["/project1/project1.png", "/project1/project1-2.png", "/project1/project1-3.png","/project1/project1-4.png", "/project1/project1-5.png", "/project1/project1-6.png"],
    },
    {
      title: "Non-Ofensive ImagesSearch",
      desc: "Este proyecto permite consumir imágenes desde la API de Pixabay y almacenarlas en una base de datos MongoDB mediante un endpoint tipo POST.",
      link: "#",
      images: ["/project2/project2.png", "/project2/project2-2.png", "/project2/project2-3.png"],
    },
  ];

  const [activeProject, setActiveProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const openModal = (project) => {
    setActiveProject(project);
    setCurrentImage(0);
  };

  const closeModal = () => setActiveProject(null);
  const nextImage = () =>
    setCurrentImage((prev) =>
      activeProject && prev < activeProject.images.length - 1 ? prev + 1 : 0
    );
  const prevImage = () =>
    setCurrentImage((prev) =>
      activeProject && prev > 0 ? prev - 1 : activeProject.images.length - 1
    );

  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h3 className="text-3xl font-semibold mb-8 text-indigo-400 text-center">
        Proyectos
      </h3>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-neutral-800 p-6 rounded-xl shadow hover:shadow-indigo-500/20 transition flex flex-col items-center"
          >
            <Image
              src={p.images[0]}
              alt={p.title}
              width={500}
              height={300}
              className="object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
            />
            <h4 className="text-xl  font-semibold mt-4 mb-2">{p.title}</h4>
            <p className="text-gray-400 mb-4 text-center">{p.desc}</p>
            <button
              onClick={() => openModal(p)}
              className="text-indigo-400 hover:text-indigo-300 transition"
            >
              Ver más →
            </button>
          </div>
        ))}
      </div>

      {activeProject && (
        <VerMasCard
          project={activeProject}
          currentImage={currentImage}
          nextImage={nextImage}
          prevImage={prevImage}
          closeModal={closeModal}
        />
      )}
    </section>
  );
}
