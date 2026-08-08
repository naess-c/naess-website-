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

export default function NotesPage() {
  const syllabusLinks = [
    {
      title: "Notes & Study Materials",
      description:
        "Notes, Syllabus, Manuals and Past Questions for Old and New Courses",
      link: "/notes/materials",
      icon: "📖",
    },
    {
      title: "NEC License Syllabus",
      description:
        "Nepal Engineering Council License Examination Syllabus",
      link: "/nec",
      icon: "📝",
    },
    {
      title: "NEC License Prepration Questions",
      description:
        "Previous License Examination Questions and Resources",
      link: "/license-questions",
      icon: "📋",
    },
    {
      title: "Working Areas",
      description:
        "Career Opportunities and Professional Fields for Agricultural Engineers",
      link: "/career",
      icon: "🚜",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Syllabus Hub Links */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <FadeInCard delay={0}>
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-10">
            Academic Resources
          </h2>
        </FadeInCard>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {syllabusLinks.map((item, index) => (
            <ScaleInCard key={index} delay={index * 120}>
              
               <a href={item.link}
                className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-8"
              >

                <div className="text-5xl mb-5 group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-300">
                  {item.icon}
                </div>

                <h2 className="text-2xl font-bold text-teal-700 mb-3 group-hover:text-teal-800 transition-colors">
                  {item.title}
                </h2>

                <p className="text-gray-600">
                  {item.description}
                </p>

              </a>
            </ScaleInCard>
          ))}

        </div>

      </section>

    </main>
  );
}