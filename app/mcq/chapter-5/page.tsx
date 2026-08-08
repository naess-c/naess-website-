import Quiz from "../../components/Quiz";

export default function Chapter1Page() {
  const questions = [
   
  {
    question: "The main source of mechanical power on a modern farm is:",
    options: ["Animal power", "Human labor", "Tractor", "Solar"],
    correctIndex: 2,
    explanation: "Tractors serve as the primary source of farm power, providing mechanical energy for pulling implements and driving farm machinery."
  },
  {
    question: "The unit of power in SI system is:",
    options: ["Watt", "Horsepower", "Joule", "Newton"],
    correctIndex: 0,
    explanation: "The Watt (W) is the standard SI unit of power, defined as one Joule per second."
  },
  {
    question: "1 horsepower is equal to:",
    options: ["1000 W", "736 W", "746 W", "700 W"],
    correctIndex: 2,
    explanation: "In mechanical engineering, 1 Imperial horsepower (hp) is standardized as equivalent to approximately 746 Watts."
  },
  {
    question: "A two-wheel tractor is commonly known as:",
    options: ["Crawler", "Power tiller", "Harrow", "Rotavator"],
    correctIndex: 1,
    explanation: "A power tiller is a single-axle, two-wheeled walking tractor used widely for small-scale cultivation and wetland puddling."
  },
  {
    question: "The engine commonly used in farm tractors is:",
    options: ["Petrol engine", "Diesel engine", "Electric motor", "Steam engine"],
    correctIndex: 1,
    explanation: "Diesel engines are preferred for agricultural tractors due to their high torque output, fuel efficiency, and durability under heavy loads."
  },
  {
    question: "The part of a tractor that transmits power to attached implements is:",
    options: ["Axle", "Engine", "PTO", "Brake"],
    correctIndex: 2,
    explanation: "The Power Take-Off (PTO) shaft transfers mechanical rotary power directly from the tractor engine to attached machinery like threshers and rotavators."
  },
  {
    question: "Power transmission by belts is classified as:",
    options: ["Hydraulic", "Pneumatic", "Mechanical", "Thermal"],
    correctIndex: 2,
    explanation: "Belt drives rely on physical friction and tension between pulleys and belts, making them a mechanical power transmission system."
  },
  {
    question: "The instrument used to measure engine power is:",
    options: ["Barometer", "Speedometer", "Dynamometer", "Manometer"],
    correctIndex: 2,
    explanation: "A dynamometer measures the torque and rotational speed (RPM) of an engine to determine its brake horsepower."
  },
  {
    question: "Which type of plough is used for soil inversion?",
    options: ["Disc plough", "MB plough", "Chisel plough", "Blade harrow"],
    correctIndex: 1,
    explanation: "The Moldboard (MB) plough is specifically designed to cut, lift, turn, and invert upper soil layers to bury weeds and trash."
  },
  {
    question: "The main purpose of secondary tillage is to:",
    options: ["Loosen the soil", "Turn over the soil", "Pulverize and level the soil", "Apply fertilizers"],
    correctIndex: 2,
    explanation: "Secondary tillage follows primary tillage to break up clods, pulverize soil, smooth the field surface, and prepare a fine seedbed."
  },
  {
    question: "Which implement is used for sowing seeds in rows?",
    options: ["MB plough", "Harrow", "Seed drill", "Sprayer"],
    correctIndex: 2,
    explanation: "A seed drill drops seeds into continuous furrows at controlled depths and uniform row spacing."
  },
  {
    question: "Which machine is used to separate grain from crop?",
    options: ["Reaper", "Planter", "Thresher", "Harrow"],
    correctIndex: 2,
    explanation: "Threshers strip or beat harvested crops to detach agricultural grains or seeds from the straw and chaff."
  },
  {
    question: "The process of cutting crops close to the ground is called:",
    options: ["Harvesting", "Ploughing", "Threshing", "Sowing"],
    correctIndex: 0,
    explanation: "Harvesting encompasses the operations involved in cutting, gathering, and securing mature agricultural crops."
  },
  {
    question: "The gear system in a tractor is used to:",
    options: ["Cool engine", "Provide speed variation", "Stop motion", "Maintain air pressure"],
    correctIndex: 1,
    explanation: "Transmission gears alter the torque and speed ratio between the engine crankshaft and the drive wheels or PTO."
  },
  {
    question: "The function of a chaff cutter is to:",
    options: ["Spray pesticide", "Cut fodder into small pieces", "Plough field", "Mix feed"],
    correctIndex: 1,
    explanation: "Chaff cutters slice green or dry forage crops into small pieces (chaff) for easier livestock digestion and feeding."
  },
  {
    question: "Primary tillage is carried out using:",
    options: ["Harrow", "Seed drill", "MB plough", "Rotavator"],
    correctIndex: 2,
    explanation: "Primary tillage involves deep soil opening and inversion, which is primarily accomplished using heavy ploughs such as the Moldboard plough."
  },
  {
    question: "The purpose of inter-cultivation is to:",
    options: ["Sow seeds", "Apply fertilizers", "Control weeds", "Level field"],
    correctIndex: 2,
    explanation: "Inter-cultivation (or weeding) is conducted between standing crop rows to eliminate competitive weeds and aerate topsoil."
  },
  {
    question: "Specific fuel consumption is expressed as:",
    options: ["Liter/hour", "Liter/km", "Liter/HP/hour", "Liter/hectare"],
    correctIndex: 2,
    explanation: "Specific Fuel Consumption (SFC) measures engine fuel efficiency as fuel mass/volume consumed per unit of power produced per hour."
  },
  {
    question: "The type of engine commonly used in a power tiller is:",
    options: ["Electric", "Petrol", "Diesel", "Hybrid"],
    correctIndex: 2,
    explanation: "Power tillers utilize high-torque, single-cylinder diesel engines due to their heavy-duty field requirements."
  },
  {
    question: "The rotavator is a type of:",
    options: ["Seed planter", "Secondary tillage tool", "Harvester", "Thresher"],
    correctIndex: 1,
    explanation: "A rotavator (rotary tiller) utilizes rotating blades to cut, mix, and pulverize soil as a secondary tillage practice."
  },
  {
    question: "Drawbar horsepower is the power:",
    options: ["At PTO shaft", "Lost in transmission", "Used for traction", "Developed in the cylinder"],
    correctIndex: 2,
    explanation: "Drawbar horsepower represents the net power available at the tractor hitch to pull implements across field surfaces."
  },
  {
    question: "Which one is not a harvesting tool?",
    options: ["Sickle", "Scythe", "MB Plough", "Reaper"],
    correctIndex: 2,
    explanation: "An MB Plough is a primary tillage tool designed for soil inversion, whereas sickles, scythes, and reapers are harvesting implements."
  },
  {
    question: "Thermal efficiency of diesel engine is around:",
    options: ["5%", "25–30%", "45–50%", "60–70%"],
    correctIndex: 1,
    explanation: "High-compression agricultural diesel engines convert roughly 25–30% of thermal fuel energy into useful mechanical work."
  },
  {
    question: "The PTO speed in most tractors is:",
    options: ["300 RPM", "540 RPM", "1000 RPM", "1500 RPM"],
    correctIndex: 1,
    explanation: "The global standard engine PTO speed for agricultural tractors is 540 RPM (and 1000 RPM for heavy implements)."
  },
  {
    question: "Which equipment is used for spraying chemicals?",
    options: ["Harrow", "Sprayer", "Seeder", "Reaper"],
    correctIndex: 1,
    explanation: "Sprayers pressurize and atomize liquid agricultural formulations like pesticides, fungicides, and liquid fertilizers."
  },
  {
    question: "A cultivator is primarily used for:",
    options: ["Primary tillage", "Secondary tillage", "Weeding", "Seeding"],
    correctIndex: 1,
    explanation: "Cultivators stir and pulverize soil after primary tillage to destroy weeds and prepare seedbeds."
  },
  {
    question: "In tractors, clutch is used to:",
    options: ["Control brakes", "Start the engine", "Engage and disengage the transmission", "Accelerate"],
    correctIndex: 2,
    explanation: "The clutch temporarily disconnects the engine from the gearbox to allow smooth gear shifting and equipment stopping."
  },
  {
    question: "For shallow ploughing, which implement is best?",
    options: ["Disc plough", "Blade harrow", "MB plough", "Subsoiler"],
    correctIndex: 1,
    explanation: "Blade harrows (bakhar) operate at minimal depths to scrape weeds and create shallow surface mulches."
  },
  {
    question: "Power tillers are most suitable for:",
    options: ["Hilly areas", "Heavy soils", "Drylands", "Irrigated rice fields"],
    correctIndex: 3,
    explanation: "Compact size and maneuverability make power tillers ideal for small, flooded paddy fields (rice cultivation)."
  },
  {
    question: "Traction refers to:",
    options: ["Pulling power", "Engine capacity", "Soil moisture", "Seed depth"],
    correctIndex: 0,
    explanation: "Traction is the effective adhesive friction generated between tractor drive tires or tracks and the soil surface to provide pulling force."
  },
  {
    question: "The most efficient method of pesticide application is:",
    options: ["Duster", "Knapsack sprayer", "Boom sprayer", "Bucket"],
    correctIndex: 2,
    explanation: "Tractor-mounted or self-propelled boom sprayers cover broad field swaths with high spray distribution uniformity and speed."
  },
  {
    question: "The life of a good quality tractor is about:",
    options: ["1 year", "5 years", "10–15 years", "25 years"],
    correctIndex: 2,
    explanation: "With routine maintenance, typical agricultural tractors have an operational economic lifespan of roughly 10–15 years (or ~10,000 engine hours)."
  },
  {
    question: "Crawler tractors move on:",
    options: ["Wheels", "Rubber tires", "Tracks", "Rotors"],
    correctIndex: 2,
    explanation: "Crawler (tracked) tractors utilize continuous steel or rubber track chains to distribute weight and increase traction on soft soils."
  },
  {
    question: "Field efficiency is calculated as:",
    options: ["Theoretical capacity ÷ Actual output", "Actual ÷ Theoretical × 100", "Engine HP ÷ Width", "Speed × Time"],
    correctIndex: 1,
    explanation: "Field efficiency expresses effective field work rate as a percentage ratio of actual area output to theoretical field capacity."
  },
  {
    question: "For operating a thresher, which power source is used?",
    options: ["Human", "PTO", "Battery", "Inverter"],
    correctIndex: 1,
    explanation: "Stationary grain threshers are driven directly by tractor PTO shafts via universal joint drivelines or belt connections."
  },
  {
    question: "Draft is measured in:",
    options: ["N/m²", "N", "Watt", "Kg"],
    correctIndex: 1,
    explanation: "Draft is the horizontal force required to pull an agricultural implement through soil, measured in Newtons (N) or kilo-Newtons (kN)."
  },
  {
    question: "What is the function of a governor in an engine?",
    options: ["Increase speed", "Reduce noise", "Regulate speed", "Cool air"],
    correctIndex: 2,
    explanation: "Engine governors automatically adjust fuel delivery to maintain a constant operational RPM despite fluctuating field loads."
  },
  {
    question: "Blade harrows are used for:",
    options: ["Fine tilth", "Deep ploughing", "Soil inversion", "Seed sowing"],
    correctIndex: 0,
    explanation: "Blade harrows shear weed roots, crush small clods, and smooth soil surfaces to produce fine seedbed tilth."
  },
  {
    question: "Planters are used for:",
    options: ["Spraying", "Harvesting", "Sowing of large seeds", "Threshing"],
    correctIndex: 2,
    explanation: "Precision planters deposit larger seeds (e.g., maize, cotton, groundnut) individually at precise hill spacings within rows."
  },
  {
    question: "Most suitable machine for maize shelling is:",
    options: ["Combine harvester", "Chaff cutter", "Groundnut decorticator", "Maize sheller"],
    correctIndex: 3,
    explanation: "Maize shellers use high-friction cylinders or disc plates engineered specifically to strip maize kernels cleanly off dried cobs."
  },
  {
    question: "Puddling is done in:",
    options: ["Wheat field", "Maize field", "Rice field", "Cotton field"],
    correctIndex: 2,
    explanation: "Puddling churns saturated soil in flooded rice paddies to destroy soil aggregates and form an impervious layer that restricts water drainage."
  },
  {
    question: "The function of the air filter in a tractor is to:",
    options: ["Supply fuel", "Filter engine oil", "Remove dust from intake air", "Increase combustion"],
    correctIndex: 2,
    explanation: "Air cleaners filter dust, grit, and airborne debris out of intake air before it reaches the combustion cylinders, preventing engine wear."
  },
  {
    question: "Wheel slip is:",
    options: ["Positive movement", "Fuel saving", "Loss in traction", "Engine speed gain"],
    correctIndex: 2,
    explanation: "Wheel slip occurs when drive wheels rotate faster than forward ground movement, leading to lost traction, wasted power, and tire wear."
  },
  {
    question: "Reaper binder does:",
    options: ["Only cutting", "Only binding", "Cutting and binding", "Harvesting and shelling"],
    correctIndex: 2,
    explanation: "A reaper-binder cuts standing cereal crops near ground level and immediately binds the stalks into uniform standing sheaves or bundles."
  },
  {
    question: "Subsoiler is used for:",
    options: ["Deep tillage", "Seeding", "Surface leveling", "Puddling"],
    correctIndex: 0,
    explanation: "Subsoilers perform ultra-deep non-inversion tillage (30–60 cm depth) to shatter compacted hardpans below standard ploughing depths."
  },
  {
    question: "Which part of a tractor converts reciprocating motion into rotary motion?",
    options: ["Piston", "Crankshaft", "Valve", "Cylinder"],
    correctIndex: 1,
    explanation: "The crankshaft connects to pistons via connecting rods, converting up-and-down (reciprocating) stroke energy into rotary movement."
  },
  {
    question: "The compression ratio in diesel engine is around:",
    options: ["6:1", "10:1", "14–22:1", "2:1"],
    correctIndex: 2,
    explanation: "Diesel engines rely on high compression ratios (14:1 to 22:1) to heat compressed intake air sufficiently to auto-ignite injected fuel."
  },
  {
    question: "Mechanical harvesting reduces:",
    options: ["Fuel cost", "Labor requirement", "Crop damage", "Storage cost"],
    correctIndex: 1,
    explanation: "Mechanized harvesting replaces manual field labor with machine operations, drastically cutting human labor requirements and time."
  },
  {
    question: "Which is a self-propelled harvesting machine?",
    options: ["MB plough", "Combine harvester", "Blade harrow", "Chisel plough"],
    correctIndex: 1,
    explanation: "Combine harvesters contain internal drive engines that power both crop processing and vehicle movement independently without needing a tractor."
  },
  {
    question: "Spray droplet size affects:",
    options: ["Field speed", "Fuel consumption", "Chemical effectiveness", "Ploughing depth"],
    correctIndex: 2,
    explanation: "Droplet size dictates leaf surface coverage, chemical penetration, drift susceptibility, and overall agrochemical application efficacy."
  },
  {
    question: "Machine used to break clods is:",
    options: ["MB plough", "Cultivator", "Harrow", "Planter"],
    correctIndex: 2,
    explanation: "Harrows (like disc or spike-tooth harrows) break coarse primary-tillage clods into smaller soil particles suitable for planting."
  },
  {
    question: "Threshing efficiency depends on:",
    options: ["Moisture content", "Feeding rate", "Cylinder speed", "All of these"],
    correctIndex: 3,
    explanation: "Grain damage and unthreshed seed losses vary directly with crop moisture levels, crop feed rates, and thresher cylinder peripheral speeds."
  },
  {
    question: "A rotary hoe is used for:",
    options: ["Ploughing", "Intercultivation", "Spraying", "Harvesting"],
    correctIndex: 1,
    explanation: "Rotary hoes lift surface crusts and uproot tiny seedling weeds around growing crops during early intercultivation."
  },
  {
    question: "Clutch plates are made of:",
    options: ["Glass", "Plastic", "Friction material", "Copper"],
    correctIndex: 2,
    explanation: "Clutch plates are faced with specialized high-friction compound materials (like organic resin or ceramic composites) to grip flywheels without slipping."
  },
  {
    question: "Tractor front wheels are smaller to:",
    options: ["Increase weight", "Reduce turning radius", "Increase speed", "Stabilize rear"],
    correctIndex: 1,
    explanation: "Smaller front steer wheels allow sharper wheel turning angles, significantly decreasing a tractor's turning radius in tight fields."
  },
  {
    question: "The purpose of flywheel in engine is:",
    options: ["Produce spark", "Generate current", "Maintain momentum", "Filter oil"],
    correctIndex: 2,
    explanation: "Heavy flywheels store kinetic energy during power strokes to carry the crankshaft smoothly through non-power engine strokes."
  },
  {
    question: "Crop residue is best managed using:",
    options: ["Reaper", "Harrow", "Rotavator", "Planter"],
    correctIndex: 2,
    explanation: "Rotavators chop leftover crop stubble and incorporate high-volume plant residues directly into soil layers."
  },
  {
    question: "A zero-till drill allows:",
    options: ["Multiple sowing", "Tillage and sowing together", "Sowing without tillage", "Harvesting"],
    correctIndex: 2,
    explanation: "Zero-till seed drills cut narrow slits directly into unploughed crop residue to place seed and fertilizer with zero prior field tillage."
  },
  {
    question: "Combine harvester performs:",
    options: ["Threshing", "Cleaning", "Cutting", "All of these"],
    correctIndex: 3,
    explanation: "Combine harvesters execute cutting standing grain, threshing kernels from heads, and winnowing/cleaning seeds in one continuous pass."
  },
  {
    question: "Standard width of MB plough bottom is:",
    options: ["10 cm", "20 cm", "25–30 cm", "50 cm"],
    correctIndex: 2,
    explanation: "Standard tractor-drawn moldboard plough bottoms cut furrow slices ranging typically between 25 cm and 30 cm wide."
  },
  {
    question: "Which machine is used to cut and collect fodder?",
    options: ["Combine", "Forage harvester", "Reaper", "Cultivator"],
    correctIndex: 1,
    explanation: "Forage harvesters (silage choppers) cut green forage plants, chop them into uniform feed particles, and blow them into trailing wagons."
  },
  {
    question: "The working principle of a diesel engine is based on:",
    options: ["External combustion", "Electric ignition", "Compression ignition", "Spark plug"],
    correctIndex: 2,
    explanation: "Diesel engines work on the Compression Ignition (CI) principle, where extreme air compression heat ignites injected fuel without spark plugs."
  },
  {
    question: "What is the main function of radiator in tractor?",
    options: ["Fuel injection", "Oil circulation", "Engine cooling", "Clutch operation"],
    correctIndex: 2,
    explanation: "Radiators act as liquid-to-air heat exchangers that cool engine coolant circulating out from hot cylinder blocks."
  },
  {
    question: "Harvesting machine for groundnut is called:",
    options: ["Groundnut lifter", "Groundnut digger", "Groundnut harvester", "Groundnut thresher"],
    correctIndex: 1,
    explanation: "Groundnut diggers cut taproots below pod depth and lift entire peanut plants out of the soil for field drying."
  },
  {
    question: "Which one is not a component of tractor transmission system?",
    options: ["Gearbox", "Clutch", "Axle", "Radiator"],
    correctIndex: 3,
    explanation: "The radiator belongs to the engine cooling system, whereas clutches, gearboxes, and drive axles form the power drivetrain/transmission."
  },
  {
    question: "An air-cooled engine uses:",
    options: ["Fan", "Radiator", "Coolant", "Oil"],
    correctIndex: 0,
    explanation: "Air-cooled engines use cooling fins and a high-velocity fan to blow cooling air across warm cylinder exteriors."
  },
  {
    question: "Tractor is classified based on:",
    options: ["PTO speed", "Engine size", "Horsepower", "Axle type"],
    correctIndex: 2,
    explanation: "Tractors are legally and commercially classified into power categories based on their rated engine horsepower (HP)."
  },
  {
    question: "The implement used for transplanting rice is:",
    options: ["Drum seeder", "Paddy transplanter", "Dibbling machine", "Combine"],
    correctIndex: 1,
    explanation: "Paddy transplanters push nursery-grown rice seedlings into flooded muddy field beds at uniform depth and spacing."
  },
  {
    question: "Which implement is used for fertilizer application?",
    options: ["Harrow", "Sprayer", "Broadcaster", "Ridger"],
    correctIndex: 2,
    explanation: "Fertilizer broadcasters distribute dry granular fertilizers uniformly over field surfaces using spinning discs."
  },
  {
    question: "Which fuel is more efficient for field tractors?",
    options: ["Petrol", "Kerosene", "Diesel", "LPG"],
    correctIndex: 2,
    explanation: "Diesel fuel contains higher volumetric energy density than petrol, yielding greater thermal efficiency and heavy-duty field torque."
  },
  {
    question: "Power tiller is ideal for:",
    options: ["Sugarcane", "Rice-wheat system", "Cotton", "Forest land"],
    correctIndex: 1,
    explanation: "Power tillers are ideal for small farms operating rice-wheat rotations, handling wet soil puddling and dry seedbed preparation."
  },
  {
    question: "Which part of the engine opens and closes to allow air/fuel entry and exhaust?",
    options: ["Valve", "Piston", "Crankshaft", "Connecting rod"],
    correctIndex: 0,
    explanation: "Intake and exhaust valves open and seal shut at timed intervals inside cylinder heads to control gas charges."
  },
  {
    question: "MB plough creates:",
    options: ["Crust", "Furrow", "Cracks", "Bunds"],
    correctIndex: 1,
    explanation: "As an MB plough cuts and turns soil slices, it leaves open trenches called furrows along the direction of travel."
  },
  {
    question: "Horizontal blade rotary tiller is called:",
    options: ["Planter", "Power tiller", "Rotavator", "Thresher"],
    correctIndex: 2,
    explanation: "Rotavators use L-shaped blades mounted on horizontal powered shafts to cut and pulverize soil."
  },
  {
    question: "The part of sprayer that breaks liquid into fine droplets:",
    options: ["Lance", "Nozzle", "Tank", "Pipe"],
    correctIndex: 1,
    explanation: "Spray nozzles force fluid under hydraulic pressure through tiny orifices, breaking liquid streams into fine sprays."
  },
  {
    question: "Engine crankshaft is supported by:",
    options: ["Flywheel", "Bearings", "Cylinder", "Gearbox"],
    correctIndex: 1,
    explanation: "Main bearings seated within the engine block support the spinning crankshaft, absorbing radial and axial forces."
  },
  {
    question: "Harrow is used after:",
    options: ["Sowing", "Spraying", "Ploughing", "Harvesting"],
    correctIndex: 2,
    explanation: "Harrowing is a secondary tillage operation performed after primary ploughing to break up large clods."
  },
  {
    question: "Which factor affects draft requirement?",
    options: ["Soil moisture", "Speed", "Depth of operation", "All of the above"],
    correctIndex: 3,
    explanation: "Implement draft increases with working depth, operational travel speed, and varying soil moisture and texture."
  },
  {
    question: "Reaper windrower is used for:",
    options: ["Ploughing", "Sowing", "Cutting and laying crop in rows", "Fertilizing"],
    correctIndex: 2,
    explanation: "Reaper windrowers slice standing grain stems and convey cut plants sideways into neat continuous rows (windrows) for field drying."
  },
  {
    question: "The typical engine speed of an agricultural tractor is:",
    options: ["500–1000 rpm", "1000–1500 rpm", "1500–2500 rpm", "3000 rpm"],
    correctIndex: 2,
    explanation: "Heavy diesel engines in farm tractors operate at governed engine speeds between 1500 and 2500 RPM."
  },
  {
    question: "The piston moves inside the:",
    options: ["Crankshaft", "Cylinder", "Injector", "Valve"],
    correctIndex: 1,
    explanation: "Pistons slide up and down within smooth engine cylinder bores during intake, compression, power, and exhaust strokes."
  },
  {
    question: "Compression ratio of diesel engine is generally:",
    options: ["4:1", "6:1", "8:1", "16:1"],
    correctIndex: 3,
    explanation: "Commercial agricultural diesel engines operate within high compression ratio ranges (typically 16:1 to 20:1)."
  },
  {
    question: "Which component converts fuel into mechanical energy?",
    options: ["Crankshaft", "Piston", "Engine", "Gear"],
    correctIndex: 2,
    explanation: "An internal combustion engine acts as a heat engine, converting chemical energy from fuel into mechanical rotation."
  },
  {
    question: "A trailer is attached to:",
    options: ["Steering", "Front axle", "Drawbar", "PTO"],
    correctIndex: 2,
    explanation: "Transport trailers and towed farm equipment couple directly onto a tractor's rear drawbar or hitch point."
  },
  {
    question: "Which is a primary tillage tool?",
    options: ["Cultivator", "Disc harrow", "MB plough", "Rotary tiller"],
    correctIndex: 2,
    explanation: "The Moldboard (MB) plough is a primary tillage implement designed to cut and invert virgin or settled soil."
  },
  {
    question: "Combine harvester is suitable for:",
    options: ["Rice", "Wheat", "Maize", "All"],
    correctIndex: 3,
    explanation: "Modern combine harvesters harvest, thresh, and clean various crops—including rice, wheat, and maize—using crop-specific header attachments."
  },
  {
    question: "Sprayers are calibrated to:",
    options: ["Reduce fuel", "Maintain flow", "Apply correct dose", "Measure area"],
    correctIndex: 2,
    explanation: "Sprayer calibration ensures that agrochemicals are delivered evenly across fields at target application rates (L/ha)."
  },
  {
    question: "The purpose of using a cage wheel in puddling:",
    options: ["Reduce speed", "Increase traction", "Decrease slippage", "All of the above"],
    correctIndex: 3,
    explanation: "Steel cage wheels attached to tractor drive wheels slice through muddy paddy soils, increasing traction and reducing slippage during puddling."
  },
  {
    question: "Which machine uses flails to remove grains?",
    options: ["Flail mower", "Flail thresher", "Hammer mill", "Reaper"],
    correctIndex: 1,
    explanation: "Flail threshers utilize rotating flexible metal flails or beaters to strike harvested crops and dislodge seeds."
  },
  {
    question: "Power output from engine is called:",
    options: ["Gross power", "Indicated power", "Brake horsepower", "Shaft horsepower"],
    correctIndex: 2,
    explanation: "Brake Horsepower (BHP) is the net power output measured at an engine crankshaft after overcoming internal friction losses."
  },
  {
    question: "The implement used to prepare ridges is:",
    options: ["Plough", "Ridger", "Harrow", "Seeder"],
    correctIndex: 1,
    explanation: "A ridger (or ridge plough) features double-moldboard bottoms that throw soil both ways to form raised ridges and furrows."
  },
  {
    question: "The function of carburetor in petrol engine is:",
    options: ["Fuel storage", "Ignition", "Mixing fuel and air", "None"],
    correctIndex: 2,
    explanation: "Carburetors atomize liquid petrol fuel and mix it with incoming air in correct ratios for spark ignition."
  },
  {
    question: "PTO power is measured in:",
    options: ["Watt", "Newton", "HP", "RPM"],
    correctIndex: 2,
    explanation: "Tractor power output at the PTO shaft is traditionally rated in Horsepower (HP) or Kilowatts (kW)."
  },
  {
    question: "Rotary tillers are operated by:",
    options: ["Hydraulic pump", "PTO", "Belt", "Axle"],
    correctIndex: 1,
    explanation: "Rotary tillers require continuous high-torque rotary power supplied directly through a tractor's PTO shaft."
  },
  {
    question: "Which is not a primary source of power in agriculture?",
    options: ["Solar", "Biogas", "Hydroelectric", "Flywheel"],
    correctIndex: 3,
    explanation: "A flywheel stores mechanical kinetic energy temporarily; it is an internal machine component rather than a primary energy source."
  },
  {
    question: "The depth of tillage depends on:",
    options: ["Soil type", "Implement used", "Crop type", "All of these"],
    correctIndex: 3,
    explanation: "Working depth depends on crop root characteristics, implement capabilities, and physical soil structures."
  },
  {
    question: "Which tool is used for measuring ploughing depth?",
    options: ["Tensiometer", "Measuring tape", "Depth gauge", "Compass"],
    correctIndex: 2,
    explanation: "A depth gauge or specialized soil measuring rod measures vertical trench depths created by tillage implements."
  },
  {
    question: "The clearance between cylinder and piston is essential to:",
    options: ["Store oil", "Increase compression", "Avoid friction and allow lubrication", "Increase heat"],
    correctIndex: 2,
    explanation: "Engine piston clearance permits thermal expansion during operation while allowing lubricating oil films to cover cylinder walls."
  },
  {
    question: "Which is used for intercultural operation?",
    options: ["Sprayer", "Rotary weeder", "Thresher", "Harrow"],
    correctIndex: 1,
    explanation: "Rotary weeders cultivate soil around established plants to remove young weeds without damaging standing crops."
  },
  {
    question: "The most important factor affecting machine selection is:",
    options: ["Color", "Brand", "Farm size and crop type", "Paint finish"],
    correctIndex: 2,
    explanation: "Machinery sizing depends on farm field dimensions, cropping patterns, soil conditions, and required field capacity."
  }
];
  

  return (
   <main className="min-h-screen bg-gray-50 py-8 px-6 pb-32">
    <h1 className="text-2xl md:text-3xl font-bold text-center text-teal-700 mb-1">
        Farm power, machine and Machinery
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Answer all questions to see instant feedback and explanations.
      </p>

      <Quiz chapterTitle="Chapter 5" questions={questions} />
    </main>
  );
}