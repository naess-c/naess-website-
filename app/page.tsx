
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white">

      {/* Premium Navbar */}
     <nav
  className={`sticky top-0 left-0 w-full z-50 transition-all duration-500 ${
    scrolled
      ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
      : "bg-black/30 backdrop-blur-sm py-4"
  }`}
>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          {/* Logo */}
<div className="flex items-center gap-3">

  <Image
    src="/images/logo.png"
    alt="NAESS Logo"
    width={scrolled ? 40 : 55}
    height={scrolled ? 40 : 55}
    className="transition-all duration-500"
  />

  <div>
    <h1
      className={`font-bold transition-all duration-500 ${
        scrolled
          ? "text-teal-700 text-lg"
          : "text-white text-lg"
      }`}
    >
      NAESS
    </h1>

   <p
  className={`block text-[10px] md:text-xs transition-all duration-500 ${
    scrolled
      ? "text-gray-600"
      : "text-white/90"
  }`}
>
  National Agricultural Engineering Students' Society
</p>
  </div>

</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">

            <a
              href="/"
              className={`transition ${
                scrolled
                  ? "text-gray-700 hover:text-teal-700"
                  : "text-white hover:text-teal-200"
              }`}
            >
              Home
            </a>

            <a
              href="/organization"
              className={`transition ${
                scrolled
                  ? "text-gray-700 hover:text-teal-700"
                  : "text-white hover:text-teal-200"
              }`}
            >
              Organization
            </a>

            <a
              href="/team"
              className={`transition ${
                scrolled
                  ? "text-gray-700 hover:text-teal-700"
                  : "text-white hover:text-teal-200"
              }`}
            >
              Executive Team
            </a>

            <a
              href="/alumni"
              className={`transition ${
                scrolled
                  ? "text-gray-700 hover:text-teal-700"
                  : "text-white hover:text-teal-200"
              }`}
            >
              Alumni
            </a>

            <a
              href="/gallery"
              className={`transition ${
                scrolled
                  ? "text-gray-700 hover:text-teal-700"
                  : "text-white hover:text-teal-200"
              }`}
            >
              Gallery
            </a>

            <a
              href="/notes"
              className={`transition ${
                scrolled
                  ? "text-gray-700 hover:text-teal-700"
                  : "text-white hover:text-teal-200"
              }`}
            >
              Resources
            </a>

            <a
              href="/notices"
              className={`transition ${
                scrolled
                  ? "text-gray-700 hover:text-teal-700"
                  : "text-white hover:text-teal-200"
              }`}
            >
              Notices
            </a>

            <a
              href="/contact"
              className={`transition ${
                scrolled
                  ? "text-gray-700 hover:text-teal-700"
                  : "text-white hover:text-teal-200"
              }`}
            >
              Contact
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden text-3xl transition ${
              scrolled ? "text-teal-700" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t">

            <a href="/" className="block px-6 py-3 hover:bg-gray-100">
              Home
            </a>

            <a href="/organization" className="block px-6 py-3 hover:bg-gray-100">
              Organization
            </a>

            <a href="/team" className="block px-6 py-3 hover:bg-gray-100">
              Executive Team
            </a>

            <a href="/alumni" className="block px-6 py-3 hover:bg-gray-100">
              Alumni
            </a>

            <a href="/gallery" className="block px-6 py-3 hover:bg-gray-100">
              Gallery
            </a>

            <a href="/notes" className="block px-6 py-3 hover:bg-gray-100">
              Resources
            </a>

            <a href="/notices" className="block px-6 py-3 hover:bg-gray-100">
              Notices
            </a>

            <a href="/contact" className="block px-6 py-3 hover:bg-gray-100">
              Contact
            </a>

          </div>
        )}
      </nav>
    
