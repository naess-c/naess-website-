import Quiz from "../../components/Quiz";

export default function Chapter1Page() {
  
    const ruralInfrastructureQuiz = [
  {
    question: "1. The goal of rural infrastructure development is to:",
    options: ["A. Promote urbanization", "B. Improve quality of life and productivity in rural areas", "C. Build high-rise buildings", "D. Export labor"],
    correctIndex: 1,
    explanation: "Rural infrastructure focuses on improving rural livelihoods, boosting local economic productivity, and ensuring access to essential socio-economic services."
  },
  {
    question: "2. Which of the following is a source of renewable energy commonly used in rural Nepal?",
    options: ["A. Diesel", "B. Natural gas", "C. Solar energy", "D. Nuclear"],
    correctIndex: 2,
    explanation: "Solar energy is widely deployed across rural Nepal via Solar Home Systems (SHS) and solar water pumps due to abundant sunlight and lack of national grid coverage."
  },
  {
    question: "3. The main challenge in rural road construction is:",
    options: ["A. Traffic congestion", "B. Expensive vehicles", "C. Difficult terrain and lack of maintenance", "D. Pollution"],
    correctIndex: 2,
    explanation: "Rugged topography, steep slopes, landslides, and poor institutional capacity for ongoing maintenance present the primary engineering hurdles."
  },
  {
    question: "4. Biogas is produced by:",
    options: ["A. Burning firewood", "B. Anaerobic digestion of organic waste", "C. Distillation of petrol", "D. Solar energy"],
    correctIndex: 1,
    explanation: "Biogas (primarily methane and CO₂) is generated when anaerobic microorganisms break down organic materials like cow dung in the absence of oxygen."
  },
  {
    question: "5. Which one is not a part of rural energy systems?",
    options: ["A. Improved cookstoves", "B. Micro-hydro power", "C. Windmill", "D. Jet engines"],
    correctIndex: 3,
    explanation: "Jet engines are high-performance propulsion systems for aviation, whereas the other options are decentralized renewable technology choices for off-grid communities."
  },
  {
    question: "6. Rural electrification primarily aims to:",
    options: ["A. Increase electricity bill", "B. Provide internet", "C. Support basic needs, health, and education", "D. Replace solar"],
    correctIndex: 2,
    explanation: "Bringing power to rural communities unlocks lighting, medical refrigeration, educational tools, and local productive enterprise."
  },
  {
    question: "7. The main fuel used in improved cookstoves is:",
    options: ["A. Electricity", "B. Cow dung", "C. LPG", "D. Firewood"],
    correctIndex: 3,
    explanation: "Improved Cookstoves (ICS) are designed to burn solid biomass like firewood more efficiently with less harmful smoke emissions."
  },
  {
    question: "8. Which agency promotes rural energy in Nepal?",
    options: ["A. NASA", "B. Alternative Energy Promotion Centre (AEPC)", "C. Nepal Electricity Authority (NEA)", "D. World Bank"],
    correctIndex: 1,
    explanation: "AEPC is the specialized government institution under the Ministry of Energy, Water Resources and Irrigation tasked with scaling up renewable energy technologies in Nepal."
  },
  {
    question: "9. A culvert is a type of:",
    options: ["A. Power plant", "B. Small bridge allowing water flow under roads", "C. Dam", "D. Solar heater"],
    correctIndex: 1,
    explanation: "A culvert is a hydraulic structure built under a roadway or railway embankment to convey stream flow or drainage water without blocking traffic."
  },
  {
    question: "10. The common output from micro-hydro system is:",
    options: ["A. Gas", "B. Steam", "C. Electricity", "D. Firewood"],
    correctIndex: 2,
    explanation: "Micro-hydro plants convert the kinetic and potential energy of falling stream water into mechanical energy via a turbine, which drives a generator to produce electricity."
  },
  {
    question: "11. The minimum head required for micro-hydro power generation is approximately:",
    options: ["A. 0.1 m", "B. 1 m", "C. 2 m", "D. 10 m"],
    correctIndex: 2,
    explanation: "Low-head micro-hydro systems typically require a minimum operational gross head of around 2 meters to run hydraulic turbines efficiently."
  },
  {
    question: "12. Which type of road is most suitable for remote rural areas?",
    options: ["A. Expressway", "B. Gravel road", "C. National highway", "D. Flyover"],
    correctIndex: 1,
    explanation: "Gravel roads offer an economical, cost-effective, and durable unpaved surface capable of supporting low-volume agricultural and passenger transport."
  },
  {
    question: "13. One major advantage of solar home systems in rural areas is:",
    options: ["A. High cost", "B. No maintenance", "C. Grid dependence", "D. Independence from central grid"],
    correctIndex: 3,
    explanation: "Solar Home Systems operate off-grid, providing reliable distributed power to geographically isolated households far from main power grids."
  },
  {
    question: "14. Which of the following is not a non-conventional energy source?",
    options: ["A. Wind", "B. Solar", "C. Coal", "D. Biogas"],
    correctIndex: 2,
    explanation: "Coal is a finite, conventional fossil fuel, whereas wind, solar, and biogas are categorized as non-conventional (renewable) resources."
  },
  {
    question: "15. A check dam in rural areas is used for:",
    options: ["A. Water pollution", "B. Stopping animal movement", "C. Storing and recharging groundwater", "D. Electricity generation"],
    correctIndex: 2,
    explanation: "Check dams slow down run-off velocity, reduce soil erosion, retain surface water, and allow water to percolate into aquifers to recharge groundwater levels."
  },
  {
    question: "16. One unit of electricity equals:",
    options: ["A. 1 volt", "B. 1 ampere", "C. 1 kilowatt-hour", "D. 1 joule"],
    correctIndex: 2,
    explanation: "In utility billing, one 'unit' of electrical energy consumption is standardly defined as 1 kilowatt-hour (1 kWh = 3.6 MJ)."
  },
  {
    question: "17. The main use of rural water tanks is:",
    options: ["A. Collecting wastewater", "B. Water storage for drinking and irrigation", "C. Holding fuel", "D. Electricity storage"],
    correctIndex: 1,
    explanation: "Storage tanks store harvested rainwater or gravity-fed spring water to buffer supply during peak demand periods for domestic and farming use."
  },
  {
    question: "18. Treadle pump is used in rural areas for:",
    options: ["A. Fuel supply", "B. Lifting water manually", "C. Generating heat", "D. Cooking"],
    correctIndex: 1,
    explanation: "A treadle pump is a human-powered suction pump that uses a stepping movement to lift shallow groundwater for smallholder crop irrigation."
  },
  {
    question: "19. Gabion wall is constructed for:",
    options: ["A. Fencing", "B. Soil stabilization and erosion control", "C. Decoration", "D. Storing rainwater"],
    correctIndex: 1,
    explanation: "Gabions are wire mesh cages packed with rock that form flexible, permeable retaining walls to stabilize embankments and prevent soil erosion along hill slopes."
  },
  {
    question: "20. Improved sanitation infrastructure includes:",
    options: ["A. Open defecation", "B. Pit latrine", "C. Flush toilet", "D. B and C"],
    correctIndex: 3,
    explanation: "Sanitation infrastructure upgrades involve replacing open defecation with contained, hygienic options such as ventilated improved pit latrines and pour-flush toilets."
  },
  {
    question: "21. Which energy source is most abundant in Nepal?",
    options: ["A. Petroleum", "B. Nuclear", "C. Hydro", "D. Coal"],
    correctIndex: 2,
    explanation: "Nepal's mountainous terrain and abundant perennial river networks give it a vast commercially viable hydropower potential estimated at over 42,000 MW."
  },
  {
    question: "22. Rural bridges are often made from:",
    options: ["A. Glass", "B. Bamboo", "C. RCC and steel", "D. Brick"],
    correctIndex: 2,
    explanation: "Reinforced Cement Concrete (RCC) and structural steel provide the high tensile and compressive strength necessary for durable motorable and trail bridges."
  },
  {
    question: "23. Which of the following is used to transport milk in rural cold chains?",
    options: ["A. Wooden box", "B. Plastic bucket", "C. Insulated container", "D. Cloth bag"],
    correctIndex: 2,
    explanation: "Insulated containers limit heat transfer from ambient air, helping preserve raw milk below critical microbial spoilage temperatures during transport."
  },
  {
    question: "24. The function of a village cooperative is:",
    options: ["A. Increase taxes", "B. Provide loans, storage, and market access", "C. Close shops", "D. Export goods"],
    correctIndex: 1,
    explanation: "Agricultural and credit cooperatives pool community resources to supply micro-loans, shared cold storage, bulk inputs, and collective bargaining power."
  },
  {
    question: "25. Key feature of ropeway transport in hills:",
    options: ["A. High fuel usage", "B. Requires wide roads", "C. Uses gravity or motor to move goods", "D. Only for urban areas"],
    correctIndex: 2,
    explanation: "Aerial ropeways bypass difficult mountain terrain by suspending carriers on overhead cables driven by electric motors, combustion engines, or gravity."
  },
  {
    question: "26. Water hammer in pipelines can be prevented by:",
    options: ["A. Increasing pipe diameter", "B. Installing air valves and surge tanks", "C. Closing valves quickly", "D. Decreasing pump height"],
    correctIndex: 1,
    explanation: "Surge tanks and air pressure release valves absorb hydraulic pressure shocks caused by sudden changes in liquid momentum, preventing pipe rupture."
  },
  {
    question: "27. Common household energy use in rural areas:",
    options: ["A. Kerosene", "B. Biogas and firewood", "C. Petrol", "D. Natural gas"],
    correctIndex: 1,
    explanation: "Solid biomass (firewood) combined with anaerobic household biogas plants form the primary thermal energy base for cooking and heating in agrarian homes."
  },
  {
    question: "28. Community forestry supports:",
    options: ["A. Logging", "B. Biodiversity, firewood, and soil conservation", "C. Real estate", "D. Mining"],
    correctIndex: 1,
    explanation: "Decentralized forest management empowers local user groups to sustainably harvest biomass while restoring ecosystems, reducing erosion, and protecting wildlife habitats."
  },
  {
    question: "29. A small earth dam is primarily used for:",
    options: ["A. Road construction", "B. Erosion", "C. Water storage and recharge", "D. Cooking"],
    correctIndex: 2,
    explanation: "Earthen dams impound local surface runoff during monsoon periods, creating small reservoirs for livestock, micro-irrigation, and shallow groundwater recharge."
  },
  {
    question: "30. Rainwater harvesting improves:",
    options: ["A. Water availability", "B. Electricity generation", "C. Soil compaction", "D. Pest control"],
    correctIndex: 0,
    explanation: "Capturing and storing rooftop or surface run-off directly increases freshwater availability during dry spells and reduces pressure on over-extracted aquifers."
  },
  {
    question: "31. Which tool is used to measure solar radiation?",
    options: ["A. Thermometer", "B. Pyranometer", "C. Altimeter", "D. Lux meter"],
    correctIndex: 1,
    explanation: "A pyranometer measures hemispherical solar irradiance (in $W/m^2$) across a wide spectral range on a flat surface."
  },
  {
    question: "32. Pedestrian-friendly infrastructure includes:",
    options: ["A. Footpath", "B. Overhead bridges", "C. Zebra crossings", "D. All of the above"],
    correctIndex: 3,
    explanation: "Dedicated walkways, safe signalized or marked street crossings, and pedestrian bridges collectively protect non-motorized road users."
  },
  {
    question: "33. Micro-irrigation includes:",
    options: ["A. Canal", "B. Surface irrigation", "C. Drip and sprinkler systems", "D. Tube well"],
    correctIndex: 2,
    explanation: "Drip emitters and localized sprinklers apply water directly near plant root zones at low flow rates, maximizing water-use efficiency."
  },
  {
    question: "34. Most common reason for failure of rural projects:",
    options: ["A. High budget", "B. Lack of local participation and maintenance", "C. Too many staff", "D. Electricity outage"],
    correctIndex: 1,
    explanation: "Top-down planning without community ownership or long-term operational budget allocation typically leads to asset breakdown and eventual abandonment."
  },
  {
    question: "35. Eco-san toilets are designed for:",
    options: ["A. Hotels", "B. Urban cities", "C. Dry sanitation and composting human waste", "D. Fuel conversion"],
    correctIndex: 2,
    explanation: "Ecological Sanitation (Eco-San) uses urine-diverting dry toilets to safely separate and decompose human excreta into pathogen-free nutrient-rich fertilizer."
  },
  {
    question: "36. The efficiency of solar PV systems decreases with:",
    options: ["A. Cold temperature", "B. Rain", "C. Dust and high heat", "D. Wind"],
    correctIndex: 2,
    explanation: "Dust soiling physically blocks light irradiance, while high cell operating temperatures lower the voltage output of silicon semiconductors."
  },
  {
    question: "37. Biomass gasification converts biomass to:",
    options: ["A. Fuel wood", "B. Liquid nitrogen", "C. Producer gas", "D. Charcoal"],
    correctIndex: 2,
    explanation: "Gasification subjects organic materials to high heat in oxygen-starved conditions, turning solid fuel into a combustible mixture of $CO$ and $H_2$ called producer gas."
  },
  {
    question: "38. LED bulbs are preferred in rural electrification because:",
    options: ["A. Expensive", "B. Consume more power", "C. Energy efficient", "D. Produce heat"],
    correctIndex: 2,
    explanation: "Light Emitting Diodes convert the vast majority of electrical power into visible lumens rather than waste heat, making them optimal for low-capacity rural power grids."
  },
  {
    question: "39. Which structure is used to cross small streams in rural roads?",
    options: ["A. Tunnel", "B. Culvert", "C. Drain", "D. Pit"],
    correctIndex: 1,
    explanation: "Pipe or box culverts offer a simple, resilient engineering solution to carry low-volume stream flows under rural road embankments."
  },
  {
    question: "40. Rain shelter in rural roads helps:",
    options: ["A. Tourists", "B. Erosion", "C. Protection for waiting pedestrians", "D. None"],
    correctIndex: 2,
    explanation: "Passenger shelters along rural transit routes shield commuters and pedestrians from heavy monsoon rain and harsh solar exposure."
  },
  {
    question: "41. The head range for pico-hydro is typically:",
    options: ["A. <5 m", "B. 5–10 m", "C. 20–50 m", "D. >100 m"],
    correctIndex: 0,
    explanation: "Pico-hydro setups (generating under 5 kW) are engineered to operate efficiently on very low hydraulic drops, often under 5 meters."
  },
  {
    question: "42. RET stands for:",
    options: ["A. Rural Engineering Tool", "B. Renewable Energy Technology", "C. Road Efficiency Test", "D. Rain Energy Transmitter"],
    correctIndex: 1,
    explanation: "RET is the standard abbreviation for clean technologies (solar, micro-hydro, wind, biomass) that harness naturally replenished energy resources."
  },
  {
    question: "43. Which of the following is most affected by deforestation?",
    options: ["A. Electricity", "B. Soil erosion and water retention", "C. Infrastructure", "D. Labor market"],
    correctIndex: 1,
    explanation: "Tree roots bind soil particles together and canopy cover intercepts rain; clear-cutting leads to severe topsoil erosion, landslides, and decreased watershed holding capacity."
  },
  {
    question: "44. Which fuel type is carbon neutral?",
    options: ["A. Petrol", "B. Diesel", "C. Biomass", "D. Coal"],
    correctIndex: 2,
    explanation: "Biomass releases $CO_2$ during combustion that was recently removed from the atmosphere via photosynthesis, completing a closed short-term carbon cycle."
  },
  {
    question: "45. Rural cold chain helps to:",
    options: ["A. Freeze roads", "B. Preserve perishable items", "C. Store fuel", "D. Heat milk"],
    correctIndex: 1,
    explanation: "Refrigerated transport and localized cold storage prevent bacterial spoilage in temperature-sensitive products like vaccines, dairy, and fresh produce."
  },
  {
    question: "46. LED light’s full form is:",
    options: ["A. Light Energy Device", "B. Light Emitting Diode", "C. Linear Electric Device", "D. Luminous Emission Duct"],
    correctIndex: 1,
    explanation: "An LED is a solid-state semiconductor $p$-$n$ junction device that emits light through electroluminescence when an electric current passes through it."
  },
  {
    question: "47. Road gradient in hilly areas should be:",
    options: ["A. >15%", "B. <12%", "C. 20%", "D. 5%"],
    correctIndex: 1,
    explanation: "Standard geometric highway standards restrict steep mountain slopes to maximum ruling gradients below 10-12% to ensure vehicular safety and prevent drive axle traction loss."
  },
  {
    question: "48. Electricity distribution in rural areas is often through:",
    options: ["A. Underground cables", "B. Overhead lines", "C. Wireless", "D. None"],
    correctIndex: 1,
    explanation: "Overhead wooden, steel, or concrete power poles carrying bare/insulated conductors are drastically cheaper to install across large distances than underground conduit cables."
  },
  {
    question: "49. The unit of solar energy measurement is:",
    options: ["A. kW", "B. kWh/m²", "C. Lux", "D. dB"],
    correctIndex: 1,
    explanation: "Solar insolation accumulated on a surface over time is measured in energy density units: kilowatt-hours per square meter ($kWh/m^2$)."
  },
  {
    question: "50. Proper drainage along rural roads helps:",
    options: ["A. Erosion control and road life", "B. Tree growth", "C. Air pollution", "D. None"],
    correctIndex: 0,
    explanation: "Side drains, catch-water drains, and cross-drainage structures quickly channel water away from the roadway, preventing subgrade saturation and pavement structural failure."
  },
  {
    question: "51. Community-managed irrigation systems are called:",
    options: ["A. Large-scale irrigation", "B. Farmer-managed irrigation systems", "C. Pump-fed", "D. Government-only"],
    correctIndex: 1,
    explanation: "Farmer-Managed Irrigation Systems (FMIS) rely on grassroots water-user associations for construction, allocation, maintenance, and water governance."
  },
  {
    question: "52. Hybrid energy system uses:",
    options: ["A. Two or more energy sources", "B. Wind only", "C. Solar only", "D. Diesel only"],
    correctIndex: 0,
    explanation: "Hybrid systems combine multiple generation sources (e.g., Solar PV + Wind + Diesel generator) to maintain consistent baseline power during weather variations."
  },
  {
    question: "53. Main source of cooking energy in remote hills:",
    options: ["A. LPG", "B. Biogas", "C. Firewood", "D. Electricity"],
    correctIndex: 2,
    explanation: "Traditional biomass (firewood gathered from forests) remains the predominant energy source in remote areas where bottled gas supply chains and power grids are missing."
  },
  {
    question: "54. Importance of ICT in rural development includes:",
    options: ["A. More electricity use", "B. Online access to information and services", "C. Use of diesel", "D. Prevent rainfall"],
    correctIndex: 1,
    explanation: "Information and Communication Technology (ICT) connects rural populations to tele-health, e-governance, market prices, and remote educational platforms."
  },
  {
    question: "55. The benefit of ropeway in hills is:",
    options: ["A. Fuel economy and terrain suitability", "B. Noise", "C. Dust", "D. None"],
    correctIndex: 0,
    explanation: "Ropeways span steep ravines directly in a straight line, avoiding lengthy winding road construction while lowering total energy and transport expenditure."
  },
  {
    question: "56. Public toilets in rural settings should have:",
    options: ["A. No ventilation", "B. Basic sanitation and water supply", "C. Electric fan", "D. None"],
    correctIndex: 1,
    explanation: "Access to clean running water, proper ventilation, waste containment, and handwashing facilities form the core requirements of functional sanitation hubs."
  },
  {
    question: "57. Hydropower is considered renewable because:",
    options: ["A. Uses coal", "B. Constantly replenished by water cycle", "C. Needs generator", "D. Produces smoke"],
    correctIndex: 1,
    explanation: "The hydrologic water cycle (evaporation, precipitation, runoff) continuously refills river basins, ensuring an endless supply of fluid energy."
  },
  {
    question: "58. One kWh equals:",
    options: ["A. 3600 J", "B. 1000 J", "C. 3.6 million J", "D. 10,000 J"],
    correctIndex: 2,
    explanation: "$1 \\text{ kWh} = 1000 \\text{ W} \\times 3600 \\text{ s} = 3.6 \\times 10^6 \\text{ Joules} = 3.6 \\text{ Million Joules}$."
  },
  {
    question: "59. Proper rural drainage prevents:",
    options: ["A. Road damage", "B. Health hazards", "C. Waterlogging", "D. All of the above"],
    correctIndex: 3,
    explanation: "Effective drainage stops water pooling, prevents structural pavement softening, and eliminates stagnant breeding sites for disease vectors like mosquitoes."
  },
  {
    question: "60. Biogas slurry is used as:",
    options: ["A. Cement", "B. Fertilizer", "C. Paint", "D. Water purifier"],
    correctIndex: 1,
    explanation: "Liquid digested effluent (bio-slurry) exiting a digester is rich in nitrogen, phosphorus, and potassium, serving as an excellent organic soil fertilizer."
  },
  {
    question: "61. Wind energy in rural settings is best suited for:",
    options: ["A. Heavy industrial power", "B. Small-scale electricity generation", "C. Cooking", "D. Running diesel engines"],
    correctIndex: 1,
    explanation: "Small wind turbines produce distributed electricity to power rural lights, appliances, micro-enterprises, and localized battery charging banks."
  },
  {
    question: "62. Rope and washer pump is used to:",
    options: ["A. Pull load", "B. Filter water", "C. Lift water manually", "D. Measure water"],
    correctIndex: 2,
    explanation: "This low-cost mechanical pump features washers strung on a continuous loop of rope through a pipe, pulling groundwater up from shallow wells when cranked by hand."
  },
  {
    question: "63. Which is not a function of rural market infrastructure?",
    options: ["A. Storage", "B. Cold chain", "C. TV broadcasting", "D. Transport access"],
    correctIndex: 2,
    explanation: "Television broadcasting is a media transmission activity, unlike physical logistics infrastructure like storage units, road access, and cold chains."
  },
  {
    question: "64. Village roads should have minimum width of:",
    options: ["A. 1 m", "B. 3 m", "C. 4 m", "D. 5 m"],
    correctIndex: 1,
    explanation: "A single-lane rural access road requires a minimum formation roadway width of roughly 3.0 to 3.75 meters to accommodate farm vehicles and light trucks safely."
  },
  {
    question: "65. Which is a greenhouse gas produced from biomass burning?",
    options: ["A. Oxygen", "B. CO₂", "C. Nitrogen", "D. Argon"],
    correctIndex: 1,
    explanation: "Carbon dioxide ($CO_2$) is the chief gaseous product of complete hydrocarbon/biomass combustion."
  },
  {
    question: "66. The major limiting factor for rural electrification is:",
    options: ["A. High demand", "B. High per unit cost and grid inaccessibility", "C. Strong voltage", "D. Wide roads"],
    correctIndex: 1,
    explanation: "Sparse rural populations dispersed across challenging topography create exorbitant capital expenses per household connected via traditional grid extensions."
  },
  {
    question: "67. Institutional structure of AEPC is under:",
    options: ["A. Ministry of Home Affairs", "B. Ministry of Forest", "C. Ministry of Energy, Water Resources and Irrigation", "D. Ministry of Industry"],
    correctIndex: 2,
    explanation: "The Alternative Energy Promotion Centre (AEPC) functions as an autonomous executive organization under Nepal's Ministry of Energy, Water Resources and Irrigation."
  },
  {
    question: "68. Biochar is produced by:",
    options: ["A. Burning gas", "B. High-temperature pyrolysis of biomass", "C. Aerobic fermentation", "D. Combustion of diesel"],
    correctIndex: 1,
    explanation: "Pyrolysis decomposes organic material (biomass) at elevated temperatures in an oxygen-deprived environment to yield solid, carbon-rich biochar."
  },
  {
    question: "69. Mini-grid systems serve:",
    options: ["A. One household", "B. A single light", "C. Cluster of rural households or institutions", "D. Industry"],
    correctIndex: 2,
    explanation: "A mini-grid links local generation plants (10 kW to 1 MW) to an isolated distribution network powering a village cluster or rural marketplace."
  },
  {
    question: "70. Which power source has the shortest payback time in rural Nepal?",
    options: ["A. Diesel generator", "B. Biogas", "C. Solar", "D. Grid extension"],
    correctIndex: 2,
    explanation: "Rapid reductions in photovoltaic panel manufacturing costs give small solar systems a short capital payback period relative to expensive imported diesel and long grid extensions."
  },
  {
    question: "71. An example of surface water harvesting structure:",
    options: ["A. Submersible pump", "B. Shallow well", "C. Check dam", "D. Water filter"],
    correctIndex: 2,
    explanation: "Check dams are engineered masonry/earth barriers placed across seasonal streams to intercept and store surface runoff."
  },
  {
    question: "72. Community toilet facilities improve:",
    options: ["A. Smell", "B. Hygiene, health, and dignity", "C. Crowd", "D. Disease spread"],
    correctIndex: 1,
    explanation: "Shared public latrines stop open defecation, curbing fecal-oral disease transmission and providing secure, dignified sanitation options."
  },
  {
    question: "73. Rural roads with bituminous surface are known as:",
    options: ["A. Earthen roads", "B. Gravel roads", "C. Blacktopped roads", "D. Concrete roads"],
    correctIndex: 2,
    explanation: "Applying asphalt/bitumen liquid binder over aggregated stone layers creates a waterproof, paved 'blacktopped' wearing surface."
  },
  {
    question: "74. The component in a solar PV system that stores energy:",
    options: ["A. Panel", "B. Inverter", "C. Battery", "D. Diode"],
    correctIndex: 2,
    explanation: "Deep-cycle solar storage batteries store direct current ($DC$) power chemically during daylight hours to supply energy at night or on cloudy days."
  },
  {
    question: "75. Which one is not a component of the cold chain?",
    options: ["A. Refrigerator", "B. Cold storage", "C. Pasteurizer", "D. Insulated vehicle"],
    correctIndex: 2,
    explanation: "A pasteurizer thermalizes milk to eliminate pathogens, whereas cold chains focus on maintaining low temperatures during storage and transportation."
  },
  {
    question: "76. Use of bamboo in rural construction is encouraged because:",
    options: ["A. Cheap and renewable", "B. Heavy", "C. Brittle", "D. Toxic"],
    correctIndex: 0,
    explanation: "Bamboo grows rapidly, exhibits high tensile strength along its fibers, and serves as a sustainable, low-cost structural timber alternative."
  },
  {
    question: "77. LPG cylinder weight (full) is around:",
    options: ["A. 5 kg", "B. 15 kg", "C. 30 kg", "D. 50 kg"],
    correctIndex: 2,
    explanation: "Standard household Liquefied Petroleum Gas (LPG) cylinders contain 14.2 kg of net gas and have a tare steel weight of ~15 kg, bringing the total gross weight to ~30 kg."
  },
  {
    question: "78. Energy audit helps to:",
    options: ["A. Waste more energy", "B. Increase cost", "C. Identify energy-saving opportunities", "D. Produce heat"],
    correctIndex: 2,
    explanation: "An energy audit quantitatively inspects energy flows in a building or plant to spot efficiency losses and recommend conservation measures."
  },
  {
    question: "79. A parabolic solar cooker works by:",
    options: ["A. Radiation", "B. Reflection and concentration of sunlight", "C. Heat pump", "D. Evaporation"],
    correctIndex: 1,
    explanation: "Parabolic mirrors reflect incoming parallel solar rays to a single focal point, generating high temperatures for boiling and cooking food."
  },
  {
    question: "80. Diesel consumption is reduced by switching to:",
    options: ["A. Biogas", "B. LPG", "C. Grid power", "D. All of the above"],
    correctIndex: 3,
    explanation: "Replacing diesel generators and mechanical drives with grid electricity, liquefied petroleum gas, or renewable biogas lowers overall liquid fossil fuel reliance."
  },
  {
    question: "81. Which is used for wind energy potential assessment?",
    options: ["A. Hygrometer", "B. Anemometer", "C. Barometer", "D. Thermometer"],
    correctIndex: 1,
    explanation: "An anemometer measures wind velocity, which is critical for estimating available kinetic wind power ($P = \\frac{1}{2} \\rho A v^3$)."
  },
  {
    question: "82. Rural telecommunication infrastructure supports:",
    options: ["A. E-commerce", "B. E-health", "C. E-governance", "D. All of the above"],
    correctIndex: 3,
    explanation: "Broadband networks allow rural residents to access digital markets, remote medical consultations, and online public administrative channels."
  },
  {
    question: "83. The maximum distance a gravity flow irrigation can run effectively is limited by:",
    options: ["A. Temperature", "B. Soil", "C. Slope and friction", "D. pH"],
    correctIndex: 2,
    explanation: "Hydraulic pressure drops caused by internal pipe wall friction ($h_f$) must be balanced by available ground elevation drop (slope) to maintain flow."
  },
  {
    question: "84. Farm roads are critical for:",
    options: ["A. Land ownership", "B. Waste disposal", "C. Produce transport and rural access", "D. Mining"],
    correctIndex: 2,
    explanation: "Agricultural access roads enable farmers to transport harvested crops to regional market hubs efficiently and minimize post-harvest damage."
  },
  {
    question: "85. Major drawback of firewood as energy source:",
    options: ["A. Easy to store", "B. Renewable", "C. Causes indoor pollution", "D. High combustion efficiency"],
    correctIndex: 2,
    explanation: "Incomplete combustion of solid firewood inside poorly ventilated kitchens produces dangerous indoor air pollutants like carbon monoxide and fine particulate matter ($PM_{2.5}$)."
  },
  {
    question: "86. Portable solar lights help rural households by:",
    options: ["A. Increasing carbon footprint", "B. Saving fuel cost and providing lighting", "C. Reducing sunlight", "D. Heating water"],
    correctIndex: 1,
    explanation: "Small solar lanterns eliminate household spending on expensive, dirty kerosene while supplying clean lighting for study and domestic tasks."
  },
  {
    question: "87. Rainwater recharge is most effective through:",
    options: ["A. Roof runoff", "B. Surface evaporation", "C. Canals", "D. Rivers"],
    correctIndex: 0,
    explanation: "Collecting clean precipitation from impervious rooftops bypasses surface soil contamination and provides direct intake water for recharge pits and storage tanks."
  },
  {
    question: "88. The process of drying agricultural produce using solar energy is called:",
    options: ["A. Smoking", "B. Dehydration", "C. Solar drying", "D. Blanching"],
    correctIndex: 2,
    explanation: "Solar drying uses direct or indirect solar radiation to evaporate moisture from crops, extending shelf life without consuming fossil fuels."
  },
  {
    question: "89. Biofuel is obtained from:",
    options: ["A. Plastic", "B. Fossil fuel", "C. Organic matter", "D. Heavy metals"],
    correctIndex: 2,
    explanation: "Biofuels (such as biodiesel and bioethanol) are synthesized from biological feedstock like oilseeds, sugarcane, and organic waste."
  },
  {
    question: "90. ICT tools used for rural weather forecasting include:",
    options: ["A. Internet", "B. Mobile apps", "C. FM radio", "D. All of the above"],
    correctIndex: 3,
    explanation: "Digital networks, cellular push notifications, and local radio stations deliver real-time weather advisories to farming communities."
  },
  {
    question: "91. Rural community infrastructure includes:",
    options: ["A. Drinking water supply", "B. Roads", "C. Schools and health posts", "D. All of the above"],
    correctIndex: 3,
    explanation: "Community infrastructure encompasses physical networks (roads, water taps) alongside public social facilities (clinics, learning centers)."
  },
  {
    question: "92. Proper slope for drainage canals is:",
    options: ["A. 10%", "B. 5%", "C. 1–2%", "D. Flat"],
    correctIndex: 2,
    explanation: "A gentle longitudinal slope of 1% to 2% ensures self-cleansing water flow velocities without causing high-velocity scouring along unlined canal channels."
  },
  {
    question: "93. The most suitable location for wind turbines is:",
    options: ["A. Valley bottom", "B. Dense forest", "C. Open hills and ridges", "D. Closed room"],
    correctIndex: 2,
    explanation: "Exposed high mountain ridges and unobstructed open hills experience higher, smoother wind speeds with minimal ground-level surface turbulence."
  },
  {
    question: "94. Primary users of ropeways in rural hills:",
    options: ["A. Urban offices", "B. Military", "C. Farmers and local communities", "D. Tourists only"],
    correctIndex: 2,
    explanation: "Gravity and cargo ropeways serve isolated mountain villagers by transporting cash crops, firewood, construction materials, and goods across valleys."
  },
  {
    question: "95. Energy ladder theory explains:",
    options: ["A. Heating system", "B. Climbing steps", "C. Shift from traditional to modern energy use", "D. Water pumping"],
    correctIndex: 2,
    explanation: "The Energy Ladder model describes how households move up from solid biomass (dung, wood) to cleaner, more efficient fuels (LPG, electricity) as socio-economic status rises."
  },
  {
    question: "96. Cost-effective alternative for RCC culverts in remote areas:",
    options: ["A. Stone masonry", "B. Wooden bridge", "C. Bamboo pipes", "D. Tarpaulin"],
    correctIndex: 0,
    explanation: "Dressed stone masonry uses locally abundant rocks and cement mortar, removing the need to haul expensive reinforced concrete culverts to remote road sites."
  },
  {
    question: "97. LED solar streetlight includes:",
    options: ["A. Solar panel, LED, battery", "B. Petrol lamp", "C. Neon tube", "D. Candle"],
    correctIndex: 0,
    explanation: "Standalone solar streetlights integrate a PV panel, energy-dense storage battery, charge controller, and efficient LED luminaire into one unit."
  },
  {
    question: "98. Gravity flow piped water systems do not require:",
    options: ["A. Storage tank", "B. Pump", "C. Pipe", "D. Tap"],
    correctIndex: 1,
    explanation: "Gravity systems utilize natural elevation drops to move water downstream through pipes under hydrostatic head without external motor pumps."
  },
  {
    question: "99. Water quality for drinking is tested by:",
    options: ["A. Tasting", "B. Turbidity and microbial tests", "C. Color check only", "D. Touch"],
    correctIndex: 1,
    explanation: "Standard potability evaluations require laboratory tests to quantify suspended particles (turbidity) and detect bacterial indicators like *E. coli*."
  },
  {
    question: "100. Milk conductivity increases with:",
    options: ["A. Protein", "B. Sugar", "C. Mastitis infection", "D. Heat"],
    correctIndex: 2,
    explanation: "Mastitis breaks down cellular junctions in the udder, increasing sodium ($\text{Na}^+$) and chloride ($\text{Cl}^-$) concentrations, which elevates electrical conductivity."
  }

  ];

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-6 pb-32">
    <h1 className="text-2xl md:text-3xl font-bold text-center text-teal-700 mb-1">
        Rural Infrastructure and Energy for rural Development
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Answer all questions to see instant feedback and explanations.
      </p>

      <Quiz chapterTitle="Chapter 9" questions={ruralInfrastructureQuiz} />
    </main>
  );
}