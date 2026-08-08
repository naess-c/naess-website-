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

export default function GalleryPage() {
  const images = [
    {
      src: "/gallery/rotary.jpg",
      title: "With Rotary Club of Dharan",
    },
    {
      src: "/gallery/plantation1.jpg",
      title: "Tree Plantation",
    },
    {
      src: "/gallery/plantation.jpg",
      title: "Tree Plantation",
    },
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
      src: "/gallery/handover5.jpg",
      title: "Handover & Oath Taking Ceremony",
    },
    {
      src: "/gallery/handover2.jpg",
      title: "Annual Report presentation ",
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
    {
      src: "/gallery/narc6.jpg",
      title: "NARC Tarahara Visit 2083",
    },
    {
      src: "/gallery/narc4.jpg",
      title: "NARC Tarahara Visit 2083",
    },
    {
      src: "/gallery/narc5.png",
      title: "NARC Tarahara Visit 2083",
    },

    {
      src: "/gallery/journal.jpg",
      title: "The Agrineer 2025 Handover to Hon. Esrail Mansuri, Minister of Agriculture and cooperatives",
    },
    {
      src: "/gallery/agrineer.jpg",
      title: "Agrineer Volume 8 Release",
    },
     {
      src: "/gallery/agrineer1.jpg",
      title: "Agrineer Volume 8 Release",
    },
     {
      src: "/gallery/agrineer3.jpg",
      title: "Agrineer Volume 8 Release",
    },
     {
      src: "/gallery/agrineer2.jpg",
      title: "Agrineer Volume 8 Release",
    },
    {
      src: "/gallery/method.jpg",
      title: "Engineering research methods training",
    },
     {
      src: "/gallery/method1.jpg",
      title: "Engineering research methods training",
    },
     {
      src: "/gallery/method2.jpg",
      title: "Engineering research methods training",
    },
    
     {
      src: "/gallery/conference.jpg",
      title: "International Conference 2026",
    },
     {
      src: "/gallery/iot.jpg",
      title: "IoT Workshop",
    },
     {
      src: "/gallery/iot1.jpg",
      title: "IoT Workshop",
    },
    {
      src: "/gallery/iot2.jpg",
      title: "IoT Workshop",
    },
    {
      src: "/gallery/iot3.jpg",
      title: "IoT Workshop",
    },
    {
      src: "/gallery/iot4.jpg",
      title: "IoT Workshop",
    },
     {
      src: "/gallery/land1.jpg",
      title: "Land Valuation Training",
    },
    {
      src: "/gallery/land2.jpg",
      title: "Land Valuation Training",
    },
    {
      src: "/gallery/land3.jpg",
      title: "Land Valuation Training",
    },
    {
      src: "/gallery/land4.jpg",
      title: "Land Valuation Training",
    },
    {
      src: "/gallery/land5.jpg",
      title: "Land Valuation Training",
    },
   
    {
      src: "/gallery/desk.jpg",
      title: "Admission Help Desk 2082",
    },
     {
      src: "/gallery/desk1.jpg",
      title: "Admission Help Desk 2082",
    },
     {
      src: "/gallery/promot.jpg",
      title: "Promoting Agricultural Engineering",
    },
    {
      src: "/gallery/promot1.jpg",
      title: "Promoting Agricultural Engineering",
    },
{
      src: "/gallery/promot2.jpg",
      title: "Promoting Agricultural Engineering",
    },
{
      src: "/gallery/promot3.jpg",
      title: "Promoting Agricultural Engineering",
    },
    {
      src: "/gallery/promt4.jpg",
      title: "Promoting Agricultural Engineering",
    },
    {
      src: "/gallery/solidworks.jpg",
      title: "SolidWorks Training",
    },
    {
      src: "/gallery/solidworks1.jpg",
      title: "SolidWorks Training",
    },
{
      src: "/gallery/solidworks2.jpg",
      title: "SolidWorks Training",
    },
{
      src: "/gallery/solidworks3.jpg",
      title: "SolidWorks Training",
    },
{
      src: "/gallery/solidworks4.jpg",
      title: "SolidWorks Training",
    },
    {
      src: "/gallery/solidworks5.jpg",
      title: "SolidWorks Training",
    },
    {
      src: "/gallery/paddy.jpg",
      title: "NARC Tarahara Visit 2082",
    },
     {
      src: "/gallery/paddy1.jpg",
      title: "NARC Tarahara Visit 2082",
    },
     {
      src: "/gallery/paddy2.jpg",
      title: "NARC Tarahara Visit 2082",
    },
     {
      src: "/gallery/paddy3.jpg",
      title: "NARC Tarahara Visit 2082",
    },
    {
      src: "/gallery/clean.jpg",
      title: "Environment Cleaning Program",
    },
    {
      src: "/gallery/new.jpg",
      title: " Handover and oath taking ceremony of 4th committee",
    },
     {
      src: "/gallery/new1.jpg",
      title: " Handover and oath taking ceremony of 4th committee",
    },
     {
      src: "/gallery/new2.jpg",
      title: " Handover and oath taking ceremony of 4th committee",
    },
     {
      src: "/gallery/new3.jpg",
      title: " Handover and oath taking ceremony of 4th committee",
    },
     {
      src: "/gallery/new4.jpg",
      title: " Handover and oath taking ceremony of 4th committee",
    },
     
     {
      src: "/gallery/new6.jpg",
      title: " Handover and oath taking ceremony of 4th committee",
    },
     {
      src: "/gallery/new7.jpg",
      title: " Handover and oath taking ceremony of 4th committee",
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
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">

          {images.map((image, index) => (
            <ScaleInCard key={index} delay={(index % 6) * 120}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="overflow-hidden">
                 <Image
  src={image.src}
  alt={image.title}
  width={600}
  height={400}
  className="w-full h-64 object-cover object-center"
/>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg">
                    {image.title}
                  </h3>
                </div>
              </div>
            </ScaleInCard>
          ))}

        </div>
      </section>
    </main>
  );
}