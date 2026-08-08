import Quiz from "../../components/Quiz";

export default function Chapter1Page() {
  const questions = [
   
  {
    question: "1. The main objective of soil conservation is to:",
    options: ["A. Increase soil erosion", "B. Improve landscape beauty", "C. Maintain soil fertility and reduce erosion", "D. Remove topsoil"],
    correctIndex: 2,
    explanation: "Soil conservation focuses on preserving the topsoil layer, maintaining essential nutrient levels for crop growth, and mitigating degradation caused by water or wind erosion."
  },
  {
    question: "2. Watershed is defined as:",
    options: ["A. A water source", "B. A drainage divide", "C. An area draining into a common outlet", "D. A rainwater harvesting tank"],
    correctIndex: 2,
    explanation: "A watershed is a geo-hydrological unit where all surface water from precipitation drains into a single body of water, such as a stream, river, lake, or reservoir."
  },
  {
    question: "3. Which factor most affects soil erosion?",
    options: ["A. Wind speed", "B. Vegetative cover", "C. Soil color", "D. Soil pH"],
    correctIndex: 1,
    explanation: "Vegetative cover plays the most critical role in controlling soil erosion by intercepting raindrop impact, enhancing infiltration, and binding soil particles together with roots."
  },
  {
    question: "4. Cover crops are used to:",
    options: ["A. Increase sunlight", "B. Prevent erosion and improve soil health", "C. Block drainage", "D. Increase evaporation"],
    correctIndex: 1,
    explanation: "Cover crops are planted during off-seasons to protect bare soil from water/wind detachment, add organic matter, suppress weeds, and retain soil moisture."
  },
  {
    question: "5. A contour bund is constructed:",
    options: ["A. Along slope", "B. Across slope", "C. On flat land", "D. Around lakes"],
    correctIndex: 1,
    explanation: "Contour bunds are earthen embankments constructed along lines of equal elevation (across the slope) to break the flow of runoff and reduce soil loss."
  },
  {
    question: "6. The pH range suitable for most crops is:",
    options: ["A. 3.5–4.5", "B. 5.5–7.5", "C. 7.5–9.0", "D. >9.5"],
    correctIndex: 1,
    explanation: "A slightly acidic to neutral pH range (5.5 to 7.5) provides optimal availability of essential plant nutrients and supports healthy soil microbial activity."
  },
  {
    question: "7. The main nutrient required for leaf development is:",
    options: ["A. Phosphorus", "B. Potassium", "C. Nitrogen", "D. Calcium"],
    correctIndex: 2,
    explanation: "Nitrogen is a key component of chlorophyll and amino acids, making it vital for vegetative growth, biomass production, and foliage development."
  },
  {
    question: "8. Which structure is used to control gully erosion?",
    options: ["A. Retaining wall", "B. Drop structure", "C. Farm pond", "D. Diversion ditch"],
    correctIndex: 1,
    explanation: "Drop structures stabilize gully beds by stepping down the gradient of flowing water, dissipating kinetic energy, and preventing further channel downcutting."
  },
  {
    question: "9. Mulching helps in:",
    options: ["A. Increasing weed growth", "B. Soil compaction", "C. Moisture retention and weed suppression", "D. Making soil saline"],
    correctIndex: 2,
    explanation: "Covering the soil surface with organic or synthetic mulch shades the soil to block weed germination and significantly reduces water evaporation."
  },
  {
    question: "10. The ideal time for soil sampling is:",
    options: ["A. During rainfall", "B. Immediately after fertilization", "C. After harvesting", "D. During irrigation"],
    correctIndex: 2,
    explanation: "Sampling after harvest provides an accurate representation of residual soil fertility before the next cropping season without interference from freshly applied fertilizers."
  },
  {
    question: "11. The main cause of salinity in soil is:",
    options: ["A. Excess nitrogen", "B. Excess rainfall", "C. Poor drainage and high evaporation", "D. High pH"],
    correctIndex: 2,
    explanation: "In arid/semi-arid regions, inadequate drainage allows water tables to rise, bringing dissolved salts to the surface where intense evaporation leaves them behind."
  },
  {
    question: "12. Which of the following improves soil structure?",
    options: ["A. Urea", "B. Organic matter", "C. Rock phosphate", "D. Lime"],
    correctIndex: 1,
    explanation: "Organic matter acts as a binding agent that aggregates individual sand, silt, and clay particles into stable soil crumbs, enhancing porosity and aeration."
  },
  {
    question: "13. A well-managed watershed increases:",
    options: ["A. Erosion", "B. Runoff", "C. Infiltration", "D. Salinity"],
    correctIndex: 2,
    explanation: "Proper watershed management practices slow surface water movement, allowing more rainfall to soak into the soil profile and recharge groundwater aquifers."
  },
  {
    question: "14. Which method is best for checking wind erosion?",
    options: ["A. Strip cropping", "B. Ridge planting", "C. Cover crop", "D. Windbreaks or shelterbelts"],
    correctIndex: 3,
    explanation: "Shelterbelts (rows of trees/shrubs planted perpendicular to prevailing winds) reduce wind velocity near the ground surface, drastically cutting down wind erosion."
  },
  {
    question: "15. Universal Soil Loss Equation estimates:",
    options: ["A. Groundwater recharge", "B. Soil fertility", "C. Soil erosion rate", "D. Water holding capacity"],
    correctIndex: 2,
    explanation: "The Universal Soil Loss Equation (USLE: $A = R \\times K \\times L \\times S \\times C \\times P$) predicts long-term average annual soil loss caused by sheet and rill erosion."
  },
  {
    question: "16. Which crop is best suited for dryland farming?",
    options: ["A. Rice", "B. Sugarcane", "C. Maize", "D. Sorghum"],
    correctIndex: 3,
    explanation: "Sorghum possesses extensive root systems and efficient osmotic adjustment mechanisms, allowing it to yield reliably under water-stressed dryland conditions."
  },
  {
    question: "17. Infiltration is defined as:",
    options: ["A. Water movement in rivers", "B. Water movement below root zone", "C. Water entry into soil surface", "D. Water loss by evaporation"],
    correctIndex: 2,
    explanation: "Infiltration specifically refers to the initial downward entry of water from the land surface into the soil matrix."
  },
  {
    question: "18. Bench terracing is recommended for:",
    options: ["A. Flat areas", "B. Gentle slopes", "C. Steep slopes", "D. Forests"],
    correctIndex: 2,
    explanation: "Bench terracing converts steep sloped land (typically 16% to 33% gradient) into a series of level steps to allow safe agricultural cultivation."
  },
  {
    question: "19. Soil organic matter increases:",
    options: ["A. Soil erosion", "B. Bulk density", "C. Water holding capacity", "D. Soil pH"],
    correctIndex: 2,
    explanation: "Organic matter functions like a sponge, increasing total soil porosity and holding multiple times its own weight in plant-available water."
  },
  {
    question: "20. Green manure crop is mainly used to:",
    options: ["A. Feed cattle", "B. Improve soil fertility", "C. Increase erosion", "D. Reduce runoff"],
    correctIndex: 1,
    explanation: "Green manure crops are grown and plowed directly into the soil while still green to enrich organic matter content and fix atmospheric nitrogen."
  },
  {
    question: "21. Contour farming involves:",
    options: ["A. Ploughing up and down the slope", "B. Ploughing across the slope", "C. Flat land tillage", "D. Deep ploughing"],
    correctIndex: 1,
    explanation: "Performing field operations across slopes along constant elevation contours creates micro-ridges that detain surface runoff and prevent soil washing."
  },
  {
    question: "22. Water harvesting structure that stores water in soil profile:",
    options: ["A. Check dam", "B. Farm pond", "C. Percolation tank", "D. Weir"],
    correctIndex: 2,
    explanation: "Percolation tanks are impoundment structures designed specifically to collect surface runoff and allow it to infiltrate deep into the soil and underlying aquifer."
  },
  {
    question: "23. Soil fertility refers to:",
    options: ["A. Soil color", "B. Nutrient status and productivity", "C. Soil texture", "D. Soil type"],
    correctIndex: 1,
    explanation: "Soil fertility measures the capacity of soil to supply essential plant nutrients in adequate amounts and balanced proportions to support crop yield."
  },
  {
    question: "24. Which soil texture has highest water holding capacity?",
    options: ["A. Sand", "B. Clay", "C. Loam", "D. Silt"],
    correctIndex: 1,
    explanation: "Clay soils have exceptionally high specific surface area and dominant micropore networks that retain large volumes of water compared to coarser soils."
  },
  {
    question: "25. Soil erosion by rain splash is called:",
    options: ["A. Sheet erosion", "B. Rill erosion", "C. Splash erosion", "D. Gully erosion"],
    correctIndex: 2,
    explanation: "Splash erosion represents the initial stage of water erosion where energy from impacting raindrops dislodges and scatters soil aggregates."
  },
  {
    question: "26. Silting of reservoir reduces:",
    options: ["A. Water loss", "B. Storage capacity", "C. Erosion", "D. Soil pH"],
    correctIndex: 1,
    explanation: "Sedimentation occupies useful live storage volume in reservoirs, over time diminishing their overall water holding capacity for power, irrigation, and flood control."
  },
  {
    question: "27. Watershed boundary is also called:",
    options: ["A. Ridge line", "B. Stream", "C. Valley", "D. Drainage"],
    correctIndex: 0,
    explanation: "The geographical boundary separating adjacent watersheds is a topographic high elevation line termed the ridge line or drainage divide."
  },
  {
    question: "28. Which one is a biological measure of soil conservation?",
    options: ["A. Check dam", "B. Gabion", "C. Vegetative barrier", "D. Cement bund"],
    correctIndex: 2,
    explanation: "Vegetative barriers rely on dense live vegetation (such as Vetiver grass strips) to slow down runoff velocity and trap eroding sediments naturally."
  },
  {
    question: "29. Addition of lime to soil is done to:",
    options: ["A. Lower pH", "B. Increase pH", "C. Add phosphorus", "D. Add nitrogen"],
    correctIndex: 1,
    explanation: "Agricultural liming materials (such as calcium carbonate) neutralize soil acidity, effectively raising the soil pH toward optimum levels."
  },
  {
    question: "30. The portion of rainwater that enters the soil is called:",
    options: ["A. Runoff", "B. Percolation", "C. Infiltration", "D. Evaporation"],
    correctIndex: 2,
    explanation: "Infiltration is the precise term for surface water penetrating into the soil surface matrix during a precipitation event."
  },
  {
    question: "31. Best method for controlling erosion in non-arable land:",
    options: ["A. Ploughing", "B. Strip cropping", "C. Afforestation", "D. Flooding"],
    correctIndex: 2,
    explanation: "Establishing forest cover (afforestation) on non-cultivated degraded lands stabilizes topsoil permanently via deep root systems and canopy interception."
  },
  {
    question: "32. Bio-engineering refers to:",
    options: ["A. Soil fertilization", "B. Use of vegetation and engineering together for stabilization", "C. Fertilizer management", "D. Irrigation method"],
    correctIndex: 1,
    explanation: "Soil bio-engineering integrates mechanical structural engineering principles with live biological materials (plants) to achieve long-term slope stabilization."
  },
  {
    question: "33. The major form of nitrogen absorbed by plants is:",
    options: ["A. Ammonia", "B. Urea", "C. Nitrate", "D. Nitrogen gas"],
    correctIndex: 2,
    explanation: "Although plants can absorb ammonium ($\text{NH}_4^+$), most agricultural crops preferentially absorb nitrogen in the highly mobile nitrate ($\text{NO}_3^-$) form."
  },
  {
    question: "34. Water use efficiency is defined as:",
    options: ["A. Yield per unit of water used", "B. Water lost", "C. Water applied", "D. Total irrigation"],
    correctIndex: 0,
    explanation: "Water Use Efficiency (WUE) measures crop economic output produced per unit volume of water consumed through evapotranspiration ($\text{WUE} = \\text{Yield} / \\text{Water Used}$)."
  },
  {
    question: "35. Broad bed and furrow is used in:",
    options: ["A. Hilly lands", "B. Heavy black cotton soils", "C. Sandy soil", "D. Forests"],
    correctIndex: 1,
    explanation: "The Broad Bed and Furrow (BBF) system is ideal for heavy Vertisols (black cotton soils) because it facilitates surface drainage during heavy rains while storing moisture in the beds."
  },
  {
    question: "36. Nutrient mobility in soil is highest for:",
    options: ["A. Phosphorus", "B. Potassium", "C. Nitrogen", "D. Calcium"],
    correctIndex: 2,
    explanation: "Nitrate ions ($\text{NO}_3^-$) carry a negative charge and do not bind to negatively charged clay minerals, making nitrogen highly mobile in soil water."
  },
  {
    question: "37. Soil pH < 5.5 is considered:",
    options: ["A. Neutral", "B. Alkaline", "C. Acidic", "D. Saline"],
    correctIndex: 2,
    explanation: "Soil pH values lower than 7.0 indicate acidity; values below 5.5 represent strongly acidic conditions where aluminum toxicity often arises."
  },
  {
    question: "38. Rill erosion can be controlled by:",
    options: ["A. Gully plugs", "B. Contour bunds", "C. Bench terrace", "D. Stone wall"],
    correctIndex: 1,
    explanation: "Contour bunding prevents concentrated flow channels (rills) from scouring fields by intercepting runoff before it gains high velocity."
  },
  {
    question: "39. Main component of soil texture:",
    options: ["A. Organic matter", "B. Moisture", "C. Sand, silt, and clay", "D. Air"],
    correctIndex: 2,
    explanation: "Soil texture refers specifically to the relative proportions of inorganic mineral particles: sand (0.05–2.0 mm), silt (0.002–0.05 mm), and clay (<0.002 mm)."
  },
  {
    question: "40. Conservation tillage is used to:",
    options: ["A. Increase runoff", "B. Reduce erosion", "C. Remove stubble", "D. Compact soil"],
    correctIndex: 1,
    explanation: "Conservation tillage leaves at least 30% of the soil surface covered with crop residue, shielding topsoil from raindrop impact and reducing wind/water erosion."
  },
  {
    question: "41. A field bund helps to:",
    options: ["A. Store runoff", "B. Separate plots", "C. Prevent erosion", "D. Both A and C"],
    correctIndex: 3,
    explanation: "Field bunds impound surface runoff locally to promote infiltration and prevent water from accelerating across field boundaries to cause soil erosion."
  },
  {
    question: "42. Which element increases disease resistance in crops?",
    options: ["A. Nitrogen", "B. Potassium", "C. Iron", "D. Magnesium"],
    correctIndex: 1,
    explanation: "Potassium ($\text{K}$) thickens plant cell walls and regulates stomatal closing, boosting physiological resistance against disease pathogens and environmental stress."
  },
  {
    question: "43. Most critical stage of water need in rice is:",
    options: ["A. Tillering", "B. Panicle initiation", "C. Flowering", "D. Maturity"],
    correctIndex: 2,
    explanation: "Water stress during flowering causes flower abortion and spikelet sterility in paddy crops, drastically reducing grain yield."
  },
  {
    question: "44. Gully depth more than 3 meters is:",
    options: ["A. Small gully", "B. Medium gully", "C. Deep gully", "D. Ravine"],
    correctIndex: 2,
    explanation: "In standard gully classification schemes, gullies deeper than 3 meters are classified as deep gullies."
  },
  {
    question: "45. Check dams are mainly constructed in:",
    options: ["A. Hilltop", "B. Streams and small rivers", "C. Canal", "D. Pond"],
    correctIndex: 1,
    explanation: "Check dams are built across drainage channels, small streams, or gullies to reduce flow velocity and collect sediment."
  },
  {
    question: "46. Vegetative barriers are made using:",
    options: ["A. Grass and shrubs", "B. Plastic", "C. RCC", "D. Metals"],
    correctIndex: 0,
    explanation: "Vegetative barriers consist of dense rows of perennial grasses (like vetiver) or hardy shrubs planted along field contours."
  },
  {
    question: "47. Which one improves soil aeration?",
    options: ["A. Compaction", "B. Waterlogging", "C. Organic matter and tillage", "D. Flooding"],
    correctIndex: 2,
    explanation: "Organic matter addition and proper tillage break up compacted layers, expanding macropore space necessary for root gas exchange."
  },
  {
    question: "48. High C:N ratio material decomposes:",
    options: ["A. Very fast", "B. Slowly", "C. In water", "D. Not at all"],
    correctIndex: 1,
    explanation: "Materials with high carbon-to-nitrogen ratios (e.g., straw, sawdust) decompose slowly because microbes lack sufficient nitrogen to build cellular proteins."
  },
  {
    question: "49. Earthworms help in:",
    options: ["A. Soil degradation", "B. Increasing pests", "C. Soil aeration and structure improvement", "D. Killing bacteria"],
    correctIndex: 2,
    explanation: "Earthworm burrowing creates stable macro-channels for air/water movement, while their casts aggregate soil and release plant-available nutrients."
  },
  {
    question: "50. Soil erosion in wind-prone areas can be reduced by:",
    options: ["A. Flooding", "B. Mulching", "C. Strip cropping and windbreaks", "D. Leaching"],
    correctIndex: 2,
    explanation: "Combining crop strip farming across dominant winds with windbreak tree lines effectively interrupts wind movement and holds soil in place."
  },
  {
    question: "51. What is the role of gypsum in soil?",
    options: ["A. Raise pH", "B. Lower salinity", "C. Reclaim sodic soil", "D. Add iron"],
    correctIndex: 2,
    explanation: "Gypsum ($\text{CaSO}_4 \\cdot 2\text{H}_2\text{O}$) replaces excess exchangeable sodium ($\text{Na}^+$) with calcium ($\text{Ca}^{2+}$) in sodic soils, facilitating sodium leaching."
  },
  {
    question: "52. Fallow land refers to:",
    options: ["A. Forest", "B. Uncultivated land during season", "C. Irrigated crop field", "D. Barren land"],
    correctIndex: 1,
    explanation: "Fallow land is arable land intentionally left unplanted for one or more growing seasons to restore soil moisture and fertility."
  },
  {
    question: "53. Major micronutrient for plants:",
    options: ["A. Phosphorus", "B. Zinc", "C. Potassium", "D. Nitrogen"],
    correctIndex: 1,
    explanation: "Zinc ($\text{Zn}$) is an essential plant micronutrient required in trace amounts for enzyme activation and auxin synthesis, unlike primary macronutrients ($\text{N, P, K}$)."
  },
  {
    question: "54. The main objective of watershed management is:",
    options: ["A. Road construction", "B. Soil and water conservation", "C. Fertilizer use", "D. Pollution"],
    correctIndex: 1,
    explanation: "Watershed management aims to conserve, develop, and sustainably utilize land, water, and biomass resources within a natural drainage basin."
  },
  {
    question: "55. Runoff increases when:",
    options: ["A. Vegetation increases", "B. Rain intensity increases", "C. Infiltration increases", "D. Tillage increases"],
    correctIndex: 1,
    explanation: "When rainfall intensity exceeds the infiltration capacity of the soil, excess surface water accumulates and quickly converted to overland runoff."
  },
  {
    question: "56. Soil erosion affects:",
    options: ["A. Soil fertility", "B. Crop yield", "C. Water quality", "D. All of the above"],
    correctIndex: 3,
    explanation: "Soil erosion strips fertile topsoil, drops crop productivity, and carries nutrient-rich sediment into downstream water bodies causing water pollution."
  },
  {
    question: "57. Field capacity is:",
    options: ["A. Water left after gravity drainage", "B. Permanent wilting point", "C. Maximum soil moisture", "D. Evaporation loss"],
    correctIndex: 0,
    explanation: "Field capacity represents the amount of water retained in soil pores after excess gravitational water has fully drained away (usually 2–3 days post-wetting)."
  },
  {
    question: "58. Bio-fertilizers add:",
    options: ["A. Organic carbon", "B. Living microbes for nutrient fixation", "C. Water", "D. Clay"],
    correctIndex: 1,
    explanation: "Bio-fertilizers are formulations containing beneficial living microorganisms (like *Rhizobium* or *Azotobacter*) that fix atmospheric nitrogen or solubilize phosphorus."
  },
  {
    question: "59. Key factor for crop selection in watershed is:",
    options: ["A. Fertilizer type", "B. Slope and soil moisture", "C. Seed size", "D. Row spacing"],
    correctIndex: 1,
    explanation: "Matching crops to land slope, depth, and seasonal water availability ensures sustainable yields and minimizes land degradation."
  },
  {
    question: "60. Most effective in-situ moisture conservation practice:",
    options: ["A. Contour ploughing", "B. Furrow irrigation", "C. Flooding", "D. Broadcasting"],
    correctIndex: 0,
    explanation: "Contour ploughing creates continuous mini-dams across field slopes that trap rainfall right where it falls, maximizing soil moisture absorption."
  },
  {
    question: "61. Which tillage method leaves crop residue on the surface?",
    options: ["A. Zero tillage", "B. Conventional tillage", "C. Plough tillage", "D. Strip tillage"],
    correctIndex: 0,
    explanation: "Zero tillage (no-till) inserts seeds directly into undisturbed soil, retaining almost 100% of previous crop residues on the land surface."
  },
  {
    question: "62. Key indicator of soil fertility is:",
    options: ["A. Soil color", "B. Organic carbon content", "C. Sand percentage", "D. Soil texture"],
    correctIndex: 1,
    explanation: "Soil Organic Carbon (SOC) correlates directly with nutrient retention capacity, soil biological activity, and structural stability."
  },
  {
    question: "63. Best cropping system for erosion-prone areas:",
    options: ["A. Monocropping", "B. Intercropping", "C. Alley cropping", "D. Relay cropping"],
    correctIndex: 2,
    explanation: "Alley cropping involves growing crops between rows of woody shrubs or trees, combining canopy protection and root binding to limit erosion."
  },
  {
    question: "64. Filter strip is used for:",
    options: ["A. Water filtration", "B. Soil stabilization and runoff control", "C. Fertilizer application", "D. Ploughing"],
    correctIndex: 1,
    explanation: "Filter strips are bands of dense grass positioned along field margins to slow down runoff, filter sediment, and absorb agrochemicals."
  },
  {
    question: "65. The process of water movement from soil to root:",
    options: ["A. Evaporation", "B. Osmosis", "C. Transpiration", "D. Leaching"],
    correctIndex: 1,
    explanation: "Water passes through semi-permeable root cell membranes from the soil solution via osmosis, driven by water potential gradients."
  },
  {
    question: "66. Which is not a component of soil?",
    options: ["A. Mineral", "B. Organic matter", "C. Water", "D. Plastic"],
    correctIndex: 3,
    explanation: "Natural soil consists of four primary components: minerals (~45%), air (~25%), water (~25%), and organic matter (~5%). Synthetic plastic is a pollutant."
  },
  {
    question: "67. pF scale is used to measure:",
    options: ["A. Soil acidity", "B. Soil tension", "C. Soil salinity", "D. Soil structure"],
    correctIndex: 1,
    explanation: "The pF value represents the logarithm of soil moisture tension (suction force) expressed in centimeters of water column height."
  },
  {
    question: "68. Which one is not a principle of watershed management?",
    options: ["A. Participatory approach", "B. Soil erosion", "C. Sustainability", "D. Conservation"],
    correctIndex: 1,
    explanation: "Soil erosion is a degradation process to be controlled, not a guiding management principle like conservation, sustainability, or community participation."
  },
  {
    question: "69. A-frame is used to:",
    options: ["A. Build house", "B. Construct bridge", "C. Mark contours", "D. Design bunds"],
    correctIndex: 2,
    explanation: "An A-frame level is a simple wooden frame tool fitted with a plumb line used by farmers to trace horizontal contour lines across sloped fields."
  },
  {
    question: "70. Organic farming excludes:",
    options: ["A. Green manure", "B. Compost", "C. Synthetic fertilizers and pesticides", "D. Vermicompost"],
    correctIndex: 2,
    explanation: "Organic agricultural standards prohibit the use of synthetically manufactured chemical fertilizers, pesticides, and growth regulators."
  },
  {
    question: "71. Critical depth of water for paddy is:",
    options: ["A. 1 cm", "B. 2–3 cm", "C. 4–5 cm", "D. 8–10 cm"],
    correctIndex: 2,
    explanation: "Maintaining a shallow water layer around 4–5 cm during crucial growth stages optimizes rice tillering and growth while suppressing weed emergence."
  },
  {
    question: "72. Strip cropping is most effective on:",
    options: ["A. Flat land", "B. Terraced land", "C. Gentle to moderate slopes", "D. Waterlogged areas"],
    correctIndex: 2,
    explanation: "Alternating erosion-resisting crops (like legumes) with erosion-permitting crops (like corn) along contours works best on mild to moderate slopes (2%–8%)."
  },
  {
    question: "73. Soil erosion caused by irrigation is:",
    options: ["A. Wind erosion", "B. Splash erosion", "C. Seepage erosion", "D. Irrigation erosion"],
    correctIndex: 3,
    explanation: "Erosion caused directly by improper or high-velocity application of irrigation water across field surfaces is termed irrigation erosion."
  },
  {
    question: "74. Which nutrient is most mobile in plant?",
    options: ["A. Calcium", "B. Nitrogen", "C. Iron", "D. Boron"],
    correctIndex: 1,
    explanation: "Nitrogen is highly mobile within plant tissue; when deficiencies occur, the plant translocates nitrogen from older leaves to younger growing points."
  },
  {
    question: "75. Hydraulic conductivity refers to:",
    options: ["A. Soil temperature", "B. Soil pH", "C. Ease of water movement in soil", "D. Air porosity"],
    correctIndex: 2,
    explanation: "Hydraulic conductivity measures the ease with which water can pass through pore spaces within a saturated or unsaturated soil matrix."
  },
  {
    question: "76. Best season for green manuring:",
    options: ["A. Summer", "B. Monsoon", "C. Winter", "D. Spring"],
    correctIndex: 1,
    explanation: "The monsoon season provides abundant moisture and warm temperatures required for rapid growth and incorporation of green manure crops."
  },
  {
    question: "77. Major loss of nitrogen from urea is by:",
    options: ["A. Leaching", "B. Denitrification", "C. Ammonia volatilization", "D. Nitrification"],
    correctIndex: 2,
    explanation: "When urea ($\text{CO(NH}_2)_2$) is surface-applied, enzymatic hydrolysis quickly yields free ammonia gas ($\text{NH}_3$), which escapes into the atmosphere."
  },
  {
    question: "78. Soil permeability is:",
    options: ["A. Capacity to absorb heat", "B. Ability to retain water", "C. Movement of air", "D. Ease of water flow through soil"],
    correctIndex: 3,
    explanation: "Soil permeability defines the property of soil enabling it to transmit fluids (water and air) through its interconnected pore space."
  },
  {
    question: "79. Terrace farming is ideal for:",
    options: ["A. Plain land", "B. Desert", "C. Hills and steep slopes", "D. Coastal areas"],
    correctIndex: 2,
    explanation: "Terracing modifies steep hill slopes into stepped level platforms, preventing surface runoff from accelerating downhill."
  },
  {
    question: "80. Best structure for storing runoff in hilly terrain:",
    options: ["A. Percolation tank", "B. Farm pond", "C. Check dam", "D. Bench terrace"],
    correctIndex: 2,
    explanation: "Check dams constructed across narrow stream beds in hilly terrain trap storm runoff effectively behind small impoundment walls."
  },
  {
    question: "81. Water balance equation does not include:",
    options: ["A. Rainfall", "B. Infiltration", "C. Runoff", "D. Wind velocity"],
    correctIndex: 3,
    explanation: "The hydrological water balance equation ($\text{Inflow} - \text{Outflow} = \\Delta \\text{Storage}$) tracks physical water volumes (rain, runoff, infiltration), not wind speed."
  },
  {
    question: "82. Critical stage of wheat for irrigation:",
    options: ["A. CRI (Crown Root Initiation)", "B. Flowering", "C. Tillering", "D. Booting"],
    correctIndex: 0,
    explanation: "Crown Root Initiation (CRI), occurring around 21 days after sowing, is the most crucial irrigation stage for wheat; water deficit here severely damages tillering."
  },
  {
    question: "83. Soil water available to plants is:",
    options: ["A. Gravitational water", "B. Hygroscopic water", "C. Capillary water", "D. Vapor"],
    correctIndex: 2,
    explanation: "Capillary water held against gravity between field capacity and permanent wilting point is the main fraction plants can extract."
  },
  {
    question: "84. Major function of potassium in plant is:",
    options: ["A. Root development", "B. Protein formation", "C. Disease resistance and water regulation", "D. Photosynthesis"],
    correctIndex: 2,
    explanation: "Potassium maintains cell turgor, regulates guard cells for stomatal control, and strengthens plant immunity against pests and diseases."
  },
  {
    question: "85. Saline soils have:",
    options: ["A. High pH and high salts", "B. Low pH", "C. High organic matter", "D. High nitrogen"],
    correctIndex: 0,
    explanation: "Saline soils contain high concentrations of soluble salts (electrical conductivity $> 4\\text{ dS/m}$), maintaining an alkaline or high pH environment."
  },
  {
    question: "86. Which is not a bio-fertilizer?",
    options: ["A. Azospirillum", "B. Rhizobium", "C. Trichoderma", "D. Azotobacter"],
    correctIndex: 2,
    explanation: "*Trichoderma* is a beneficial biocontrol fungus used against soil-borne plant pathogens, whereas *Rhizobium*, *Azospirillum*, and *Azotobacter* fix nitrogen."
  },
  {
    question: "87. Water erosion is highest in:",
    options: ["A. Forests", "B. Cultivated barren slopes", "C. Grasslands", "D. Marsh"],
    correctIndex: 1,
    explanation: "Bare, un-vegetated sloping fields lack root anchorage and canopy protection, making topsoil highly susceptible to detachment by rainfall."
  },
  {
    question: "88. Legumes improve soil fertility by:",
    options: ["A. Fixing phosphorus", "B. Fixing nitrogen", "C. Preventing erosion", "D. Increasing iron"],
    correctIndex: 1,
    explanation: "Legumes form symbiotic relationships with *Rhizobium* bacteria in root nodules to convert inert atmospheric nitrogen ($\text{N}_2$) into plant-available forms."
  },
  {
    question: "89. Crop suitable for contour strip cropping:",
    options: ["A. Rice", "B. Maize", "C. Millet", "D. Soybean"],
    correctIndex: 3,
    explanation: "Soybeans produce dense vegetative canopy cover, serving as an effective erosion-resisting strip when alternated with erosion-permitting row crops."
  },
  {
    question: "90. Best vegetative method of erosion control:",
    options: ["A. Trees", "B. Bamboo", "C. Grass strips", "D. Vines"],
    correctIndex: 2,
    explanation: "Grass strips established along contours form dense underground root mats and ground cover that trap sediment and slow surface runoff."
  },
  {
    question: "91. Which method is not used in watershed planning?",
    options: ["A. GIS", "B. Remote sensing", "C. Participatory rural appraisal", "D. Chemical treatment"],
    correctIndex: 3,
    explanation: "Chemical treatment is an input application rather than a spatial planning or diagnostic methodology like GIS, remote sensing, or PRA."
  },
  {
    question: "92. The infiltration rate is measured using:",
    options: ["A. Lysimeter", "B. Infiltrometer", "C. Rain gauge", "D. Soil auger"],
    correctIndex: 1,
    explanation: "A double-ring infiltrometer measures the rate at which water enters soil per unit time under saturated field conditions."
  },
  {
    question: "93. Soil with highest porosity:",
    options: ["A. Sandy", "B. Clay", "C. Loam", "D. Gravel"],
    correctIndex: 1,
    explanation: "Clay soils have high total pore volume due to millions of tiny micropores between microscopic platelets, giving them higher total porosity than sand."
  },
  {
    question: "94. Which is not a purpose of watershed treatment?",
    options: ["A. Reduce erosion", "B. Increase water table", "C. Pollute river", "D. Improve soil fertility"],
    correctIndex: 2,
    explanation: "Polluting rivers directly contradicts watershed treatment goals, which strive to purify and conserve water resources."
  },
  {
    question: "95. Main source of nitrogen in organic farming:",
    options: ["A. Urea", "B. Manure and compost", "C. Ammonium nitrate", "D. DAP"],
    correctIndex: 1,
    explanation: "Organic farming relies on decomposed organic residues, animal manures, bio-fertilizers, and compost to supply plant nitrogen naturally."
  },
  {
    question: "96. Which nutrient deficiency causes chlorosis?",
    options: ["A. Phosphorus", "B. Potassium", "C. Nitrogen", "D. Zinc"],
    correctIndex: 2,
    explanation: "Because nitrogen is essential for chlorophyll biosynthesis, its deficiency causes leaf yellowing (chlorosis), starting on older foliage."
  },
  {
    question: "97. Gully plugging is used for:",
    options: ["A. Reducing irrigation", "B. Controlling water in rills", "C. Stopping gully erosion", "D. Water pumping"],
    correctIndex: 2,
    explanation: "Gully plugs (built from brushwood, loose boulders, or masonry) slow down runoff within gully channels, promoting siltation and preventing further channel expansion."
  },
  {
    question: "98. What is the C:N ratio of compost?",
    options: ["A. 5:1", "B. 10:1", "C. 25–30:1", "D. 100:1"],
    correctIndex: 2,
    explanation: "A Carbon-to-Nitrogen ratio around 25–30:1 provides the ideal nutritional balance for composting microbes to break down organic matter efficiently."
  },
  {
    question: "99. Best indicator crop for nitrogen deficiency:",
    options: ["A. Paddy", "B. Wheat", "C. Maize", "D. Barley"],
    correctIndex: 2,
    explanation: "Maize has high nitrogen demands and exhibits rapid, distinct yellowing along leaf midribs (V-shaped chlorosis) when nitrogen is deficient."
  },
  {
    question: "100. Watershed development programs are monitored using:",
    options: ["A. Soil auger", "B. NDVI and GPS", "C. Rain gauge", "D. Theodolite"],
    correctIndex: 1,
    explanation: "Geospatial tools like Normalized Difference Vegetation Index (NDVI) satellite imagery and Global Positioning Systems (GPS) enable accurate tracking of land cover and biomass changes across watersheds."
  }

  ];

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-6 pb-32">
    <h1 className="text-2xl md:text-3xl font-bold text-center text-teal-700 mb-1">
        Crop, Soil and Watershed Management
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Answer all questions to see instant feedback and explanations.
      </p>

      <Quiz chapterTitle="Chapter 7" questions={questions} />
    </main>
  );
}