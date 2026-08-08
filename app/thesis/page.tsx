export default function ThesisPage() {
  const theses = [
  {
    title:
      "Crop Type Classification Using Satellite Imagery and Accuracy Assessment of Machine Learning Models",
    authors: "Arbind Singh Khuswaha, Babita Bohara, Biswas Dhungana, Dharma Salami Magar, Umesh Rana Magar ",
    batch: "2077",
    year: "May 2025",
    link: "https://drive.google.com/drive/folders/19aNoHThZ4nS_4WD1T-L59LJ9itkcGVcB",
  },
  {
    title:
      "Design Development and Testing of Multipurpose Seeder Machine Driven by Mini Tiller",
    authors: "Abisha limbu, Deepak Kumar Sah, Mahesh prasad Rai",
    batch: "2076",
    year: "May 2024",
    link: "https://drive.google.com/drive/folders/19aNoHThZ4nS_4WD1T-L59LJ9itkcGVcB",
  },
  {
    title:
      "Comming Soon",
    authors: "",
    batch: "",
    year: "",
    link: "",
  },
  {
    title:
      "Comming Soon",
    authors: "",
    batch: "",
    year: "",
    link: "",
  },
  {
    title:
      "Comming Soon",
    authors: "",
    batch: "",
    year: "",
    link: "",
  },
  {
    title:
      "Comming Soon",
    authors: "",
    batch: "",
    year: "",
    link: "",
  },

];


  return (
    <main className="max-w-6xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
        Thesis Repository
      </h1>

      
        <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10">
  <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

    <h2 className="text-3xl font-bold text-green-700 mb-3">
      📚 Contribute Your Thesis
    </h2>

    <p className="text-gray-600 mb-6">
      Help build the Agricultural Engineering Thesis Repository
      for future students and researchers.
    </p>

    <a
      href="https://forms.gle/9DvpCuNjpHD1nbV38"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-green-700 text-white px-8 py-3 rounded-xl hover:bg-green-800 transition"
    >
      Submit Thesis
    </a>

  </div>
</section>
<div className="grid md:grid-cols-2 gap-8">
  {theses.map((thesis, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
    >
      <div className="text-5xl mb-4">🎓</div>

      <h2 className="text-xl font-bold text-green-700 mb-4">
        {thesis.title}
      </h2>

      <p className="text-gray-600 mb-2">
        <strong>Authors:</strong> {thesis.authors}
      </p>

      <p className="text-gray-600 mb-2">
        <strong>Batch:</strong> {thesis.batch}
      </p>

      <p className="text-gray-600 mb-6">
        <strong>Year:</strong> {thesis.year}
      </p>

      <a
        href={thesis.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800"
      >
        View Thesis
      </a>
    </div>
  ))}
</div>

    </main>
  );
}