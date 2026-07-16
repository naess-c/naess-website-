import Image from "next/image";

export default function CommitteePage() {
  const members = [
    {
      name: "Dipendra Kumar Sah",
      position: "President",
      batch: "Batch 2079",
      image: "/committee/dipendra.jpg",
    },
    {
      name: "Pratik Kumar Mishra",
      position: "Vice President",
      batch: "Batch 2080",
      image: "/committee/pratik.jpg",
    },
    {
      name: "Binod Panta",
      position: "Secretary",
      batch: "Batch 2080",
      image: "/committee/binod.jpg",
    },
    {
      name: "Smita Yadav",
      position: "Treasurer",
      batch: "Batch 2079",
      image: "/committee/smita.jpg",
    },
    {
      name: "Anurag Sampang Rai",
      position: "Vice Secretary",
      batch: "Batch 2081",
      image: "/committee/anurag.jpg",
    },
    {
      name: "Sitara Kumari Jaisawal",
      position: "Executive Member",
      batch: "Batch 2079",
      image: "/committee/sitara.jpg",
    },
    {
      name: "Purnica Yadav",
      position: "Executive Member",
      batch: "Batch 2080",
      image: "/committee/purnica.jpg",
    },
    {
      name: "Aditya",
      position: "Executive Member",
      batch: "Batch 2081",
      image: "/committee/aditya.jpg",
    },
    {
      name: "Krish Adhikari",
      position: "Executive Member",
      batch: "Batch 2081",
      image: "/committee/krish.jpg",
    },
    {
      name: "Ratish Ghimire",
      position: "Executive Member",
      batch: "Batch 2082",
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
  <section className="max-w-6xl mx-auto px-6 py-16">

    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

      <div className="grid md:grid-cols-2 gap-0">

        {/* Left Side - Photo */}
        <div className="bg-gradient-to-br from-teal-700 to-green-700 flex flex-col items-center justify-center p-10 text-white">

          <Image
            src={president.image}
            alt={president.name}
            width={220}
            height={220}
            className="rounded-full border-4 border-white object-cover"
          />

          <h3 className="text-3xl font-bold mt-6">
            {president.name}
          </h3>

          <p className="text-teal-100 mt-2 text-lg">
            {president.position}
            
          </p>
      <p className="text-white/80 text-sm mt-1">
  {president.batch}
</p>

        </div>

        {/* Right Side - Message */}
        <div className="p-10 md:p-12">

          <h2 className="text-3xl font-bold text-teal-700 mb-6">
            Message from the President
          </h2>

          <p className="text-gray-700 leading-8 text-lg">
            Welcome to the National Agricultural Engineering Students'
            Society (NAESS). It is an honor to serve as President of
            this organization dedicated to empowering Agricultural
            Engineering students across Nepal.
          </p>

          <p className="text-gray-700 leading-8 text-lg mt-4">
            Through technical trainings, research activities,
            publications, industrial visits, and leadership
            opportunities, we strive to build a stronger community
            of future agricultural engineers who will contribute to
            sustainable agricultural development and technological
            advancement.
          </p>

          <p className="text-gray-700 leading-8 text-lg mt-4">
            I invite all students, alumni, professionals, and well-wishers
            to engage with NAESS and support our shared vision of advancing
            Agricultural Engineering in Nepal.
          </p>

        </div>

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
              <p className="text-gray-500 text-sm mt-1">
  {member.batch}
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