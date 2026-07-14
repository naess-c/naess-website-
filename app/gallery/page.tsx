import Image from "next/image";

export default function GalleryPage() {
  const images = [
    {
      src: "/gallery/handover1.jpg",
      title: "Handover & Oath Taking Ceremony",
    },
    {
      src: "/gallery/handover3.jpg",
      title: "Handover & Oath Taking Ceremony",
    },
    {
      src: "/gallery/handover4.jpg",
      title: "Handover & Oath Taking Ceremony",
    },
    {
      src: "/gallery/handover2.jpg",
      title: "Annual Report ",
    },
    {
      src: "/gallery/narc1.jpg",
      title: "NARC Tarahara Visit 2083",
    },
   
    
    {
      src: "/gallery/narc2.jpg",
      title: "NARC Tarahra Visit 2083",
    },
     {
      src: "/gallery/narc3.jpg",
      title: "NARC Tarahara Visit 2083",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-700 to-green-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Gallery
          </h1>

          <p className="text-xl">
            Activities and Events of NAESS
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <Image
                src={image.src}
                alt={image.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
}