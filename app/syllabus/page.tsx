export default function SyllabusPage() {
const resources = [
  {
    title: "Notes & Study Materials",
    description:
      "Notes, Syllabus, Manuals and Past Questions for Old and New Courses",
    link: "/notes",
    icon: "📖",
  },
  {
    title: "NEC License Syllabus",
    description:
      "Nepal Engineering Council License Examination Syllabus",
    link: "/nec",
    icon: "📝",
  },
  {
    title: "NEC License Questions",
    description:
      "Previous License Examination Questions and Resources",
    link: "/license-questions",
    icon: "📋",
  },
  {
    title: "Working Areas",
    description:
      "Career Opportunities and Professional Fields for Agricultural Engineers",
    link: "/career",
    icon: "🚜",
  },
];

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-teal-700 to-green-700 text-white py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-4">
            Academic Resources
          </h1>

          <p className="text-xl text-teal-100">
            Agricultural Engineering Learning Hub
          </p>

        </div>

      </section>

      {/* Resource Cards */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {resources.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8"
            >

              <div className="text-5xl mb-5">
                {item.icon}
              </div>

              <h2 className="text-2xl font-bold text-teal-700 mb-3">
                {item.title}
              </h2>

              <p className="text-gray-600">
                {item.description}
              </p>

            </a>
          ))}

        </div>

      </section>

    </main>
  );
}