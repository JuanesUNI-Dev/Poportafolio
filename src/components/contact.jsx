export default function Contact() {
  return (
    <section className="max-w-4xl h-[70vh] mx-auto py-20 px-6 text-center">
      <h3 className="text-3xl font-semibold mb-4 text-indigo-400">Contacto</h3>
      <p className="text-gray-400 mb-6">
        Si quieres ponerte en contacto conmigo, puedes escribirme al correo:
      </p>

      <a
        href="mailto:juanestebanfelipe@gmail.com"
        className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg transition"
      >
        Enviar correo a juanestebanfelipe@gmail.com
      </a>

      <p className="text-gray-400 mt-8">Mis Redes</p>

      {/* Redes sociales */}
      <div className="social-container mt-4 flex justify-center gap-6 text-2xl text-gray-300">
        <a
          title="GitHub"
          href="https://github.com/JuanesUNI-Dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icon ion-logo-github hover:text-indigo-400 transition"></i>
        </a>
        <a
          title="Instagram"
          href="https://www.instagram.com/juanesapontem/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icon ion-logo-instagram hover:text-pink-500 transition"></i>
        </a>
        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/juan-esteban-aponte-29aab4271"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icon ion-logo-linkedin hover:text-blue-500 transition"></i>
        </a>
        <a
          title="YouTube"
          href="https://www.youtube.com/@JuanesUnimi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icon ion-logo-youtube hover:text-red-500 transition"></i>
        </a>
      </div>
    </section>
  );
}

