export default function Education() {
  const education = [
    {
      institution: "Corporacion Universitaria Minuto de dios (UNIMINUTO)",
      degree: "Tecnología en Desarrollo de Software",
      period: "2022 - Actualidad",
      description:
        "Actualmente curso el cuarto semestre de la carrera, con enfoque en desarrollo web, bases de datos y metodologías ágiles.",
    },
    {
      institution: "Centro de Idiomas - Unillanos (Universidad de los llanos)",
      degree: "Certificación Inglés Nivel C1",
      period: "2022",
      description:
        "Certificación avalada por el centro de idiomas de la universidad, que acredita competencia avanzada en comprensión y producción del idioma.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h3 className="text-3xl font-semibold mb-8 text-indigo-400 text-center">
        Educación
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        {education.map((edu, i) => (
          <div
            key={i}
            className="bg-neutral-800 p-6 rounded-xl shadow hover:shadow-indigo-500/20 transition"
          >
            <h4 className="text-xl font-semibold text-indigo-400 mb-1">
              {edu.institution}
            </h4>
            <p className="text-gray-300 font-medium mb-1">{edu.degree}</p>
            <p className="text-gray-500 text-sm mb-3">{edu.period}</p>
            <p className="text-gray-400">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
