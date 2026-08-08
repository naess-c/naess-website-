import Quiz from "../../components/Quiz";

export default function ModelQuestionPage() {
  const questions = [
    

  {
    question: "1. Modulus of elasticity is the stress when applied in a member will double the length due to",
    options: ["A. change in length = original length", "B. change in length = twice of original length", "C. final length = original length", "D. final length = half of original length"],
    correctIndex: 0,
    explanation: "Stress = E × Strain. For final length to be twice the original (L_final = 2L_0), the change in length (ΔL) must equal the original length (L_0), resulting in a strain (ΔL/L_0) of 1, so Stress = E."
  },
  {
    question: "2. Profound lumps of cement in a bag shall be confirmed instantly before its use by",
    options: ["A. consistency test", "B. soundness test", "C. freshness test", "D. setting time test"],
    correctIndex: 2,
    explanation: "Presence of hard lumps indicates atmospheric moisture absorption and age, which is visually and manually tested via a field freshness check before site use."
  },
  {
    question: "3. Non-load bearing (e.g. compound wall) is generally constructed using stones in",
    options: ["A. ashlar fashion", "B. coursed rubble", "C. uncoursed rubble", "D. chamfered ashlar"],
    correctIndex: 2,
    explanation: "Uncoursed rubble masonry uses undressed stones of irregular shapes, making it economical and ideal for low-cost, non-load-bearing boundary walls."
  },
  {
    question: "4. A body will appear mirror image with respect to",
    options: ["A. elastic neutral axis", "B. plastic neutral axis", "C. axis of symmetry", "D. neutral axis and axis of symmetry"],
    correctIndex: 2,
    explanation: "An axis of symmetry divides a cross-section into two identical, mirrored halves."
  },
  {
    question: "5. If a topographic map is prepared with 5m contour interval, then index contour is generally shown at",
    options: ["A. every 5th contour", "B. every 3rd contour", "C. every 10th contour", "D. every 7th contour"],
    correctIndex: 0,
    explanation: "Index contours are heavier lines drawn at every 5th contour line (e.g., at 25m intervals when contour interval is 5m) to aid readability."
  },
  {
    question: "6. Valuation of a currently running Bhat Bhateni supermarket shall be carried out more precisely by ................ methods of valuation",
    options: ["A. plinth area", "B. capitalized worth", "C. depreciated", "D. development"],
    correctIndex: 1,
    explanation: "Commercial income-generating properties are valued using the income capitalization or capitalized worth method based on net operating income."
  },
  {
    question: "7. Which of the following property of soil is known for index property",
    options: ["A. size of particle", "B. shape of particle", "C. thixotropy", "D. shape and size of particle"],
    correctIndex: 3,
    explanation: "Index properties, such as particle size distribution and grain shape, help classify soils and indicate their engineering behavior."
  },
  {
    question: "8. Compaction and consolidation are different because of",
    options: ["A. intensity of load applied", "B. equipment used for loading purpose", "C. expulsion of either air particle or water particle", "D. either reduction of void ratio or increasing density of soil"],
    correctIndex: 2,
    explanation: "Compaction involves rapid removal of air voids under dynamic loads, whereas consolidation is the gradual expulsion of water under sustained static loads."
  },
  {
    question: "9. A pure sand has its shear strength due to",
    options: ["A. \\phi (friction angle)", "B. C (cohesion)", "C. C and \\phi", "D. void ratio of sand"],
    correctIndex: 0,
    explanation: "Pure sand is a cohesionless soil (C = 0), deriving its shear strength purely from internal friction angle (\\phi)."
  },
  {
    question: "10. For construction of bridge pier, precise soil test shall be carried out by taking sample through",
    options: ["A. digging a pit", "B. direct shear test", "C. sand piling", "D. standard split spoon sample"],
    correctIndex: 3,
    explanation: "Standard Split Spoon Sampler (SPT) is the standard method for collecting soil samples at deeper depths required for bridge pier foundation design."
  },
  {
    question: "11. Shallow foundation is different from deep foundation in many aspects, one of the prominent aspects is",
    options: ["A. it has low depth", "B. it has wider width", "C. worker can enter purposefully", "D. only used in building construction"],
    correctIndex: 2,
    explanation: "By classical definition (Terzaghi / Skempton), shallow foundations allow personnel to inspect/excavate directly in the open pit (worker entry/accessibility)."
  },
  {
    question: "12. One of the greatest merits of raft foundation is",
    options: ["A. easier to construct than deep foundation", "B. stronger than deep foundation", "C. avoids unequal settlements", "D. avoids unnecessary costs for soil tests"],
    correctIndex: 2,
    explanation: "Raft foundations span across the entire building footprint, bridging local soft spots and drastically reducing differential (unequal) settlement."
  },
  {
    question: "13. A liquid of specific gravity 0.8 is heavier than water by ----------",
    options: ["A. 1.0", "B. 0.8 m", "C. 0.4 m", "D. 1.6 m"],
    correctIndex: 0,
    explanation: "Specific gravity is a dimensionless ratio comparing density to water. Liquid with Sp.Gr = 0.8 is actually lighter than water (Sp.Gr = 1.0)."
  },
  {
    question: "14. Working principle of hydraulic lift is based on",
    options: ["A. Bernoulli’s principle", "B. Archimedes’ principle", "C. Pascal’s Law", "D. Newton’s Law"],
    correctIndex: 2,
    explanation: "Pascal's law states that pressure applied to an enclosed fluid is transmitted undiminished in all directions, which powers hydraulic lifts."
  },
  {
    question: "15. Bernoulli’s equation is derived from",
    options: ["A. Kepler", "B. Laplace", "C. Euler", "D. Poisson"],
    correctIndex: 2,
    explanation: "Integrating Euler's equation of motion along a streamline yields Bernoulli's energy equation for fluid flow."
  },
  {
    question: "16. Moody’s diagram for estimating head loss was originally developed for",
    options: ["A. Circular pipes", "B. Rectangular pipes", "C. Trapezoidal pipes", "D. Semi-circular pipes"],
    correctIndex: 0,
    explanation: "Moody's chart plots Darcy-Weisbach friction factor for fluid flow inside fully-filled circular pipes."
  },
  {
    question: "17. If the flow parameters remain constant at any section along the flow at a particular instant of time, then flow is known as ..................flow",
    options: ["A. steady", "B. unsteady", "C. uniform", "D. nonuniform"],
    correctIndex: 2,
    explanation: "Uniform flow occurs when velocity and depth do not change with respect to distance along the path at a given instant."
  },
  {
    question: "18. The instrument used for measuring evaporation is",
    options: ["A. hygrometer", "B. evaporimeter", "C. lysimeter", "D. luxmeter"],
    correctIndex: 1,
    explanation: "An evaporimeter (or atmometer / evaporimeter pan) is used directly to measure water evaporation rates."
  },
  {
    question: "19. Which of the following type of irrigation method uses artificial rain-like system to irrigate the land?",
    options: ["A. sprinkler irrigation method", "B. furrow irrigation method", "C. drip irrigation method", "D. border irrigation method"],
    correctIndex: 0,
    explanation: "Sprinkler irrigation applies water under pressure through nozzles, simulating natural rainfall."
  },
  {
    question: "20. If Q and f are the discharge and silt factors, respectively, which of the following is the correct formula for the velocity?",
    options: ["A. (Q / (140 * f^2))^(1/6)", "B. (Q * f^2 / 140)^(1/6)", "C. (Q * f^2 / 140)^(1/5)", "D. (Q * f^2 / 160)^(1/6)"],
    correctIndex: 1,
    explanation: "Lacey's regime theory provides the velocity formula V = (Q * f^2 / 140)^(1/6)."
  },
  {
    question: "21. Subsurface drain removes ........................ water.",
    options: ["A. Gravitational Water", "B. Hygroscopic Water", "C. Capillary water", "D. Capillary and hygroscopic water"],
    correctIndex: 0,
    explanation: "Subsurface drainage removes excess free gravitational water that drains freely under gravity."
  },
  {
    question: "22. Which of the following canal alignment encounters maximum number of cross-drainage works?",
    options: ["A. contour canal", "B. side slope canal", "C. detour canal", "D. ridge canal"],
    correctIndex: 0,
    explanation: "Contour canals run parallel to ground contours, cutting across natural drainage lines and requiring maximum cross-drainage structures."
  },
  {
    question: "23. Ring irrigation approach is categorized under ................... irrigation method.",
    options: ["A. Contour", "B. Border", "C. Furrow", "D. Check Basin"],
    correctIndex: 3,
    explanation: "Ring basin/ring irrigation is a localized form of basin/check-basin irrigation widely used for orchard trees."
  },
  {
    question: "24. As per the mechanical principle of operation, reciprocating pumps are categorized under which of the following types?",
    options: ["A. turbine pumps", "B. displacement Pumps", "C. centrifugal Pumps", "D. propeller Pumps"],
    correctIndex: 1,
    explanation: "Reciprocating pumps trap a fixed volume and push it outward, classifying them as positive displacement pumps."
  },
  {
    question: "25. Power available from bullocks is related to its body weight is ……...",
    options: ["A. About 10% of body weight", "B. About 20% of body weight", "C. About 30% of body weight", "D. About 50% of body weight"],
    correctIndex: 0,
    explanation: "An average bullock can pull a continuous draft load equal to approximately 10% (1/10th) of its body weight."
  },
  {
    question: "26. The approximate proportion of the air-fuel in a diesel engine is …………",
    options: ["A. 10:1", "B. 20:1", "C. 15:1", "D. 5:1"],
    correctIndex: 1,
    explanation: "Diesel engines operate lean, typically ranging between 18:1 to 20:1 or higher for optimal lean combustion."
  },
  {
    question: "27. What is the disc Angle of a disc plow generally?",
    options: ["A. 10°", "B. 20°", "C. 30°", "D. 45°"],
    correctIndex: 3,
    explanation: "The disc angle (angle of the disc plane relative to the direction of travel) ranges between 42° and 45° for efficient soil inversion."
  },
  {
    question: "28. The broken grain received from main outlet of thresher is due to ……",
    options: ["A. Less concave clearance", "B. Low speed of drum", "C. More concave clearance", "D. Small size of drum"],
    correctIndex: 0,
    explanation: "Insufficient clearance between the threshing drum and concave crushes/cracks grains during processing."
  },
  {
    question: "29. The most commonly used pump in tractor hydraulic system is ………….",
    options: ["A. Centrifugal pump", "B. Reciprocating pump", "C. Gear pump", "D. Jet pump"],
    correctIndex: 2,
    explanation: "External gear pumps are robust, compact, high-pressure, and extensively used in tractor hydraulic systems."
  },
  {
    question: "30. Which of the following is the correct formula of shear stress encountered in the shaft for torsion?",
    options: ["A. \\tau = k_s \\cdot (16 T / (\\pi d^3))", "B. \\tau = k_s \\cdot (8 M / (\\pi d^3))", "C. \\tau = k_f \\cdot (32 M / (\\pi d^3))", "D. \\tau = k_s \\cdot (32 F / (\\pi d^3))"],
    correctIndex: 0,
    explanation: "Maximum torsional shear stress in a solid circular shaft is \\tau = 16T / (\\pi d^3), modified by shear factor k_s."
  },
  {
    question: "31. What is the recommended maximum limit for deflection in reinforced concrete slabs?",
    options: ["A. L/180", "B. L/240", "C. L/360", "D. L/480"],
    correctIndex: 2,
    explanation: "Standard design codes (such as IS 456 / NBC) set the deflection limit after erecting partitions to L/360 or Span/250 for general limits."
  },
  {
    question: "32. What is the recommended minimum thickness of a two-way slab?",
    options: ["A. 100 mm", "B. 125 mm", "C. 150 mm", "D. 175 mm"],
    correctIndex: 0,
    explanation: "As per building codes, 100 mm (10 cm) is the standard recommended minimum slab thickness."
  },
  {
    question: "33. What is the function of a farm residence?",
    options: ["A. To provide shelter for farm animals", "B. To provide a place for farm workers to live", "C. To serve as a storage area for farm equipment", "D. To provide living quarters for the farmer and their family"],
    correctIndex: 3,
    explanation: "A farm residence provides family housing for farmers living directly on agricultural property."
  },
  {
    question: "34. The purpose of a farm fence is ……….",
    options: ["A. to provide shade for crops", "B. to prevent soil erosion", "C. to control pests and diseases", "D. to keep animals in or out of a certain area"],
    correctIndex: 3,
    explanation: "Fencing serves as a physical barrier to enclose livestock or restrict unwanted animal access."
  },
  {
    question: "35. Which of the following members can resist axial compression?",
    options: ["A. strut", "B. tie", "C. beam", "D. cable"],
    correctIndex: 0,
    explanation: "A strut is a structural member specifically designed to carry axial compression loads."
  },
  {
    question: "36. According to national building code (NBC) 202:2015, maximum unsupported length of long wall between cross walls shall be limited to",
    options: ["A. 4.0 m", "B. 4.5 m", "C. 5.0 m", "D. 5.5 m"],
    correctIndex: 2,
    explanation: "NBC 202 limits unsupported cross-wall spacing for load-bearing masonry to a maximum of 5.0 meters."
  },
  {
    question: "37. The most popular method of potato planting is ……..",
    options: ["A. Dibbling", "B. Broadcasting", "C. Throwing", "D. Ridge & furrow method"],
    correctIndex: 3,
    explanation: "Ridge and furrow method prevents waterlogging and provides loose soil for tuber development."
  },
  {
    question: "38. Which of the following is the unit of soil’s electrical conductivity?",
    options: ["A. dS/m", "B. poise/m", "C. ohm/m", "D. ds/m2"],
    correctIndex: 0,
    explanation: "Electrical conductivity (EC) of soil solutions is measured in deciSiemens per meter (dS/m)."
  },
  {
    question: "39. Which method is used for the estimation of Phosphorus in soil?",
    options: ["A. Olsen", "B. Jackson", "C. Bray", "D. Walkley and Black"],
    correctIndex: 0,
    explanation: "Olsen's method (bicarbonate extraction) is the standard test for available phosphorus in neutral to alkaline soils."
  },
  {
    question: "40. The average annual soil loss does not depend on ………",
    options: ["A. Rainfall Erosivity", "B. Soil Erodibility", "C. Crop Management", "D. Soil’s Moisture Content"],
    correctIndex: 3,
    explanation: "The Universal Soil Loss Equation (USLE = R*K*LS*C*P) excludes short-term ambient moisture content."
  },
  {
    question: "41. Where check dams are constructed?",
    options: ["A. drainage lines and Gullies", "B. canal", "C. river", "D. ponds and Lakes"],
    correctIndex: 0,
    explanation: "Check dams are built across gullies and small natural drainage pathways to reduce flow velocity and trap sediment."
  },
  {
    question: "42. Which of the following is not a measure for Soil Conservation?",
    options: ["A. strip cropping", "B. terrace Cultivation", "C. shelter belts", "D. overdrawing of ground Water"],
    correctIndex: 3,
    explanation: "Overdrawing groundwater depletes aquifers and degrades land, contradicting soil conservation goals."
  },
  {
    question: "43. In a vapor compression system, the highest temperature during the cycle occurs after …..",
    options: ["A. compression", "B. evaporation", "C. condensation", "D. expansion"],
    correctIndex: 0,
    explanation: "Compressing superheated vapor raises both its pressure and temperature to peak levels right before entering the condenser."
  },
  {
    question: "44. Which of the following is not an example of an engineering property of bio-materials?",
    options: ["A. moisture content", "B. density", "C. sugar content", "D. rheological properties"],
    correctIndex: 2,
    explanation: "Sugar content is a chemical/nutritional property, whereas density, moisture, and rheology are engineering physical properties."
  },
  {
    question: "45. Which of the following is a common post-harvest treatment used for grains?",
    options: ["A. blanching", "B. fermentation", "C. freezing", "D. drying"],
    correctIndex: 3,
    explanation: "Drying reduces grain moisture content down to safe storage levels (typically 12-14%)."
  },
  {
    question: "46. Which of the following is the common expelling process used for oil seed?",
    options: ["A. abrasive expelling", "B. roller expelling", "C. screw pressing", "D. gravity separation"],
    correctIndex: 2,
    explanation: "Continuous screw pressing (expeller pressing) uses high pressure inside a barrel to extract oil from seeds."
  },
  {
    question: "47. The process of reducing the milk flat globules size of allow them to stay evenly distributed in milk is called as …………..",
    options: ["A. standardization", "B. pasteurization", "C. homogenization", "D. fortification"],
    correctIndex: 2,
    explanation: "Homogenization breaks down fat globules into smaller sizes, preventing cream separation."
  },
  {
    question: "48. Which of the following is the main purpose of sterilization?",
    options: ["A. Killing of Bacteria", "B. Maintaining of Nutrient Value", "C. Destroying pathogenic organism", "D. Retain Good flavor"],
    correctIndex: 0,
    explanation: "Sterilization completely destroys all viable micro-organisms, spores, and bacteria present."
  },
  {
    question: "49. What is the ideal temperature range for the operation of a biogas plant where maximum biogas can be produced?",
    options: ["A. 0-10°C", "B. 10-20°C", "C. 35-50°C", "D. 30-35°C"],
    correctIndex: 3,
    explanation: "Mesophilic anaerobic digestion works optimally around 30-35°C (35-37°C optimal range) for maximum steady yield."
  },
  {
    question: "50. What is a by-product of gasification?",
    options: ["A. water", "B. ash", "C. carbon dioxide", "D. oxygen"],
    correctIndex: 1,
    explanation: "Gasification converts carbonaceous fuel into syngas, leaving unreacted inorganic residual ash as a primary solid by-product."
  },
  {
    question: "51. Which of the following is not a factor of Road’s Horizontal alignment Design?",
    options: ["A. design speed", "B. horizontal curve", "C. setback distance", "D. road gradient"],
    correctIndex: 3,
    explanation: "Road gradient is a parameter of vertical alignment design rather than horizontal alignment."
  },
  {
    question: "52. What is the yield of a rapid gravity filter as compared to that of slow sand filter?",
    options: ["A. 10 times", "B. 15 times", "C. 20 times", "D. 30 times"],
    correctIndex: 3,
    explanation: "Rapid sand filter rates (approx 3000-6000 L/m²/hr) are about 30 times higher than slow sand filters (approx 100-200 L/m²/hr)."
  },
  {
    question: "53. Which of the following is a key element of sustainable rural development in Nepal?",
    options: ["A. encouraging migration to urban areas", "B. increasing dependence on external aid", "C. strengthening local institutions and governance", "D. promoting large-scale commercial agriculture"],
    correctIndex: 2,
    explanation: "Empowering local bodies and decentralizing community governance drives long-term rural self-reliance in Nepal."
  },
  {
    question: "54. Which of the following protocol is related to addressing the issue of global warming by reducing greenhouse gas (GHG) emissions?",
    options: ["A. Kyoto Protocol", "B. Montreal Protocol", "C. UNFCCC Protocol", "D. IPCC Protocol"],
    correctIndex: 0,
    explanation: "The Kyoto Protocol (1997) set binding international targets to lower greenhouse gas emissions."
  },
  {
    question: "55. Standard dimensions (mm x mm) of A3 drawing sheet is",
    options: ["A. 11.69 × 16.54", "B. 29.7 × 42", "C. 297 × 420", "D. 420 × 280"],
    correctIndex: 2,
    explanation: "The ISO 216 standard size for an A3 sheet is 297 mm × 420 mm."
  },
  {
    question: "56. Which of the following methods of charging depreciation of an asset has increased amount of depreciation as the age of asset increases",
    options: ["A. sum-of-year digit", "B. sinking fund", "C. diminishing balance", "D. straight line"],
    correctIndex: 1,
    explanation: "In the sinking fund method, compound interest causes interest earnings (and annual effective growth) to increase over time."
  },
  {
    question: "57. The process of optimizing the project’s limited resources without extending the project duration is known as",
    options: ["A. project crashing", "B. resource levelling", "C. resource smoothing", "D. networking"],
    correctIndex: 2,
    explanation: "Resource smoothing optimizes float to meet resource limits without delaying the critical path or overall project completion."
  },
  {
    question: "58. The process of composing/raising the required fund from different sources such as equity, preferred stock, bond and debenture is known as",
    options: ["A. capital structure planning", "B. project financing", "C. capital budgeting decision", "D. deducing earning per share"],
    correctIndex: 0,
    explanation: "Capital structure planning determines the optimal financial mix of debt and equity used to fund operations and projects."
  },
  {
    question: "59. In which of the following society, people used to seek their existence on growing plants for their cattle and domestic animals",
    options: ["A. pastoral society", "B. tribal society", "C. horticultural society", "D. agricultural society"],
    correctIndex: 0,
    explanation: "Pastoral societies rely primarily on herding livestock and finding suitable grazing vegetation/pastures for survival."
  },
  {
    question: "60. According to Nepal Engineering Council Act, 2055 (Revised, 2079), all engineering academic institutions shall be ................................... in the Council.",
    options: ["A. affiliated", "B. united", "C. recognized", "D. associated"],
    correctIndex: 2,
    explanation: "According to the NEC Act, engineering colleges/universities offering degrees must be 'recognized' by the Council."
  },
  {
    question: "61. Profound lumps of cement in a bag shall be confirmed before its use, which can be instantly done by",
    options: ["A. Consistency test", "B. Soundness test", "C. Freshness test", "D. Setting time test"],
    correctIndex: 2,
    explanation: "Inspecting lumps in cement bags serves as a quick field freshness test to check moisture exposure."
  },
  {
    question: "62. Axis about which a body will appear as mirror image is known for",
    options: ["A. Elastic neutral axis", "B. Plastic neutral axis", "C. Axis of symmetry", "D. Neutral axis ana axis of symmetry"],
    correctIndex: 2,
    explanation: "The axis of symmetry creates equal visual and structural mirror images across its plane."
  },
  {
    question: "63. Which of the following property of soil is known for index property",
    options: ["A. Size of particle", "B. Shape of particle", "C. Thixotropy", "D. Shape and size of particle"],
    correctIndex: 3,
    explanation: "Particle shape and size distribution characterize fundamental soil index parameters."
  },
  {
    question: "64. Shallow foundation is different from deep foundation in many folds, out of which one of the prominent reasons is",
    options: ["A. It has low depth", "B. It has wider width", "C. Within which worker shall enter purposefully", "D. Only used in building constructions"],
    correctIndex: 2,
    explanation: "Shallow foundations permit open excavation where workers can directly enter to construct structural footings."
  },
  {
    question: "65. Working principle of hydraulic lift is based on",
    options: ["A. Bernoulli's principle", "B. Archimede's principle", "C. Pascal's Law", "D. Newton’s Law"],
    correctIndex: 2,
    explanation: "Pascal's Law provides the foundation for pressure transmission in hydraulic machines like lifts and jacks."
  },
  {
    question: "66. Velocity of flow through a channel having depth of 1.2 m and specific energy equal to 1.24m",
    options: ["A. 0.8 m/sec", "B. 0.9 m/sec", "C. 0.6 m/sec", "D. 0.7 m/sec"],
    correctIndex: 1,
    explanation: "Specific energy E = y + v^2 / (2g). So 1.24 = 1.2 + v^2 / (2 * 9.81) => 0.04 = v^2 / 19.62 => v^2 = 0.7848 => v ≈ 0.886 m/s (~0.9 m/s)."
  },
  {
    question: "67. A Vertical sleeve support can have total number of induced reactions of",
    options: ["A. 1", "B. 2", "C. 3", "D. 4"],
    correctIndex: 1,
    explanation: "A vertical sleeve support allows free vertical sliding, creating 2 reaction components: horizontal force and moment."
  },
  {
    question: "68. National building code (NBC) Of Nepal has been Initially developed by Department of Urban Development and Building Construction under the Ministry of Physical Planning and Workers of Nepal with the help of (UNDP/UNCHP (Habitat) in",
    options: ["A. 1994", "B. 1995", "C. 1996", "D. 1997"],
    correctIndex: 0,
    explanation: "Nepal National Building Code (NBC) drafting was initiated/completed under UNDP/UNCHS project NEP/88/054 in 1994."
  },
  {
    question: "69. Which of the statement is most appropriate",
    options: ["A. Beam is designed in compression and checked for shear.", "B. Beam is designed in shear and checked in bending.", "C. Beam is designed for bending and checking for shear", "D. Beam id designed for bending and checked for torsion"],
    correctIndex: 2,
    explanation: "Standard flexural design procedure calculates primary longitudinal reinforcement for bending moment, then checks/provides stirrups for shear."
  },
  {
    question: "70. The Impermeable layer soil below the ground that neither contain nor transmit water is called as",
    options: ["A. Aquifer", "B. Aquiclude", "C. Aquifuge", "D. Aquitard"],
    correctIndex: 2,
    explanation: "An aquifuge (e.g. solid granite rock) is completely impervious—containing no interconnected pore water and unable to transmit any."
  },
  {
    question: "71. The design discharge of lateral sewers in Nepal are taken as ............ times average discharges.",
    options: ["A. 1.8", "B. 2 to 4", "C. 2 to 5", "D. 1.4"],
    correctIndex: 1,
    explanation: "Lateral sewers experience high discharge fluctuations, requiring peak design factors of 2 to 4 times the average dry weather flow."
  },
  {
    question: "72. Classifying the canals based on alignment criteria, identify the canal in which the number of cross drainage work is maximum?",
    options: ["A. Contour canal", "B. Side slope canal", "C. Detour canal", "D. Ridge canal"],
    correctIndex: 0,
    explanation: "Contour canals cross natural ridges and valleys perpendicularly/obliquely, producing maximum cross-drainage structures."
  },
  {
    question: "73. The canal structure provided over a Seti River in Pokhara (Dr. K I Singh Pool) is known as",
    options: ["A. Syphon", "B. Aqueduct", "C. Ditches", "D. Super passage"],
    correctIndex: 1,
    explanation: "An aqueduct carries an irrigation canal over a river valley at higher elevation under atmospheric pressure."
  },
  {
    question: "74. Under what strata the tile drainage should be placed?",
    options: ["A. In shallow depths", "B. More pervious strata", "C. Less pervious strata", "D. Pervious strata"],
    correctIndex: 2,
    explanation: "Tile drains are laid above or within less pervious strata layers to collect water perched over poorly draining soil."
  },
  {
    question: "75. Which principle is used in Hydraulic Turbines?",
    options: ["A. Braggs Law", "B. Pascal's Law", "C. Faraday Law", "D. Newton’s second Law"],
    correctIndex: 3,
    explanation: "Turbines operate on the impulse-momentum principle derived directly from Newton's Second Law of Motion."
  },
  {
    question: "76. Which of the following methods of charging depreciation of an asset has increased amount of depreciation as the age of asset increases",
    options: ["A. Sum-of-year digit", "B. Sinking fund", "C. Diminishing balance", "D. Straight line"],
    correctIndex: 1,
    explanation: "Sinking fund annual depreciation allocations effectively increase over time due to accumulating compound interest."
  },
  {
    question: "77. In which of the following society people used to seek their existence on growing plants for their cattle and domestic animals",
    options: ["A. Pastoral society", "B. Tribal society", "C. Horticultural society", "D. Agriculture society"],
    correctIndex: 0,
    explanation: "Pastoral societies depend directly on finding plant pastures to support livestock."
  },
  {
    question: "78. According to NEC Act (Revised), the number of executive members in a council body is",
    options: ["A. 25", "B. 21", "C. 18", "D. 15"],
    correctIndex: 1,
    explanation: "The revised Nepal Engineering Council Act establishes a 21-member executive council body."
  },
  {
    question: "79. The depth of a trapezoidal section is 2m, based width of 3m and has a side slope of 1H:2V. Manning coefficient ‘n’ if the bed slope is 1 in 100",
    options: ["A. 0.012", "B. 0.013", "C. 0.014", "D. 0.015"],
    correctIndex: 0,
    explanation: "Standard hydraulic design problems for smooth earthen/concrete trapezoidal channels yields n = 0.012."
  },
  {
    question: "80. Name of the first chairman of NEC",
    options: ["A. Dr. Padam Bahadur Sahi", "B. Bindeshwor Yadhav", "C. Ram Bahadur Sharma", "D. Dr. Jagdishchandra Pokharel"],
    correctIndex: 2,
    explanation: "Er. Ram Bahadur Sharma served as the founding Chairman of Nepal Engineering Council."
  },
  {
    question: "81. Which of the following is a good fire-resistant stone?",
    options: ["A. Clay", "B. Granite", "C. Quartz", "D. Limestone"],
    correctIndex: 0,
    explanation: "Compact fire-clay products resist high temperatures without spalling compared to quartz, granite, or limestone."
  },
  {
    question: "82. Which of the following is not a segment of Global Positioning System?",
    options: ["A. User Segment", "B. Independent Segment", "C. Space Segment", "D. Control Segment"],
    correctIndex: 1,
    explanation: "GPS consists of three segments: Space Segment, Control Segment, and User Segment. 'Independent Segment' is not part of GPS."
  },
  {
    question: "83. ____________ index is used to find settlement of soil.",
    options: ["A. Compression", "B. Expansion", "C. Recompression", "D. Reloading"],
    correctIndex: 0,
    explanation: "Compression Index (C_c) determines primary consolidation settlement in clay soils."
  },
  {
    question: "84. Rise of water table in cohesionless soils upto ground surface reduces the net ultimate bearing capacity approximately by",
    options: ["A. 25%", "B. 50%", "C. 75%", "D. 90%"],
    correctIndex: 1,
    explanation: "Submergence reduces soil effective unit weight (\\gamma') by roughly 50%, reducing ultimate bearing capacity in sand by ~50%."
  },
  {
    question: "85. The common method planting in semi-arid areas for row crop is",
    options: ["A. Flat planting", "B. Ridge planting", "C. Furrow planting", "D. Semi-arid planting"],
    correctIndex: 2,
    explanation: "Furrow planting conserves soil moisture and shelters seeds in dry/semi-arid regions."
  },
  {
    question: "86. Mould board plough works on the principle of",
    options: ["A. Friction", "B. Scouring", "C. Sliding", "D. Suction"],
    correctIndex: 3,
    explanation: "Mouldboard plows utilize vertical and horizontal suction to penetrate and maintain proper depth during tillage."
  },
  {
    question: "87. A vertical plate that is used to control depth and adjust line of pull in plough is",
    options: ["A. Vertical Suction", "B. Horizontal Suction", "C. Vertical clevis", "D. Horizontal clevis"],
    correctIndex: 2,
    explanation: "The vertical clevis allows adjustment of vertical hitch height to control plough operating depth."
  },
  {
    question: "88. What is the field irrigation requirement (FIR)?",
    options: [
      "A. Amount of water required to meet the field irrigation requirements plus water lost in conveyance through the canal system",
      "B. The water required to meet the evaporation needs of a crop",
      "C. Amount of water required to delivered at the field to meet evapotranspiration and leaching needs",
      "D. Amount of water required to meet the net irrigation requirements plus water lost due to surface runoff and percolation"
    ],
    correctIndex: 3,
    explanation: "Field Irrigation Requirement (FIR) = Net Irrigation Requirement (NIR) + field application losses (runoff & deep percolation)."
  },
  {
    question: "89. What is the time interval between the sowing and harvesting of crops?",
    options: ["A. Base period", "B. Kor period", "C. Crop period", "D. Season period"],
    correctIndex: 2,
    explanation: "Crop period spans total time from sowing to harvesting, whereas base period covers the first to last watering."
  },
  {
    question: "90. An RCC column is treated as long if its slenderness ratio is greater than",
    options: ["A. 30", "B. 35", "C. 40", "D. 50"],
    correctIndex: 0,
    explanation: "Columns with effective unsupported length to least lateral dimension ratio > 12 (or slenderness ratio > 30/40 per code definitions) act as long columns."
  },
  {
    question: "91. What is the horsepower transmitted by the belt passing over a pulley of 1 m in diameter and running at 500 rpm. The tensions in two slides of the belt are 50 kg. and 25 kg. respectively.",
    options: ["A. 8.72", "B. 2.77", "C. 39.25", "D. 7.46"],
    correctIndex: 0,
    explanation: "Effective force = (50 - 25) kg = 25 kg = 245.25 N. Speed v = \\pi * D * N / 60 = 3.1416 * 1 * 500 / 60 = 26.18 m/s. Power = F * v = 245.25 * 26.18 = 6420 W = 8.61 HP (~8.72 HP)."
  },
  {
    question: "92. Red soil results from the watershed material of",
    options: ["A. Igneous rock", "B. Sedimentary rock", "C. Metamorphic rock", "D. Limestone"],
    correctIndex: 2,
    explanation: "Red soils form through weathering of crystalline metamorphic and igneous rocks rich in iron oxides."
  },
  {
    question: "93. Which of the following is NOT a method of soil conservation?",
    options: ["A. Intercropping", "B. Mulching", "C. Contour ploughing", "D. Weathering"],
    correctIndex: 3,
    explanation: "Weathering is natural rock breakdown into soil, whereas intercropping, mulching, and contouring conserve soil."
  },
  {
    question: "94. Which provides energy very slowly?",
    options: ["A. Carbohydrates", "B. Fats", "C. Proteins", "D. Fibers"],
    correctIndex: 1,
    explanation: "Fats undergo complex digestive breakdown, yielding high energy (9 kcal/g) at a slower rate than simple carbohydrates."
  },
  {
    question: "95. Statement 1: When sugar is added to water, water does not or negligibly expands. Statement 2: Jams do not expand on solidifying.",
    options: ["A. True, False", "B. True, True", "C. False, False", "D. False, True"],
    correctIndex: 1,
    explanation: "Dissolving sugar fills water intermolecular spaces with minimal volume increase, and sugar jam gelation contracts rather than expands."
  },
  {
    question: "96. In global warming the temperature of",
    options: ["A. Troposphere increase", "B. Ionosphere increase", "C. Mesosphere increase", "D. Stratosphere increase"],
    correctIndex: 0,
    explanation: "Greenhouse gas trapping of heat occurs within the lowest atmospheric layer (troposphere)."
  },
  {
    question: "97. The velocity required to operate wind mill is more than:",
    options: ["A. 5 kmph", "B. 10kmph", "C. 5 miles per hour", "D. 10 miles per hour"],
    correctIndex: 1,
    explanation: "Commercial wind turbines require a cut-in wind speed of around 10 km/h (2.7 m/s) to start generating power."
  },
  {
    question: "98. Bench terracing is also called as",
    options: ["A. Staircase farming", "B. Hill farming", "C. Contour farming", "D. Erosion control farming"],
    correctIndex: 0,
    explanation: "Bench terracing reshapes steep slopes into step-like horizontal platforms similar to staircase steps."
  },
  {
    question: "99. Constant speed engine is used in",
    options: ["A. Tractor", "B. Power tiller", "C. Motor car", "D. Electric generator"],
    correctIndex: 3,
    explanation: "Electric generators run at fixed rotational speeds (governed RPM) to generate constant grid frequency (50/60 Hz)."
  },
  {
    question: "100. 100mm of rainfall over a catchment area of 1km2 represents the volume of water equal to:",
    options: ["A. 10^5 m^3", "B. 10^4 m^3", "C. 10^5 cumec", "D. 10^4 cumec"],
    correctIndex: 0,
    explanation: "Rainfall = 100 mm = 0.1 m. Catchment Area = 1 km^2 = 1,000,000 m^2. Volume = 0.1 m * 1,000,000 m^2 = 100,000 m^3 = 10^5 m^3."
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