export default function AgrineerPage() {
  const journals = [
    {
      title: "Agrineer Volume 1",
      link: "YOUR_DRIVE_LINK",
    },
    {
      title: "Agrineer Volume 2",
      link: "YOUR_DRIVE_LINK",
    },
    {
      title: "Agrineer Volume 3",
      link: "YOUR_DRIVE_LINK",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Agrineer Journal
      </h1>

      <div className="space-y-5">

        {journals.map((journal, index) => (
          <a
            key={index}
            href={journal.link}
            target="_blank"
            className="block bg-white shadow-lg rounded-xl p-6 hover:bg-gray-50"
          >
            📖 {journal.title}
          </a>
        ))}

      </div>

    </main>
  );
}