"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

function FadeInCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}

function ScaleInCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-90 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
}

export default function AgrineerPage() {
  const journals = [
    {
      volume: "Volume 8",
      year: "2025",
      cover: "/agrineer/volume8.jpg",
      link: "https://drive.google.com/file/d/15qSrOv0I-9zGkiwasE7Eaogv7AtMF8Uf/view?usp=sharing",
    },
    {
      volume: "Volume 7",
      year: "2023",
      cover: "/agrineer/volume7.jpg",
      link: "https://drive.google.com/file/d/1-V4Md9KHjWRqFa_KKLX9xBQBum7K8tfp/view?usp=drive_link",
    },
    {
      volume: "Volume 6",
      year: "2019",
      cover: "/agrineer/volume6.jpg",
      link: "https://drive.google.com/file/d/1ZyzcUbH-FNa7YXOBSxynVt73su822U6X/view?usp=sharing",
    },
    {
      volume: "Volume 5",
      year: "2016",
      cover: "/agrineer/volume5.jpg",
      link: "https://drive.google.com/file/d/1BRvoLWBVLka5eHu-6dydCZaQozyHePat/view?usp=drive_link",
    },
    {
      volume: "Volume 4",
      year: "2013",
      cover: "/agrineer/volume4.jpg",
      link: "https://drive.google.com/file/d/1CAnjSNz6MMnwTRkdjnWhp9XmYFxmCEr8/view?usp=drive_link",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-green-700 text-white py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-4">
            Agrineer Journal
          </h1>

          <p className="text-xl text-teal-100">
            Official Publication of the National Agricultural Engineering Students' Society
          </p>

        </div>

      </section>

      {/* About Section */}
      <FadeInCard delay={0}>
        <section className="max-w-5xl mx-auto px-6 py-16 text-center">

          <h2 className="text-3xl font-bold text-teal-700 mb-6">
            About Agrineer
          </h2>

          <p className="text-gray-600 leading-8">
            Agrineer is the official publication of NAESS. It serves as a platform
            for students, researchers and professionals to share technical articles,
            research findings, innovations and experiences related to Agricultural
            Engineering and sustainable agricultural development.
          </p>

        </section>
      </FadeInCard>

      {/* Journal Archive */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <FadeInCard delay={0}>
          <h2 className="text-4xl font-bold text-center text-teal-700 mb-12">
            Journal Archive
          </h2>
        </FadeInCard>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {journals.map((journal, index) => (
            <ScaleInCard key={index} delay={index * 120}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 [perspective:1000px]">

                {/* Cover */}
                <div className="relative h-72 overflow-hidden [transform-style:preserve-3d] group-hover:[transform:rotateY(-6deg)] transition-transform duration-500">

                  <Image
                    src={journal.cover}
                    alt={journal.volume}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {journal.volume === "Volume 8" && (
                    <div className="absolute top-3 right-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold animate-pulse">
                      Latest
                    </div>
                  )}

                </div>

                {/* Content */}
                <div className="p-5">

                  <h3 className="text-xl font-bold text-center">
                    {journal.volume}
                  </h3>

                  <p className="text-center text-gray-500 mt-1">
                    {journal.year}
                  </p>

                  
                   <a href={journal.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-5 bg-teal-700 text-white text-center py-3 rounded-xl hover:bg-teal-800 hover:scale-105 transition-all duration-300"
                  >
                    View Journal
                  </a>

                </div>

              </div>
            </ScaleInCard>
          ))}

        </div>

      </section>

      {/* Footer Message */}
      <FadeInCard delay={0}>
        <section className="bg-white py-16">

          <div className="max-w-4xl mx-auto px-6 text-center">

            <h2 className="text-3xl font-bold text-teal-700 mb-4">
              Contribute to Agrineer
            </h2>

            <p className="text-gray-600 leading-8">
              NAESS welcomes technical articles, research papers, project reports,
              innovations and experiences from students, researchers and professionals
              in Agricultural Engineering for future volumes of Agrineer.
            </p>

          </div>

        </section>
      </FadeInCard>

    </main>
  );
}