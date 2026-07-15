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

          <div className="space-x-4 text-sm md:text-base">
            <a href="/" className="hover:text-teal-700">Home</a>
           <a href="/organization" className="hover:text-teal-700">Organization</a>
            <a href="/team" className="hover:text-teal-700">Executive Team</a>
            <a href="/events" className="hover:text-teal-700">Events</a>
            <a href="/gallery" className="hover:text-teal-700">Gallery</a>
            <a href="/notes" className="hover:text-teal-700">Notes</a>
            <a href="/contact" className="hover:text-teal-700">Contact</a>
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

          <button className="bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Join NAESS
          </button>

        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-6 text-teal-700">
          About NAESS
        </h2>

        <p className="text-lg text-gray-700 leading-8">
          Established in 2060 B.S. and renamed as the National Agricultural
          Engineering Students' Society in 2080 B.S., NAESS is dedicated
          to promoting agricultural engineering education, innovation,
          leadership, research and professional networking throughout Nepal.
        </p>

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