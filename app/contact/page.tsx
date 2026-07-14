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
      <section className="max-w-5xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Contact Information */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-teal-700">
              Contact Information
            </h2>

            <p className="mb-4">
              <strong>Email:</strong>
              <br />
              naess@ioepc.edu.np
            </p>

            <p className="mb-4">
              <strong>Location:</strong>
              <br />
              Department of Agricultural Engineering
              <br />
              Purwanchal Campus, Dharan, Nepal
            </p>

            <p className="mb-4">
              <strong>Facebook:</strong>
              <br />
              NAESS -National Agricultural Engineering Student’s Society
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-teal-700">
              Send a Message
            </h2>

            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded-lg p-3"
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border rounded-lg p-3"
                />
              </div>

              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full border rounded-lg p-3"
                />
              </div>

              <button
                type="button"
                className="bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800"
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