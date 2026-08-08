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
      title: "NEC License Prepration Questions",
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
    <main className="min-h-screen bg-gray-50 flex flex-col">

      {/* Hero */}
      <section className="bg-gradient-to-r from-teal-700 to-green-700 text-white py-10 md:py-14">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">
            Academic Resources
          </h1>

          <p className="text-base md:text-xl text-teal-100">
            Agricultural Engineering Learning Hub
          </p>

        </div>

      </section>

      {/* Resource Cards */}
      <section className="flex-1 flex items-center max-w-6xl mx-auto px-6 py-8 md:py-12 w-full">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {resources.map((item, index) => (
            
           <a   key={index}
             href={item.link}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-4 md:p-6 flex flex-col items-center text-center"
            >

              <div className="text-3xl md:text-4xl mb-2 md:mb-3">
                {item.icon}
              </div>

              <h2 className="text-sm md:text-lg font-bold text-teal-700 mb-1 md:mb-2">
                {item.title}
              </h2>

              <p className="text-gray-600 text-xs md:text-sm hidden md:block">
                {item.description}
              </p>

            </a>
          ))}

        </div>

      </section>

    </main>
  );
}