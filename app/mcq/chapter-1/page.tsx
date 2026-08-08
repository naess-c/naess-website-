import Quiz from "../../components/Quiz";

export default function Chapter1Page() {
  const questions = [
    
{
  question: "Which test is used to determine the consistency of cement?",
  options: ["Le Chatelier", "Vicat Apparatus", "Slump", "Soundness"],
  correctIndex: 1,
  explanation: "Vicat Apparatus is used to determine the consistency of cement."
},
{
  question: "What is used for damp proofing in buildings?",
  options: ["Paint", "Mortar", "Bitumen", "Cement"],
  correctIndex: 2,
  explanation: "Bitumen is commonly used as a damp-proofing material."
},
{
  question: "What is the unit of moment of inertia?",
  options: ["m", "m²", "m⁴", "N/m²"],
  correctIndex: 2,
  explanation: "The unit of area moment of inertia is m⁴."
},
{
  question: "The compressive strength test of concrete uses:",
  options: ["Cube", "Beam", "Cylinder", "Plate"],
  correctIndex: 0,
  explanation: "Concrete compressive strength is commonly tested using standard cubes."
},
{
  question: "Slump test is used to determine:",
  options: ["Strength", "Water-cement ratio", "Workability", "Soundness"],
  correctIndex: 2,
  explanation: "The slump test measures the workability of fresh concrete."
},
{
  question: "Plumb bob is used to check:",
  options: ["Level", "Thickness", "Verticality", "Area"],
  correctIndex: 2,
  explanation: "A plumb bob is used to check vertical alignment."
},
{
  question: "The main ingredient in cement is:",
  options: ["Gypsum", "Lime", "Silica", "Alumina"],
  correctIndex: 1,
  explanation: "Lime is the major constituent of cement."
},
{
  question: "DPC stands for:",
  options: ["Ductile Pressure Control", "Damp Proof Course", "Direct Pipe Connection", "Dual Pipe Cementing"],
  correctIndex: 1,
  explanation: "DPC stands for Damp Proof Course."
},
{
  question: "A beam that is supported at both ends is called:",
  options: ["Cantilever", "Fixed", "Simply supported", "Continuous"],
  correctIndex: 2,
  explanation: "A simply supported beam rests on supports at both ends."
},
{
  question: "The bearing capacity of soil is measured in:",
  options: ["N", "N/m", "N/m²", "kg"],
  correctIndex: 2,
  explanation: "Bearing capacity is expressed as pressure in N/m²."
},
{
  question: "Which is a surveying instrument?",
  options: ["Anemometer", "Hygrometer", "Theodolite", "Luxmeter"],
  correctIndex: 2,
  explanation: "A theodolite is used for surveying and angle measurement."
},
{
  question: "Which cement is used in underwater construction?",
  options: ["OPC", "PPC", "Quick Setting", "Rapid Hardening"],
  correctIndex: 2,
  explanation: "Quick-setting cement is suitable for underwater construction."
},
{
  question: "The process of levelling includes:",
  options: ["Bending", "Aligning", "Height measurement", "Compacting"],
  correctIndex: 2,
  explanation: "Levelling is used to determine elevation differences."
},
{
  question: "A structure built to hold back water is called:",
  options: ["Dam", "Culvert", "Embankment", "Weir"],
  correctIndex: 0,
  explanation: "A dam is constructed to store and hold back water."
},
{
  question: "Which material has the highest compressive strength?",
  options: ["Lime", "Cement", "Brick", "Concrete"],
  correctIndex: 3,
  explanation: "Concrete has higher compressive strength than the other listed materials."
},
{
  question: "Concrete gains most strength in:",
  options: ["3 days", "7 days", "14 days", "28 days"],
  correctIndex: 3,
  explanation: "Concrete is generally designed based on its 28-day strength."
},
{
  question: "Method to estimate quantity of building materials:",
  options: ["Valuation", "Estimation", "Costing", "Planning"],
  correctIndex: 1,
  explanation: "Estimation is used to determine quantities of materials required."
},
{
  question: "Purpose of foundation is to:",
  options: ["Beautify", "Elevate floor", "Distribute load", "Store materials"],
  correctIndex: 2,
  explanation: "Foundations transfer structural loads safely to the soil."
},
{
  question: "Retaining wall resists:",
  options: ["Roof loads", "Vertical pressure", "Lateral earth pressure", "Seismic forces"],
  correctIndex: 2,
  explanation: "Retaining walls are designed to resist lateral earth pressure."
},
{
  question: "In RCC, steel provides:",
  options: ["Compression", "Tensile strength", "Finish", "Adhesion"],
  correctIndex: 1,
  explanation: "Steel reinforcement resists tensile stresses in RCC."
},
{
  question: "Unit weight of water is:",
  options: ["1 kN/m³", "9.81 kN/m³", "1000 kN/m³", "100 N/m³"],
  correctIndex: 1,
  explanation: "The unit weight of water is approximately 9.81 kN/m³."
},
{
  question: "Most accurate surveying method:",
  options: ["Compass", "Plane table", "Chain", "Theodolite"],
  correctIndex: 3,
  explanation: "Theodolite surveying provides high accuracy in angle measurement."
},
{
  question: "Cement setting time is tested using:",
  options: ["Le Chatelier", "Vicat apparatus", "Slump cone", "Hydrometer"],
  correctIndex: 1,
  explanation: "The Vicat apparatus is used to determine setting times of cement."
},
{
  question: "Thickness of DPC is usually:",
  options: ["2 mm", "6 mm", "25 mm", "50 mm"],
  correctIndex: 2,
  explanation: "A typical cement concrete DPC thickness is about 25 mm."
},
{
  question: "Which is not a component of cement?",
  options: ["Lime", "Silica", "Gypsum", "Zinc"],
  correctIndex: 3,
  explanation: "Zinc is not a standard constituent of cement."
},
{
  question: "Which is a non-destructive test of concrete?",
  options: ["Core test", "Slump test", "Rebound hammer", "Crushing"],
  correctIndex: 2,
  explanation: "The rebound hammer test is a non-destructive method used to estimate concrete strength."
},
{
  question: "Concrete mix ratio for M20 is:",
  options: ["1:2:3", "1:1.5:3", "1:2:4", "1:3:6"],
  correctIndex: 1,
  explanation: "The nominal mix proportion for M20 concrete is 1:1.5:3."
},
{
  question: "Camber is provided in:",
  options: ["Foundations", "Roofs", "Roads", "Plinths"],
  correctIndex: 2,
  explanation: "Camber is provided on roads to facilitate drainage of rainwater."
},
{
  question: "Least count of a leveling staff is:",
  options: ["1 mm", "5 mm", "10 mm", "0.01 mm"],
  correctIndex: 2,
  explanation: "The smallest division commonly read on a leveling staff is 10 mm."
},
{
  question: "Hydration in cement involves reaction with:",
  options: ["Carbon dioxide", "Water", "Air", "Gypsum"],
  correctIndex: 1,
  explanation: "Hydration is the chemical reaction between cement and water."
},
{
  question: "Ratio of water to cement is called:",
  options: ["Slump", "Strength factor", "W/C ratio", "Hydration factor"],
  correctIndex: 2,
  explanation: "W/C ratio stands for water-cement ratio."
},
{
  question: "Lean concrete has:",
  options: ["More cement", "Low water", "More water", "Less cement"],
  correctIndex: 3,
  explanation: "Lean concrete contains relatively less cement compared to normal concrete."
},
{
  question: "Brick crushing strength should be more than:",
  options: ["10 N/mm²", "3.5 N/mm²", "7.5 N/mm²", "15 N/mm²"],
  correctIndex: 2,
  explanation: "Good quality building bricks generally have a crushing strength above 7.5 N/mm²."
},
{
  question: "Minimum curing period for concrete is:",
  options: ["3 days", "7 days", "14 days", "28 days"],
  correctIndex: 1,
  explanation: "Concrete should generally be cured for at least 7 days under normal conditions."
},
{
  question: "Concrete is strong in:",
  options: ["Tension", "Bending", "Compression", "Shear"],
  correctIndex: 2,
  explanation: "Concrete has high compressive strength but low tensile strength."
},
{
  question: "The initial setting time of cement is:",
  options: ["15 min", "30 min", "45 min", "60 min"],
  correctIndex: 1,
  explanation: "The minimum initial setting time for OPC is 30 minutes."
},
{
  question: "Which stone is used in road construction?",
  options: ["Slate", "Granite", "Marble", "Quartzite"],
  correctIndex: 1,
  explanation: "Granite is durable and commonly used in road construction."
},
{
  question: "Which brick is best in quality?",
  options: ["Third class", "First class", "Fly ash", "Modular"],
  correctIndex: 1,
  explanation: "First-class bricks are considered the highest quality bricks."
},
{
  question: "Silt content in sand should not exceed:",
  options: ["5%", "8%", "10%", "15%"],
  correctIndex: 0,
  explanation: "Silt content in sand should generally not exceed 5%."
},
{
  question: "Theodolite measures:",
  options: ["Distance", "Area", "Horizontal and vertical angles", "Height only"],
  correctIndex: 2,
  explanation: "A theodolite is used to measure horizontal and vertical angles."
},
{
  question: "Lime is obtained by:",
  options: ["Heating clay", "Heating limestone", "Cooling magma", "Adding cement"],
  correctIndex: 1,
  explanation: "Lime is produced by calcining limestone."
},
{
  question: "Best cement for plastering:",
  options: ["OPC", "PPC", "SRC", "RHC"],
  correctIndex: 1,
  explanation: "PPC is commonly preferred for plastering due to better workability."
},
{
  question: "Which one is not a type of foundation?",
  options: ["Strip", "Pad", "Combined", "Crown"],
  correctIndex: 3,
  explanation: "Crown is not a type of building foundation."
},
{
  question: "Curing helps in:",
  options: ["Coloring concrete", "Reducing water content", "Strength gain", "Crack formation"],
  correctIndex: 2,
  explanation: "Curing promotes hydration and strength development in concrete."
},
{
  question: "Workability of concrete is improved by:",
  options: ["Increasing cement", "Reducing water", "Using admixtures", "Adding lime"],
  correctIndex: 2,
  explanation: "Admixtures such as plasticizers improve concrete workability."
},
{
  question: "Crank bars are used in:",
  options: ["Slabs", "Beams", "Columns", "Footings"],
  correctIndex: 0,
  explanation: "Crank bars are commonly used in reinforced concrete slabs."
},
{
  question: "Sieve analysis is used for:",
  options: ["Cement", "Coarse aggregates", "Concrete", "Water"],
  correctIndex: 1,
  explanation: "Sieve analysis determines the particle size distribution of aggregates."
},
{
  question: "What does CBR test measure?",
  options: ["Compaction", "Soil bearing", "Water content", "Specific gravity"],
  correctIndex: 1,
  explanation: "CBR measures the bearing capacity of subgrade soil."
},
{
  question: "Specific gravity of cement is approx.:",
  options: ["1.8", "2.1", "3.15", "4.5"],
  correctIndex: 2,
  explanation: "The specific gravity of ordinary Portland cement is about 3.15."
},
{
  question: "Ordinary Portland Cement has how many grades?",
  options: ["1", "2", "3", "4"],
  correctIndex: 2,
  explanation: "OPC is available in 33, 43, and 53 grades, making three grades."
},
{
  question: "Which survey method uses chain and tape?",
  options: ["Compass Survey", "Plane Table Survey", "Chain Survey", "Theodolite Survey"],
  correctIndex: 2,
  explanation: "Chain surveying uses only chain and tape for linear measurements."
},
{
  question: "A cantilever beam is supported at:",
  options: ["One end only", "Both ends", "Middle", "Four corners"],
  correctIndex: 0,
  explanation: "A cantilever beam is fixed at one end and free at the other."
},
{
  question: "The water-cement ratio for concrete should be:",
  options: ["Greater than 1", "Less than 0.2", "Between 0.4 and 0.6", "Greater than 2"],
  correctIndex: 2,
  explanation: "A water-cement ratio between 0.4 and 0.6 is commonly used for good strength and workability."
},
{
  question: "Main purpose of curing is to:",
  options: ["Prevent shrinkage", "Increase temperature", "Improve finish", "Reduce cost"],
  correctIndex: 0,
  explanation: "Curing prevents excessive moisture loss and reduces shrinkage cracks."
},
{
  question: "Soundness of cement is tested using:",
  options: ["Vicat apparatus", "Le Chatelier test", "Slump test", "Rebound hammer"],
  correctIndex: 1,
  explanation: "The Le Chatelier test is used to determine the soundness of cement."
},
{
  question: "Which aggregate shape gives highest strength?",
  options: ["Angular", "Rounded", "Flaky", "Elongated"],
  correctIndex: 0,
  explanation: "Angular aggregates provide better interlocking and higher strength."
},
{
  question: "A good quality brick should not absorb water more than:",
  options: ["15%", "20%", "25%", "30%"],
  correctIndex: 0,
  explanation: "Water absorption of first-class bricks should not exceed 15%."
},
{
  question: "The depth of foundation is governed by:",
  options: ["Type of cement", "Load and soil", "Color of building", "Height of wall"],
  correctIndex: 1,
  explanation: "Foundation depth depends mainly on structural loads and soil conditions."
},
{
  question: "Least count of a theodolite is:",
  options: ["5 minutes", "30 seconds", "1 minute", "15 seconds"],
  correctIndex: 3,
  explanation: "Modern theodolites commonly have a least count of 15 seconds."
},
{
  question: "Which type of lime is most suitable for whitewashing?",
  options: ["Hydraulic lime", "Fat lime", "Quick lime", "Dolomitic lime"],
  correctIndex: 1,
  explanation: "Fat lime is commonly used for whitewashing because of its high plasticity."
},
{
  question: "Most commonly used brick size in Nepal is:",
  options: ["190x90x90 mm", "230x110x75 mm", "240x115x57 mm", "200x100x100 mm"],
  correctIndex: 2,
  explanation: "240 × 115 × 57 mm is the commonly used brick size in Nepal."
},
{
  question: "Which is a primary surveying classification?",
  options: ["Engineering survey", "Mining survey", "Boundary survey", "Geodetic survey"],
  correctIndex: 3,
  explanation: "Surveying is primarily classified into Plane Surveying and Geodetic Surveying."
},
{
  question: "Which material is not used in concrete?",
  options: ["Cement", "Aggregate", "Bitumen", "Water"],
  correctIndex: 2,
  explanation: "Bitumen is used in road works, not in conventional concrete."
},
{
  question: "Which test is used to find tensile strength of concrete?",
  options: ["Split Cylinder", "Slump", "Soundness", "Consistency"],
  correctIndex: 0,
  explanation: "The split-cylinder test is used to determine tensile strength of concrete."
},
{
  question: "Most common cement type in general construction:",
  options: ["SRC", "OPC", "RHC", "PPC"],
  correctIndex: 1,
  explanation: "Ordinary Portland Cement (OPC) is the most commonly used cement."
},
{
  question: "Maximum free fall of concrete should not exceed:",
  options: ["1 m", "1.5 m", "2 m", "3 m"],
  correctIndex: 2,
  explanation: "The free fall of concrete should generally not exceed 2 m to prevent segregation."
},
{
  question: "Purpose of admixtures in concrete is to:",
  options: ["Improve taste", "Reduce strength", "Modify properties", "Change color"],
  correctIndex: 2,
  explanation: "Admixtures are added to modify the properties of concrete."
},
{
  question: "Laying of foundation is started after:",
  options: ["Fixing roof", "Backfilling", "Excavation", "Painting"],
  correctIndex: 2,
  explanation: "Foundation construction begins after excavation is completed."
},
{
  question: "Which cement is best for marine structures?",
  options: ["OPC", "PPC", "SRC", "RHC"],
  correctIndex: 2,
  explanation: "Sulphate Resisting Cement (SRC) is suitable for marine environments."
},
{
  question: "Point where two walls meet is called:",
  options: ["Beam", "Joint", "Junction", "Corner"],
  correctIndex: 2,
  explanation: "The meeting point of two walls is generally called a junction."
},
{
  question: "Concrete with low workability is used for:",
  options: ["Thin sections", "Pavements", "Retaining walls", "Roof slabs"],
  correctIndex: 1,
  explanation: "Low-workability concrete is commonly used in road pavements."
},
{
  question: "The component that resists tension in RCC is:",
  options: ["Concrete", "Steel", "Brick", "Mortar"],
  correctIndex: 1,
  explanation: "Steel reinforcement carries tensile stresses in RCC."
},
{
  question: "A culvert is used for:",
  options: ["Blocking water", "Draining water", "Holding walls", "Laying tiles"],
  correctIndex: 1,
  explanation: "A culvert allows water to pass beneath roads or railways."
},
{
  question: "Which is used to compact concrete?",
  options: ["Vibrator", "Roller", "Spade", "Trowel"],
  correctIndex: 0,
  explanation: "Concrete vibrators are used to remove air voids and compact concrete."
},
{
  question: "Concrete exposed to sea water should be:",
  options: ["Lean", "Dry", "Dense", "Green"],
  correctIndex: 2,
  explanation: "Dense concrete reduces permeability and improves durability in marine conditions."
},
{
  question: "Cement bags must be stored:",
  options: ["In sun", "On ground", "Above ground", "In open air"],
  correctIndex: 2,
  explanation: "Cement bags should be stored above ground on wooden platforms to prevent moisture absorption."
},
{
  question: "Which mortar ratio is commonly used for plastering?",
  options: ["1:2", "1:3", "1:4", "1:6"],
  correctIndex: 2,
  explanation: "A cement mortar ratio of 1:4 is commonly used for plastering work."
},
{
  question: "Batching in concrete refers to:",
  options: ["Mixing", "Watering", "Measuring ingredients", "Setting time"],
  correctIndex: 2,
  explanation: "Batching is the process of measuring concrete ingredients in proper proportions."
},
{
  question: "Initial setting time of PPC is around:",
  options: ["15 min", "30 min", "45 min", "60 min"],
  correctIndex: 1,
  explanation: "The minimum initial setting time of PPC is generally about 30 minutes."
},
{
  question: "RCC stands for:",
  options: ["Ready Compacted Cement", "Rolled Concrete Composite", "Reinforced Cement Concrete", "Rapid Curing Cement"],
  correctIndex: 2,
  explanation: "RCC stands for Reinforced Cement Concrete."
},
{
  question: "Which of these increases workability?",
  options: ["Reduce water", "Increase aggregates", "Add plasticizer", "Add steel"],
  correctIndex: 2,
  explanation: "Plasticizers improve workability without significantly increasing water content."
},
{
  question: "Type of joint used in expansion:",
  options: ["Cold joint", "Construction joint", "Expansion joint", "End joint"],
  correctIndex: 2,
  explanation: "Expansion joints accommodate expansion and contraction of structures."
},
{
  question: "Which is not a formwork material?",
  options: ["Wood", "Steel", "Aluminum", "Rubber"],
  correctIndex: 3,
  explanation: "Rubber is not commonly used as a structural formwork material."
},
{
  question: "Compaction factor test measures:",
  options: ["Consistency", "Strength", "Workability", "Slump"],
  correctIndex: 2,
  explanation: "The compaction factor test is used to determine concrete workability."
},
{
  question: "Which is used to find slope in land?",
  options: ["Level", "Plumb", "Compass", "Staff"],
  correctIndex: 0,
  explanation: "A leveling instrument is used to determine slope and elevation differences."
},
{
  question: "Standard cube size for compressive test:",
  options: ["100 mm", "125 mm", "150 mm", "200 mm"],
  correctIndex: 2,
  explanation: "The standard concrete cube size for compressive strength testing is 150 mm."
},
{
  question: "Grade of concrete indicates:",
  options: ["Cement brand", "Number of bricks", "Compressive strength", "Mixing time"],
  correctIndex: 2,
  explanation: "The grade of concrete represents its characteristic compressive strength."
},
{
  question: "Hook length in stirrups is:",
  options: ["8d", "6d", "10d", "12d"],
  correctIndex: 1,
  explanation: "The standard hook length provided in stirrups is generally 6d."
},
{
  question: "Best curing method for hot weather:",
  options: ["Steam", "Water ponding", "Gunny bags", "Sheet covering"],
  correctIndex: 2,
  explanation: "Wet gunny bags help retain moisture and are effective for curing in hot weather."
},
{
  question: "Which is used to increase concrete durability?",
  options: ["Increase water", "Reduce cement", "Add silica fume", "Remove sand"],
  correctIndex: 2,
  explanation: "Silica fume reduces permeability and improves durability."
},
{
  question: "Formwork is removed after:",
  options: ["2 days", "7 days", "Depends on concrete type", "1 day"],
  correctIndex: 2,
  explanation: "Formwork removal depends on concrete strength gain and structural member type."
},
{
  question: "Concrete mix with W/C ratio of 0.4 is:",
  options: ["Very dry", "Normal", "Rich", "Poor"],
  correctIndex: 0,
  explanation: "A water-cement ratio of 0.4 produces relatively dry concrete."
},
{
  question: "Which soil is best for foundation?",
  options: ["Clay", "Silt", "Rock", "Loam"],
  correctIndex: 2,
  explanation: "Rock provides the highest bearing capacity and stability for foundations."
},
{
  question: "Cracks in concrete occur due to:",
  options: ["Over curing", "Poor compaction", "Good cement", "Strong shuttering"],
  correctIndex: 1,
  explanation: "Poor compaction creates voids and weak zones that may lead to cracking."
},
{
  question: "Bar bending schedule is prepared for:",
  options: ["Painting", "Steel cutting", "Material selection", "Foundation design"],
  correctIndex: 1,
  explanation: "A bar bending schedule is used for calculating and cutting reinforcement bars."
},
{
  question: "Reinforcement in slab is mostly:",
  options: ["Bent bars", "Straight bars", "Crank bars", "Spiral bars"],
  correctIndex: 2,
  explanation: "Crank bars are commonly used in RCC slabs to resist bending moments."
},
{
  question: "Cement should be used within:",
  options: ["1 month", "3 months", "6 months", "12 months"],
  correctIndex: 2,
  explanation: "Cement should preferably be used within 6 months of manufacture."
},
{
  question: "Reinforcement overlap length is:",
  options: ["20d", "40d", "50d", "60d"],
  correctIndex: 1,
  explanation: "A lap length of about 40d is commonly used in reinforced concrete works."
},
{
  question: "Which cement emits less heat?",
  options: ["OPC", "PPC", "SRC", "RHC"],
  correctIndex: 1,
  explanation: "PPC generates less heat of hydration than OPC."
},
{
  question: "Concrete porosity increases with:",
  options: ["Less water", "More cement", "More sand", "More water"],
  correctIndex: 3,
  explanation: "Excess water creates more voids after evaporation, increasing porosity."
},

  ];

  
  return (
  <main className="min-h-screen bg-gray-50 py-8 px-6 pb-32">
    <h1 className="text-2xl md:text-3xl font-bold text-center text-teal-700 mb-1">
      Basic Civil Engineering
    </h1>
    <p className="text-center text-gray-500 text-sm mb-6">
      Answer all questions to see instant feedback and explanations.
    </p>

    <Quiz chapterTitle="Chapter 1" questions={questions} />
  </main>
);
}