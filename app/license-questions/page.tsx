"use client";

import { useState, useEffect, useRef } from "react";

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

export default function LicenseQuestionsPage() {
  const chapters = [
    { title: "Model Question", link: "/mcq/model" },
    { title: "Basic Civil Engineering", link: "/mcq/chapter-1" },
    { title: "Soil Mechanics and Foundation Engineering", link: "/mcq/chapter-2" },
    { title: "Basic Water Resources Engineering", link: "/mcq/chapter-3" },
    { title: "Irrigation, Drainage and Groundwater Development", link: "/mcq/chapter-4" },
    { title: "Farm Power, Machine and Machinery", link: "/mcq/chapter-5" },
    { title: "Design of Farm Structures", link: "/mcq/chapter-6" },
    { title: "Crop, Soil and Watershed Management", link: "/mcq/chapter-7" },
    { title: "Dairy and Food Engineering", link: "/mcq/chapter-8" },
    { title: "Rural Infrastructure and Energy for Rural Development", link: "/mcq/chapter-9" },
    { title: "Project planning, Design and Implementation", link: "/mcq/chapter-10" },
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

      {/* All MCQs (Model Question + Chapters) */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-teal-700 mb-3">
          Practice MCQs
        </h2>

        <p className="text-gray-600 mb-8">
          Model question and chapter-wise practice sets for NEC license preparation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {chapters.map((chapter, index) => (
            
             <a key={index}
             href={chapter.link}
              className="group flex items-center gap-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-2xl font-bold text-green-700 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                {index === 0 ? "📝" : index}
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-teal-700 transition-colors">
                  {chapter.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  MCQ Practice Set
                </p>
              </div>
            </a>
          ))}

        </div>

      </section>

    </main>
  );
}

   