import Quiz from "../../components/Quiz";

export default function Chapter1Page() {
    const questions = [
    // Array containing all 100 questions, options, correct indices, and detailed agricultural engineering explanations

  {
    question: "1. The primary purpose of farm structures is to:",
    options: ["A. Increase labor", "B. Store water only", "C. Support agriculture operations", "D. Improve road infrastructure"],
    correctIndex: 2,
    explanation: "Farm structures are designed to provide controlled environments for livestock, protect crop yields post-harvest, house machinery, and facilitate efficient farm management operations."
  },
  {
    question: "2. The foundation of any structure is designed to:",
    options: ["A. Resist air pressure", "B. Transfer loads to soil safely", "C. Store seeds", "D. Support roofs only"],
    correctIndex: 1,
    explanation: "The principal structural function of a foundation is to distribute dead loads, live loads, and environmental forces evenly over a sufficient bearing area to prevent soil shear failure and differential settlement."
  },
  {
    question: "3. The unit of compressive strength of concrete is:",
    options: ["A. N/m", "B. N/m²", "C. N/mm²", "D. kg/m"],
    correctIndex: 2,
    explanation: "Compressive strength of concrete is defined as force per unit area, measured standardly in N/mm² (equivalent to Megapascals, MPa) at 28 days of curing."
  },
  {
    question: "4. M20 concrete mix ratio (cement:sand:aggregate) is:",
    options: ["A. 1:2:3", "B. 1:1.5:3", "C. 1:2:4", "D. 1:3:6"],
    correctIndex: 1,
    explanation: "M20 grade concrete represents a characteristic compressive strength of 20 N/mm² and follows a nominal volumetric mix ratio of 1 part cement, 1.5 parts fine aggregate (sand), and 3 parts coarse aggregate."
  },
  {
    question: "5. A poultry house should be oriented:",
    options: ["A. North–South", "B. East–West", "C. Northeast–Southwest", "D. Random"],
    correctIndex: 1,
    explanation: "An East-West orientation minimizes direct solar radiation on sidewalls during peak afternoon heat, reducing thermal stress on birds while maximizing natural cross-ventilation from prevailing wind currents."
  },
  {
    question: "6. Recommended floor space per cow in a loose housing system is:",
    options: ["A. 2–3 m²", "B. 5–7 m²", "C. 10–12 m²", "D. 15–18 m²"],
    correctIndex: 1,
    explanation: "In loose housing systems, covered shelter space requires approximately 5 to 7 m² per cow to ensure proper lying, social space, and comfort, supplemented by a open paddock area."
  },
  {
    question: "7. The minimum slope for roof drainage is:",
    options: ["A. 1%", "B. 3%", "C. 5%", "D. 10%"],
    correctIndex: 1,
    explanation: "A minimum roof slope of 3% (approx 1:30) is required for effective gravitational run-off of rainwater, preventing ponding, vegetation growth, and structural roof leaks."
  },
  {
    question: "8. The best location for a farm structure is:",
    options: ["A. On steep land", "B. Near a riverbank", "C. On elevated, well-drained land", "D. Close to swampy area"],
    correctIndex: 2,
    explanation: "Elevated, well-drained sites prevent water stagnation during heavy rainfall, offer superior soil load-bearing capacity, reduce humidity-related pathogen pressure, and minimize flood risk."
  },
  {
    question: "9. A silo is primarily used for storing:",
    options: ["A. Grain", "B. Silage", "C. Water", "D. Fertilizer"],
    correctIndex: 1,
    explanation: "Silos are air-tight structures engineered for the anaerobic fermentation and preservation of high-moisture forage crops into silage for livestock feed."
  },
  {
    question: "10. What type of foundation is suitable for soft soil?",
    options: ["A. Shallow foundation", "B. Deep foundation", "C. Spread footing", "D. Isolated footing"],
    correctIndex: 1,
    explanation: "Deep foundations (such as piles or piers) bypass weak, compressible surface soil strata to anchor directly into deeper, competent soil or bedrock layers."
  },
  {
    question: "11. The most common material used in RCC structures is:",
    options: ["A. Wood", "B. Bricks", "C. Steel", "D. Mud"],
    correctIndex: 2,
    explanation: "Reinforced Cement Concrete (RCC) combines concrete (strong in compression) with steel reinforcement bars (strong in tension) to create composite structural elements."
  },
  {
    question: "12. Which of the following is a non-load bearing component?",
    options: ["A. Beam", "B. Column", "C. Partition wall", "D. Foundation"],
    correctIndex: 2,
    explanation: "Partition walls serve solely to divide interior spaces. They support only their own self-weight and do not carry structural loads from roofs or upper floors."
  },
  {
    question: "13. The term “plinth” refers to:",
    options: ["A. Basement roof", "B. Top of the wall", "C. Portion above foundation level", "D. Door frame"],
    correctIndex: 2,
    explanation: "The plinth is the built-up structure between the ground level and the finished floor level, designed to protect the building interior from surface water ingress and rising damp."
  },
  {
    question: "14. Which of these is a roofing material?",
    options: ["A. Bitumen", "B. GI sheet", "C. Cement", "D. RCC"],
    correctIndex: 1,
    explanation: "Galvanized Iron (GI) sheets are widely used corrugated roofing panels that offer high tensile strength, weather resistance, and light structural weight for agricultural sheds."
  },
  {
    question: "15. The roof type most suitable for high rainfall is:",
    options: ["A. Flat roof", "B. Dome roof", "C. Sloped roof", "D. RCC slab"],
    correctIndex: 2,
    explanation: "Sloped or pitched roofs rapidly shed heavy precipitation via gravitational runoff, avoiding standing water accumulation and lowering waterproofing failure risks."
  },
  {
    question: "16. Ventilation in animal housing is important for:",
    options: ["A. Light control", "B. Air quality and moisture removal", "C. Structural balance", "D. Water flow"],
    correctIndex: 1,
    explanation: "Adequate ventilation continuously exchanges stagnant air to exhaust metabolic heat, moisture, toxic gases (ammonia, carbon dioxide), and airborne pathogens from livestock zones."
  },
  {
    question: "17. The most durable flooring material for animal housing is:",
    options: ["A. Clay", "B. Brick", "C. Concrete", "D. Wooden planks"],
    correctIndex: 2,
    explanation: "Non-porous, high-density concrete provides chemical resistance against animal waste, tolerates heavy wear from hoof traffic, and allows easy washing and disinfection."
  },
  {
    question: "18. Floor slope in dairy shed should be:",
    options: ["A. 0%", "B. 1–2%", "C. 3–5%", "D. 10%"],
    correctIndex: 1,
    explanation: "A gentle floor slope of 1% to 2% (1 in 100 to 1 in 50) towards drainage gutters ensures efficient gravity discharge of wash-water and urine without making cows slip."
  },
  {
    question: "19. Recommended height of plinth above ground is:",
    options: ["A. 10 cm", "B. 30 cm", "C. 45–60 cm", "D. 90 cm"],
    correctIndex: 2,
    explanation: "A elevated plinth height of 45–60 cm prevents rainwater splashing onto lower wall masonry, blocks entry of ground-level pests, and stops flood intrusion."
  },
  {
    question: "20. The moisture content of stored grain should be:",
    options: ["A. 20–25%", "B. 10–14%", "C. <8%", "D. >30%"],
    correctIndex: 1,
    explanation: "Maintaining grain moisture at 10–14% suppresses respiration rates, halts fungal germination (mold growth), and prevents destructive pest proliferation during storage."
  },
  {
    question: "21. Rat-proofing in grain storage requires:",
    options: ["A. Netting", "B. Elevated platform", "C. Concrete apron", "D. Wooden bin"],
    correctIndex: 1,
    explanation: "Constructing grain storage on elevated platforms elevated at least 75–100 cm off the ground equipped with smooth metallic rat guards physically prevents rodents from climbing inside."
  },
  {
    question: "22. The live load for cattle shed design is:",
    options: ["A. 200 kg/m²", "B. 400 kg/m²", "C. 500 kg/m²", "D. Varies by region"],
    correctIndex: 2,
    explanation: "Structural design standards specify a uniform live load allowance around 500 kg/m² (approx 5 kN/m²) for adult cattle facilities to safely support animal concentration and movement."
  },
  {
    question: "23. A farm road should have a minimum width of:",
    options: ["A. 1 m", "B. 2 m", "C. 3 m", "D. 4 m"],
    correctIndex: 2,
    explanation: "A minimum carriageway width of 3 meters accommodates standard agricultural tractors, trailers, and heavy harvest machinery operating along single-lane internal farm routes."
  },
  {
    question: "24. In design, the factor of safety for RCC is usually:",
    options: ["A. 1.0", "B. 1.5", "C. 2.0", "D. 1.7"],
    correctIndex: 1,
    explanation: "In limit state design of Reinforced Cement Concrete, partial safety factors applied to material strength are 1.5 for concrete (accounting for site batching variations) and 1.15 for steel reinforcement."
  },
  {
    question: "25. Gutter is provided in roofing for:",
    options: ["A. Decoration", "B. Drainage", "C. Insulation", "D. Ventilation"],
    correctIndex: 1,
    explanation: "Roof gutters intercept rainwater runoff along roof eaves and channel it systematically to downspouts, protecting perimeter walls and foundation soils from erosion."
  },
  {
    question: "26. A roof truss is used to:",
    options: ["A. Support walls", "B. Distribute floor loads", "C. Support sloped roofs", "D. Store materials"],
    correctIndex: 2,
    explanation: "A roof truss is a triangulated structural framework engineered to span long distances without intermediate supports, directly bearing roof loads and purlins."
  },
  {
    question: "27. Pitched roof slope is measured in:",
    options: ["A. Degrees", "B. cm", "C. Percent", "D. mm"],
    correctIndex: 0,
    explanation: "Pitched roof inclinations are quantitatively defined by their pitch angle measured in degrees relative to the horizontal plane (or as a rise-to-run ratio)."
  },
  {
    question: "28. The span of roof is the:",
    options: ["A. Height of building", "B. Length of truss", "C. Distance between supports", "D. Gutter length"],
    correctIndex: 2,
    explanation: "The roof span refers specifically to the horizontal clear distance measured between the inner faces of supporting walls, pillars, or columns."
  },
  {
    question: "29. The size of standard burnt brick is approximately:",
    options: ["A. 190×90×90 mm", "B. 200×100×100 mm", "C. 230×110×70 mm", "D. 240×120×120 mm"],
    correctIndex: 0,
    explanation: "Standard modular burnt clay bricks have standard dimensions of 190 mm × 90 mm × 90 mm (which expands to nominal 200 × 100 × 100 mm with mortar joints)."
  },
  {
    question: "30. RCC stands for:",
    options: ["A. Rough Cement Concrete", "B. Reinforced Cement Concrete", "C. Regular Concrete Casting", "D. Ready Cement Compound"],
    correctIndex: 1,
    explanation: "RCC stands for Reinforced Cement Concrete, a composite building material engineered by embedding steel bars within concrete to handle high tensile stress."
  },
  {
    question: "31. Which farm structure is used for vermicompost?",
    options: ["A. Silo", "B. Compost pit", "C. Drainage tank", "D. Threshing floor"],
    correctIndex: 1,
    explanation: "Shaded brick or concrete compost pits provide ideal moisture, temperature, and aeration conditions required for earthworms to decompose organic farm waste into vermicompost."
  },
  {
    question: "32. Which is most vulnerable to white ants?",
    options: ["A. Brick wall", "B. Cement floor", "C. Wooden pole", "D. GI sheet"],
    correctIndex: 2,
    explanation: "Untreated wooden poles contain cellulose, making them highly susceptible to subterranean white ant (termite) infestation and structural decay."
  },
  {
    question: "33. The strength of concrete increases with:",
    options: ["A. Excess water", "B. Curing", "C. Dry mixing", "D. More sand"],
    correctIndex: 1,
    explanation: "Curing maintains adequate internal moisture and temperature over time, permitting full chemical hydration of cement compounds to maximize compressive strength."
  },
  {
    question: "34. A well-designed poultry house should be:",
    options: ["A. Dark and damp", "B. High and open", "C. Small and enclosed", "D. Underground"],
    correctIndex: 1,
    explanation: "A high eave height combined with open-sided wire netting promotes effective natural chimney-effect air exchange, shedding heat and venting harmful poultry gases."
  },
  {
    question: "35. Standard thickness of concrete floor in dairy shed:",
    options: ["A. 5 cm", "B. 7.5 cm", "C. 10 cm", "D. 15 cm"],
    correctIndex: 2,
    explanation: "A 10 cm (4 inches) thick concrete slab over a consolidated gravel bed provides sufficient bending strength to carry concentrated live loads from adult cows without cracking."
  },
  {
    question: "36. Brick bonding gives strength in:",
    options: ["A. Height", "B. Width", "C. Length", "D. All directions"],
    correctIndex: 3,
    explanation: "Interlocking brick bonding patterns overlap vertical joints across adjacent courses, distributing loads evenly throughout the wall length, width, and height."
  },
  {
    question: "37. Standard room height in farm buildings is:",
    options: ["A. 2 m", "B. 2.5–3.0 m", "C. 3.5 m", "D. 4.5 m"],
    correctIndex: 1,
    explanation: "A ceiling height of 2.5 to 3.0 meters provides adequate headroom, accommodates machinery/equipment passage, and allows thermal dissipation in livestock pens."
  },
  {
    question: "38. A lintel is a:",
    options: ["A. Roof beam", "B. Slab", "C. Beam above doors and windows", "D. Column base"],
    correctIndex: 2,
    explanation: "A lintel is a horizontal structural beam spanning wall openings (doors, windows) to support loads from wall masonry situated directly above."
  },
  {
    question: "39. Cross-ventilation is ensured by:",
    options: ["A. Only roof windows", "B. Single door", "C. Opposite windows", "D. High wall"],
    correctIndex: 2,
    explanation: "Locating window openings on directly opposing walls allows wind-driven fresh air entering on the windward side to sweep through the structure and exhaust out the leeward side."
  },
  {
    question: "40. Greenhouse frame should be made from:",
    options: ["A. Glass", "B. RCC", "C. GI pipe", "D. Timber"],
    correctIndex: 2,
    explanation: "Galvanized Iron (GI) pipes offer superior strength-to-weight performance, rust corrosion resistance under high humidity, and long service life for supporting greenhouse covers."
  },
  {
    question: "41. Poultry litter depth should be:",
    options: ["A. 2–3 cm", "B. 5–10 cm", "C. 15–20 cm", "D. 25–30 cm"],
    correctIndex: 2,
    explanation: "Maintaining a deep litter depth of 15 to 20 cm (approx 6-8 inches) using wood shavings or straw creates an insulating layer that absorbs bird droppings and supports aerobic decomposition."
  },
  {
    question: "42. Slope for drainage in poultry floor:",
    options: ["A. 0%", "B. 1%", "C. 2%", "D. 5%"],
    correctIndex: 2,
    explanation: "A 2% slope (1 in 50) on solid concrete poultry floors facilitates efficient drainage during wash-downs and disinfection routines without disturbing bird litter stability."
  },
  {
    question: "43. Purpose of a thatched roof:",
    options: ["A. Decoration", "B. Water harvesting", "C. Cost saving", "D. Insulation and low cost"],
    correctIndex: 3,
    explanation: "Thatch (straw or reeds) utilizes low-cost locally available agricultural residues to construct roofs that naturally excel at thermal insulation in hot climates."
  },
  {
    question: "44. Type of foundation for heavy load and weak soil:",
    options: ["A. Slab", "B. Isolated footing", "C. Pile foundation", "D. Pad"],
    correctIndex: 2,
    explanation: "Pile foundations transfer high structural column loads deep into stable soil layers or underlying bedrocks when surface soils possess poor bearing capacities."
  },
  {
    question: "45. Structure used to store seeds under dry condition:",
    options: ["A. Thresher", "B. Barn", "C. Seed bin", "D. Trolley"],
    correctIndex: 2,
    explanation: "Sealed, moisture-proof seed bins prevent air moisture ingress and protect grain viability and germination potential from pest contamination."
  },
  {
    question: "46. The standard live load for roof design in farm buildings is around:",
    options: ["A. 25 kg/m²", "B. 75 kg/m²", "C. 150 kg/m²", "D. 250 kg/m²"],
    correctIndex: 1,
    explanation: "Building codes specify an accessible/maintenance live design load of 75 kg/m² (0.75 kN/m²) for non-accessible pitched agricultural roofs."
  },
  {
    question: "47. Roofing sheet overlap should be at least:",
    options: ["A. 1 cm", "B. 5 cm", "C. 10 cm", "D. 15 cm"],
    correctIndex: 2,
    explanation: "An end-lap overlap of at least 10–15 cm (along with side corrugation laps) is essential to stop capillary suction and prevent wind-driven rain penetration under sheets."
  },
  {
    question: "48. Poultry house roof height at ridge should be:",
    options: ["A. 1.5 m", "B. 2.0 m", "C. 2.5–3.0 m", "D. 3.5 m"],
    correctIndex: 2,
    explanation: "A ridge clearance height of 2.5 to 3.0 meters promotes adequate interior air volume, driving warm buoyant air up and out through ridge ventilators via natural stack effect."
  },
  {
    question: "49. What is used for better footing grip in dairy shed?",
    options: ["A. Plastic sheet", "B. Plain tiles", "C. Grooved concrete floor", "D. Gravel floor"],
    correctIndex: 2,
    explanation: "Imprinting diamond or grid grooves on wet concrete floors during finishing gives cow hooves necessary surface traction, preventing slips, falls, and joint injuries."
  },
  {
    question: "50. Good ventilation reduces:",
    options: ["A. Structure life", "B. Feed cost", "C. Heat and ammonia", "D. Disease in plants"],
    correctIndex: 2,
    explanation: "Active ventilation strips away excess animal heat accumulation and exhausts toxic ammonia gas released from manure breakdown, preventing respiratory diseases."
  },
  {
    question: "51. GI sheet means:",
    options: ["A. Galvanized Iron", "B. Graded Insulation", "C. Glass Insert", "D. Geometric Insulation"],
    correctIndex: 0,
    explanation: "GI stands for Galvanized Iron—steel sheets coated with a protective zinc layer via hot-dip galvanizing to prevent rust corrosion."
  },
  {
    question: "52. Recommended floor type for poultry house:",
    options: ["A. Earthen", "B. Bamboo", "C. Concrete", "D. Polished tile"],
    correctIndex: 2,
    explanation: "A permanent, rat-proof concrete floor allows complete washout, scrubbing, and sanitization between poultry flock placement cycles."
  },
  {
    question: "53. Ideal orientation of greenhouse in Nepal:",
    options: ["A. East–West", "B. North–South", "C. Northwest–Southeast", "D. Southwest–Northeast"],
    correctIndex: 0,
    explanation: "In Northern Hemisphere mid-latitudes like Nepal, an East-West ridge orientation maximizes winter solar radiation capture during low sun angles."
  },
  {
    question: "54. Farm fencing should be:",
    options: ["A. Thick and high", "B. Durable and cost-effective", "C. Temporary", "D. Transparent"],
    correctIndex: 1,
    explanation: "Agricultural fencing must balance structural durability (withstanding livestock impacts and weather exposure) with economic cost-effectiveness across long boundary distances."
  },
  {
    question: "55. Concrete floor curing time is at least:",
    options: ["A. 1 day", "B. 3 days", "C. 7 days", "D. 28 days"],
    correctIndex: 3,
    explanation: "Standard concrete requires continuous wet curing for at least 7–14 days for hydration, reaching its full structural design compressive strength at 28 days."
  },
  {
    question: "56. Sunlight entry in poultry house should be:",
    options: ["A. Indirect only", "B. Avoided", "C. Sufficient but not excessive", "D. Continuous at night"],
    correctIndex: 2,
    explanation: "Controlled natural sunlight aids vitamin D synthesis and acts as a disinfectant, but excess direct sunlight causes severe heat stress and triggers feather picking/cannibalism."
  },
  {
    question: "57. Water table considerations are important for:",
    options: ["A. Fence layout", "B. Foundation design", "C. Roof painting", "D. Shed slope"],
    correctIndex: 1,
    explanation: "High ground water tables reduce soil bearing capacities, increase hydrostatic uplift pressures on footings, and cause rising moisture dampness in floors."
  },
  {
    question: "58. Structure best suited for hay storage:",
    options: ["A. Underground bin", "B. Shed with ventilation", "C. Metal silo", "D. RCC tank"],
    correctIndex: 1,
    explanation: "Hay requires elevated, dry sheds with continuous open airflow to prevent moisture accumulation, mold growth, and spontaneous internal combustion."
  },
  {
    question: "59. RCC wall thickness for silo is generally:",
    options: ["A. 5 cm", "B. 10 cm", "C. 15–20 cm", "D. 25 cm"],
    correctIndex: 2,
    explanation: "Standard reinforced concrete silo walls require structural thicknesses between 15 and 20 cm to resist high outward lateral pressure exerted by stored silage or grain."
  },
  {
    question: "60. Column reinforcement in RCC uses:",
    options: ["A. Wood bars", "B. Aluminum rods", "C. Steel bars", "D. PVC pipe"],
    correctIndex: 2,
    explanation: "Steel rebar is used in concrete columns due to its high tensile yield strength and matching thermal expansion coefficient with concrete."
  },
  {
    question: "61. Type of footing commonly used for individual columns:",
    options: ["A. Strip footing", "B. Combined footing", "C. Isolated footing", "D. Mat footing"],
    correctIndex: 2,
    explanation: "Isolated (pad) footings are individual reinforced concrete slabs situated under individual structural columns to safely distribute single point loads into subsoils."
  },
  {
    question: "62. Minimum number of bricks per m³ in wall construction (standard size):",
    options: ["A. 300", "B. 400", "C. 500", "D. 550"],
    correctIndex: 2,
    explanation: "Considering standard modular bricks (190×90×90 mm) along with standard 10 mm mortar joint allowances, 1 cubic meter of brickwork contains 500 bricks."
  },
  {
    question: "63. In RCC, minimum cover to reinforcement for slabs:",
    options: ["A. 10 mm", "B. 15 mm", "C. 20 mm", "D. 25 mm"],
    correctIndex: 1,
    explanation: "Concrete codes specify a minimum clear cover of 15 mm over slab rebar to protect steel against corrosion and ensure adequate fire resistance."
  },
  {
    question: "64. Best material for low-cost rural latrine slab:",
    options: ["A. Wood", "B. GI sheet", "C. Precast concrete", "D. Brick"],
    correctIndex: 2,
    explanation: "Precast concrete slabs are economical, impervious to moisture and feces, easily washable, highly durable, and easily mass-produced locally."
  },
  {
    question: "65. Which factor affects the strength of concrete most?",
    options: ["A. Type of aggregate", "B. Water–cement ratio", "C. Curing time", "D. Color of cement"],
    correctIndex: 1,
    explanation: "According to Abram's Law, the water-cement ratio is the primary determinant of concrete strength; lower w/c ratios increase density and strength, provided the mix remains workable."
  },
  {
    question: "66. Farm roads are laid considering:",
    options: ["A. Animal traffic only", "B. Drainage, gradient, traffic", "C. Soil type only", "D. Seasonal crops"],
    correctIndex: 1,
    explanation: "Comprehensive farm road design must integrate surface drainage ditches, manageable slope gradients, subgrade soil strength, and expected vehicular axle loads."
  },
  {
    question: "67. Proper ventilation in dairy housing ensures:",
    options: ["A. Increased feed requirement", "B. Lower milk yield", "C. Lower heat stress", "D. More bedding waste"],
    correctIndex: 2,
    explanation: "Continuous airflow reduces heat stress in dairy cows, allowing them to maintain metabolic efficiency, dry matter intake, and optimum milk yield."
  },
  {
    question: "68. Raised floor in goat house helps in:",
    options: ["A. Feeding goats", "B. Reducing cost", "C. Preventing foot rot", "D. Decoration"],
    correctIndex: 2,
    explanation: "Slotted raised floors allow urine and feces to fall through, keeping hooves clean and dry to prevent foot rot and parasitic diseases."
  },
  {
    question: "69. In hot climates, roofing material with high reflectivity:",
    options: ["A. Increases heat", "B. Reduces heat gain", "C. Weakens structure", "D. Absorbs water"],
    correctIndex: 1,
    explanation: "High solar reflectance index (SRI) roofing reflects radiant sunlight away from the structure, significantly lowering ceiling temperatures and interior heat buildup."
  },
  {
    question: "70. Recommended wall thickness for load-bearing wall in single-storey farm structure:",
    options: ["A. 75 mm", "B. 100 mm", "C. 230 mm", "D. 300 mm"],
    correctIndex: 2,
    explanation: "Standard 230 mm (9-inch or 1-brick thick) masonry walls provide necessary structural buckling stability and axial compression strength for load-bearing walls."
  },
  {
    question: "71. A flat roof is least preferred in:",
    options: ["A. Cold region", "B. Windy area", "C. Heavy rainfall area", "D. Humid zone"],
    correctIndex: 2,
    explanation: "Flat roofs are poorly suited for high rainfall zones because slow surface water drainage leads to water ponding, leaks, and rapid structural deterioration."
  },
  {
    question: "72. Which of the following increases concrete strength?",
    options: ["A. Adding more sand", "B. Excess water", "C. Proper curing", "D. Mixing quickly"],
    correctIndex: 2,
    explanation: "Proper wet curing facilitates continuous hydration of cement compounds over time, building a dense calcium silicate hydrate gel structure."
  },
  {
    question: "73. Which of the following materials is used for waterproofing?",
    options: ["A. Cement", "B. Bitumen", "C. Bricks", "D. Sand"],
    correctIndex: 1,
    explanation: "Bitumen is a hydrophobic viscous hydrocarbon compound widely applied as liquid membranes or asphalt felts to block water penetration."
  },
  {
    question: "74. Maximum allowable moisture in stored maize:",
    options: ["A. 5%", "B. 10%", "C. 13%", "D. 18%"],
    correctIndex: 2,
    explanation: "Maize must be dried down to 13% moisture content or lower prior to long-term storage to prevent mold proliferation and insect reproduction."
  },
  {
    question: "75. In RCC design, bar spacing is measured in:",
    options: ["A. cm", "B. mm", "C. inch", "D. ft"],
    correctIndex: 1,
    explanation: "Structural engineering drawings express center-to-center reinforcement bar spacing in millimeters (mm) for precise positioning."
  },
  {
    question: "76. Hay shed is usually built with:",
    options: ["A. RCC", "B. Metal sheet with ventilation", "C. Brick wall and no roof", "D. Soil wall"],
    correctIndex: 1,
    explanation: "A corrugated metal roof supported on open posts offers low-cost weather protection while enabling constant cross-ventilation to dry hay."
  },
  {
    question: "77. Which is used for vertical reinforcement in RCC column?",
    options: ["A. Lateral stirrup", "B. Main bars", "C. Tie bar", "D. Dowel"],
    correctIndex: 1,
    explanation: "Longitudinal vertical main bars handle bending moments and axial compressive stresses in RCC columns, held in place by transverse ties."
  },
  {
    question: "78. The best layout for a poultry house in hilly areas is:",
    options: ["A. Along slope", "B. Random", "C. Contour-aligned", "D. Inside forest"],
    correctIndex: 2,
    explanation: "Aligning farm structure layouts along elevation contours minimizes earth excavation, simplifies foundation construction, and prevents runoff erosion."
  },
  {
    question: "79. Cement sets faster in:",
    options: ["A. Dry and cool condition", "B. Wet condition", "C. Hot and dry condition", "D. Under shade"],
    correctIndex: 2,
    explanation: "Elevated ambient temperatures accelerate the exothermic chemical hydration reaction of cement minerals, causing concrete to set rapidly."
  },
  {
    question: "80. Rat guards in silos are made of:",
    options: ["A. Rubber", "B. Plastic", "C. Metal sheets", "D. Brick rings"],
    correctIndex: 2,
    explanation: "Smooth galvanized sheet metal cones or collars attached to elevated support legs prevent rodents from gripping or scaling up into storage structures."
  },
  {
    question: "81. The main function of reinforcement in concrete:",
    options: ["A. Reduce cost", "B. Increase workability", "C. Take tensile stress", "D. Make concrete flexible"],
    correctIndex: 2,
    explanation: "Concrete has high compressive strength but poor tensile capacity (approx 10% of compressive). Embedded steel bars absorb internal tensile stresses."
  },
  {
    question: "82. Inverted “T” beam is used where:",
    options: ["A. No load", "B. Point loads are absent", "C. Beams support slabs", "D. Lintel beams are high"],
    correctIndex: 2,
    explanation: "Inverted T-beams provide wide bottom flanges that serve as resting ledges to support precast concrete floor slabs or joist systems."
  },
  {
    question: "83. Proper drainage around structures helps prevent:",
    options: ["A. Lighting", "B. Erosion and wall damage", "C. Termite attack", "D. Air pollution"],
    correctIndex: 1,
    explanation: "Surface drainage channels divert runoff away from structures, preventing foundation soil washing, water seepage, and moisture erosion at wall bases."
  },
  {
    question: "84. Structure to collect cow urine separately:",
    options: ["A. Gutter and soak pit", "B. Open field", "C. Drain tile", "D. Contour trench"],
    correctIndex: 0,
    explanation: "Sloped floor gutters collect liquid animal waste and channel it directly into covered collection tanks or soak pits for use as liquid fertilizer."
  },
  {
    question: "85. Solar passive design helps in:",
    options: ["A. Air conditioning", "B. Reducing light", "C. Natural ventilation and temperature control", "D. Water retention"],
    correctIndex: 2,
    explanation: "Solar passive design uses building orientation, thermal mass, overhang shading, and natural stack chimneys to regulate indoor climate without powered HVAC."
  },
  {
    question: "86. Agricultural produce drying floor should be:",
    options: ["A. Clayey", "B. Polished tile", "C. RCC or cemented with slope", "D. Gravel"],
    correctIndex: 2,
    explanation: "A sloped, smooth concrete surface absorbs solar heat to accelerate grain drying while enabling easy sweeping and preventing dirt contamination."
  },
  {
    question: "87. The symbol “Fe500” on steel bars indicates:",
    options: ["A. Diameter", "B. Weight", "C. Tensile strength", "D. Length"],
    correctIndex: 2,
    explanation: "The 'Fe500' grade designation specifies high-yield strength steel reinforcement bars having a minimum yield strength of 500 N/mm²."
  },
  {
    question: "88. For earthquake resistance, the farm structure should:",
    options: ["A. Be very tall", "B. Be heavy", "C. Be rigid with foundation ties", "D. Be made of mud"],
    correctIndex: 2,
    explanation: "Seismic resistance relies on structural integrity—tying structural components, columns, and foundations together into a unified load path."
  },
  {
    question: "89. Foundation depth in black cotton soil should be:",
    options: ["A. 30 cm", "B. 50 cm", "C. Below shrinkage layer (≥100 cm)", "D. Surface level"],
    correctIndex: 2,
    explanation: "Expansive clay soils undergo extreme volumetric swelling and shrinkage during wet-dry cycles; footings must extend deeper than 1.0 m to reach stable soil levels."
  },
  {
    question: "90. A properly ventilated grain bin reduces:",
    options: ["A. Mold and pests", "B. Storage life", "C. Air movement", "D. Light reflection"],
    correctIndex: 0,
    explanation: "Air movement through grain bins controls moisture migration and heat accumulation, preventing conditions that cause mold growth and insect infestation."
  },
  {
    question: "91. Farm buildings should be constructed using:",
    options: ["A. Local materials when feasible", "B. Imported wood", "C. Heavy steel", "D. Aluminum"],
    correctIndex: 0,
    explanation: "Utilizing locally available stone, timber, or masonry lowers capital costs, simplifies maintenance, and adapts well to regional climatic conditions."
  },
  {
    question: "92. The most economical foundation for small shed is:",
    options: ["A. Raft", "B. Pad footing", "C. Pile", "D. Isolated column"],
    correctIndex: 1,
    explanation: "Simple precast or cast-in-place concrete pad footings (spread footings) under structural posts are low-cost options for lightweight farm sheds."
  },
  {
    question: "93. Shed for machinery should have clearance height of at least:",
    options: ["A. 2 m", "B. 2.5 m", "C. 3.5–4.0 m", "D. 5 m"],
    correctIndex: 2,
    explanation: "Modern agricultural tractors, combine harvesters, and high-clearance equipment require clear door entry heights between 3.5 and 4.0 meters."
  },
  {
    question: "94. Lintel depth is generally:",
    options: ["A. 5 cm", "B. 10 cm", "C. 15–20 cm", "D. 30 cm"],
    correctIndex: 2,
    explanation: "Standard RCC lintel depth spans from 15 to 20 cm (matching standard brick course heights) to carry masonry loads across door/window openings."
  },
  {
    question: "95. The curing of concrete helps to:",
    options: ["A. Harden surface", "B. Strengthen structure", "C. Avoid cracks", "D. All of the above"],
    correctIndex: 3,
    explanation: "Sufficient wet curing ensures complete chemical cement hydration, increasing structural strength, hardening surface density, and preventing shrinkage cracking."
  },
  {
    question: "96. Vent pipe in toilet blocks prevents:",
    options: ["A. Flooding", "B. Foul gas accumulation", "C. Insects", "D. Rainwater entry"],
    correctIndex: 1,
    explanation: "Vertical ventilation pipes allow sewer gases (methane, hydrogen sulfide) generated in septic pits to safely vent up above the roofline."
  },
  {
    question: "97. Best wall plaster ratio (cement:sand) for farm building:",
    options: ["A. 1:1", "B. 1:3", "C. 1:4", "D. 1:6"],
    correctIndex: 3,
    explanation: "A 1:6 cement-sand mortar mix provides an economical, durable plaster layer for standard internal and external brick masonry walls."
  },
  {
    question: "98. Brick bonding pattern with strongest strength is:",
    options: ["A. Stretcher bond", "B. Header bond", "C. English bond", "D. Flemish bond"],
    correctIndex: 2,
    explanation: "English bond consists of alternating courses of headers and stretchers, producing a strong bond without continuous vertical joints."
  },
  {
    question: "99. Brick wall needs curing for at least:",
    options: ["A. 2 days", "B. 3–5 days", "C. 7 days", "D. 10–14 days"],
    correctIndex: 2,
    explanation: "Masonry mortar joints require continuous moist curing for at least 7 days to complete cement hydration and achieve full bond strength."
  },
  {
    question: "100. Load-bearing structures transfer load to:",
    options: ["A. Slab", "B. Wall", "C. Foundation", "D. Roof beam"],
    correctIndex: 2,
    explanation: "In load-bearing wall systems, gravity loads travel from roof elements directly down through structural walls to the underlying foundation soil."
  }

  ];

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-6 pb-32">
    <h1 className="text-2xl md:text-3xl font-bold text-center text-teal-700 mb-1">
        Design of Farm Structures
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Answer all questions to see instant feedback and explanations.
      </p>

      <Quiz chapterTitle="Chapter 6" questions={questions} />
    </main>
  );
}