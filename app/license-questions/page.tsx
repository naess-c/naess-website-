export default function LicenseQuestionsPage() {
  const questions = [
    {
      title: "Model Question",
      year: "Practice",
      link: "https://drive.google.com/file/d/1DQkKpl-iekCyQ2QQp_lIgD7hdhA-Gopz/view?usp=drive_link",
    },
    {
      title: "psc model 1",
      year: "practise",
      link: "https://drive.google.com/file/d/1rOdOQtacQDiXpriueRl9C7iURoIF7nUB/view?usp=drive_link",
    },
    {
      title: "psc model 2",
      year: "practise",
      link: "https://drive.google.com/file/d/1rQ2P3RqaPCwAl50OubYKoZL2NH4a-IeW/view?usp=drive_link",
    },
    {
      title: "psc model 3",
      year: "practise",
      link: "https://drive.google.com/file/d/1rJ2kvCt9g1UkPoVhdk95eUURDa6jdimz/view?usp=drive_link",
    },
    {
      title: "comming soon",
      year: "Practice",
      link: "YOUR_DRIVE_LINK",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-teal-700 to-green-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-4">
            NEC License Questions
          </h1>

          <p className="text-xl text-teal-100">
            Agricultural Engineering Registration Examination
          </p>

        </div>
      </section>

      {/* Question Cards */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {questions.map((question, index) => (
            <a
              key={index}
              href={question.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-8"
            >
              <div className="text-5xl mb-4">📝</div>

              <span className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {question.year}
              </span>

              <h2 className="text-2xl font-bold text-teal-700">
                {question.title}
              </h2>

            </a>
          ))}

        </div>

      </section>

    </main>
  );
}