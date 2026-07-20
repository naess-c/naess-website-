"use client";

import { useState, useEffect, useRef } from "react";

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

        <FadeInCard delay={0}>
          <h1 className="text-5xl font-bold text-center text-teal-700 mb-4">
            Notices
          </h1>
        </FadeInCard>

        <FadeInCard delay={150}>
          <p className="text-center text-gray-600 mb-12">
            Latest announcements, trainings, events and opportunities.
          </p>
        </FadeInCard>

        <div className="space-y-6">

          {notices.map((notice, index) => (
            <FadeInCard key={index} delay={300 + index * 150}>
              
               <a href={notice.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-between items-center">

                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3 flex-shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-600"></span>
                    </span>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-teal-700 transition-colors">
                        📢 {notice.title}
                      </h3>

                      <p className="text-gray-500 mt-2">
                        {notice.date}
                      </p>
                    </div>
                  </div>

                  <span className="text-teal-700 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    View →
                  </span>

                </div>
              </a>
            </FadeInCard>
          ))}

        </div>

      </div>

    </main>
  );
}