{/* Hero Section */}
<section
  className="relative h-[60vh] md:h-[85vh] flex items-center justify-center text-white"
  style={{
    backgroundImage: "url('/images/hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 text-center px-6 max-w-5xl">

    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
      National Agricultural Engineering
      <br />
      Students' Society
    </h1>

   <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
      Empowering Future Agricultural Engineers of Nepal through
      Innovation, Research, Leadership and Sustainable Development
    </p>

    <div className="w-40 h-1 bg-gradient-to-r from-teal-400 to-green-400 mx-auto mt-8 rounded-full"></div>

  </div>
</section>

<section className="py-20 bg-gradient-to-r from-teal-700 to-green-700 text-white">

  <div className="max-w-6xl mx-auto px-6">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

      <div className="text-center">
        <h3 className="text-5xl font-bold">2060</h3>
        <p>Established</p>
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-bold">2080</h3>
        <p>National Society</p>
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-bold">8</h3>
        <p>Agrineer Volumes</p>
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-bold">2</h3>
        <p>AgriMech Events</p>
      </div>

    </div>

  </div>

</section>
    
     
{/* Resources */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-teal-700 mb-4">
      Academic Resources
    </h2>

    <p className="text-center text-gray-600 mb-12">
      Access syllabi, research theses and Agrineer publications.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      <a
        href="/syllabus"
        className="bg-teal-700 text-white p-10 rounded-2xl shadow-lg hover:scale-105 transition text-center"
      >
        <div className="text-5xl mb-4">📚</div>
        <h3 className="text-2xl font-bold mb-2">
          Syllabus
        </h3>
        <p>
          Complete Agricultural Engineering curriculum and course structure.
        </p>
      </a>

      <a
        href="/thesis"
        className="bg-green-700 text-white p-10 rounded-2xl shadow-lg hover:scale-105 transition text-center"
      >
        <div className="text-5xl mb-4">🎓</div>
        <h3 className="text-2xl font-bold mb-2">
          Thesis Repository
        </h3>
        <p>
          Final year projects, research reports and thesis documents.
        </p>
      </a>

      <a
        href="/agrineer"
        className="bg-blue-700 text-white p-10 rounded-2xl shadow-lg hover:scale-105 transition text-center"
      >
        <div className="text-5xl mb-4">📖</div>
        <h3 className="text-2xl font-bold mb-2">
          Agrineer Journal
        </h3>
        <p>
          Access published editions of the Agrineer Journal.
        </p>
      </a>

    </div>

  </div>
</section>
      {/* Activities */}
<section className="py-20 bg-gradient-to-b from-gray-50 to-white">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-teal-700 mb-4">
      What We Do
    </h2>

    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
      NAESS promotes technical excellence, innovation, leadership and
      professional development among Agricultural Engineering students
      throughout Nepal.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Training */}
      <div className="group bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <div className="text-6xl mb-5">
          🛠️
        </div>

        <h3 className="text-2xl font-bold text-teal-700 mb-4">
          Technical Trainings
        </h3>

        <p className="text-gray-600 leading-7">
          Hands-on training programs in GIS, SolidWorks, AutoCAD,
          Drone Technology, IoT, Remote Sensing, CAD Design,
          Agricultural Machinery Design and emerging technologies.
        </p>

      </div>

      {/* Events */}
      <div className="group bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <div className="text-6xl mb-5">
          🎯
        </div>

        <h3 className="text-2xl font-bold text-teal-700 mb-4">
          Workshops & Events
        </h3>

        <p className="text-gray-600 leading-7">
          Engineering competitions, national conferences,
          industrial visits, expert talks, technical seminars,
          exhibitions and professional networking events.
        </p>

      </div>

      {/* Publications */}
      <div className="group bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <div className="text-6xl mb-5">
          📖
        </div>

        <h3 className="text-2xl font-bold text-teal-700 mb-4">
          Publications
        </h3>

        <p className="text-gray-600 leading-7 mb-4">
          Publication of the official NAESS journal
          <span className="font-semibold text-teal-700"> "Agrineer"</span>,
          featuring student research, innovations and technical articles.
        </p>

        <div className="flex flex-wrap gap-2">

          {["Vol 1","Vol 2","Vol 3","Vol 4","Vol 5","Vol 6","Vol 7","Vol 8"].map((vol) => (
            <span
              key={vol}
              className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {vol}
            </span>
          ))}

        </div>

      </div>

    </div>

  </div>

</section>

     {/* Achievements & Activities */}
<section className="py-24 bg-gradient-to-b from-white to-gray-50">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl md:text-5xl font-bold text-center text-teal-700 mb-4">
      Our Achievements & Activities
    </h2>

    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
      Through technical trainings, industrial visits, publications and professional
      events, NAESS continues to strengthen the Agricultural Engineering community of Nepal.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* GIS */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">📡</div>
        <h3 className="text-2xl font-bold mb-3 text-blue-600">
          IoT Training
        </h3>
        <p className="text-gray-600 leading-7">
          Organized practical Internet of Things (IoT) training programs,
          introducing students to smart agriculture technologies and automation.
        </p>
      </div>

      {/* SolidWorks */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-green-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">⚙️</div>
        <h3 className="text-2xl font-bold mb-3 text-green-600">
          SolidWorks Training
        </h3>
        <p className="text-gray-600 leading-7">
          Conducted CAD and SolidWorks training sessions to enhance
          engineering design and modeling skills among students.
        </p>
      </div>

      {/* Land Valuation */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-orange-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">🏞️</div>
        <h3 className="text-2xl font-bold mb-3 text-orange-600">
          Land Valuation Training
        </h3>
        <p className="text-gray-600 leading-7">
          Successfully organized professional training on land valuation,
          surveying principles and property assessment techniques.
        </p>
      </div>

      {/* NARC */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-teal-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">🌾</div>
        <h3 className="text-2xl font-bold mb-3 text-teal-600">
          Research & NARC Visits
        </h3>
        <p className="text-gray-600 leading-7">
          Organized technical visits to NARC research stations and other
          institutions to bridge theory and practical learning.
        </p>
      </div>

      {/* Conferences */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-purple-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">🎤</div>
        <h3 className="text-2xl font-bold mb-3 text-purple-600">
          Conferences & Seminars
        </h3>
        <p className="text-gray-600 leading-7">
          Active participation in national and international conferences,
          seminars and technical discussion forums.
        </p>
      </div>

      {/* Agrineer */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-red-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">📖</div>
        <h3 className="text-2xl font-bold mb-3 text-red-600">
          Agrineer Journal
        </h3>
        <p className="text-gray-600 leading-7 mb-4">
          Publishing the official NAESS journal “Agrineer” to promote
          technical writing, innovation and student research.
        </p>

        <div className="flex flex-wrap gap-2">
          {["Vol 1","Vol 2","Vol 3","Vol 4","Vol 5","Vol 6","Vol 7","Vol 8"].map((vol) => (
            <span
              key={vol}
              className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {vol}
            </span>
          ))}
        </div>

      </div>

    </div>

  </div>

</section>
{/* Notice Preview */}
<section className="bg-yellow-50 py-16">

  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-teal-700 mb-10">
      Latest Notices
    </h2>

    <div className="space-y-4">

      <div className="bg-white p-5 rounded-xl shadow">
        📢 Application for Technical Manager
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        📢 Educational visit to NARC Tarahara
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        📢 committee handover  Announcement
      </div>

    </div>

    <div className="text-center mt-8">

      <a
        href="/notices"
        className="bg-teal-700 text-white px-8 py-3 rounded-xl hover:bg-teal-800 transition"
      >
        View All Notices
      </a>

    </div>

  </div>

</section>
 {/* Major Fields of Agricultural Engineering */}
<section className="py-20 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-teal-700 mb-4">
      Major Fields of Agricultural Engineering
    </h2>

    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
      Agricultural Engineering integrates engineering principles with agriculture
      to improve productivity, sustainability, mechanization, food processing,
      water management and rural development.
    </p>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

      {/* 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">🚜</div>
        <h3 className="text-xl font-bold mb-3">
          Farm Power & Machinery
        </h3>
        <p className="text-gray-600">
          Agricultural machinery, mechanization systems and precision farming technologies.
        </p>
      </div>

      {/* 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">🏗️</div>
        <h3 className="text-xl font-bold mb-3">
          Agricultural Infrastructure
        </h3>
        <p className="text-gray-600">
          Design of farm buildings, greenhouses, storage structures and rural infrastructure.
        </p>
      </div>

      {/* 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">☀️</div>
        <h3 className="text-xl font-bold mb-3">
          Rural & Renewable Energy
        </h3>
        <p className="text-gray-600">
          Solar energy, biogas, biomass and sustainable energy technologies.
        </p>
      </div>

      {/* 4 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">💧</div>
        <h3 className="text-xl font-bold mb-3">
          Irrigation Engineering
        </h3>
        <p className="text-gray-600">
          Planning, design and management of irrigation and drainage systems.
        </p>
      </div>

      {/* 5 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">🌱</div>
        <h3 className="text-xl font-bold mb-3">
          Soil Conservation & Watershed Management
        </h3>
        <p className="text-gray-600">
          Conservation of soil and water resources through watershed planning.
        </p>
      </div>

      {/* 6 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">📦</div>
        <h3 className="text-xl font-bold mb-3">
          Postharvest Engineering
        </h3>
        <p className="text-gray-600">
          Harvesting, drying, storage and processing technologies.
        </p>
      </div>

      {/* 7 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">🥛</div>
        <h3 className="text-xl font-bold mb-3">
          Dairy & Food Engineering
        </h3>
        <p className="text-gray-600">
          Dairy processing, food preservation and food engineering systems.
        </p>
      </div>

      {/* 8 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">🌾</div>
        <h3 className="text-xl font-bold mb-3">
          Precision Agriculture
        </h3>
        <p className="text-gray-600">
          Smart farming technologies using sensors, drones and automation.
        </p>
      </div>

      {/* 9 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-4">❄️</div>
        <h3 className="text-xl font-bold mb-3">
          Cold Storage & Processing
        </h3>
        <p className="text-gray-600">
          Cold chain management, storage systems and agro-processing technologies.
        </p>
      </div>

    </div>

  </div>
</section>

     {/* President's Message */}
<section className="py-24 bg-gradient-to-r from-teal-50 to-green-50">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-teal-700 mb-14">
      Message from the President
    </h2>

    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

      <div className="grid md:grid-cols-3">

        {/* Photo */}
        <div className="bg-teal-700 flex items-center justify-center p-10">

          <Image
            src="/committee/dipendra.jpg"
            alt="President"
            width={280}
            height={280}
            className="rounded-2xl shadow-xl object-cover"
          />

        </div>

        {/* Message */}
        <div className="md:col-span-2 p-10 md:p-14">

          <div className="text-6xl text-teal-600 mb-4">
            "
          </div>

          <p className="text-gray-700 text-lg leading-8 mb-8">
            Welcome to the official website of the National Agricultural
            Engineering Students' Society (NAESS).

            Our mission is to empower Agricultural Engineering students
            through innovation, technical excellence, leadership,
            research and professional collaboration.

            Together, we aim to create opportunities for learning,
            practical exposure, networking and sustainable development,
            while contributing to the advancement of Agricultural
            Engineering in Nepal.
          </p>

          <div className="border-t pt-6">

            <h3 className="text-2xl font-bold text-teal-700">
              Dipendra Kumar Sah
            </h3>

            <p className="text-gray-600">
              President
            </p>

            <p className="text-gray-500 text-sm">
              National Agricultural Engineering Students' Society (NAESS)
            </p>

          </div>

        </div>

      </div>

    </div>

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
            <a href="/" className="hover:text-teal-400">
              Home
            </a>
          </li>

          <li>
            <a href="/organization" className="hover:text-teal-400">
              Organization
            </a>
          </li>

          <li>
            <a href="/team" className="hover:text-teal-400">
              Executive Team
            </a>
          </li>

          <li>
            <a href="/gallery" className="hover:text-teal-400">
              Gallery
            </a>
          </li>

          <li>
            <a href="/contact" className="hover:text-teal-400">
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

          <a
            href="https://www.facebook.com/profile.php?id=61572261099146"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:text-teal-400"
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