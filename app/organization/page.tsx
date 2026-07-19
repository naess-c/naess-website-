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

export default function OrganizationPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      <FadeInCard delay={0}>
        <h2 className="text-4xl font-bold text-teal-700 mb-8">
          About NAESS
        </h2>
      </FadeInCard>

      <FadeInCard delay={150}>
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10">

          <FadeInCard delay={0}>
            <p className="text-lg text-gray-700 leading-8 mb-6">
              The <strong>Nepal Agricultural Engineering Students' Society (NAESS)</strong>
              was established in <strong>2060 B.S.</strong> with the vision of uniting
              Agricultural Engineering students and promoting academic excellence,
              technical knowledge, innovation, leadership, and professional development
              within the field of Agricultural Engineering in Nepal.
            </p>
          </FadeInCard>

          <FadeInCard delay={150}>
            <p className="text-lg text-gray-700 leading-8 mb-6">
              Since its establishment, the society has served as a common platform
              for Agricultural Engineering students to share knowledge, organize
              technical programs, develop professional skills, and strengthen the
              connection between students, academia, and industry.
            </p>
          </FadeInCard>

          <FadeInCard delay={300}>
            <p className="text-lg text-gray-700 leading-8 mb-6">
              Recognizing its growing national impact and expanding network,
              the society was officially renamed as the
              <strong> National Agricultural Engineering Students' Society (NAESS)</strong>
              in <strong>2080 B.S.</strong>, reflecting its commitment to representing
              Agricultural Engineering students across Nepal and contributing to the
              advancement of the profession nationwide.
            </p>
          </FadeInCard>

          <FadeInCard delay={450}>
            <p className="text-lg text-gray-700 leading-8 mb-6">
              Throughout its journey, NAESS has successfully organized numerous
              technical trainings, workshops, seminars, conferences, industrial visits,
              research-oriented activities, and publications including the
              <strong> Agrineer Journal</strong>, creating valuable learning
              opportunities for students and young professionals.
            </p>
          </FadeInCard>

          <FadeInCard delay={600}>
            <p className="text-lg text-gray-700 leading-8">
              We express our sincere gratitude to all former presidents, executive
              committees, advisors, faculty members, volunteers, alumni, and supporters
              whose dedication, leadership, and continuous efforts have shaped NAESS
              into a respected student organization. Their contributions have laid a
              strong foundation for future generations of Agricultural Engineers and
              continue to inspire us to work towards innovation, sustainability, and
              excellence in Agricultural Engineering.
            </p>
          </FadeInCard>

        </div>
      </FadeInCard>

    </section>
  );
}