export default function SoftSkills() {
  const skills = ["Mentalidad Positiva","Adaptable a roles","Trabajo en equipo", "no miro feo (aveces)"];

  return (
    <section className="max-w-5xl mx-auto py-20 px-6 text-center">
      <h3 className="text-3xl font-semibold mb-8 text-indigo-400">Habilidades Blandas</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-neutral-800 text-gray-200 px-4 py-2 rounded-lg shadow hover:shadow-indigo-500/30"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
