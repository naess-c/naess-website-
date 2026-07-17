import Image from "next/image";

export default function AlumniPage() {
  const alumni = [
    {
      name: "Dr. Er. Jeet B Chand",
      position: "Senior Agricultural Engineer",
      organization: "Government of Nepal",
      batch: "2058 Batch",
      image: "/alumni/alumni1.jpg",
    },
    {
      name: "Er. Aditya Dhakal",
      position: "Asst. Campus Chief (Planning & Resources Management)",
      organization: "Purwanchal Campus",
      batch: "2065 Batch",
      image: "/alumni/alumni2.jpg",
    },
    {
      name: "Er. Tirtha Raj Karki",
      position: "Assistant Campus Chief (Administration)",
      organization: "Purwanchal Campus",
      batch: "2070 Batch",
      image: "/alumni/alumni3.jpg",
    },
    {
      name: "Er. Yam Kumar Rai",
      position: "Head of Department (Agricultural Engineering)",
      organization: "Purwanchal Campus",
      batch: "2058 Batch",
      image: "/alumni/alumni4.jpg",
    },
    {
      name: "Er. Suman Thapa",
      position: "Deputy Head of Department (Agricultural Engineering)",
      organization: "Purwanchal Campus",
      batch: "2074 Batch",
      image: "/alumni/alumni5.jpg",
    },
    {
      name: "Er. Samir Sakhya",
      position: "professor",
      organization: "purwanchal campus",
      batch: "2058 Batch",
      image: "/alumni/alumni6.jpg",
    },{
      name: "Dr. Er. Jeet B Chand",
      position: "Senior Agricultural Engineer",
      organization: "Government of Nepal",
      batch: "2058 Batch",
      image: "/alumni/alumni1.jpg",
    },{
      name: "Dr. Er. Jeet B Chand",
      position: "Senior Agricultural Engineer",
      organization: "Government of Nepal",
      batch: "2058 Batch",
      image: "/alumni/alumni1.jpg",
    },{
      name: "Dr. Er. Jeet B Chand",
      position: "Senior Agricultural Engineer",
      organization: "Government of Nepal",
      batch: "2058 Batch",
      image: "/alumni/alumni1.jpg",
    },{
      name: "Dr. Er. Jeet B Chand",
      position: "Senior Agricultural Engineer",
      organization: "Government of Nepal",
      batch: "2058 Batch",
      image: "/alumni/alumni1.jpg",
    },{
      name: "Dr. Er. Jeet B Chand",
      position: "Senior Agricultural Engineer",
      organization: "Government of Nepal",
      batch: "2058 Batch",
      image: "/alumni/alumni1.jpg",
    },{
      name: "Dr. Er. Jeet B Chand",
      position: "Senior Agricultural Engineer",
      organization: "Government of Nepal",
      batch: "2058 Batch",
      image: "/alumni/alumni1.jpg",
    },{
      name: "Dr. Er. Jeet B Chand",
      position: "Senior Agricultural Engineer",
      organization: "Government of Nepal",
      batch: "2058 Batch",
      image: "/alumni/alumni1.jpg",
    },{
      name: "Dr. Er. Jeet B Chand",
      position: "Senior Agricultural Engineer",
      organization: "Government of Nepal",
      batch: "2058 Batch",
      image: "/alumni/alumni1.jpg",
    },{
      name: "Dr. Er. Jeet B Chand",
      position: "Senior Agricultural Engineer",
      organization: "Government of Nepal",
      batch: "2058 Batch",
      image: "/alumni/alumni1.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-green-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-4">
            NAESS Alumni Network
          </h1>

          <p className="text-xl text-teal-100">
            Connecting Agricultural Engineering Graduates Across Nepal
          </p>

        </div>
      </section>

      {/* Distinguished Alumni */}
      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-teal-700 mb-4">
            Distinguished Alumni
          </h2>

          <p className="text-center text-gray-600 mb-12">
            Agricultural Engineering graduates contributing to academia,
            research, industry, government and development sectors.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {alumni.map((person, index) => (
  <div
    key={index}
    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 text-center hover:-translate-y-1"
  >

    {/* Alumni Photo */}
    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-teal-100">
      <Image
        src={person.image}
        alt={person.name}
        width={128}
        height={128}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Alumni Info */}
    <h3 className="text-lg font-bold mt-5 text-gray-800">
      {person.name}
    </h3>

    <p className="text-teal-700 font-semibold mt-2">
      {person.position}
    </p>

    <p className="text-gray-500 text-sm mt-1">
      {person.organization}
    </p>

    <p className="text-gray-400 text-sm mt-2">
      {person.batch}
    </p>

  </div>
))}
          </div>

        </div>

      </section>

      {/* Alumni Message */}
      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-gradient-to-r from-teal-700 to-green-700 text-white rounded-3xl p-10 shadow-xl">

            <h2 className="text-3xl font-bold mb-5">
              Alumni Network
            </h2>

            <p className="text-lg leading-8">
              NAESS values the contributions of Agricultural Engineering
              graduates who continue to inspire and support future
              generations. Through this alumni network, we aim to
              strengthen professional connections, encourage mentorship,
              and foster collaboration among graduates and students.
            </p>

          </div>

        </div>

      </section>

      {/* Join Alumni Network */}
      <section className="py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-teal-700 mb-6">
            Join the Alumni Network
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            Register yourself in the official NAESS Alumni Directory and
            stay connected with Agricultural Engineering graduates across Nepal.
          </p>

          <a
            href="YOUR_GOOGLE_FORM_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-700 text-white px-8 py-4 rounded-xl hover:bg-teal-800 transition"
          >
            Register as Alumni
          </a>

        </div>

      </section>

    </main>
  );
}