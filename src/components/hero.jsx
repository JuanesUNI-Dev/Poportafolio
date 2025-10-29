
import Image from "next/image";

export default function Hero() {
  return (
    
    <section className="relative h-[100vh] bg-gradient-to-b from-black via-gray-900 to-gray-950">

      <div className="sticky top-0 flex flex-col items-center justify-center h-screen overflow-hidden">
        <div className="portal-container ">
        <div className="portal-circle"></div>
      </div>

        <style>{`
         .portal-container {
          position: absolute;  
          top: 50px;
          left: 50%;
          transform: translateX(-50%);
          width: 250px;
          height: 100px;
          z-index: 40;
          }

          .portal-circle {
          width: 100%;
          height: 50%;
          border-radius: 50%;
          background: radial-gradient(circle, #5b21b6, #000);
          box-shadow: 0 0 40px 10px rgba(91, 33, 182, 0.6);
           animation: pulse 3s infinite;
          }
        `}</style>

        <div className="relative">
          {/* Imagen principal */}
          <Image
            src="/profile1.png"
            alt="Foto de Juan Mora"
            width={240}
            height={240}
            className="rounded-full border-4 border-indigo-600 shadow-lg z-10 relative"
          />
        </div>
      </div>

      {/* Contenido del texto */}
      <div className="absolute top-[70vh] left-0 w-full flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          Hola, me dicen  <span className="text-indigo-400">Juanes</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mb-6">
          Desarrollador web y programador de rapida adaptabilidad enfocado en crear productos bien epicos para empresas o para tu sobrino recien nacido, (todos necesitan una pagina web).
        </p>
        <a
          href="#projects"
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg transition"
        >
          Chismosear mis proyectos
        </a>
      </div>
    </section>
  );
}
