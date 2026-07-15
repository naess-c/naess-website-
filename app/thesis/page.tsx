export default function ThesisPage() {
  const theses = [
    {
      title: "Design of Multi Crop Seeder",
      link: "YOUR_DRIVE_LINK",
    },
    {
      title: "Solar Hybrid Dryer",
      link: "YOUR_DRIVE_LINK",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
        Thesis Repository
      </h1>

      <div className="space-y-5">

        {theses.map((thesis, index) => (
          <a
            key={index}
            href={thesis.link}
            target="_blank"
            className="block bg-white shadow-lg rounded-xl p-6 hover:bg-gray-50"
          >
            🎓 {thesis.title}
          </a>
        ))}

      </div>

    </main>
  );
}