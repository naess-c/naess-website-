export default function CareerPage() {
  const government = [
    "Department of Water Resources and Irrigation (DWRI)",
    "Prime Minister Agriculture Modernization Project (PMAMP)",
    "Agriculture Knowledge Center (AKC)",
    "Nepal Agricultural Research Council (NARC)",
    "Ministry of Agriculture and Livestock Development",
    "Alternative Energy Promotion Centre (AEPC)",
    "Ministry of Local Government and Rural Development",
    "Department of Forests and Soil Conservation",
    "Department of Hydrology and Meteorology (DHM)",
    "Center for Agriculture Infrastructure Development and Mechanization Promotion (CAIDMP)",
  ];

  const ngo = [
    "Food and Agriculture Organization (FAO)",
    "International Centre for Integrated Mountain Development (ICIMOD)",
    "United Nations Development Programme (UNDP)",
    "Private Agro-tech Companies",
    "Helvetas Nepal",
    "Winrock International",
    "CIMMYT",
    "OXFAM",
    "World Food Programme (WFP)",
    "USAID Projects",
    "SAARC Agriculture Centre",
    "Sustainable Agriculture Development Program Nepal (SADP-Nepal)",
    "Center for Environmental and Agricultural Policy Research, Extension and Development (CEAPRED)",
    "Forum for Rural Welfare and Agricultural Reform for Development (FORWARD Nepal)",
    "SAHAS Nepal",
    "And Many More...",
  ];

  const privateSector = [
    "Agricultural Machinery Companies",
    "Irrigation Equipment Companies",
    "Renewable Energy Industries",
    "Solar & Biogas Companies",
    "Food Processing Industries",
    "Cold Storage & Dairy Industries",
    "Agricultural Consultancy Firms",
    "GIS & Drone Mapping Companies",
    "Precision Agriculture Startups",
    "Agribusiness Enterprises",
    "Agri-Tech Innovation Companies",
    "Seed Industries",
    "Fertilizer Industries",
    "Agricultural Equipment Import Companies",
    "Agricultural Construction Firms",
    "Smart Farming Technology Companies",
  ];

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-green-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-4">
            Working Areas of Agricultural Engineers
          </h1>

          <p className="text-xl text-teal-100 max-w-4xl mx-auto">
            Agricultural Engineers play a vital role in mechanization,
            irrigation, renewable energy, food processing, research,
            sustainable agriculture and rural development.
          </p>

        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">

        <p className="text-gray-600 text-lg leading-8">
          Agricultural Engineering is a multidisciplinary profession that
          integrates engineering principles with agricultural sciences.
          Graduates can work in government organizations, development
          agencies, NGOs, INGOs, private industries, research institutions
          and entrepreneurial ventures.
        </p>

      </section>

      {/* Government Sector */}
      <section className="max-w-7xl mx-auto px-6 py-8">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-teal-700 mb-8">
            🏛 Government Sector
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            {government.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-4 border-l-4 border-teal-600"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* NGO & INGO Sector */}
      <section className="max-w-7xl mx-auto px-6 py-8">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-teal-700 mb-8">
            🌍 NGO & INGO Sector
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            {ngo.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-4 border-l-4 border-green-600"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Private Sector */}
      <section className="max-w-7xl mx-auto px-6 py-8 pb-20">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-teal-700 mb-8">
            🚜 Private Sector & Entrepreneurship
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            {privateSector.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-4 border-l-4 border-orange-500"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}