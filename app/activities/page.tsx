export default function ActivitiesPage() {
  const activities = [
    {
      title: "Handover and Oath Taking Ceremony",
      image: "/events/handover.png",
      date: "Aasadh 16, 2083",
    },
    {
      title: "Educational Visit to NARC",
      image: "/events/narc.jpg",
      date: "Aasadh 15, 2083",
    },
    {
      title: "Agrineer Volume 8 Release",
      image: "/events/agrineer.jpg",
      date: "2083",
    },
    {
      title: "Engineering Research Workshop",
      image: "/events/research.jpg",
      date: "2082",
    },
    {
      title: "IoT Workshop",
      image: "/events/iot.jpg",
      date: "2082",
    },
    {
      title: "Land Valuation Training",
      image: "/events/valuation.jpg",
      date: "2082",
    },
    {
      title: "SolidWorks Training",
      image: "/events/solidworks.jpg",
      date: "2082",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-gradient-to-r from-teal-700 to-green-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-4">
            All Activities
          </h1>

          <p className="text-xl text-teal-100">
            Trainings, Workshops, Publications and Events organized by NAESS
          </p>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">

          {activities.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >

              <img
                src={event.image}
                alt={event.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">

                <p className="text-sm text-gray-500 mb-2">
                  {event.date}
                </p>

                <h3 className="font-bold text-lg text-teal-700">
                  {event.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}