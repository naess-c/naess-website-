export default function OldSyllabusPage() {
  const semesters = [
    { name: "Semester I", link: "#" },
    { name: "Semester II", link: "#" },
    { name: "Semester III", link: "#" },
    { name: "Semester IV", link: "#" },
    { name: "Semester V", link: "#" },
    { name: "Semester VI", link: "#" },
    { name: "Semester VII", link: "#" },
    { name: "Semester VIII", link: "#" },
  ];

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-teal-700 to-green-700 text-white py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-4">
            Old Course Syllabus
          </h1>

          <p className="text-xl text-teal-100">
            Bachelor in Agricultural Engineering (2066 Curriculum)
          </p>

        </div>

      </section>

      {/* Description */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">

        <p className="text-gray-600 leading-8">
          Access the semester-wise curriculum of the Bachelor in
          Agricultural Engineering program under the old IOE curriculum.
        </p>

      </section>

      {/* Semester Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {semesters.map((semester, index) => (
            <a
              key={index}
              href={semester.link}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >

              <div className="text-5xl mb-4">
                📚
              </div>

              <h2 className="text-xl font-bold text-teal-700">
                {semester.name}
              </h2>

              <p className="text-gray-500 mt-2">
                View Courses
              </p>

            </a>
          ))}

        </div>

      </section>

    </main>
  );
}