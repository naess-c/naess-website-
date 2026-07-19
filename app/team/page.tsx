"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

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

export default function CommitteePage() {
  const [showFullMessage, setShowFullMessage] = useState(false);

  const members = [
    {
      name: "Dipendra Kumar Sah",
      position: "President",
      batch: "Batch 2079",
      Email: "079bag007@ioepc.edu.np",
      image: "/committee/dipendra.jpg",
    },
    {
      name: "Pratik Kumar Mishra",
      position: "Vice President",
      batch: "Batch 2080",
      image: "/committee/pratik.jpg",
    },
    {
      name: "Binod Panta",
      position: "Secretary",
      batch: "Batch 2080",
      image: "/committee/binod.jpg",
    },
    {
      name: "Smita Yadav",
      position: "Treasurer",
      batch: "Batch 2079",
      image: "/committee/smita.png",
    },
    {
      name: "Anurag Sampang Rai",
      position: "Vice Secretary",
      batch: "Batch 2081",
      image: "/committee/anurag.jpg",
    },
    {
      name: "Sitara Kumari Jaisawal",
      position: "Executive Member",
      batch: "Batch 2079",
      image: "/committee/sitara.jpg",
    },
    {
      name: "Purnica Yadav",
      position: "Executive Member",
      batch: "Batch 2080",
      image: "/committee/purnica.jpg",
    },
    {
      name: "Aditya",
      position: "Executive Member",
      batch: "Batch 2081",
      image: "/committee/aditya.png",
    },
    {
      name: "Krish Adhikari",
      position: "Executive Member",
      batch: "Batch 2081",
      image: "/committee/krish.png",
    },
    {
      name: "Ratish Ghimire",
      position: "Executive Member",
      batch: "Batch 2082",
      image: "/committee/ratish.jpg",
    },
  ];

  const president = members.find(
    (member) => member.position === "President"
  );

  const otherMembers = members.filter(
    (member) => member.position !== "President"
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Executive Committee Hero */}
      <section className="bg-gradient-to-r from-teal-700 to-green-700 text-white py-16">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-4">
            Executive Committee 2083/84
          </h1>

          <p className="text-xl text-teal-100 mb-10">
            National Agricultural Engineering Students' Society
          </p>

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/committee/group-photo.jpg"
              alt="NAESS Executive Committee"
              width={1200}
              height={700}
              className="w-full object-cover"
            />
          </div>

        </div>

      </section>

      {/* President Section */}
      {president && (
        <section className="max-w-6xl mx-auto px-6 py-16">

          <ScaleInCard delay={0}>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

              <div className="grid md:grid-cols-2 gap-0">

                {/* Left Side - Photo */}
                <div className="bg-gradient-to-br from-teal-700 to-green-700 flex flex-col items-center justify-center p-10 text-white">

                  <Image
  src={president.image}
  alt={president.name}
  width={220}
  height={220}
  className="rounded-full border-4 border-white object-cover w-32 h-32 md:w-44 md:h-44"
/>
                  <h3 className="text-3xl font-bold mt-6">
                    {president.name}
                  </h3>

                  <p className="text-teal-100 mt-2 text-lg">
                    {president.position}
                  </p>
                  <p className="text-white/80 text-sm mt-1">
                    {president.batch}
                  </p>
                  <p className="text-white/80 text-sm mt-1">
                    {president.Email}
                  </p>

                </div>

                {/* Right Side - Message */}
                <div className="p-10 md:p-12">

                  <h2 className="text-3xl font-bold text-teal-700 mb-6">
                    Message from the President
                  </h2>

                  <p className="text-gray-700 leading-8 text-lg">
                    Welcome to the National Agricultural Engineering Students'
                    Society (NAESS). It is an honor to serve as President of
                    this organization dedicated to empowering Agricultural
                    Engineering students across Nepal.
                  </p>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      showFullMessage ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-700 leading-8 text-lg">
                      Through technical trainings, research activities,
                      publications, industrial visits, and leadership
                      opportunities, we strive to build a stronger community
                      of future agricultural engineers who will contribute to
                      sustainable agricultural development and technological
                      advancement.
                    </p>

                    <p className="text-gray-700 leading-8 text-lg mt-4">
                      I invite all students, alumni, professionals, and well-wishers
                      to engage with NAESS and support our shared vision of advancing
                      Agricultural Engineering in Nepal.
                    </p>
                  </div>

                  <button
                    onClick={() => setShowFullMessage(!showFullMessage)}
                    className="mt-5 text-teal-700 font-semibold hover:text-teal-900 transition flex items-center gap-1"
                  >
                    {showFullMessage ? "Show Less ↑" : "Read More ↓"}
                  </button>

                </div>

              </div>

            </div>
          </ScaleInCard>

        </section>
      )}

      {/* Other Members */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Executive Committee Members
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {otherMembers.map((member, index) => (
            <ScaleInCard key={index} delay={(index % 6) * 120}>
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-teal-100">
  <Image
    src={member.image}
    alt={member.name}
    width={128}
    height={128}
    className="w-full h-full object-cover"
  />
</div>

                <h3 className="text-xl font-bold text-gray-800 mt-4">
                  {member.name}
                </h3>

                <p className="text-teal-700 font-medium mt-2">
                  {member.position}
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  {member.batch}
                </p>
              </div>
            </ScaleInCard>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-8 text-center">
        <h3 className="font-bold text-lg">
          National Agricultural Engineering Students' Society
        </h3>

        <p className="mt-2 text-sm">
          Empowering Future Agricultural Engineers of Nepal
        </p>
      </footer>
    </main>
  );
}