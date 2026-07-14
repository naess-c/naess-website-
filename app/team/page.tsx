import Image from "next/image";

export default function CommitteePage() {
  const members = [
    {
      name: "Dipendra Kumar Sah",
      position: "President",
      image: "/committee/dipendra.jpg",
    },
    {
      name: "Pratik Kumar Mishra",
      position: "Vice President",
      image: "/committee/pratik.jpg",
    },
    {
      name: "Binod Panta",
      position: "Secretary",
      image: "/committee/binod.jpg",
    },
    {
      name: "Smita Yadav",
      position: "Treasurer",
      image: "/committee/smita.jpg",
    },
    {
      name: "Anurag Sampang Rai",
      position: "Vice Secretary",
      image: "/committee/anurag.jpg",
    },
    {
      name: "Sitara Kumari Jaisawal",
      position: "Executive Member",
      image: "/committee/sitara.jpg",
    },
    {
      name: "Purnica Yadav",
      position: "Executive Member",
      image: "/committee/purnica.jpg",
    },
    {
      name: "Aditya",
      position: "Executive Member",
      image: "/committee/aditya.jpg",
    },
    {
      name: "Krish Adhikari",
      position: "Executive Member",
      image: "/committee/krish.jpg",
    },
    {
      name: "Ratish Ghimire",
      position: "Executive Member",
      image: "/committee/ratish.jpg",
    },
  ];

  const president = members.find(
    (member) => member.position === "President"
  );

  const otherMembers = members.filter(
    (member) => member.position !== "President"
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-green-700 text-white py-16">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl font-bold mb-4">
            Executive Committee
          </h1>

          <p className="text-xl">
            National Agricultural Engineering Students' Society
          </p>

          <p className="mt-2 text-teal-100">
            5th Executive Committee
          </p>
        </div>
      </section>

      {/* President Section */}
      {president && (
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            President
          </h2>

          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-80 text-center border-t-8 border-teal-700">

              <Image
                src={president.image}
                alt={president.name}
                width={160}
                height={160}
                className="rounded-full mx-auto object-cover border-4 border-teal-100"
              />

              <h3 className="text-2xl font-bold mt-5">
                {president.name}
              </h3>

              <p className="text-teal-700 font-semibold mt-2">
                {president.position}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Other Members */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Executive Committee Members
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {otherMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 text-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full mx-auto object-cover border-4 border-teal-100"
              />

              <h3 className="text-xl font-bold text-gray-800 mt-4">
                {member.name}
              </h3>

              <p className="text-teal-700 font-medium mt-2">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-8 text-center">
        <h3 className="font-bold text-lg">
          National Agricultural Engineering Students' Society
        </h3>

        <p className="mt-2 text-sm">
          Empowering Future Agricultural Engineers of Nepal
        </p>
      </footer>
    </main>
  );
}