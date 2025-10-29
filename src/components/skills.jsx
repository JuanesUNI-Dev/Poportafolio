export default function Skills() {
  const skills = ["JavaScript", "Next.js (Mas Usado)", "React", "MySQL", "Git", "HTML", "CSS"];

  return (
    <section className="max-w-5xl mx-auto py-20 px-6 text-center">
      <h3 className="text-3xl font-semibold mb-8 text-indigo-400">Lenguajes y Frameworks que he manipulado</h3>
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
