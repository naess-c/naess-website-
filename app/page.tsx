import Image from "next/image";

export default function Home() {
  return (
    
    <main className="min-h-screen bg-white">

      {/* Navbar */}
<nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
  <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

    {/* Logo Section */}
    <div className="flex items-center gap-3">

      <Image
        src="/images/logo.png"
        alt="NAESS Logo"
        width={42}
        height={42}
      />

      <div>
        <h1 className="font-bold text-teal-700 text-lg leading-tight">
          NAESS
        </h1>

        <p className="text-[11px] text-gray-600 leading-tight">
          National Agricultural Engineering Students' Society
        </p>
      </div>

    </div>

    {/* Navigation */}
    <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-medium">

      <a href="/" className="hover:text-teal-700 transition">
        Home
      </a>

      <a href="/organization" className="hover:text-teal-700 transition">
        Organization
      </a>

      <a href="/team" className="hover:text-teal-700 transition">
        Executive Team
      </a>

      <a href="/events" className="hover:text-teal-700 transition">
        Events
      </a>

      <a href="/gallery" className="hover:text-teal-700 transition">
        Gallery
      </a>

      <a href="/notes" className="hover:text-teal-700 transition">
        Notes
      </a>

      <a href="/contact" className="hover:text-teal-700 transition">
        Contact
      </a>

      <a
        href="#"
        className="bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-800 transition"
      >
        Join NAESS
      </a>

    </div>

  </div>
</nav>

      {/* Hero Section */}
<section
  className="relative h-[65vh] md:h-[90vh] flex items-center justify-center text-white"
  style={{
    backgroundImage: "url('/images/hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/55"></div>

  {/* Content */}
 <div className="relative z-10 text-center px-4 max-w-5xl">

    <Image
  src="/images/logo.png"
  alt="NAESS Logo"
  width={80}
  height={80}
  className="mx-auto mb-4 md:w-[120px] md:h-[120px]"
/>

    <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl">
      National Agricultural Engineering
      <br />
      Students' Society
    </h1>

    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto">
      Empowering Future Agricultural Engineers of Nepal through
      Innovation, Research, Leadership and Sustainable Development
    </p>

    {/* Quick Highlights */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition">
        <div className="text-3xl mb-2">🚜</div>
        <p className="font-semibold">Mechanization</p>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition">
        <div className="text-3xl mb-2">💧</div>
        <p className="font-semibold">Irrigation</p>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition">
        <div className="text-3xl mb-2">☀️</div>
        <p className="font-semibold">Renewable Energy</p>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition">
        <div className="text-3xl mb-2">📦</div>
        <p className="font-semibold">Postharvest</p>
      </div>

    </div>

  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="text-4xl">
      ↓
    </div>
  </div>

</section>
     {/* Major Fields of Agricultural Engineering */}
<section className="py-20 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-teal-700 mb-4">
      Major Fields of Agricultural Engineering
    </h2>

    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
      Agricultural Engineering integrates engineering principles with agriculture
      to improve productivity, sustainability, mechanization, food processing,
      water management and rural development.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">🚜</div>
        <h3 className="text-xl font-bold mb-3">
          Farm Power & Machinery
        </h3>
        <p className="text-gray-600">
          Agricultural machinery, mechanization systems and precision farming technologies.
        </p>
      </div>

      {/* 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">🏗️</div>
        <h3 className="text-xl font-bold mb-3">
          Agricultural Infrastructure
        </h3>
        <p className="text-gray-600">
          Design of farm buildings, greenhouses, storage structures and rural infrastructure.
        </p>
      </div>

      {/* 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">☀️</div>
        <h3 className="text-xl font-bold mb-3">
          Rural & Renewable Energy
        </h3>
        <p className="text-gray-600">
          Solar energy, biogas, biomass and sustainable energy technologies.
        </p>
      </div>

      {/* 4 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">💧</div>
        <h3 className="text-xl font-bold mb-3">
          Irrigation Engineering
        </h3>
        <p className="text-gray-600">
          Planning, design and management of irrigation and drainage systems.
        </p>
      </div>

      {/* 5 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">🌱</div>
        <h3 className="text-xl font-bold mb-3">
          Soil Conservation & Watershed Management
        </h3>
        <p className="text-gray-600">
          Conservation of soil and water resources through watershed planning.
        </p>
      </div>

      {/* 6 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">📦</div>
        <h3 className="text-xl font-bold mb-3">
          Postharvest Engineering
        </h3>
        <p className="text-gray-600">
          Harvesting, drying, storage and processing technologies.
        </p>
      </div>

      {/* 7 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">🥛</div>
        <h3 className="text-xl font-bold mb-3">
          Dairy & Food Engineering
        </h3>
        <p className="text-gray-600">
          Dairy processing, food preservation and food engineering systems.
        </p>
      </div>

      {/* 8 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">🌾</div>
        <h3 className="text-xl font-bold mb-3">
          Precision Agriculture
        </h3>
        <p className="text-gray-600">
          Smart farming technologies using sensors, drones and automation.
        </p>
      </div>

      {/* 9 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">❄️</div>
        <h3 className="text-xl font-bold mb-3">
          Cold Storage & Processing
        </h3>
        <p className="text-gray-600">
          Cold chain management, storage systems and agro-processing technologies.
        </p>
      </div>

    </div>

  </div>
</section>
      {/* Notice Board */}
<section className="bg-yellow-50 py-16">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-teal-700 mb-10">
      Latest Notices
    </h2>

    <div className="space-y-4">

      <div className="bg-white p-5 rounded-xl shadow">
        📢 GIS Training Registration Open
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        📢 Agrineer Journal Article Submission Open
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        📢 Industrial Visit Announcement
      </div>

    </div>

  </div>
</section>
{/* Resources */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-teal-700 mb-4">
      Academic Resources
    </h2>

    <p className="text-center text-gray-600 mb-12">
      Access syllabi, research theses and Agrineer publications.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      <a
        href="/syllabus"
        className="bg-teal-700 text-white p-10 rounded-2xl shadow-lg hover:scale-105 transition text-center"
      >
        <div className="text-5xl mb-4">📚</div>
        <h3 className="text-2xl font-bold mb-2">
          Syllabus
        </h3>
        <p>
          Complete Agricultural Engineering curriculum and course structure.
        </p>
      </a>

      <a
        href="/thesis"
        className="bg-green-700 text-white p-10 rounded-2xl shadow-lg hover:scale-105 transition text-center"
      >
        <div className="text-5xl mb-4">🎓</div>
        <h3 className="text-2xl font-bold mb-2">
          Thesis Repository
        </h3>
        <p>
          Final year projects, research reports and thesis documents.
        </p>
      </a>

      <a
        href="/agrineer"
        className="bg-blue-700 text-white p-10 rounded-2xl shadow-lg hover:scale-105 transition text-center"
      >
        <div className="text-5xl mb-4">📖</div>
        <h3 className="text-2xl font-bold mb-2">
          Agrineer Journal
        </h3>
        <p>
          Access published editions of the Agrineer Journal.
        </p>
      </a>

    </div>

  </div>
</section>
      {/* Activities */}
      <section className="bg-gray-100 py-16">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-10 text-teal-700">
            Our Activities
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                Technical Trainings
              </h3>

              <p>
                GIS, SolidWorks, IoT, Drone Technology,
                CAD Design and many other technical trainings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                Workshops & Events
              </h3>

              <p>
                Competitions, conferences, seminars,
                industrial visits and technical programs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                Publications
              </h3>

              <p>
                The agrineer.
                               volume 1,2,3,4,5,6,7,8.
              </p>
            </div>

          </div>

        </div>

      </section>

      

      {/* Achievements */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-teal-700 mb-12">
            Our Achievements & Activities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
              <div className="text-5xl mb-4">🗺️</div>
              <h3 className="text-xl font-bold mb-3">
                IOT Training
              </h3>
              <p className="text-gray-600">
                Successfully organized IOT training programs for students.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold mb-3">
                SolidWorks Training
              </h3>
              <p className="text-gray-600">
                Conducted CAD and SolidWorks training sessions.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-3">
                valuation of land training
              </h3>
              <p className="text-gray-600">
                successfully organized training on land valuation and related topics.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
              <div className="text-5xl mb-4">🌾</div>
              <h3 className="text-xl font-bold mb-3">
                NARC Visits
              </h3>
              <p className="text-gray-600">
                Technical visits to research institutions and NARC centers.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
              <div className="text-5xl mb-4">🎤</div>
              <h3 className="text-xl font-bold mb-3">
                Conferences & Seminars
              </h3>
              <p className="text-gray-600">
                Participation in international conferences and seminars.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-xl font-bold mb-3">
                Agrineer Journal
              </h3>
              <p className="text-gray-600">
                Promoting technical writing and student research.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* President Message */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-6 text-teal-700">
          Message from the President
        </h2>

        <p className="text-gray-700 leading-8 text-lg">
          Welcome to the official website of NAESS.
          Together we aim to strengthen the Agricultural
          Engineering community of Nepal through innovation,
          collaboration and professional development. We are committed
          to providing technical opportunities, research exposure,
          leadership development and professional networking for all
          Agricultural Engineering students.
        </p>

      </section>

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-10 text-center">

        <h3 className="font-bold text-xl">
          National Agricultural Engineering Students' Society
        </h3>

        <p className="mt-2">
          Purwanchal Campus, Dharan, Nepal
        </p>

        <p className="mt-2">
          Established: 2060 B.S. | Renamed National Society: 2080 B.S.
        </p>

      </footer>

    </main>
  );
}