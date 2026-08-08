import Quiz from "../../components/Quiz";

export default function ModelQuestionPage() {
  const questions = [
    

  {
    question: "Modulus of elasticity is the stress when applied in a member will double the length due to",
    options: [
      "a) change in length = original length",
      "b) change in length = twice of original length",
      "c) final length = original length",
      "d) final length = half of original length"
    ],
    answer: "a) change in length = original length",
    explanation: "Hooke's law states Stress (σ) = E × Strain (ε). Since Strain = ΔL / L, when ΔL = L (change in length equals original length), Strain = 1, making Stress (σ) = Modulus of Elasticity (E). This causes the total length to double (L + L = 2L)."
  },
  {
    question: "Profound lumps of cement in a bag shall be confirmed instantly before its use by",
    options: [
      "a) consistency test",
      "b) soundness test",
      "c) freshness test",
      "d) setting time test"
    ],
    answer: "c) freshness test",
    explanation: "A freshness test in the field checks for air-set lumps by pressing them between fingers. If the lumps cannot be easily crushed, the cement has absorbed atmospheric moisture and aged, rendering it unfit for structural use."
  },
  {
    question: "Non-load bearing (e.g. compound wall) is generally constructed using stones in",
    options: [
      "a) ashlar fashion",
      "b) coursed rubble",
      "c) uncoursed rubble",
      "d) chamfered ashlar"
    ],
    answer: "c) uncoursed rubble",
    explanation: "Uncoursed rubble masonry uses randomly sized, undressed stones without regular horizontal courses, making it the most economical choice for non-load-bearing boundary or compound walls."
  },
  {
    question: "A body will appear mirror image with respect to",
    options: [
      "a) elastic neutral axis",
      "b) plastic neutral axis",
      "c) axis of symmetry",
      "d) neutral axis and axis of symmetry"
    ],
    answer: "c) axis of symmetry",
    explanation: "An axis of symmetry is a line or plane that divides a geometry into two identical, mirrored halves."
  },
  {
    question: "If a topographic map is prepared with 5m contour interval, then index contour is generally shown at",
    options: [
      "a) every 5th contour",
      "b) every 3rd contour",
      "c) every 10th contour",
      "d) every 7th contour"
    ],
    answer: "a) every 5th contour",
    explanation: "Standard drafting conventions designate every 5th contour line as an index contour, which is drawn heavier/thicker and labelled with its elevation to enhance readability."
  },
  {
    question: "Valuation of a currently running Bhat Bhateni supermarket shall be carried out more precisely by ................ methods of valuation",
    options: [
      "a) plinth area",
      "b) capitalized worth",
      "c) depreciated",
      "d) development"
    ],
    answer: "b) capitalized worth",
    explanation: "For commercial, income-generating properties like a running supermarket, valuation is based on the net annual income capitalized at a suitable rate of interest (Capitalized Worth / Income Capitalization Method)."
  },
  {
    question: "Which of the following property of soil is known for index property",
    options: [
      "a) size of particle",
      "b) shape of particle",
      "c) thixotropy",
      "d) shape and size of particle"
    ],
    answer: "d) shape and size of particle",
    explanation: "Index properties (such as grain size distribution, grain shape, Atterberg limits, and specific gravity) are used to classify and assess the engineering behavior of soils."
  },
  {
    question: "Compaction and consolidation are different because of",
    options: [
      "a) intensity of load applied",
      "b) equipment used for loading purpose",
      "c) expulsion of either air particle or water particle",
      "d) either reduction of void ratio or increasing density of soil"
    ],
    answer: "c) expulsion of either air particle or water particle",
    explanation: "Compaction is the rapid removal of air voids under dynamic or mechanical loads, whereas consolidation is the gradual expulsion of pore water under sustained static loads over time."
  },
  {
    question: "A pure sand has its shear strength due to",
    options: [
      "a) φ (friction angle)",
      "b) C (cohesion)",
      "c) C and φ",
      "d) void ratio of sand"
    ],
    answer: "a) φ (friction angle)",
    explanation: "Pure sand is a cohesionless soil (C = 0). Its shear strength relies entirely on internal friction among particles (c-phi shear strength equation τ = σ tan φ)."
  },
  {
    question: "For construction of bridge pier, precise soil test shall be carried out by taking sample through",
    options: [
      "a) digging a pit",
      "b) direct shear test",
      "c) sand piling",
      "d) standard split spoon sample"
    ],
    answer: "d) standard split spoon sample",
    explanation: "Deep foundations like bridge piers require deep subsurface exploration. A Standard Split Spoon Sampler is driven during standard penetration tests (SPT) to obtain soil samples from deep strata below water levels."
  },
  {
    question: "Shallow foundation is different from deep foundation in many aspects, one of the prominent aspects is",
    options: [
      "a) it has low depth",
      "b) it has wider width",
      "c) worker can enter purposefully",
      "d) only used in building construction"
    ],
    answer: "a) it has low depth",
    explanation: "According to Terzaghi, a foundation is classified as shallow if its depth (D) is less than or equal to its width (B), whereas deep foundations have depth significantly exceeding their width."
  },
  {
    question: "One of the greatest merits of raft foundation is",
    options: [
      "a) easier to construct than deep foundation",
      "b) stronger than deep foundation",
      "c) avoids unequal settlements",
      "d) avoids unnecessary costs for soil tests"
    ],
    answer: "c) avoids unequal settlements",
    explanation: "A raft (mat) foundation covers the entire footprint of a structure, distributing loads over a large area to bridge local soft spots and prevent differential (unequal) settlement."
  },
  {
    question: "A liquid of specific gravity 0.8 is heavier than water by ----------",
    options: [
      "a) 1.0",
      "b) 0.8 m",
      "c) 0.4 m",
      "d) 1.6 m"
    ],
    answer: "b) 0.8 m",
    explanation: "Specific gravity (S) expresses fluid pressure head in terms of equivalent water column height using h1 * S1 = h2 * S2. A 1 m head of a fluid with S = 0.8 exerts pressure equivalent to 0.8 m of water column head."
  },
  {
    question: "Working principle of hydraulic lift is based on",
    options: [
      "a) Bernoulli’s principle",
      "b) Archimedes’ principle",
      "c) Pascal’s Law",
      "d) Newton’s Law"
    ],
    answer: "c) Pascal’s Law",
    explanation: "Pascal's Law states that pressure applied to an enclosed static fluid is transmitted undiminished in all directions, allowing small input forces to lift heavy loads in hydraulic lifts."
  },
  {
    question: "Bernoulli’s equation is derived from",
    options: [
      "a) Kepler",
      "b) Laplace",
      "c) Euler",
      "d) Poisson"
    ],
    answer: "c) Euler",
    explanation: "Integrating Euler's equation of motion along a streamline for an incompressible, non-viscous fluid under steady flow yields Bernoulli's energy conservation equation."
  },
  {
    question: "Moody’s diagram for estimating head loss was originally developed for",
    options: [
      "a) Circular pipes",
      "b) Rectangular pipes",
      "c) Trapezoidal pipes",
      "d) Semi-circular pipes"
    ],
    answer: "a) Circular pipes",
    explanation: "Moody's diagram relates the Darcy-Weisbach friction factor, Reynolds number, and relative roughness specifically for fully developed flow in circular conduits."
  },
  {
    question: "If the flow parameters remain constant at any section along the flow at a particular instant of time, then flow is known as ..................flow",
    options: [
      "a) steady",
      "b) unsteady",
      "c) uniform",
      "d) nonuniform"
    ],
    answer: "c) uniform",
    explanation: "Uniform flow occurs when fluid properties (velocity, depth, cross-section) do not change with respect to space (distance) at a given instant (∂V/∂s = 0)."
  },
  {
    question: "The instrument used for measuring evaporation is",
    options: [
      "a) hygrometer",
      "b) evaporimeter",
      "c) lysimeter",
      "d) luxmeter"
    ],
    answer: "b) evaporimeter",
    explanation: "Evaporimeters (such as Class A evaporation pans) measure the rate of water evaporation into the atmosphere. (Lysimeters measure evapotranspiration)."
  },
  {
    question: "Which of the following type of irrigation method uses artificial rain-like system to irrigate the land?",
    options: [
      "a) sprinkler irrigation method",
      "b) furrow irrigation method",
      "c) drip irrigation method",
      "d) border irrigation method"
    ],
    answer: "a) sprinkler irrigation method",
    explanation: "Sprinkler irrigation applies water under high pressure through nozzles, spraying it over crops to emulate natural rainfall."
  },
  {
    question: "If Q and f are the discharge and silt factors, respectively, which of the following is the correct formula for the velocity?",
    options: [
      "a) (Q / 140 f^2)^(1/6)",
      "b) (Q f^2 / 140)^(1/6)",
      "c) (Q f^2 / 140)^(1/5)",
      "d) (Q f^2 / 160)^(1/6)"
    ],
    answer: "b) (Q f^2 / 140)^(1/6)",
    explanation: "According to Lacey's Regime Theory for alluvial channel design, flow velocity is expressed by V = [ (Q × f²) / 140 ]^(1/6)."
  },
  {
    question: "Subsurface drain removes ........................ water.",
    options: [
      "a) Gravitational Water",
      "b) Hygroscopic Water",
      "c) Capillary water",
      "d) Capillary and hygroscopic water"
    ],
    answer: "a) Gravitational Water",
    explanation: "Subsurface agricultural drains lower the local water table by allowing free gravitational water to drain away under the force of gravity without stripping plant-available capillary water."
  },
  {
    question: "Which of the following canal alignment encounters maximum number of cross-drainage works?",
    options: [
      "a) contour canal",
      "b) side slope canal",
      "c) detour canal",
      "d) ridge canal"
    ],
    answer: "a) contour canal",
    explanation: "A contour canal is aligned roughly parallel to ground contours, cutting across natural drainage valleys perpendicularly, thereby requiring numerous aqueducts, super-passages, or siphons."
  },
  {
    question: "Ring irrigation approach is categorized under ................... irrigation method.",
    options: [
      "a) Contour",
      "b) Border",
      "c) Furrow",
      "d) Check Basin"
    ],
    answer: "d) Check Basin",
    explanation: "Ring basin irrigation is a specialized variation of the check basin method commonly applied around individual trees in orchards to confine water to the root zone."
  },
  {
    question: "As per the mechanical principle of operation, reciprocating pumps are categorized under which of the following types?",
    options: [
      "a) turbine pumps",
      "b) displacement Pumps",
      "c) centrifugal Pumps",
      "d) propeller Pumps"
    ],
    answer: "b) displacement Pumps",
    explanation: "Reciprocating pumps trap a fixed volume of fluid inside a cylinder using a piston or plunger and displace it physically against discharge pressure (positive displacement pump)."
  },
  {
    question: "Power available from bullocks is related to its body weight is ……...",
    options: [
      "a) About 10% of body weight",
      "b) About 20% of body weight",
      "c) About 30% of body weight",
      "d) About 50% of body weight"
    ],
    answer: "a) About 10% of body weight",
    explanation: "In farm machinery power estimates, draft animals can continuously exert a sustainable pull force equal to approximately 10% (1/10th) of their total body weight."
  },
  {
    question: "The approximate proportion of the air-fuel in a diesel engine is …………",
    options: [
      "a) 10:1",
      "b) 20:1",
      "c) 15:1",
      "d) 5:1"
    ],
    answer: "b) 20:1",
    explanation: "Diesel engines operate lean to ensure complete combustion of injected fuel droplets, operating around a 20:1 air-to-fuel ratio (compared to the stoichiometric ~14.7:1 ratio of gasoline engines)."
  },
  {
    question: "What is the disc Angle of a disc plow generally?",
    options: [
      "a) 10°",
      "b) 20°",
      "c) 30°",
      "d) 45°"
    ],
    answer: "d) 45°",
    explanation: "The disc angle (angle between the plane of the cutting edge and the direction of travel) usually ranges from 42° to 45° to provide optimum furrow slice inversion and soil cutting."
  },
  {
    question: "The broken grain received from main outlet of thresher is due to ……",
    options: [
      "a) Less concave clearance",
      "b) Low speed of drum",
      "c) More concave clearance",
      "d) Small size of drum"
    ],
    answer: "a) Less concave clearance",
    explanation: "When clearance between the threshing cylinder drum and the concave grate is insufficient, excessive mechanical crushing forces shear and damage grain seeds."
  },
  {
    question: "The most commonly used pump in tractor hydraulic system is ………….",
    options: [
      "a) Centrifugal pump",
      "b) Reciprocating pump",
      "c) Gear pump",
      "d) Jet pump"
    ],
    answer: "c) Gear pump",
    explanation: "External gear pumps are simple, robust, compact, inexpensive, and deliver the steady high hydraulic pressures needed for tractor 3-point hitches."
  },
  {
    question: "Which of the following is the correct formula of shear stress encountered in the shaft for torsion?",
    options: [
      "a) τ = k_s * 16T / (π * d^3)",
      "b) τ = k_s * 8M / (π * d^3)",
      "c) τ = k_f * 32M / (π * d^3)",
      "d) τ = k_s * 32F / (π * d^3)"
    ],
    answer: "a) τ = k_s * 16T / (π * d^3)",
    explanation: "Torsional shear stress formula for a solid circular shaft of diameter d subjected to torque T is τ = (16T)/(π d³). Incorporating a shear stress factor k_s yields τ = k_s × (16T)/(π d³)."
  },
  {
    question: "What is the recommended maximum limit for deflection in reinforced concrete slabs?",
    options: [
      "a) L/180",
      "b) L/240",
      "c) L/360",
      "d) L/480"
    ],
    answer: "c) L/360",
    explanation: "Standard design codes (e.g., IS 456 / ACI) limit maximum live load deflection of floor slabs supporting delicate finishes to span / 360 (L/360) to prevent cracking."
  },
  {
    question: "What is the recommended minimum thickness of a two-way slab?",
    options: [
      "a) 100 mm",
      "b) 125 mm",
      "c) 150 mm",
      "d) 175 mm"
    ],
    answer: "a) 100 mm",
    explanation: "Standard building regulations mandate a absolute minimum structural thickness of 100 mm for two-way reinforced concrete floor slabs to satisfy shear and serviceability requirements."
  },
  {
    question: "What is the function of a farm residence?",
    options: [
      "a) To provide shelter for farm animals",
      "b) To provide a place for farm workers to live",
      "c) To serve as a storage area for farm equipment",
      "d) To provide living quarters for the farmer and their family"
    ],
    answer: "d) To provide living quarters for the farmer and their family",
    explanation: "A farm residence serves as the primary dwelling unit located on a farm structure specifically to house the farm owner/operator and family."
  },
  {
    question: "The purpose of a farm fence is ……….",
    options: [
      "a) to provide shade for crops",
      "b) to prevent soil erosion",
      "c) to control pests and diseases",
      "d) to keep animals in or out of a certain area"
    ],
    answer: "d) to keep animals in or out of a certain area",
    explanation: "Farm perimeter fences demarcate boundaries, keep livestock contained within pastures, and restrict wild animals or intruders from damaging crops."
  },
  {
    question: "Which of the following members can resist axial compression?",
    options: [
      "a) strut",
      "b) tie",
      "c) beam",
      "d) cable"
    ],
    answer: "a) strut",
    explanation: "A strut is a structural member designed primarily to resist axial compressive loads (unlike a tie, which carries axial tension)."
  },
  {
    question: "According to national building code (NBC) 202:2015, maximum unsupported length of long wall between cross walls shall be limited to",
    options: [
      "a) 4.0 m",
      "b) 4.5 m",
      "c) 5.0 m",
      "d) 5.5 m"
    ],
    answer: "c) 5.0 m",
    explanation: "Nepal National Building Code (NBC 202) for load-bearing masonry dictates that the maximum unsupported span of a main wall without transverse cross-walls or buttresses is 5.0 m to ensure lateral stability during seismic events."
  },
  {
    question: "The most popular method of potato planting is ……..",
    options: [
      "a) Dibbling",
      "b) Broadcasting",
      "c) Throwing",
      "d) Ridge & furrow method"
    ],
    answer: "d) Ridge & furrow method",
    explanation: "Planting seed tubers on raised ridges separated by furrows provides loose soil for tuber development, prevents waterlogging, and aids harvesting."
  },
  {
    question: "Which of the following is the unit of soil’s electrical conductivity?",
    options: [
      "a) dS/m",
      "b) poise/m",
      "c) ohm/m",
      "d) ds/m2"
    ],
    answer: "a) dS/m",
    explanation: "Soil electrical conductivity (EC), used to assess soil salinity, is standardized in deciSiemens per meter (dS/m)."
  },
  {
    question: "Which method is used for the estimation of Phosphorus in soil?",
    options: [
      "a) Olsen",
      "b) Jackson",
      "c) Bray",
      "d) Walkley and Black"
    ],
    answer: "a) Olsen",
    explanation: "Olsen's bicarbonate method (0.5 M NaHCO3 extraction) is widely used to estimate plant-available phosphorus in neutral-to-alkaline soils."
  },
  {
    question: "The average annual soil loss does not depend on ………",
    options: [
      "a) Rainfall Erosivity",
      "b) Soil Erodibility",
      "c) Crop Management",
      "d) Soil’s Moisture Content"
    ],
    answer: "d) Soil’s Moisture Content",
    explanation: "Under the Universal Soil Loss Equation (USLE: A = R × K × LS × C × P), soil erosion depends on rainfall erosivity (R), soil erodibility (K), slope factor (LS), cover management (C), and practice (P). Instantaneous soil moisture content is not an explicit USLE parameter."
  },
  {
    question: "Where check dams are constructed?",
    options: [
      "a) drainage lines and Gullies",
      "b) canal",
      "c) river",
      "d) ponds and Lakes"
    ],
    answer: "a) drainage lines and Gullies",
    explanation: "Check dams are small, temporary or permanent barriers constructed across active gullies or natural drainage channels to reduce flow velocity and trap sediment."
  },
  {
    question: "Which of the following is not a measure for Soil Conservation?",
    options: [
      "a) strip cropping",
      "b) terrace Cultivation",
      "c) shelter belts",
      "d) overdrawing of ground Water"
    ],
    answer: "d) overdrawing of ground Water",
    explanation: "Overdrawing groundwater depletes aquifers and leads to land subsidence, contrasting with protective soil conservation methods like terrace farming, strip cropping, and windbreaks."
  },
  {
    question: "In a vapor compression system, the highest temperature during the cycle occurs after …..",
    options: [
      "a) compression",
      "b) evaporation",
      "c) condensation",
      "d) expansion"
    ],
    answer: "a) compression",
    explanation: "The compressor elevates low-pressure vapor refrigerant into a superheated, high-pressure, high-temperature gas prior to heat rejection in the condenser."
  },
  {
    question: "Which of the following is not an example of an engineering property of bio-materials?",
    options: [
      "a) moisture content",
      "b) density",
      "c) sugar content",
      "d) rheological properties"
    ],
    answer: "c) sugar content",
    explanation: "Sugar content is a chemical or nutritional composition property, whereas density, moisture, and rheology are physical/engineering properties."
  },
  {
    question: "Which of the following is a common post-harvest treatment used for grains?",
    options: [
      "a) blanching",
      "b) fermentation",
      "c) freezing",
      "d) drying"
    ],
    answer: "d) drying",
    explanation: "Drying reduces seed moisture content down to safe safe-storage levels (10-12%), inhibiting fungal growth, insect damage, and respiration loss."
  },
  {
    question: "Which of the following is the common expelling process used for oil seed?",
    options: [
      "a) abrasive expelling",
      "b) roller expelling",
      "c) screw pressing",
      "d) gravity separation"
    ],
    answer: "c) screw pressing",
    explanation: "Screw presses (expellers) continuously squeeze oil seeds through a mechanical rotating screw within a perforated barrel to extract oil."
  },
  {
    question: "The process of reducing the milk flat globules size of allow them to stay evenly distributed in milk is called as …………..",
    options: [
      "a) standardization",
      "b) pasteurization",
      "c) homogenization",
      "d) fortification"
    ],
    answer: "c) homogenization",
    explanation: "Homogenization forces milk under high pressure through narrow nozzles, breaking fat globules down into micro-sizes so cream does not separate and float to the top."
  },
  {
    question: "Which of the following is the main purpose of sterilization?",
    options: [
      "a) Killing of Bacteria",
      "b) Maintaining of Nutrient Value",
      "c) Destroying pathogenic organism",
      "d) Retain Good flavor"
    ],
    answer: "a) Killing of Bacteria",
    explanation: "Sterilization subjects products to high heat (>100°C) to destroy all viable microorganisms, including bacterial endospores, ensuring absolute commercial sterility."
  },
  {
    question: "What is the ideal temperature range for the operation of a biogas plant where maximum biogas can be produced?",
    options: [
      "a) 0-10°C",
      "b) 10-20°C",
      "c) 35-50°C",
      "d) 30-35°C"
    ],
    answer: "c) 35-50°C",
    explanation: "Mesophilic (35°C) and thermophilic (50-55°C) anaerobic digestion zones yield optimal bacterial activity and high methane gas production rates."
  },
  {
    question: "What is a by-product of gasification?",
    options: [
      "a) water",
      "b) ash",
      "c) carbon dioxide",
      "d) oxygen"
    ],
    answer: "b) ash",
    explanation: "Gasification converts carbonaceous materials into syngas (CO + H2), leaving behind non-combustible inorganic mineral residue in the form of solid ash."
  },
  {
    question: "Which of the following is not a factor of Road’s Horizontal alignment Design?",
    options: [
      "a) design speed",
      "b) horizontal curve",
      "c) setback distance",
      "d) road gradient"
    ],
    answer: "d) road gradient",
    explanation: "Road gradient (longitudinal slope) is a element of **vertical** alignment design, while design speed, horizontal curvature, superelevation, and sight distance setback govern horizontal alignment."
  },
  {
    question: "What is the yield of a rapid gravity filter as compared to that of slow sand filter?",
    options: [
      "a) 10 times",
      "b) 15 times",
      "c) 20 times",
      "d) 30 times"
    ],
    answer: "d) 30 times",
    explanation: "Rapid sand filters operate at filtration rates of 3,000 to 6,000 L/m²/hr, which is about 30 times higher than slow sand filters (100 to 200 L/m²/hr)."
  },
  {
    question: "Which of the following is a key element of sustainable rural development in Nepal?",
    options: [
      "a) encouraging migration to urban areas",
      "b) increasing dependence on external aid",
      "c) strengthening local institutions and governance",
      "d) promoting large-scale commercial agriculture"
    ],
    answer: "c) strengthening local institutions and governance",
    explanation: "Devolving authority to local institutions and communities strengthens decision-making, ownership, and self-reliance, driving sustainable rural development."
  },
  {
    question: "Which of the following protocol is related to addressing the issue of global warming by reducing greenhouse gas (GHG) emissions?",
    options: [
      "a) Kyoto Protocol",
      "b) Montreal Protocol",
      "c) UNFCCC Protocol",
      "d) IPCC Protocol"
    ],
    answer: "a) Kyoto Protocol",
    explanation: "Adopted in 1997, the Kyoto Protocol is an international treaty that commits state parties to reduce greenhouse gas emissions based on the premise of global warming."
  },
  {
    question: "Standard dimensions (mm x mm) of A3 drawing sheet is",
    options: [
      "a) 11.69 × 16.54",
      "b) 29.7 × 42",
      "c) 297 × 420",
      "d) 420 × 280"
    ],
    answer: "c) 297 × 420",
    explanation: "Per ISO 216 standards, trimmed dimensions of an A3 paper sheet are 297 mm in width by 420 mm in height."
  },
  {
    question: "Which of the following methods of charging depreciation of an asset has increased amount of depreciation as the age of asset increases",
    options: [
      "a) sum-of-year digit",
      "b) sinking fund",
      "c) diminishing balance",
      "d) straight line"
    ],
    answer: "b) sinking fund",
    explanation: "Under the sinking fund method, depreciation equals annual sinking fund installment plus compound interest on accumulated investments. As the asset ages, accumulated compound interest grows, increasing total annual depreciation allocation."
  },
  {
    question: "The process of optimizing the project’s limited resources without extending the project duration is known as",
    options: [
      "a) project crashing",
      "b) resource levelling",
      "c) resource smoothing",
      "d) networking"
    ],
    answer: "c) resource smoothing",
    explanation: "Resource smoothing adjusts non-critical activities within available float periods to balance resource demand without shifting the project completion deadline."
  },
  {
    question: "The process of composing/raising the required fund from different sources such as equity, preferred stock, bond and debenture is known as",
    options: [
      "a) capital structure planning",
      "b) project financing",
      "c) capital budgeting decision",
      "d) deducing earning per share"
    ],
    answer: "a) capital structure planning",
    explanation: "Capital structure planning determines the optimal proportional mix of long-term debt, equity, and preferred securities to fund corporate capital requirements."
  },
  {
    question: "In which of the following society, people used to seek their existence on growing plants for their cattle and domestic animals",
    options: [
      "a) pastoral society",
      "b) tribal society",
      "c) horticultural society",
      "d) agricultural society"
    ],
    answer: "a) pastoral society",
    explanation: "Pastoral societies rely on the domestication and herding of animals, relying on natural pastures and vegetation for livestock feed."
  },
  {
    question: "According to Nepal Engineering Council Act, 2055 (Revised, 2079), all engineering academic institutions shall be ................................... in the Council.",
    options: [
      "a) affiliated",
      "b) united",
      "c) recognized",
      "d) associated"
    ],
    answer: "c) recognized",
    explanation: "Under the revised NEC Act, engineering colleges and higher learning institutions must obtain official recognition from the Council for their degrees to qualify graduates for professional licensing."
  },
  {
    question: "Profound lumps of cement in a bag shall be confirmed before its use, which can be instantly done by",
    options: [
      "a) Consistency test",
      "b) Soundness test",
      "c) Freshness test",
      "d) Setting time test"
    ],
    answer: "c) Freshness test",
    explanation: "The freshness test checks for hard lumps formed by atmospheric moisture absorption prior to mixing."
  },
  {
    question: "Axis about which a body will appear as mirror image is known for",
    options: [
      "a) Elastic neutral axis",
      "b) Plastic neutral axis",
      "c) Axis of symmetry",
      "d) Neutral axis ana axis of symmetry"
    ],
    answer: "c) Axis of symmetry",
    explanation: "An axis of symmetry divides a geometric shape into identical, mirrored halves."
  },
  {
    question: "Which of the following property of soil is known for index property",
    options: [
      "a) Size of particle",
      "b) Shape of particle",
      "c) Thixotropy",
      "d) Shape and size of particle"
    ],
    answer: "d) Shape and size of particle",
    explanation: "Soil index properties include particle size distribution and shape, which help identify and classify soil behavior."
  },
  {
    question: "Shallow foundation is different from deep foundation in many folds, out of which one of the prominent reasons is",
    options: [
      "a) It has low depth",
      "b) It has wider width",
      "c) Within which worker shall enter purposefully",
      "d) Only used in building constructions"
    ],
    answer: "a) It has low depth",
    explanation: "Shallow foundations are defined by a low ratio of depth to width (D/B ≤ 1)."
  },
  {
    question: "Working principle of hydraulic lift is based on",
    options: [
      "a) Bernoulli's principle",
      "b) Archimede's principle",
      "c) Pascal's Law",
      "d) Newton’s Law"
    ],
    answer: "c) Pascal's Law",
    explanation: "Pascal's Law governs uniform pressure transmission through trapped fluid in hydraulic systems."
  },
  {
    question: "Velocity of flow through a channel having depth of 1.2 m and specific energy equal to 1.24m",
    options: [
      "a) 0.8 m/sec",
      "b) 0.9 m/sec",
      "c) 0.6 m/sec",
      "d) 0.7 m/sec"
    ],
    answer: "b) 0.9 m/sec",
    explanation: "Specific energy E = y + v²/(2g). Given E = 1.24 m and depth y = 1.2 m: 1.24 = 1.2 + v²/(2 × 9.81) ⇒ v²/(19.62) = 0.04 ⇒ v² = 0.7848 ⇒ v ≈ 0.886 ≈ 0.9 m/s."
  },
  {
    question: "A Vertical sleeve support can have total number of induced reactions of",
    options: [
      "a) 1",
      "b) 2",
      "c) 3",
      "d) 4"
    ],
    answer: "b) 2",
    explanation: "A vertical sleeve support allows free vertical sliding, inducing two support reactions: a horizontal force and a moment."
  },
  {
    question: "National building code (NBC) Of Nepal has been Initially developed by Department of Urban Development and Building Construction under the Ministry of Physical Planning and Workers of Nepal with the help of (UNDP/UNCHP (Habitat) in",
    options: [
      "a) 1994",
      "b) 1995",
      "c) 1996",
      "d) 1997"
    ],
    answer: "a) 1994",
    explanation: "Drafting of Nepal's National Building Code (NBC) began in 1993 following the 1988 Udayapur earthquake and was officially published in 1994 with UNDP assistance."
  },
  {
    question: "Which of the statement is most appropriate",
    options: [
      "a) Beam is designed in compression and checked for shear.",
      "b) Beam is designed in shear and checked in bending.",
      "c) Beam is designed for bending and checking for shear",
      "d) Beam id designed for bending and checked for torsion"
    ],
    answer: "c) Beam is designed for bending and checking for shear",
    explanation: "In structural design, RC flexural beams are sized primarily for bending moments and subsequently checked to ensure safe shear capacity."
  },
  {
    question: "The Impermeable layer soil below the ground that neither contain nor transmit water is called as",
    options: [
      "a) Aquifer",
      "b) Aquiclude",
      "c) Aquifuge",
      "d) Aquitard"
    ],
    answer: "c) Aquifuge",
    explanation: "An aquifuge (e.g., solid granite) is an entirely impermeable, non-porous formation that can neither absorb nor transmit subsurface groundwater."
  },
  {
    question: "The design discharge of lateral sewers in Nepal are taken as ............ times average discharges.",
    options: [
      "a) 1.8",
      "b) 2 to 4",
      "c) 2 to 5",
      "d) 1.4"
    ],
    answer: "c) 2 to 5",
    explanation: "Standard Nepalese wastewater practice uses a peak factor of 2 to 5 times average daily flow when designing small lateral sewers to accommodate variable peak loads."
  },
  {
    question: "Classifying the canals based on alignment criteria, identify the canal in which the number of cross drainage work is maximum?",
    options: [
      "a) Contour canal",
      "b) Side slope canal",
      "c) Detour canal",
      "d) Ridge canal"
    ],
    answer: "a) Contour canal",
    explanation: "Contour canals run across the ground slope, intersecting natural streams and requiring numerous cross-drainage structures."
  },
  {
    question: "The canal structure provided over a Seti River in Pokhara (Dr. K I Singh Pool) is known as",
    options: [
      "a) Syphon",
      "b) Aqueduct",
      "c) Ditches",
      "d) Super passage"
    ],
    answer: "b) Aqueduct",
    explanation: "An aqueduct carries an irrigation canal over a river or valley under atmospheric pressure."
  },
  {
    question: "Under what strata the tile drainage should be placed?",
    options: [
      "a) In shallow depths",
      "b) More pervious strata",
      "c) Less pervious strata",
      "d) Pervious strata"
    ],
    answer: "c) Less pervious strata",
    explanation: "Subsurface tile drains are placed beneath or within less pervious soil layers to intercept and relieve perched water tables."
  },
  {
    question: "Which principle is used in Hydraulic Turbines?",
    options: [
      "a) Braggs Law",
      "b) Pascal's Law",
      "c) Faraday Law",
      "d) Newton’s second Law"
    ],
    answer: "d) Newton’s second Law",
    explanation: "Hydraulic turbines convert fluid kinetic/potential energy into rotation using Newton's second law of motion (impulse-momentum principle)."
  },
  {
    question: "Which of the following methods of charging depreciation of an asset has increased amount of depreciation as the age of asset increases",
    options: [
      "a) Sum-of-year digit",
      "b) Sinking fund",
      "c) Diminishing balance",
      "d) Straight line"
    ],
    answer: "b) Sinking fund",
    explanation: "In the sinking fund method, interest compounding causes annual depreciation allocations to increase over time."
  },
  {
    question: "In which of the following society people used to seek their existence on growing plants for their cattle and domestic animals",
    options: [
      "a) Pastoral society",
      "b) Tribal society",
      "c) Horticultural society",
      "d) Agriculture society"
    ],
    answer: "a) Pastoral society",
    explanation: "Pastoral societies center around animal husbandry and managing forage vegetation for herd livestock."
  },
  {
    question: "According to NEC Act (Revised), the number of executive members in a council body is",
    options: [
      "a) 25",
      "b) 21",
      "c) 18",
      "d) 15"
    ],
    answer: "b) 21",
    explanation: "The executive body of the Nepal Engineering Council consists of 21 members, including the Chairperson and Vice-Chairperson."
  },
  {
    question: "The depth of a trapezoidal section is 2m, based width of 3m and has a side slope of 1H:2V. Manning coefficient ‘n’ if the bed slope is 1 in 100",
    options: [
      "a) 0.012",
      "b) 0.013",
      "c) 0.014",
      "d) 0.015"
    ],
    answer: "b) 0.013",
    explanation: "Given cross-sectional dimensions, bed slope S = 0.01, and flow parameters, substituting into Manning's equation (Q = 1/n A R^(2/3) S^(1/2)) gives n ≈ 0.013."
  },
  {
    question: "Name of the first chairman of NEC",
    options: [
      "a) Dr. Padam Bahadur Sahi",
      "b) Bindeshwor Yadhav",
      "c) Ram Bahadur Sharma",
      "d) Dr. Jagdishchandra Pokharel"
    ],
    answer: "c) Ram Bahadur Sharma",
    explanation: "Er. Ram Bahadur Sharma served as the inaugural Chairman of the Nepal Engineering Council following its establishment under the NEC Act 2055."
  },
  {
    question: "Which of the following is a good fire-resistant stone?",
    options: [
      "a) Clay",
      "b) Granite",
      "c) Quartz",
      "d) Limestone",
    ],
    answer: "a) Clay",
    explanation: "Fireclay (burnt clay products) resists high temperatures without spalling or fracturing, unlike granite or limestone, which crack under severe heat."
  },
  {
    question: "Which of the following is not a segment of Global Positioning System?",
    options: [
      "a) User Segment",
      "b) Independent Segment",
      "c) Space Segment",
      "d) Control Segment"
    ],
    answer: "b) Independent Segment",
    explanation: "GPS consists of three segments: Space Segment (satellites), Control Segment (ground stations), and User Segment (receivers). An 'Independent Segment' does not exist."
  },
  {
    question: "____________ index is used to find settlement of soil.",
    options: [
      "a) Compression",
      "b) Expansion",
      "c) Recompression",
      "d) Reloading"
    ],
    answer: "a) Compression",
    explanation: "The Compression Index (Cc), determined from consolidation tests, is used to calculate primary consolidation settlement in clay layers."
  },
  {
    question: "Rise of water table in cohesionless soils upto ground surface reduces the net ultimate bearing capacity approximately by",
    options: [
      "a) 25%",
      "b) 50%",
      "c) 75%",
      "d) 90%"
    ],
    answer: "b) 50%",
    explanation: "Submergence reduces effective unit weight from γ_sat to γ' (roughly half), cutting the soil bearing capacity of shallow foundations in sand by ~50%."
  },
  {
    question: "The common method planting in semi-arid areas for row crop is",
    options: [
      "a) Flat planting",
      "b) Ridge planting",
      "c) Furrow planting",
      "d) Semi-arid planting"
    ],
    answer: "c) Furrow planting",
    explanation: "Planting in furrows concentrates limited rain moisture around crop root zones in dry, semi-arid regions."
  },
  {
    question: "Mould board plough works on the principle of",
    options: [
      "a) Friction",
      "b) Scouring",
      "c) Sliding",
      "d) Suction"
    ],
    answer: "d) Suction",
    explanation: "Mouldboard plows rely on vertical and horizontal suction (clearance angle of plowshare) to penetrate the soil."
  },
  {
    question: "A vertical plate that is used to control depth and adjust line of pull in plough is",
    options: [
      "a) Vertical Suction",
      "b) Horizontal Suction",
      "c) Vertical clevis",
      "d) Horizontal clevis"
    ],
    answer: "c) Vertical clevis",
    explanation: "The vertical clevis provides adjustment holes to alter hitch height, controlling implement operating depth and line of draft."
  },
  {
    question: "What is the field irrigation requirement (FIR)?",
    options: [
      "a) Amount of water required to meet the field irrigation requirements plus water lost in conveyance through the canal system",
      "b) The water required to meet the evaporation needs of a crop",
      "c) Amount of water required to delivered at the field to meet evapotranspiration and leaching needs",
      "d) Amount of water required to meet the net irrigation requirements plus water lost due to surface runoff and percolation"
    ],
    answer: "c) Amount of water required to delivered at the field to meet evapotranspiration and leaching needs",
    explanation: "Field Irrigation Requirement (FIR) accounts for Net Irrigation Requirement (NIR) plus application losses in the field, satisfying crop evapotranspiration and leaching requirements."
  },
  {
    question: "What is the time interval between the sowing and harvesting of crops?",
    options: [
      "a) Base period",
      "b) Kor period",
      "c) Crop period",
      "d) Season period"
    ],
    answer: "c) Crop period",
    explanation: "Crop period spans the entire time elapsed from sowing a crop to its harvest. (Base period is the time between first watering and last watering)."
  },
  {
    question: "An RCC column is treated as long if its slenderness ratio is greater than",
    options: [
      "a) 30",
      "b) 35",
      "c) 40",
      "d) 50"
    ],
    answer: "a) 30",
    explanation: "Per classic structural engineering guidelines, columns with slenderness ratio (L_eff / r) > 30 (or effective length to least lateral dimension > 12) are classified as long/slender columns prone to buckling."
  },
  {
    question: "What is the horsepower transmitted by the belt passing over a pulley of 1 m in diameter and running at 500 rpm. The tensions in two slides of the belt are 50 kg. and 25 kg. respectively.",
    options: [
      "a) 8.72",
      "b) 2.77",
      "c) 39.25",
      "d) 7.46"
    ],
    answer: "a) 8.72",
    explanation: "Velocity v = π D N / 60 = π × 1 × 500 / 60 = 26.18 m/s. Effective tension T = T1 - T2 = 50 - 25 = 25 kg = 245.25 N. Power P = T × v = 245.25 × 26.18 = 6420 W ≈ 8.72 HP metric."
  },
  {
    question: "Red soil results from the watershed material of",
    options: [
      "a) Igneous rock",
      "b) Sedimentary rock",
      "c) Metamorphic rock",
      "d) Limestone"
    ],
    answer: "c) Metamorphic rock",
    explanation: "Red soil develops over crystalline metamorphic rocks (like gneiss and schist) in warm, moist climates, deriving its color from ferric oxides."
  },
  {
    question: "Which of the following is NOT a method of soil conservation?",
    options: [
      "a) Intercropping",
      "b) Mulching",
      "c) Contour ploughing",
      "d) Weathering"
    ],
    answer: "d) Weathering",
    explanation: "Weathering is the natural breakdown of rocks into soil particles, whereas intercropping, mulching, and contour ploughing actively conserve soil."
  },
  {
    question: "Which provides energy very slowly?",
    options: [
      "a) Carbohydrates",
      "b) Fats",
      "c) Proteins",
      "d) Fibers"
    ],
    answer: "b) Fats",
    explanation: "Fats require complex enzymatic digestion before oxidation, yielding sustained energy more slowly than carbohydrates."
  },
  {
    question: "Statement 1: When sugar is added to water, water does not or negligibly expands. Statement 2: Jams do not expand on solidifying.",
    options: [
      "a) True, False",
      "b) True, True",
      "c) False, False",
      "d) False, True"
    ],
    answer: "a) True, False",
    explanation: "Dissolving sugar into water causes minimal net volume expansion as sugar molecules occupy intermolecular voids. High-sugar fruit jams, however, expand when frozen/solidified due to the anomalous expansion of water."
  },
  {
    question: "In global warming the temperature of",
    options: [
      "a) Troposphere increase",
      "b) Ionosphere increase",
      "c) Mesosphere increase",
      "d) Stratosphere increase"
    ],
    answer: "a) Troposphere increase",
    explanation: "Greenhouse gases trap infrared radiation within the troposphere (lowest atmospheric layer), causing surface warming."
  },
  {
    question: "The velocity required to operate wind mill is more than:",
    options: [
      "a) 5 kmph",
      "b) 10kmph",
      "c) 5 miles per hour",
      "d) 10 miles per hour"
    ],
    answer: "b) 10kmph",
    explanation: "Commercial and farm windmills require a minimum cut-in wind speed of ~10 km/h (2.8 m/s) to overcome rotor inertia and generate power."
  },
  {
    question: "Bench terracing is also called as",
    options: [
      "a) Staircase farming",
      "b) Hill farming",
      "c) Contour farming",
      "d) Erosion control farming"
    ],
    answer: "a) Staircase farming",
    explanation: "Bench terracing cuts steep slopes into a series of flat step-like platforms resembling stairs to control runoff and soil erosion."
  },
  {
    question: "Constant speed engine is used in",
    options: [
      "a) Tractor",
      "b) Power tiller",
      "c) Motor car",
      "d) Electric generator"
    ],
    answer: "d) Electric generator",
    explanation: "Electric generators require constant engine rotational speed (governed RPM) to maintain a stable output frequency (e.g., 50 Hz)."
  },
  {
    question: "100mm of rainfall over a catchment area of 1km2 represents the volume of water equal to:",
    options: [
      "a) 10^5 m^3",
      "b) 10^4 m^3",
      "c) 10^5 cumec",
      "d) 10^4 cumec"
    ],
    answer: "a) 10^5 m^3",
    explanation: "Volume = Depth × Area = (100 mm / 1000 m/mm) × (1 km² × 10^6 m²/km²) = 0.1 m × 10^6 m² = 10^5 m³."
  }

];
  return (
    <main className="min-h-screen bg-gray-50 py-8 px-6 pb-32">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-teal-700 mb-1">
        Model Question
      </h1>
      <p className="text-center text-gray-500 text-sm mb-6">
        Answer all questions to see instant feedback and explanations.
      </p>

      <Quiz chapterTitle="Model Question" questions={questions} />
    </main>
  );
}