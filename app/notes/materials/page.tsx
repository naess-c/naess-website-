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

export default function NotesMaterialsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-gradient-to-r from-teal-700 to-green-700 text-white py-16">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl font-bold mb-4">
            Notes Repository
          </h1>

          <p className="text-xl">
            Access Agricultural Engineering Study Materials
          </p>
        </div>
      </section>

      {/* Notes Cards */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-8">

          {/* New Course */}
          <ScaleInCard delay={0}>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">

              <div className="text-6xl mb-4">
                📚
              </div>

              <h2 className="text-2xl font-bold text-teal-700 mb-4">
                New Course Notes
              </h2>

              <p className="text-gray-600 mb-6">
                Notes, manuals, reports and study materials based on the current Agricultural Engineering curriculum.
              </p>

              
              <a  href="https://drive.google.com/drive/u/0/folders/1953UlYRdugtsrWFcciTOQjuGbG0BwZyI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800 hover:scale-105 transition-all duration-300"
              >
                Open Drive Folder
              </a>

            </div>
          </ScaleInCard>

          {/* Old Course */}
          <ScaleInCard delay={150}>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">

              <div className="text-6xl mb-4">
                📖
              </div>

              <h2 className="text-2xl font-bold text-teal-700 mb-4">
                Old Course Notes
              </h2>

              <p className="text-gray-600 mb-6">
                Archived notes and resources based on the previous Agricultural Engineering curriculum.
              </p>

              
              <a  href="https://drive.google.com/drive/u/0/folders/1MJpO3sDsTrTD4iIyfT_nCs9IJKCdlFig"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800 hover:scale-105 transition-all duration-300"
              >
                Open Drive Folder
              </a>

            </div>
          </ScaleInCard>

        </div>

      </section>

    </main>
  );
}