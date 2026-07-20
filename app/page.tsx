"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
      { threshold: 0.2 }
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

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLHeadingElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1500;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * target));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <h3 ref={ref} className="text-2xl md:text-5xl font-bold mb-2">
      {count}
      {suffix}
    </h3>
  );
}

function TypewriterText({ text, delay = 0, speed = 50 }: { text: string; delay?: number; speed?: number }) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const interval = setInterval(() => {
      index++;
      setDisplayedText(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed]);

  return <span>{displayedText}</span>;
}


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showAllFields, setShowAllFields] = useState(false);
  const pathname = usePathname();

const isActive = (path: string) => pathname === path;
const [naessText, setNaessText] = useState("");

useEffect(() => {
  const word = "NAESS";
  let index = 0;
  let deleting = false;

  const interval = setInterval(() => {
    if (!deleting) {
      setNaessText(word.slice(0, index + 1));
      index++;

      if (index === word.length) {
        deleting = true;
      }
    } else {
      setNaessText(word.slice(0, index - 1));
      index--;

      if (index === 0) {
        deleting = false;
      }
    }
  }, 600);

  return () => clearInterval(interval);
}, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "National Agricultural Engineering Students' Society",
    alternateName: "NAESS",
    url: "https://www.naessnepal.org.np",
    logo: "https://www.naessnepal.org.np/images/logo.png",
    email: "naess@ioepc.edu.np",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Department of Agricultural Engineering, Purwanchal Campus",
      addressLocality: "Dharan",
      addressCountry: "NP",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61572261099146",
    ],
  };

  return (
    <main className="min-h-screen bg-white">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    
      
        {/* ...rest of your file stays exactly the same from here... */}

      
{/* Hero Section */}
<section className="relative h-[60vh] md:h-[85vh] flex items-center justify-center text-white overflow-hidden">

  {/* Background Image with Ken Burns zoom */}
  <div
    className="absolute inset-0 animate-kenburns"
    style={{
      backgroundImage: "url('/images/hero.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 text-center px-6 max-w-5xl">

    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg">

  National Agricultural Engineering 
  <br />
  
students' Society
</h1>

<div
  className={`mt-4 ${
    mounted ? "animate-fade-up" : "opacity-0"
  }`}
  style={{ animationDelay: "1s" }}
>
  <div className="mt-6">
  <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-widest text-teal-300 drop-shadow-2xl min-h-[1.2em]">
    {naessText}
    <span className="animate-pulse">|</span>
  </h2>
</div>
</div>

    <p
      className={`text-lg sm:text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed drop-shadow-md ${
        mounted ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: "3s" }}
    >
      Empowering Future Agricultural Engineers of Nepal through
      Innovation, Research, Leadership and Sustainable Development
    </p>

    <div
      className={`w-40 h-1 bg-gradient-to-r from-teal-400 to-green-400 mx-auto mt-8 rounded-full ${
        mounted ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: "3.3s" }}
    ></div>

  </div>
</section>
{/* Statistics Section */}
<section className="py-20 bg-gradient-to-r from-teal-700 to-green-700 text-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-5 gap-4">
      <div className="text-center">
        <AnimatedCounter target={2060} />
        <p className="text-xs md:text-base text-teal-100">
          Established
        </p>
      </div>
      <div className="text-center border-l border-white/20">
        <AnimatedCounter target={2080} />
        <p className="text-xs md:text-base text-teal-100">
          National Society
        </p>
      </div>
      <div className="text-center border-l border-white/20">
        <AnimatedCounter target={8} />
        <p className="text-xs md:text-base text-teal-100">
          Agrineer Volumes
        </p>
      </div>
      <div className="text-center border-l border-white/20">
        <AnimatedCounter target={30} suffix="+" />
        <p className="text-xs md:text-base text-teal-100">
          Technical Trainings
        </p>
      </div>
      <div className="text-center border-l border-white/20">
        <AnimatedCounter target={2} suffix="+" />
        <p className="text-xs md:text-base text-teal-100">
          AgriMech Events
        </p>
      </div>
    </div>
  </div>
</section>
    
{/* Resources */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <FadeInCard delay={0}>
      <h2 className="text-4xl font-bold text-center text-teal-700 mb-4">
        Academic Resources
      </h2>
    </FadeInCard>

    <FadeInCard delay={150}>
      <p className="text-center text-gray-600 mb-12">
        Access syllabi, research theses and Agrineer publications.
      </p>
    </FadeInCard>

    <div className="grid md:grid-cols-3 gap-8">

      <FadeInCard delay={300}>
        
         <a href="/syllabus"
          className="group bg-teal-700 text-white p-10 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-teal-700/40 hover:-translate-y-3 hover:scale-105 transition-all duration-300 text-center block"
        >
          <div className="text-5xl mb-4 group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-300">
            📚
          </div>
          <h3 className="text-2xl font-bold mb-2">
            Syllabus
          </h3>
          <p className="text-teal-50">
            Complete Agricultural Engineering curriculum and course structure.
          </p>
        </a>
      </FadeInCard>

      <FadeInCard delay={450}>
        
          <a href="/thesis"
          className="group bg-green-700 text-white p-10 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-green-700/40 hover:-translate-y-3 hover:scale-105 transition-all duration-300 text-center block"
        >
          <div className="text-5xl mb-4 group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-300">
            🎓
          </div>
          <h3 className="text-2xl font-bold mb-2">
            Thesis Repository
          </h3>
          <p className="text-green-50">
            Final year projects, research reports and thesis documents.
          </p>
        </a>
      </FadeInCard>

      <FadeInCard delay={600}>
        
         <a href="/agrineer"
          className="group bg-blue-700 text-white p-10 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-700/40 hover:-translate-y-3 hover:scale-105 transition-all duration-300 text-center block"
        >
          <div className="text-5xl mb-4 group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-300">
            📖
          </div>
          <h3 className="text-2xl font-bold mb-2">
            Agrineer Journal
          </h3>
          <p className="text-blue-50">
            Access published editions of the Agrineer Journal.
          </p>
        </a>
      </FadeInCard>

    </div>

  </div>
</section>
{/* Recent Events & Trainings */}
<section className="py-24 bg-gradient-to-b from-white to-gray-50">

  <div className="max-w-7xl mx-auto px-6">

    <FadeInCard delay={0}>
      <h2 className="text-4xl md:text-5xl font-bold text-center text-teal-700 mb-4">
        Recent Events & Trainings
      </h2>
    </FadeInCard>

    <FadeInCard delay={150}>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
        Explore the latest activities, technical trainings, workshops and events organized by NAESS.
      </p>
    </FadeInCard>

    {(() => {
      const activities = [
        {
          title: "Handover and Oath Taking Ceremony",
          image: "/events/handover.png",
          date: "Aasadh 16, 2083",
        },
        {
          title: "Educational Visit to NARC",
          image: "/events/narc.jpg",
          date: "Aasadh 15, 2083",
        },
        {
          title: "Agrineer Volume 8 Release",
          image: "/events/agrineer.jpg",
          date: "2083",
        },
        {
          title: "Engineering Research Workshop",
          image: "/events/research.jpg",
          date: "2082",
        },
        {
          title: "IoT Workshop",
          image: "/events/iot.jpg",
          date: "2082",
        },
        {
          title: "Land Valuation Training",
          image: "/events/valuation.jpg",
          date: "2082",
        },
        {
          title: "SolidWorks Training",
          image: "/events/solidworks.jpg",
          date: "2082",
        },
      ];

      return (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">

            {activities.slice(0, 6).map((event, index) => (
              <FadeInCard key={index} delay={300 + index * 150}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300">

                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-44 object-cover"
                  />

                  <div className="p-5">

                    <p className="text-sm text-gray-500 mb-2">
                      {event.date}
                    </p>

                    <h3 className="font-bold text-lg text-teal-700">
                      {event.title}
                    </h3>

                  </div>

                </div>
              </FadeInCard>
            ))}

          </div>

          <div className="text-center mt-12">

            
              <a href="/activities"
              className="inline-block bg-teal-700 text-white px-8 py-3 rounded-xl hover:bg-teal-800 transition"
            >
              View All Activities
            </a>

          </div>
        </>
      );
    })()}

  </div>

</section>
     {/* What We Do */}
<section className="py-24 bg-gray-50">

  <div className="max-w-7xl mx-auto px-6">

    <FadeInCard delay={0}>
      <h2 className="text-4xl md:text-5xl font-bold text-center text-teal-700 mb-4">
        How NAESS Supports Future Agricultural Engineers
      </h2>
    </FadeInCard>

    <FadeInCard delay={150}>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
        NAESS empowers Agricultural Engineering students through technical
        capacity building, knowledge sharing, research promotion and
        professional networking.
      </p>
    </FadeInCard>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Technical Trainings */}
      <ScaleInCard delay={300}>
        <div className="group relative bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-3 transition-all duration-500 overflow-hidden">

          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

          <div className="text-5xl mb-5 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-500">
            ⚙️
          </div>

          <h3 className="text-2xl font-bold text-blue-600 mb-3">
            Technical Trainings
          </h3>

          <p className="text-gray-600 leading-7 mb-5">
            Organizing practical trainings in GIS, SolidWorks, AutoCAD,
            IoT, Remote Sensing, Drone Technology and Agricultural
            Machinery Design.
          </p>

          <div className="text-sm text-gray-500">
            ✓ Skill Development <br />
            ✓ Industry-Oriented Learning
          </div>

        </div>
      </ScaleInCard>

      {/* Events */}
      <ScaleInCard delay={450}>
        <div className="group relative bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-3 transition-all duration-500 overflow-hidden">

          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

          <div className="text-5xl mb-5 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-500">
            🎤
          </div>

          <h3 className="text-2xl font-bold text-green-600 mb-3">
            Workshops & Events
          </h3>

          <p className="text-gray-600 leading-7 mb-5">
            Conducting seminars, conferences, industrial visits,
            competitions and networking events connecting students
            with professionals and researchers.
          </p>

          <div className="text-sm text-gray-500">
            ✓ National Events <br />
            ✓ Technical Exposure
          </div>

        </div>
      </ScaleInCard>

      {/* Publications */}
      <ScaleInCard delay={600}>
        <div className="group relative bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-3 transition-all duration-500 overflow-hidden">

          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

          <div className="text-5xl mb-5 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-500">
            📚
          </div>

          <h3 className="text-2xl font-bold text-red-600 mb-3">
            Research & Publications
          </h3>

          <p className="text-gray-600 leading-7 mb-5">
            Publishing the official Agrineer Journal and promoting
            student research, innovation, technical writing and
            academic excellence.
          </p>

          <div className="flex flex-wrap gap-2">

            {["Vol 1","Vol 2","Vol 3","Vol 4","Vol 5","Vol 6","Vol 7","Vol 8"].map((vol, i) => (
              <span
                key={vol}
                className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-red-600 hover:text-white hover:scale-110"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {vol}
              </span>
            ))}

          </div>

        </div>
      </ScaleInCard>

    </div>

  </div>

</section>
    
{/* Notice Preview */}
<section className="bg-yellow-50 py-16">

  <div className="max-w-6xl mx-auto px-6">

    <FadeInCard delay={0}>
      <h2 className="text-4xl font-bold text-center text-teal-700 mb-10">
        Latest Notices
      </h2>
    </FadeInCard>

    {(() => {
      const notices = [
        {
          title: "Application for Technical Manager",
          date: "Aasadh 25, 2083",
          link: "https://drive.google.com/file/d/199O7BsXP36fc5wjaIV9kK_VVa0sn515d/view?usp=drive_link",
        },
        {
          title: "Educational visit to NARC Tarahara",
          date: "Aasadh 14, 2083",
          link: "https://drive.google.com/file/d/1ppKyPeBD7DTGY3FpDlxydO4F6KfE1wKy/view?usp=drive_link",
        },
        {
          title: "Committee handover Announcement",
          date: "Aasadh 13, 2083",
          link: "https://drive.google.com/file/d/1SQNl9-RwI4qX5VluTqj4jFYNrDBqzFMM/view?usp=drive_link",
        },
      ];

      return (
        <div className="space-y-4">
          {notices.map((notice, index) => (
            <FadeInCard key={index} delay={200 + index * 150}>
              
               <a href={notice.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-5 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-600"></span>
                  </span>
                  <span className="text-gray-800 group-hover:text-teal-700 transition-colors">
                    📢 {notice.title}
                  </span>
                </div>

                <span className="text-sm text-gray-500 whitespace-nowrap flex-shrink-0">
                  {notice.date}
                </span>
              </a>
            </FadeInCard>
          ))}
        </div>
      );
    })()}

    <FadeInCard delay={650}>
      <div className="text-center mt-8">
        
        <a  href="/notices"
          className="inline-block bg-teal-700 text-white px-8 py-3 rounded-xl hover:bg-teal-800 hover:scale-105 transition-all duration-300"
        >
          View All Notices
        </a>
      </div>
    </FadeInCard>

  </div>

</section>
 {/* Major Fields of Agricultural Engineering */}
<section className="py-20 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <FadeInCard delay={0}>
      <h2 className="text-4xl font-bold text-center text-teal-700 mb-4">
        Major Fields of Agricultural Engineering
      </h2>
    </FadeInCard>

    <FadeInCard delay={150}>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
        Agricultural Engineering integrates engineering principles with agriculture
        to improve productivity, sustainability, mechanization, food processing,
        water management and rural development.
      </p>
    </FadeInCard>

    {(() => {
      const fields = [
        { icon: "🚜", title: "Farm Power & Machinery", desc: "Agricultural machinery, mechanization systems and precision farming technologies." },
        { icon: "🏗️", title: "Agricultural Infrastructure", desc: "Design of farm buildings, greenhouses, storage structures and rural infrastructure." },
        { icon: "☀️", title: "Rural & Renewable Energy", desc: "Solar energy, biogas, biomass and sustainable energy technologies." },
        { icon: "💧", title: "Irrigation Engineering", desc: "Planning, design and management of irrigation and drainage systems." },
        { icon: "🌱", title: "Soil Conservation & Watershed Management", desc: "Conservation of soil and water resources through watershed planning." },
        { icon: "📦", title: "Postharvest Engineering", desc: "Harvesting, drying, storage and processing technologies." },
        { icon: "🥛", title: "Dairy & Food Engineering", desc: "Dairy processing, food preservation and food engineering systems." },
        { icon: "🌾", title: "Precision Agriculture", desc: "Smart farming technologies using sensors, drones and automation." },
        { icon: "❄️", title: "Cold Storage & Processing", desc: "Cold chain management, storage systems and agro-processing technologies." },
      ];

      const visibleFields = showAllFields ? fields : fields.slice(0, 6);

      return (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {visibleFields.map((field, index) => (
              <ScaleInCard key={field.title} delay={index * 100}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className="text-5xl mb-4">{field.icon}</div>
                  <h3 className="text-xl font-bold mb-3">
                    {field.title}
                  </h3>
                  <p className="text-gray-600">
                    {field.desc}
                  </p>
                </div>
              </ScaleInCard>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => setShowAllFields(!showAllFields)}
              className="bg-teal-700 text-white px-8 py-3 rounded-xl hover:bg-teal-800 hover:scale-105 transition-all duration-300"
            >
              {showAllFields ? "Show Less" : "Show More Fields"}
            </button>
          </div>
        </>
      );
    })()}

  </div>
</section>

    {/* President's Message */}
<section className="py-24 bg-gray-50">

  <div className="max-w-7xl mx-auto px-6">

    <FadeInCard delay={0}>
      <h2 className="text-4xl md:text-5xl font-bold text-center text-teal-700 mb-16">
        Message from the President
      </h2>
    </FadeInCard>

    <ScaleInCard delay={200}>
      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 hover:shadow-2xl transition-shadow duration-500">

        <div className="flex flex-row items-start gap-6 md:gap-10">

          {/* President Photo */}
          <div className="flex-shrink-0">

            <Image
              src="/committee/dipendra.jpg"
              alt="Dipendra Kumar Sah"
              width={180}
              height={220}
              className="rounded-2xl object-cover shadow-lg w-28 h-36 md:w-44 md:h-56 hover:scale-105 transition-transform duration-500"
            />

          </div>

          {/* Message */}
          <div className="flex-1">

            <div className="text-5xl text-teal-600 leading-none mb-3">
              "
            </div>

            <p className="text-gray-700 leading-7 md:leading-8 text-sm md:text-lg">
              Welcome to the official website of the National Agricultural
              Engineering Students' Society (NAESS).

              <br /><br />

              NAESS is dedicated to strengthening the academic, technical
              and professional capabilities of Agricultural Engineering
              students across Nepal through trainings, research,
              publications, networking and leadership development.

              <br /><br />

              Together, we strive to create opportunities for innovation,
              practical learning and collaboration while contributing to
              the advancement of Agricultural Engineering and sustainable
              development in Nepal.
            </p>

            <div className="mt-8 border-t pt-5">

              <h3 className="text-xl md:text-2xl font-bold text-teal-700">
                Dipendra Kumar Sah
              </h3>

              <p className="text-gray-600 font-medium">
                President
              </p>

              <p className="text-gray-500 text-sm">
                National Agricultural Engineering Students' Society (NAESS)
              </p>

            </div>

          </div>

        </div>

      </div>
    </ScaleInCard>

  </div>

</section>
      {/* Footer */}
<footer className="bg-gray-900 text-gray-300">

  <div className="max-w-7xl mx-auto px-6 py-14">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      {/* NAESS Info */}
      <div>

        <div className="flex items-center gap-3 mb-4">

          <a href="/">
            <Image
              src="/images/logo.png"
              alt="NAESS Logo"
              width={50}
              height={50}
            />
          </a>

          <div>
            <h3 className="text-xl font-bold text-white">
              NAESS
            </h3>

            <p className="text-xs text-gray-400">
              National Agricultural Engineering Students' Society
            </p>
          </div>

        </div>

        <p className="text-sm leading-7">
          Empowering Agricultural Engineering students through
          innovation, research, leadership, and professional
          development.
        </p>

      </div>

      {/* Quick Links */}
      <div>

        <h3 className="text-lg font-semibold text-white mb-4">
          Quick Links
        </h3>

        <ul className="space-y-3">

          <li>
            <a href="/" className="hover:text-teal-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="/organization" className="hover:text-teal-400 transition">
              Organization
            </a>
          </li>

          <li>
            <a href="/team" className="hover:text-teal-400 transition">
              Executive Team
            </a>
          </li>

          <li>
            <a href="/alumni" className="hover:text-teal-400 transition">
              Alumni
            </a>
          </li>

          <li>
            <a href="/gallery" className="hover:text-teal-400 transition">
              Gallery
            </a>
          </li>

          <li>
            <a href="/contact" className="hover:text-teal-400 transition">
              Contact
            </a>
          </li>

        </ul>

      </div>

      {/* Resources */}
      <div>

        <h3 className="text-lg font-semibold text-white mb-4">
          Resources
        </h3>

        <ul className="space-y-3">

          <li>
            <a href="/syllabus" className="hover:text-teal-400 transition">
              Syllabus
            </a>
          </li>

          <li>
            <a href="/thesis" className="hover:text-teal-400 transition">
              Thesis Repository
            </a>
          </li>

          <li>
            <a href="/agrineer" className="hover:text-teal-400 transition">
              Agrineer Journal
            </a>
          </li>

          <li>
            <a href="/activities" className="hover:text-teal-400 transition">
              Activities
            </a>
          </li>

          <li>
            <a href="/notices" className="hover:text-teal-400 transition">
              Notices
            </a>
          </li>

        </ul>

      </div>

      {/* Contact */}
      <div>

        <h3 className="text-lg font-semibold text-white mb-4">
          Contact Us
        </h3>

        <div className="space-y-3 text-sm">

          <p>
            📍 Department of Agricultural Engineering
            <br />
            Purwanchal Campus, Dharan, Nepal
          </p>

          <p>
            📧 naess@ioepc.edu.np
          </p>

          
           <a href="https://www.facebook.com/profile.php?id=61572261099146"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:text-teal-400 transition"
          >
            📘 Facebook Page
          </a>

        </div>

      </div>

    </div>

    {/* Bottom Footer */}
    <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">

      <p>
        © {new Date().getFullYear()} National Agricultural Engineering
        Students' Society (NAESS). All Rights Reserved.
      </p>

      <p className="mt-2">
        Established: 2060 B.S. | National Society Since: 2080 B.S.
      </p>

    </div>

  </div>

</footer>
    </main>
  );
}