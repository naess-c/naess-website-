export default function AgrineerPage() {
  const journals = [
    {
      title: "Agrineer Volume 8",
      link: "https://drive.google.com/file/d/15qSrOv0I-9zGkiwasE7Eaogv7AtMF8Uf/view?usp=sharing",
    },
    {
      title: "Agrineer Volume 7",
      link: "https://drive.google.com/file/d/1-V4Md9KHjWRqFa_KKLX9xBQBum7K8tfp/view?usp=drive_link",
    },
    {
      title: "Agrineer Volume 6",
      link: "https://drive.google.com/file/d/1ZyzcUbH-FNa7YXOBSxynVt73su822U6X/view?usp=sharing",
    },
    {
      title: "Agrineer Volume 5",
      link: "https://drive.google.com/file/d/1BRvoLWBVLka5eHu-6dydCZaQozyHePat/view?usp=drive_link",
    },
    {
      title: "Agrineer Volume 4",
      link: "https://drive.google.com/file/d/1CAnjSNz6MMnwTRkdjnWhp9XmYFxmCEr8/view?usp=drive_link",
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