"use client";

import { useState } from "react";

export default function NECPage() {
  const [openChapter, setOpenChapter] = useState<number | null>(null);

  const chapters = [
    {
      title: "Basic Civil Engineering",
      topics: [
        "Engineering Materials",
        "Standards and Tests of Construction Materials",
        "Building Technology",
        "Geometric Properties of Sections",
        "Surveying and Levelling",
        "Estimating, Costing and Valuation",
      ],
    },
    {
      title: "Soil Mechanics and Foundation Engineering",
      topics: [
        "Soil Properties and Laboratory Tests",
        "Stresses on Soil and Seepage",
        "Shear Strength and Stability of Slopes",
        "Soil Exploration and Retaining Structures",
        "Fundamentals of Foundation",
        "Bearing Capacity and Settlement",
      ],
    },
    {
      title: "Basic Water Resources Engineering",
      topics: [
        "Fluid Properties",
        "Hydrostatics",
        "Hydro-Kinematics and Hydro-Dynamics",
        "Pipe Flow",
        "Open Channel Flow",
        "Hydrology",
      ],
    },
    {
      title: "Irrigation, Drainage and Groundwater Development",
      topics: [
        "Water Demand Estimation",
        "Canal and Diversion Headworks Design",
        "River Training Works",
        "Regulating and Cross Drainage Structures",
        "Irrigation System Management",
        "Groundwater Development",
      ],
    },
    {
      title: "Farm Power, Machine and Machinery",
      topics: [
        "Farm Power Sources",
        "Engine Systems",
        "Farm Machinery",
        "Farm Machines and Equipment",
        "Tractor Systems and Control",
        "Machine Design",
      ],
    },
    {
      title: "Design of Farm Structures",
      topics: [
        "RCC Structures",
        "Farm Structures",
        "Design of Farm Structures",
        "Farm Building Elements",
        "Steel Structures",
        "Timber and Masonry Structures",
      ],
    },
    {
      title: "Crop, Soil and Watershed Management",
      topics: [
        "Crop Science",
        "Soil Science",
        "Measurement of Soil Parameters",
        "Soil Conservation",
        "Water Induced Disasters",
        "Watershed Management",
      ],
    },
    {
      title: "Dairy and Food Engineering",
      topics: [
        "Refrigeration and Cold Storage",
        "Bio-Materials",
        "Post Harvest Methods",
        "Post Harvest Equipment",
        "Dairy Engineering",
        "Food Engineering",
      ],
    },
    {
      title: "Rural Infrastructure and Energy for Rural Development",
      topics: [
        "Renewable Energy and Biomass",
        "Wind and Hydroelectric Systems",
        "Rural Roads and Bridges",
        "Water Supply and Sanitation",
        "Rural Development and Extension",
        "Climate Change and Adaptation",
      ],
    },
    {
      title: "Project Planning, Design and Implementation",
      topics: [
        "Engineering Drawings",
        "Engineering Economics",
        "Project Planning and Scheduling",
        "Project Management",
        "Engineering Professional Practice",
        "Nepal Engineering Council Acts and Regulations",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
        

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-green-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-4">
            NEC License Syllabus
          </h1>

          <p className="text-xl text-teal-100">
            Agricultural Engineering Registration Examination
          </p>

        </div>
      </section>
      {/* Download Syllabus */}
<section className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">

  <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

    <div className="text-6xl mb-4">
      📘
    </div>

    <h2 className="text-3xl font-bold text-teal-700 mb-3">
      Complete NEC License Syllabus
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-6">
      Download the official Agricultural Engineering Registration
      Examination syllabus issued for NEC License preparation.
    </p>

    <a
  href="https://drive.google.com/file/d/1OAcyXNCjXDPETVr7BcpPWHvCNaRhs-1N/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-700 to-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
>
  📥 Download Complete Syllabus
</a>

  </div>

</section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">

        <p className="text-gray-600 text-lg leading-8">
          The NEC Agricultural Engineering License Examination consists
          of engineering fundamentals, applied agricultural engineering,
          farm machinery, irrigation, structures, food engineering,
          renewable energy, project planning and professional practice.
        </p>

      </section>

      {/* Chapters */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="space-y-4">

          {chapters.map((chapter, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpenChapter(
                    openChapter === index ? null : index
                  )
                }
                className="w-full text-left p-6 flex justify-between items-center"
              >
                <h2 className="text-xl font-bold text-teal-700">
                  Chapter {index + 1}: {chapter.title}
                </h2>

                <span className="text-2xl text-teal-700">
                  {openChapter === index ? "−" : "+"}
                </span>
              </button>

              {openChapter === index && (
                <div className="px-6 pb-6">

                  <ul className="space-y-2 text-gray-700">

                    {chapter.topics.map((topic, i) => (
                      <li key={i}>
                        • {topic}
                      </li>
                    ))}

                  </ul>

                </div>
              )}

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}