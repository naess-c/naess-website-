export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-gradient-to-r from-teal-700 to-green-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact NAESS</h1>
          <p className="text-xl">
            National Agricultural Engineering Students' Society
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">

        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Information */}
          <div className="bg-white shadow-lg rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6 text-teal-700">
              Contact Information
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  📧 Email
                </h3>
                <a
                  href="mailto:naess@ioepc.edu.np"
                  className="text-teal-700 hover:underline"
                >
                  naess@ioepc.edu.np
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  📍 Address
                </h3>
                <p className="text-gray-700">
                  Department of Agricultural Engineering
                  <br />
                  Purwanchal Campus
                  <br />
                  Dharan, Nepal
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  📘 Facebook
                </h3>
                <a
                  href="https://www.facebook.com/profile.php?id=61572261099146"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  NAESS -National Agricultural Engineering Student’s Society
                </a>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8">

            <h2 className="text-2xl font-bold mb-6 text-teal-700">
              Send a Message
            </h2>

            <form
              action="https://formspree.io/f/xbdndoap"
              method="POST"
              className="space-y-4"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-lg p-3"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded-lg p-3"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full border border-gray-300 rounded-lg p-3"
              />

              <button
                type="submit"
                className="w-full bg-teal-700 text-white py-3 rounded-lg hover:bg-teal-800 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}