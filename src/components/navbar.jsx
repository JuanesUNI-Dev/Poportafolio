"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [showAvatar, setShowAvatar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowAvatar(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800 flex items-center justify-between px-6 py-3 transition-all duration-500">
      <div className="flex items-center gap-3">
        {/* Portal */}
        <div className="relative w-8 h-8">
          <Image
            src="/portal1.png"
            alt="Portal"
            fill
            className={`object-contain transition-transform duration-700 ${
              showAvatar ? "rotate-[360deg]" : "rotate-0"
            }`}
          />
        </div>

        {/* Avatar (aparece al hacer scroll) */}
        <div
          className={`transition-opacity duration-700 ${
            showAvatar ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          }`}
        >
          <Image
            src="/profile1.png"
            alt="Juan Mora"
            width={32}
            height={32}
            className="rounded-full border border-indigo-500 shadow-md"
          />
        </div>

        <span className="text-white font-bold text-lg ml-2">JuanesUNI-Dev</span>
      </div>

      <div className="flex gap-6 text-gray-300">
        {/* 🔽 Este link descargará el archivo */}
        <a
          href="/CVHVEspañolJuanEstebanAponte.pdf"
          download="CVHVEspañolJuanEstebanAponte.pdf"
          className="hover:text-indigo-400"
        >
          Hoja de vida
        </a>
        <a href="#about" className="hover:text-indigo-400">Sobre mí</a>
        <a href="#projects" className="hover:text-indigo-400">Proyectos</a>
        <a href="#contact" className="hover:text-indigo-400">Contacto</a>
      </div>
    </nav>
  );
}
