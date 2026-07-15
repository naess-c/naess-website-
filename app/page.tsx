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

      <a href="/notices" className="hover:text-teal-700 transition">
        Notices
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
<section className="py-20 bg-gradient-to-b from-gray-50 to-white">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-teal-700 mb-4">
      What We Do
    </h2>

    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
      NAESS promotes technical excellence, innovation, leadership and
      professional development among Agricultural Engineering students
      throughout Nepal.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Training */}
      <div className="group bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <div className="text-6xl mb-5">
          🛠️
        </div>

        <h3 className="text-2xl font-bold text-teal-700 mb-4">
          Technical Trainings
        </h3>

        <p className="text-gray-600 leading-7">
          Hands-on training programs in GIS, SolidWorks, AutoCAD,
          Drone Technology, IoT, Remote Sensing, CAD Design,
          Agricultural Machinery Design and emerging technologies.
        </p>

      </div>

      {/* Events */}
      <div className="group bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <div className="text-6xl mb-5">
          🎯
        </div>

        <h3 className="text-2xl font-bold text-teal-700 mb-4">
          Workshops & Events
        </h3>

        <p className="text-gray-600 leading-7">
          Engineering competitions, national conferences,
          industrial visits, expert talks, technical seminars,
          exhibitions and professional networking events.
        </p>

      </div>

      {/* Publications */}
      <div className="group bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <div className="text-6xl mb-5">
          📖
        </div>

        <h3 className="text-2xl font-bold text-teal-700 mb-4">
          Publications
        </h3>

        <p className="text-gray-600 leading-7 mb-4">
          Publication of the official NAESS journal
          <span className="font-semibold text-teal-700"> "Agrineer"</span>,
          featuring student research, innovations and technical articles.
        </p>

        <div className="flex flex-wrap gap-2">

          {["Vol 1","Vol 2","Vol 3","Vol 4","Vol 5","Vol 6","Vol 7","Vol 8"].map((vol) => (
            <span
              key={vol}
              className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {vol}
            </span>
          ))}

        </div>

      </div>

    </div>

  </div>

</section>

     {/* Achievements & Activities */}
<section className="py-24 bg-gradient-to-b from-white to-gray-50">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl md:text-5xl font-bold text-center text-teal-700 mb-4">
      Our Achievements & Activities
    </h2>

    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
      Through technical trainings, industrial visits, publications and professional
      events, NAESS continues to strengthen the Agricultural Engineering community of Nepal.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* GIS */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">📡</div>
        <h3 className="text-2xl font-bold mb-3 text-blue-600">
          IoT Training
        </h3>
        <p className="text-gray-600 leading-7">
          Organized practical Internet of Things (IoT) training programs,
          introducing students to smart agriculture technologies and automation.
        </p>
      </div>

      {/* SolidWorks */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-green-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">⚙️</div>
        <h3 className="text-2xl font-bold mb-3 text-green-600">
          SolidWorks Training
        </h3>
        <p className="text-gray-600 leading-7">
          Conducted CAD and SolidWorks training sessions to enhance
          engineering design and modeling skills among students.
        </p>
      </div>

      {/* Land Valuation */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-orange-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">🏞️</div>
        <h3 className="text-2xl font-bold mb-3 text-orange-600">
          Land Valuation Training
        </h3>
        <p className="text-gray-600 leading-7">
          Successfully organized professional training on land valuation,
          surveying principles and property assessment techniques.
        </p>
      </div>

      {/* NARC */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-teal-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">🌾</div>
        <h3 className="text-2xl font-bold mb-3 text-teal-600">
          Research & NARC Visits
        </h3>
        <p className="text-gray-600 leading-7">
          Organized technical visits to NARC research stations and other
          institutions to bridge theory and practical learning.
        </p>
      </div>

      {/* Conferences */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-purple-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">🎤</div>
        <h3 className="text-2xl font-bold mb-3 text-purple-600">
          Conferences & Seminars
        </h3>
        <p className="text-gray-600 leading-7">
          Active participation in national and international conferences,
          seminars and technical discussion forums.
        </p>
      </div>

      {/* Agrineer */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-red-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">📖</div>
        <h3 className="text-2xl font-bold mb-3 text-red-600">
          Agrineer Journal
        </h3>
        <p className="text-gray-600 leading-7 mb-4">
          Publishing the official NAESS journal “Agrineer” to promote
          technical writing, innovation and student research.
        </p>

        <div className="flex flex-wrap gap-2">
          {["Vol 1","Vol 2","Vol 3","Vol 4","Vol 5","Vol 6","Vol 7","Vol 8"].map((vol) => (
            <span
              key={vol}
              className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {vol}
            </span>
          ))}
        </div>

      </div>

    </div>

  </div>

</section>
     {/* President's Message */}
<section className="py-24 bg-gradient-to-r from-teal-50 to-green-50">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-teal-700 mb-14">
      Message from the President
    </h2>

    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

      <div className="grid md:grid-cols-3">

        {/* Photo */}
        <div className="bg-teal-700 flex items-center justify-center p-10">

          <Image
            src="/committee/dipendra.jpg"
            alt="President"
            width={280}
            height={280}
            className="rounded-2xl shadow-xl object-cover"
          />

        </div>

        {/* Message */}
        <div className="md:col-span-2 p-10 md:p-14">

          <div className="text-6xl text-teal-600 mb-4">
            "
          </div>

          <p className="text-gray-700 text-lg leading-8 mb-8">
            Welcome to the official website of the National Agricultural
            Engineering Students' Society (NAESS).

            Our mission is to empower Agricultural Engineering students
            through innovation, technical excellence, leadership,
            research and professional collaboration.

            Together, we aim to create opportunities for learning,
            practical exposure, networking and sustainable development,
            while contributing to the advancement of Agricultural
            Engineering in Nepal.
          </p>

          <div className="border-t pt-6">

            <h3 className="text-2xl font-bold text-teal-700">
              Dipendra Kumar Sah
            </h3>

            <p className="text-gray-600">
              President
            </p>

            <p className="text-gray-500 text-sm">
              National Agricultural Engineering Students' Society (NAESS)
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* Notice Preview */}
<section className="bg-yellow-50 py-16">

  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-teal-700 mb-10">
      Latest Notices
    </h2>

    <div className="space-y-4">

      <div className="bg-white p-5 rounded-xl shadow">
        📢 Application for Technical Manager
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        📢 Educational visit to NARC Tarahara
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        📢 committee handover  Announcement
      </div>

    </div>

    <div className="text-center mt-8">

      <a
        href="/notices"
        className="bg-teal-700 text-white px-8 py-3 rounded-xl hover:bg-teal-800 transition"
      >
        View All Notices
      </a>

    </div>

  </div>

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