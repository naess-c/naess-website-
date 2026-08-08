import Quiz from "../../components/Quiz";

export default function Chapter1Page() {
  const questions = [
   
  {
    question: "Which of the following is a property of cohesive soil?",
    options: ["High permeability", "High shear strength", "Low plasticity", "Low water retention"],
    correctIndex: 1,
    explanation: "Cohesive soils (like clays) exhibit inter-particle attractive forces that give them significant shear strength under dry or compacted conditions compared to cohesionless soils."
  },
  {
    question: "Which test determines the liquid limit of soil?",
    options: ["Proctor test", "CBR test", "Casagrande apparatus test", "Hydrometer test"],
    correctIndex: 2,
    explanation: "The Casagrande apparatus (or liquid limit device) measures the moisture content at which a soil passes from a plastic state to a liquid state."
  },
  {
    question: "Permeability is the property of soil to allow:",
    options: ["Air to pass", "Roots to grow", "Water to flow", "Electricity to flow"],
    correctIndex: 2,
    explanation: "Permeability refers specifically to the ease with which fluids (mainly water) can flow through interconnected void spaces in a soil mass."
  },
  {
    question: "Which soil is best for foundation?",
    options: ["Clay", "Loam", "Sand", "Gravel"],
    correctIndex: 3,
    explanation: "Gravel offers high load-bearing capacity, minimal settlement, high shear strength, and excellent drainage, making it an ideal foundation material."
  },
  {
    question: "What does the Atterberg limits measure?",
    options: ["Soil compaction", "Soil permeability", "Soil consistency", "Soil classification"],
    correctIndex: 2,
    explanation: "Atterberg limits (Liquid Limit, Plastic Limit, Shrinkage Limit) define the consistency states of fine-grained soils at varying water contents."
  },
  {
    question: "The most suitable soil for embankments is:",
    options: ["Gravel", "Silt", "Clayey sand", "Black cotton soil"],
    correctIndex: 2,
    explanation: "Clayey sand balances stability, good compaction characteristics, and low permeability, making it optimal for constructed embankments."
  },
  {
    question: "Which soil has the highest plasticity?",
    options: ["Sand", "Silt", "Gravel", "Clay"],
    correctIndex: 3,
    explanation: "Clay has fine particle sizes and surface electric charges that absorb water and allow significant deformation without cracking, leading to high plasticity."
  },
  {
    question: "Which soil has the highest permeability?",
    options: ["Clay", "Loam", "Silt", "Gravel"],
    correctIndex: 3,
    explanation: "Gravel consists of coarse particles creating large interconnecting voids, leading to the highest hydraulic conductivity (permeability)."
  },
  {
    question: "The standard proctor test is used to determine:",
    options: ["Moisture content", "Maximum dry density", "Liquid limit", "Cohesion"],
    correctIndex: 1,
    explanation: "The Standard Proctor test measures the relationship between water content and dry density to establish the maximum dry density (MDD) and optimum moisture content (OMC)."
  },
  {
    question: "Terzaghi’s theory is related to:",
    options: ["Flow net", "Permeability", "Bearing capacity", "Consolidation"],
    correctIndex: 2,
    explanation: "Karl Terzaghi developed a fundamental bearing capacity theory to determine the ultimate load a shallow foundation can withstand without shear failure."
  },
  {
    question: "Soil bearing capacity increases with:",
    options: ["Increase in water table", "Loose soil", "Dense compaction", "Silt presence"],
    correctIndex: 2,
    explanation: "Compacting soil increases its dry density, interlocking grains and significantly raising its shear strength and overall bearing capacity."
  },
  {
    question: "Which foundation is suitable for weak soil?",
    options: ["Spread footing", "Raft foundation", "Isolated footing", "Slab on grade"],
    correctIndex: 1,
    explanation: "A Raft (or Mat) foundation distributes structural loads over the entire footprint of the building, reducing soil bearing pressures on weak ground."
  },
  {
    question: "The angle of repose is related to:",
    options: ["Soil compaction", "Soil permeability", "Shear strength", "Soil density"],
    correctIndex: 2,
    explanation: "The natural angle of repose of a granular slope is directly equivalent to the soil's internal angle of friction, a key shear strength parameter."
  },
  {
    question: "Which soil has the least shear strength?",
    options: ["Sand", "Clay", "Silt", "Organic soil"],
    correctIndex: 3,
    explanation: "Organic soils (e.g., peat) possess high compressibility and extremely low mineral cohesion/friction, resulting in minimal shear strength."
  },
  {
    question: "The permeability of soil depends on:",
    options: ["Particle size", "Specific gravity", "Soil color", "Soil origin"],
    correctIndex: 0,
    explanation: "According to Hazen's formula ($k \\propto d_{10}^2$), permeability is heavily governed by the grain/particle size and pore distribution."
  },
  {
    question: "A soil with high plasticity index is:",
    options: ["Sand", "Clay", "Loam", "Gravel"],
    correctIndex: 1,
    explanation: "Plasticity Index ($PI = LL - PL$) is highest in highly plastic clays due to their mineral composition (such as montmorillonite)."
  },
  {
    question: "The unconfined compression test is used for:",
    options: ["Sandy soil", "Clayey soil", "Loam", "Gravel"],
    correctIndex: 1,
    explanation: "Unconfined compression testing is suitable for cohesive soils (clays) that can stand unconfined without lateral support during the test."
  },
  {
    question: "Which method is used to determine specific gravity of soil solids?",
    options: ["Pycnometer", "Oven drying", "Core cutter", "Hydrometer"],
    correctIndex: 0,
    explanation: "A Pycnometer (or specific gravity bottle) measures the density ratio of soil solid particles relative to distilled water."
  },
  {
    question: "The void ratio is defined as:",
    options: ["Vv/Vt", "Vv/Vs", "Vs/Vt", "Vt/Vv"],
    correctIndex: 1,
    explanation: "Void ratio ($e$) is defined as the volume of voids ($V_v$) divided by the volume of solid particles ($V_s$)."
  },
  {
    question: "Which soil retains water the most?",
    options: ["Gravel", "Sand", "Silt", "Clay"],
    correctIndex: 3,
    explanation: "Clay has tiny pore spaces and high surface area per unit mass, giving it extremely high capillary forces and water retention ability."
  },
  {
    question: "The most compressible soil is:",
    options: ["Clay", "Silt", "Sand", "Gravel"],
    correctIndex: 0,
    explanation: "Clay possesses higher void ratios and undergoes prolonged primary consolidation settlement under external structural loads."
  },
  {
    question: "Which soil shows capillary rise the most?",
    options: ["Gravel", "Sand", "Clay", "Loam"],
    correctIndex: 2,
    explanation: "Capillary rise is inversely proportional to pore radius; fine-grained clays have small pore channels that allow significant capillary elevation."
  },
  {
    question: "The ratio of weight of water to weight of solids is:",
    options: ["Degree of saturation", "Water content", "Specific gravity", "Void ratio"],
    correctIndex: 1,
    explanation: "Water content ($w$) is defined as $w = (W_w / W_s) \\times 100\\%$."
  },
  {
    question: "CBR stands for:",
    options: ["California Bearing Ratio", "Clay Bearing Ratio", "Compaction Bearing Ratio", "Concrete Bearing Resistance"],
    correctIndex: 0,
    explanation: "CBR stands for California Bearing Ratio, a penetration test used to evaluate the subgrade strength of roads and pavements."
  },
  {
    question: "The depth of foundation depends on:",
    options: ["Height of wall", "Water table", "Soil strength", "Load and soil type"],
    correctIndex: 3,
    explanation: "Foundation depth design relies primarily on applied structural loads, ultimate soil bearing capacity, and local soil layer characteristics."
  },
  {
    question: "Which foundation is used in bridges?",
    options: ["Shallow foundation", "Mat foundation", "Pile foundation", "Pad foundation"],
    correctIndex: 2,
    explanation: "Pile foundations (and deep caissons) transfer heavy bridge pier loads through water or weak riverbed sediments to deep, firm strata."
  },
  {
    question: "What does a high dry density indicate?",
    options: ["Loose soil", "Wet soil", "Compacted soil", "Expansive soil"],
    correctIndex: 2,
    explanation: "High dry density signifies closely packed soil grains with minimal void space, which is achieved through mechanical compaction."
  },
  {
    question: "The IS soil classification system is based on:",
    options: ["Grain size", "Soil color", "Organic content", "Depth"],
    correctIndex: 0,
    explanation: "The Indian Standard (IS) system classifies soils using grain size distribution combined with plastic properties (Atterberg limits)."
  },
  {
    question: "Which soil property affects slope stability most?",
    options: ["Permeability", "Plasticity", "Shear strength", "Particle shape"],
    correctIndex: 2,
    explanation: "Slope failure occurs when gravitational shear stresses exceed the soil's internal shear strength (cohesion and friction)."
  },
  {
    question: "What is the range of specific gravity for most soils?",
    options: ["1.0–1.5", "2.0–2.9", "3.0–3.5", "4.0–5.0"],
    correctIndex: 1,
    explanation: "Inorganic soils typically display specific gravity values ranging between $2.65$ and $2.85$ (overall span roughly $2.0$ to $2.9$)."
  },
  {
    question: "The permeability of silt is:",
    options: ["Very low", "Medium", "Very high", "Zero"],
    correctIndex: 0,
    explanation: "Silts consist of small grains, leading to fine channels and low hydraulic conductivity ($10^{-4}$ to $10^{-6}\\text{ cm/s}$)."
  },
  {
    question: "Which test gives liquid limit and plastic limit?",
    options: ["Hydrometer", "Sieve analysis", "Atterberg limits test", "Proctor test"],
    correctIndex: 2,
    explanation: "The Atterberg limits test determines the boundary moisture contents (Liquid Limit and Plastic Limit) between consistency states."
  },
  {
    question: "Quick condition in soil occurs when:",
    options: ["Drying occurs", "Water table falls", "Upward seepage equals submerged weight", "Water table is low"],
    correctIndex: 2,
    explanation: "Quick condition occurs when upward seepage pressure balances the buoyant unit weight of soil, reducing effective stress to zero."
  },
  {
    question: "Liquidity index is related to:",
    options: ["Shear strength", "Soil structure", "Plasticity", "Consistency limits"],
    correctIndex: 3,
    explanation: "Liquidity index ($I_L$) indicates the natural water content relative to Atterberg consistency limits ($I_L = \\frac{w - PL}{PI}$)."
  },
  {
    question: "Soil compaction increases:",
    options: ["Permeability", "Void ratio", "Strength", "Compressibility"],
    correctIndex: 2,
    explanation: "Compaction expels air voids, packing grains tightly together to enhance ultimate shear strength and load resistance."
  },
  {
    question: "What is the dry density if bulk density is 1.8 g/cm³ and water content is 10%?",
    options: ["1.6 g/cm³", "2.0 g/cm³", "1.5 g/cm³", "1.65 g/cm³"],
    correctIndex: 0,
    explanation: "Dry density $\\rho_d = \\frac{\\rho}{1 + w} = \\frac{1.8}{1 + 0.10} = \\frac{1.8}{1.1} \\approx 1.636 \\text{ g/cm}^3$ (closest match is 1.6 g/cm³)."
  },
  {
    question: "Which soil has a plastic limit but no liquid limit?",
    options: ["Sand", "Silt", "Loam", "Clay"],
    correctIndex: 0,
    explanation: "Cohesionless sand lacks plasticity entirely; it cannot be formed into threads, hence it is classified as non-plastic (NP)."
  },
  {
    question: "Which test is used to find optimum moisture content?",
    options: ["Proctor Test", "Unconfined compression", "Triaxial test", "Permeability test"],
    correctIndex: 0,
    explanation: "The Proctor Compaction Test plots dry density versus moisture content to determine Optimum Moisture Content (OMC)."
  },
  {
    question: "Pile foundation is suitable for:",
    options: ["Firm soil", "Rocky soil", "Loose soil", "Compacted soil"],
    correctIndex: 2,
    explanation: "Piles pass through top layers of weak, loose, or soft soils to transfer structure loads to lower firm strata."
  },
  {
    question: "Which condition indicates fully saturated soil?",
    options: ["Sr = 100%", "Sr = 50%", "Sr = 25%", "Sr = 0%"],
    correctIndex: 0,
    explanation: "Degree of saturation ($S_r$) measures the fraction of void space filled with water; $S_r = 100\\%$ signifies complete saturation."
  },
  {
    question: "What is e = Vv/Vs called?",
    options: ["Porosity", "Degree of saturation", "Void ratio", "Specific gravity"],
    correctIndex: 2,
    explanation: "By definition, void ratio ($e$) is the ratio of void volume ($V_v$) to solid particle volume ($V_s$)."
  },
  {
    question: "The clay mineral responsible for swelling is:",
    options: ["Kaolinite", "Montmorillonite", "Illite", "Feldspar"],
    correctIndex: 1,
    explanation: "Montmorillonite has weak interlayer bonds that easily absorb water, causing expansive swelling and severe shrinkage upon drying."
  },
  {
    question: "Triaxial test is used for:",
    options: ["Permeability", "Strength", "Porosity", "Specific gravity"],
    correctIndex: 1,
    explanation: "The triaxial shear test measures the shear strength parameters ($c$ and $\\phi$) of soil under controlled principal stress states."
  },
  {
    question: "In cohesive soil, lateral earth pressure is:",
    options: ["Zero", "Low", "High", "Negligible"],
    correctIndex: 2,
    explanation: "Cohesive forces reduce lateral earth pressures overall, though active earth pressure exerts significant stress profiles compared to cohesionless soils when unsupported."
  },
  {
    question: "Earth pressure theories include all except:",
    options: ["Rankine", "Coulomb", "Terzaghi", "Bernoulli"],
    correctIndex: 3,
    explanation: "Bernoulli’s theorem applies to fluid mechanics, whereas Rankine, Coulomb, and Terzaghi developed geotechnical earth pressure/stability theories."
  },
  {
    question: "Consolidation settlement occurs due to:",
    options: ["Elastic deformation", "Soil erosion", "Expulsion of water", "Capillary action"],
    correctIndex: 2,
    explanation: "Consolidation is a time-dependent process involving gradual water expulsion from saturated low-permeability clay pores under pressure."
  },
  {
    question: "Clay shows:",
    options: ["High permeability", "High strength", "Plastic behavior", "Elasticity"],
    correctIndex: 2,
    explanation: "Clay exhibits plastic behavior, meaning it can be deformed and remolded under water variation without fracturing."
  },
  {
    question: "Critical hydraulic gradient is used for:",
    options: ["Stability of dams", "Settlement", "Quick sand condition", "Permeability"],
    correctIndex: 2,
    explanation: "The critical hydraulic gradient ($i_c = \\frac{G-1}{1+e}$) is the gradient at which quicksand condition (zero effective stress) develops."
  },
  {
    question: "Which foundation is used where space is limited?",
    options: ["Spread footing", "Strip footing", "Combined footing", "Raft footing"],
    correctIndex: 2,
    explanation: "Combined footings are used along boundary lines or tightly packed column grid lines where individual spread footings would overlap."
  },
  {
    question: "Soil mechanics deals with:",
    options: ["Rock cutting", "Cement testing", "Behavior of soil", "Steel bending"],
    correctIndex: 2,
    explanation: "Soil mechanics is the branch of engineering mechanics that studies the physical and structural behavior of soils under loads."
  },
  {
    question: "Load bearing capacity is expressed in:",
    options: ["N", "kN/m²", "kg", "m²"],
    correctIndex: 1,
    explanation: "Bearing capacity is force per unit footprint area, expressed in $\\text{kN/m}^2$ or $\\text{kPa}$."
  },
  {
    question: "Core cutter test is used to find:",
    options: ["Bulk density", "Shear strength", "Void ratio", "Liquid limit"],
    correctIndex: 0,
    explanation: "The core cutter field test extracts a known soil volume to calculate its in-situ bulk density."
  },
  {
    question: "A well-graded soil contains:",
    options: ["Particles of same size", "Uniform distribution", "Variety of sizes", "Only clay particles"],
    correctIndex: 2,
    explanation: "Well-graded soil consists of a good distribution of particles across a wide spectrum of grain sizes."
  },
  {
    question: "Soil liquefaction occurs during:",
    options: ["Rainfall", "Drought", "Earthquake", "Flood"],
    correctIndex: 2,
    explanation: "Cyclic seismic shaking during earthquakes builds excess pore water pressure in saturated loose sands, triggering liquefaction."
  },
  {
    question: "The term “black cotton soil” refers to:",
    options: ["Non-swelling soil", "Expansive clay", "Sandy loam", "Silty soil"],
    correctIndex: 1,
    explanation: "Black cotton soil contains high percentages of montmorillonite clay, making it highly expansive (swells and shrinks)."
  },
  {
    question: "The plate load test is used to determine:",
    options: ["Liquid limit", "Permeability", "Bearing capacity", "Shear strength"],
    correctIndex: 2,
    explanation: "The field plate load test determines the ultimate bearing capacity and probable settlement of foundations."
  },
  {
    question: "Which is not a soil classification method?",
    options: ["AASHTO", "IS", "USDA", "BIS"],
    correctIndex: 3,
    explanation: "BIS stands for Bureau of Indian Standards (an organization); AASHTO, IS, and USDA are specific soil classification systems."
  },
  {
    question: "Maximum dry density occurs at:",
    options: ["High water content", "OMC", "Zero moisture", "Saturated condition"],
    correctIndex: 1,
    explanation: "During compaction, maximum dry density (MDD) is achieved precisely at Optimum Moisture Content (OMC)."
  },
  {
    question: "Which soil is non-cohesive?",
    options: ["Clay", "Silt", "Sand", "Loam"],
    correctIndex: 2,
    explanation: "Sand consists of coarse particles held together purely by inter-particle friction rather than chemical or interparticle cohesion."
  },
  {
    question: "Soil erosion can be prevented by:",
    options: ["Ploughing", "Overgrazing", "Contour bunding", "Excess irrigation"],
    correctIndex: 2,
    explanation: "Contour bunding creates earthen barriers along land contours to slow runoff and mitigate surface soil erosion."
  },
  {
    question: "Soil consistency is defined by:",
    options: ["Atterberg limits", "Water table depth", "Specific gravity", "Soil compaction"],
    correctIndex: 0,
    explanation: "Consistency describes the physical firmness of fine-grained soil at various moisture levels as quantified by Atterberg limits."
  },
  {
    question: "The unit of permeability is:",
    options: ["m", "m²", "m/s", "m³/s"],
    correctIndex: 2,
    explanation: "Permeability (hydraulic conductivity) measures flow velocity under a unit hydraulic gradient, expressed in $\\text{m/s}$ or $\\text{cm/s}$."
  },
  {
    question: "The triaxial test is preferred over the direct shear test because it:",
    options: ["Is cheaper", "Takes less time", "Can simulate drainage conditions", "Is used for rock"],
    correctIndex: 2,
    explanation: "Triaxial tests allow control over drainage conditions (UU, CU, CD) and uniform internal stress control along failure planes."
  },
  {
    question: "Which foundation is most suitable for waterlogged areas?",
    options: ["Mat", "Spread", "Pile", "Raft"],
    correctIndex: 2,
    explanation: "Piles transfer heavy foundation loads down through soft, weak, or waterlogged strata to solid deep soil or bedrock."
  },
  {
    question: "Degree of saturation is expressed in:",
    options: ["kg/m³", "%", "kPa", "Unitless"],
    correctIndex: 1,
    explanation: "Degree of saturation ($S_r = V_w/V_v$) is dimensionless and universally stated as a percentage ($0\\%$ to $100\\%$)."
  },
  {
    question: "Which is not a method of soil stabilization?",
    options: ["Lime stabilization", "Bituminous stabilization", "Watering", "Cement stabilization"],
    correctIndex: 2,
    explanation: "Adding water softens cohesive soil; stabilization methods rely on additives like cement, lime, or bitumen to increase strength."
  },
  {
    question: "The capillary rise is inversely proportional to:",
    options: ["Soil moisture", "Pore size", "Specific gravity", "Clay content"],
    correctIndex: 1,
    explanation: "Capillary height $h_c = \\frac{4T}{\\gamma_w d}$; smaller pore dimensions ($d$) yield significantly higher capillary rise."
  },
  {
    question: "A silty soil is characterized by:",
    options: ["High plasticity", "Low cohesion", "High strength", "High permeability"],
    correctIndex: 1,
    explanation: "Silts possess minimal plasticity and low cohesive strength compared to pure clays."
  },
  {
    question: "Soil bearing capacity is improved by:",
    options: ["Wetting", "Excavation", "Compaction", "Seepage"],
    correctIndex: 2,
    explanation: "Compacting soil expels air voids, raises dry density, and directly increases shear strength and bearing capacity."
  },
  {
    question: "What is the function of geotextiles in foundations?",
    options: ["Load transfer", "Drainage and filtration", "Decoration", "Settlement"],
    correctIndex: 1,
    explanation: "Geotextile synthetics serve primary engineering roles in separation, filtration, drainage, and structural reinforcement."
  },
  {
    question: "A soil is said to be dense if its relative density is:",
    options: ["< 10%", "10%–50%", "50%–70%", "> 70%"],
    correctIndex: 3,
    explanation: "Relative density ($D_r$) above $70\\%$ (specifically $70\\% - 85\\%$) defines a dense coarse-grained soil mass."
  },
  {
    question: "The major stress in saturated soil is:",
    options: ["Effective stress", "Pore pressure", "Total stress", "Net stress"],
    correctIndex: 0,
    explanation: "Effective stress drives soil deformation and shear strength by representing stress carried directly by the soil skeleton."
  },
  {
    question: "If void ratio = 0.5, porosity is approximately:",
    options: ["33%", "40%", "50%", "60%"],
    correctIndex: 0,
    explanation: "Porosity $n = \\frac{e}{1 + e} = \\frac{0.5}{1 + 0.5} = \\frac{0.5}{1.5} = 33.33\\%$."
  },
  {
    question: "Which of the following is a cohesionless soil?",
    options: ["Loam", "Silt", "Sand", "Clay"],
    correctIndex: 2,
    explanation: "Sand consists of granular particles that derive shear resistance solely through surface friction ($c = 0$)."
  },
  {
    question: "The ultimate bearing capacity is:",
    options: ["Minimum pressure a soil can bear", "Maximum pressure a soil can bear", "Average soil strength", "Settling limit"],
    correctIndex: 1,
    explanation: "Ultimate bearing capacity ($q_u$) is the maximum gross pressure a foundation soil can support before undergoing shear failure."
  },
  {
    question: "Which condition causes shear failure in foundation soil?",
    options: ["Drying", "Wetting", "Overloading", "Compacting"],
    correctIndex: 2,
    explanation: "Applying structural loads beyond the ultimate bearing limit forces shear stress to exceed soil shear capacity, causing failure."
  },
  {
    question: "Which test is done to classify fine-grained soils?",
    options: ["Sieve analysis", "Hydrometer analysis", "Proctor test", "CBR test"],
    correctIndex: 1,
    explanation: "Hydrometer analysis measures settling velocity of fine particles passing $75\\,\\mu\\text{m}$ sieves based on Stokes' Law."
  },
  {
    question: "Saturated unit weight is:",
    options: ["Dry weight", "Wet weight without water", "Weight including water", "Weight of solids only"],
    correctIndex: 2,
    explanation: "Saturated unit weight is the total soil weight per unit volume when all interparticle voids are completely filled with water."
  },
  {
    question: "What is the typical value of G (specific gravity) for soil solids?",
    options: ["1.0", "2.65", "3.25", "4.0"],
    correctIndex: 1,
    explanation: "Standard inorganic quartz sand and clay solids average a specific gravity ($G_s$) around $2.65$."
  },
  {
    question: "Which property governs capillarity in soil?",
    options: ["Gravity", "Adhesion", "Cohesion", "Surface tension"],
    correctIndex: 3,
    explanation: "Liquid surface tension combined with adhesion forces causes water to draw upward through fine soil pores."
  },
  {
    question: "Plate load test is conducted at:",
    options: ["Factory", "Laboratory", "Construction site", "Office"],
    correctIndex: 2,
    explanation: "Plate load testing is an in-situ field measurement performed inside excavated foundation pits directly on site."
  },
  {
    question: "Relative density is applicable to:",
    options: ["Cohesive soils", "Organic soils", "Cohesionless soils", "Loam"],
    correctIndex: 2,
    explanation: "Relative density ($D_r$) measures compactness only in non-cohesive coarse soils like sands and gravels."
  },
  {
    question: "Clayey soils have:",
    options: ["Low water holding", "High shrinkage", "High permeability", "High particle size"],
    correctIndex: 1,
    explanation: "Clays undergo volume reduction (shrinkage) upon loss of moisture due to high surface suction and fine particle structures."
  },
  {
    question: "Critical depth is related to:",
    options: ["Slopes", "Channels", "Settlement", "Seepage"],
    correctIndex: 1,
    explanation: "Critical depth is an important hydraulic concept relating to open channel flows and slope stability calculations in excavation."
  },
  {
    question: "Which drainage method is suitable for black cotton soil?",
    options: ["Open ditch", "Tile drain", "Subsurface drain", "Deep boring"],
    correctIndex: 1,
    explanation: "Tile drainage systems collect and remove water effectively to control moisture variations in expansive clay formations."
  },
  {
    question: "The failure of slope due to rainfall is because of:",
    options: ["Increase in friction", "Decrease in cohesion", "Increase in permeability", "Loss of mass"],
    correctIndex: 1,
    explanation: "Rain saturation elevates pore water pressure, reducing effective stress and causing significant reduction in effective cohesion."
  },
  {
    question: "The shear strength of soil depends on:",
    options: ["Cohesion and angle of internal friction", "Size of container", "Soil color", "Moisture alone"],
    correctIndex: 0,
    explanation: "According to Mohr-Coulomb theory ($\tau = c + \sigma \tan \phi$), shear strength is governed by cohesion ($c$) and friction angle ($\phi$)."
  },
  {
    question: "Coefficient of consolidation is used in:",
    options: ["Compaction", "Consolidation", "Shear strength", "Friction"],
    correctIndex: 1,
    explanation: "The coefficient of consolidation ($C_v$) quantifies the rate at which saturated clay undergoes primary settlement under load."
  },
  {
    question: "Water table is measured by:",
    options: ["Rain gauge", "Piezometer", "Theodolite", "Densiometer"],
    correctIndex: 1,
    explanation: "A piezometer measures hydrostatic water pressure and groundwater table levels in soil boreholes."
  },
  {
    question: "Unconfined compressive strength of clay is:",
    options: ["Equal to its tensile strength", "Half of shear strength", "Twice shear strength", "Same as cohesion"],
    correctIndex: 2,
    explanation: "For undrained conditions ($\phi = 0$), unconfined compressive strength ($q_u$) equals double the undrained cohesion ($q_u = 2c_u$)."
  },
  {
    question: "Organic soils have:",
    options: ["High density", "Low compressibility", "High void ratio", "High bearing capacity"],
    correctIndex: 2,
    explanation: "Organic deposits contain porous, lightweight decaying matter resulting in high initial void ratios and high settlement potential."
  },
  {
    question: "Which of these shows highest settlement under loading?",
    options: ["Sand", "Loam", "Clay", "Gravel"],
    correctIndex: 2,
    explanation: "Clay experiences the largest magnitude of long-term settlement due to high compressibility and high initial void ratios."
  },
  {
    question: "Degree of compaction is checked using:",
    options: ["Cone penetration test", "Plate load test", "Nuclear density test", "Direct shear test"],
    correctIndex: 2,
    explanation: "Nuclear density gauges measure in-place dry density and moisture content quickly to assess compaction field compliance."
  },
  {
    question: "Which is most suitable to improve expansive soil?",
    options: ["Blasting", "Grouting", "Lime stabilization", "Compaction"],
    correctIndex: 2,
    explanation: "Lime treatment modifies expansive clay minerals through cation exchange, significantly reducing swell potential and plasticity."
  },
  {
    question: "What causes upward flow of groundwater?",
    options: ["Gravity", "Pressure gradient", "Heat", "Temperature"],
    correctIndex: 1,
    explanation: "Water flows vertically upward against gravity whenever a higher hydraulic head (pressure gradient) exists at lower depths."
  },
  {
    question: "Lateral earth pressure is due to:",
    options: ["Load", "Depth", "Retaining structure", "Soil backfill"],
    correctIndex: 3,
    explanation: "The self-weight and lateral thrust of soil backfill against a retaining wall induce lateral earth pressure."
  },
  {
    question: "Which soil classification method is used in highways?",
    options: ["IS", "USDA", "AASHTO", "BIS"],
    correctIndex: 2,
    explanation: "The AASHTO (American Association of State Highway and Transportation Officials) system classifies subgrade soils for pavement design."
  },
  {
    question: "Darcy's law is valid only for:",
    options: ["Turbulent flow", "Steady non-uniform flow", "Laminar flow", "Unsteady flow"],
    correctIndex: 2,
    explanation: "Darcy's law ($v = ki$) holds true under laminar flow conditions ($Re \le 1$) within fine-to-medium soil voids."
  },
  {
    question: "Ultimate settlement includes:",
    options: ["Immediate + primary consolidation", "Only primary", "Only secondary", "Total minus elastic"],
    correctIndex: 0,
    explanation: "Total ultimate settlement is calculated as the sum of immediate elastic settlement, primary consolidation, and secondary compression."
  },
  {
    question: "The primary function of foundation is to:",
    options: ["Improve aesthetics", "Withstand earthquake", "Transfer load to soil", "Reduce material cost"],
    correctIndex: 2,
    explanation: "A foundation safely distributes dead and live loads from the upper structure onto underlying soil or rock layers without exceeding bearing capacity."
  }
];



  return (
   <main className="min-h-screen bg-gray-50 py-8 px-6 pb-32">
    <h1 className="text-2xl md:text-3xl font-bold text-center text-teal-700 mb-1">
        Soil Mechanics and Foundation Engineering
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Answer all questions to see instant feedback and explanations.
      </p>

      <Quiz chapterTitle="Chapter 2" questions={questions} />
    </main>
  );
}