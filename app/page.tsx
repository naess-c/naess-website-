import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="NAESS Logo"
              width={50}
              height={50}
            />

            <div>
              <h1 className="font-bold text-teal-700 text-lg">
                NAESS
              </h1>

              <p className="text-xs text-gray-600">
                National Agricultural Engineering Students' Society
              </p>
            </div>
          </div>

          <div className="space-x-4">
            <a href="/" className="hover:text-teal-700">
              Home
            </a>

            <a href="/about" className="hover:text-teal-700">
              About
            </a>

            <a href="/events" className="hover:text-teal-700">
              Events
            </a>

            <a href="/gallery" className="hover:text-teal-700">
              Gallery
            </a>

            <a href="/contact" className="hover:text-teal-700">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-teal-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-4">
            National Agricultural Engineering Students' Society
          </h1>

          <p className="text-xl mb-6">
            Empowering Future Agricultural Engineers of Nepal
          </p>

          <button className="bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold">
            Join NAESS
          </button>

        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-6">
          About NAESS
        </h2>

        <p className="text-lg text-gray-700">
          Established in 2060 B.S. and renamed as the National Agricultural
          Engineering Students' Society in 2080 B.S., NAESS is dedicated
          to promoting agricultural engineering education, innovation,
          leadership, research and professional networking throughout Nepal.
        </p>

      </section>

      {/* Activities */}
      <section className="bg-gray-100 py-16">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-10">
            Our Activities
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                Technical Trainings
              </h3>

              <p>
                GIS, SolidWorks, IoT, Drone Technology,
                CAD Design and more.
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
                Agrineer Journal, newsletters,
                technical articles and student research.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* President Message */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-6">
          Message from the President
        </h2>

        <p className="text-gray-700 leading-8">
          Welcome to the official website of NAESS.
          Together we aim to strengthen the Agricultural
          Engineering community of Nepal through innovation,
          collaboration and professional development.
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
          Official Student Society of Agricultural Engineering Students
        </p>

      </footer>

    </main>
  );
}