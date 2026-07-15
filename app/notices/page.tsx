export default function NoticesPage() {
  const notices = [
    {
      title: "application for technical manager",
      date: "Aasadh 2083",
      link: "https://drive.google.com/file/d/199O7BsXP36fc5wjaIV9kK_VVa0sn515d/view?usp=drive_link",
    },
    {
      title: "Educational vist",
      date: "Aasadh 14, 2083",
      link: "https://drive.google.com/file/d/1ppKyPeBD7DTGY3FpDlxydO4F6KfE1wKy/view?usp=drive_link",
    },
    {
      title: "Handover date announcement",
      date: "Aasadh 13, 2083",
      link: "https://drive.google.com/file/d/1SQNl9-RwI4qX5VluTqj4jFYNrDBqzFMM/view?usp=drive_link",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-20">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-teal-700 mb-4">
          Notices
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Latest announcements, trainings, events and opportunities.
        </p>

        <div className="space-y-6">

          {notices.map((notice, index) => (
            <a
              key={index}
              href={notice.link}
              target="_blank"
              className="block bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-between items-center">

                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    📢 {notice.title}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {notice.date}
                  </p>
                </div>

                <span className="text-teal-700 font-semibold">
                  View →
                </span>

              </div>
            </a>
          ))}

        </div>

      </div>

    </main>
  );
}