export default function ThesisPage() {
  const theses = [
    {
      title: "CROP TYPE CLASSIFICATION USING SATELLITE IMAGERY AND ACCURACY ASSESSMENT OF MACHINE LEARNING MODELS",
      link: "https://drive.google.com/file/d/16s7gRCxnLGEGwhzFxcQ16aJAnV-iKiw8/view?usp=drive_link",
    },
    {
      title: "DESIGN DEVELOPMENT AND TESTING OF MULTIPURPOSE SEEDER MACHINE DRIVEN BY MINI TILLER",
      link: "https://drive.google.com/file/d/1ZmwimBhnujXm3IQ4tFmwOEJX0XJ4nucC/view?usp=drive_link",
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