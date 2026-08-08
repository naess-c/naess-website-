import Quiz from "../../components/Quiz";

export default function Chapter1Page() {
  const questions = [
   
  {
    question: "Bernoulli’s theorem is based on the principle of conservation of:",
    options: ["Mass", "Energy", "Momentum", "Pressure"],
    correctIndex: 1,
    explanation: "Bernoulli's equation represents the principle of conservation of energy for an ideal, incompressible fluid flow along a streamline."
  },
  {
    question: "The unit of discharge is:",
    options: ["m²/s", "m³/s", "m/s", "m³"],
    correctIndex: 1,
    explanation: "Discharge ($Q$) is the volume of fluid passing through a cross-section per unit time, measured in cubic meters per second ($\text{m}^3/\text{s}$)."
  },
  {
    question: "Which device is used to measure flow in open channels?",
    options: ["Orifice", "Venturimeter", "Weir", "Pitot tube"],
    correctIndex: 2,
    explanation: "A weir is a barrier placed across an open channel to measure the volumetric rate of water flow."
  },
  {
    question: "The velocity of flow is measured by:",
    options: ["Notch", "Manometer", "Pitot tube", "Weir"],
    correctIndex: 2,
    explanation: "A Pitot tube measures the local velocity of fluid flow by converting kinetic energy into pressure head (stagnation pressure)."
  },
  {
    question: "The most suitable site for a dam is where:",
    options: ["Valley is wide", "Valley is narrow", "Soil is sandy", "Slope is steep"],
    correctIndex: 1,
    explanation: "A narrow valley gorge minimizes the length and volume of the dam structure required, reducing construction costs significantly."
  },
  {
    question: "The flow in open channels is mainly due to:",
    options: ["Gravity", "Pressure", "Pumping", "Wind"],
    correctIndex: 0,
    explanation: "Open channel flow features a free water surface subject to atmospheric pressure; movement is driven primarily by the force of gravity along a bed slope."
  },
  {
    question: "Most important factor for canal alignment is:",
    options: ["Climate", "Soil type", "Topography", "Canal lining"],
    correctIndex: 2,
    explanation: "Topography determines the ground contours, allowing canal designers to locate ridge lines for efficient gravity distribution to command areas."
  },
  {
    question: "The main function of a spillway is to:",
    options: ["Store water", "Control flow", "Release excess water", "Stop erosion"],
    correctIndex: 2,
    explanation: "Spillways act as safety valves in dams to safely release excess floodwater that exceeds the storage capacity of the reservoir."
  },
  {
    question: "Manning’s formula is used to find:",
    options: ["Velocity of pipe flow", "Velocity in open channels", "Head loss in pipe", "Force on dam"],
    correctIndex: 1,
    explanation: "Manning's equation ($V = \\frac{1}{n} R^{2/3} S^{1/2}$) calculates the average flow velocity of fluid within an open channel."
  },
  {
    question: "The unit of dynamic viscosity is:",
    options: ["Pascal-second", "N/m²", "m²/s", "kg/m³"],
    correctIndex: 0,
    explanation: "Dynamic viscosity is measured in Pascal-seconds ($\text{Pa}\cdot\text{s}$ or $\text{N}\cdot\text{s/m}^2$) in SI units."
  },
  {
    question: "A device used to measure rainfall is:",
    options: ["Barometer", "Anemometer", "Rain gauge", "Hygrometer"],
    correctIndex: 2,
    explanation: "A rain gauge (pluviometer) is an instrument used by meteorologists and hydrologists to collect and measure liquid precipitation over a given time."
  },
  {
    question: "A flow net is used for:",
    options: ["Designing pipelines", "Calculating pressure", "Analyzing seepage", "Measuring velocity"],
    correctIndex: 2,
    explanation: "A flow net is a graphical representation of two-dimensional groundwater flow, used to determine seepage quantities and uplift hydrostatic pressures."
  },
  {
    question: "The velocity distribution in open channel flow is:",
    options: ["Uniform", "Maximum at the bottom", "Maximum at the surface", "Maximum below the surface"],
    correctIndex: 3,
    explanation: "Due to air resistance at the free surface and side/bottom wall friction, peak velocity typically occurs at a shallow depth ($0.05$ to $0.25$ times depth) below the surface."
  },
  {
    question: "The main cause of silt deposition in canals is:",
    options: ["High velocity", "Low velocity", "High slope", "Water temperature"],
    correctIndex: 1,
    explanation: "When flow velocity drops below the non-silting critical velocity, the water can no longer keep sediment suspended, causing silt deposition."
  },
  {
    question: "The continuity equation is based on conservation of:",
    options: ["Energy", "Mass", "Pressure", "Volume"],
    correctIndex: 1,
    explanation: "The continuity equation ($A_1 V_1 = A_2 V_2$ for incompressible fluids) enforces the physical principle of conservation of mass."
  },
  {
    question: "Which dam is suitable for narrow gorges?",
    options: ["Earthen dam", "Gravity dam", "Arch dam", "Rockfill dam"],
    correctIndex: 2,
    explanation: "An arch dam curves upstream to transfer horizontal water thrust directly onto strong canyon rock abutments, ideal for deep, narrow gorges."
  },
  {
    question: "The flow in which fluid particles move along well-defined paths is:",
    options: ["Laminar flow", "Turbulent flow", "Uniform flow", "Non-uniform flow"],
    correctIndex: 0,
    explanation: "In laminar flow, fluid particles slide smoothly in parallel layers or streamlines without macroscopic mixing."
  },
  {
    question: "Reynolds number is a ratio of:",
    options: ["Inertial to viscous forces", "Pressure to gravity forces", "Gravitational to viscous forces", "Viscous to surface tension"],
    correctIndex: 0,
    explanation: "The Reynolds number ($Re = \\frac{\\rho v L}{\\mu}$) is a dimensionless parameter defined as the ratio of inertial forces to viscous forces."
  },
  {
    question: "Freeboard in dams refers to:",
    options: ["Height above spillway", "Depth of water", "Base width", "Core thickness"],
    correctIndex: 0,
    explanation: "Freeboard is the vertical distance between the maximum water level in the reservoir and the top crest of the dam structure to prevent wave overtopping."
  },
  {
    question: "A notch is used to measure:",
    options: ["Velocity", "Pressure", "Flow rate", "Turbulence"],
    correctIndex: 2,
    explanation: "A notch is an opening cut into the side of a tank or channel structure to measure discharge (flow rate) of small channels."
  },
  {
    question: "The instrument used to measure pressure in pipe flow is:",
    options: ["Weir", "Manometer", "Rain gauge", "Thermometer"],
    correctIndex: 1,
    explanation: "A manometer uses liquid columns to measure static fluid pressure inside enclosed pipelines."
  },
  {
    question: "The hydraulic radius is given by:",
    options: ["Wetted area / Wetted perimeter", "Discharge / Area", "Velocity / Area", "Perimeter / Velocity"],
    correctIndex: 0,
    explanation: "Hydraulic radius ($R$) is defined mathematically as the cross-sectional area of flow ($A$) divided by its wetted perimeter ($P$)."
  },
  {
    question: "A channel is most efficient when:",
    options: ["It has high velocity", "It has less slope", "It has minimum wetted perimeter", "It is unlined"],
    correctIndex: 2,
    explanation: "For a given cross-sectional area, a minimum wetted perimeter yields maximum hydraulic radius and minimizes frictional resistance, achieving maximum discharge."
  },
  {
    question: "Which structure controls silt entry into canals?",
    options: ["Cross regulator", "Sediment excluder", "Canal fall", "Diversion weir"],
    correctIndex: 1,
    explanation: "A sediment excluder is constructed in the river bed upstream of the canal head regulator to divert heavy bed silt before water enters the canal."
  },
  {
    question: "The unit hydrograph is applicable to:",
    options: ["Snowfall", "Percolation", "Surface runoff", "Evaporation"],
    correctIndex: 2,
    explanation: "Unit hydrograph theory models direct surface runoff hydrographs resulting from one unit ($1\text{ cm}$ or $1\text{ in}$) of effective rainfall excess."
  },
  {
    question: "The shape of water surface in a uniform open channel flow is:",
    options: ["Circular", "Parabolic", "Straight line", "Irregular"],
    correctIndex: 2,
    explanation: "In uniform channel flow, flow depth and velocity remain constant along the length, causing the water surface to run as a straight line parallel to the bed slope."
  },
  {
    question: "The hydraulic jump is a phenomenon related to:",
    options: ["Pipe burst", "Open channel flow", "Water hammer", "Bernoulli’s failure"],
    correctIndex: 1,
    explanation: "A hydraulic jump occurs in open channel flow when high-velocity supercritical flow rapidly transitions to low-velocity subcritical flow, dissipating excess energy."
  },
  {
    question: "The process of water entering the soil is called:",
    options: ["Percolation", "Seepage", "Infiltration", "Evaporation"],
    correctIndex: 2,
    explanation: "Infiltration refers specifically to the initial entry of water through the ground surface into upper soil layers."
  },
  {
    question: "Which method is used to reduce seepage in canals?",
    options: ["Increasing velocity", "Providing lining", "Increasing depth", "Widening canal"],
    correctIndex: 1,
    explanation: "Lining canal beds and sides with impervious materials like concrete or masonry drastically reduces water loss through seepage."
  },
  {
    question: "Time of concentration in watershed hydrology refers to:",
    options: ["Time to fill reservoir", "Duration of rainfall", "Time to reach peak discharge", "Time to irrigate field"],
    correctIndex: 2,
    explanation: "Time of concentration ($T_c$) is the duration required for water to travel from the most hydrologically distant point in a watershed to the outlet, corresponding to peak runoff formation."
  },
  {
    question: "Flow in a river is an example of:",
    options: ["Open channel flow", "Pipe flow", "Confined flow", "Laminar flow"],
    correctIndex: 0,
    explanation: "River flow has a free water surface directly exposed to atmospheric pressure, making it a classic natural open channel flow system."
  },
  {
    question: "When discharge remains constant with time, flow is:",
    options: ["Uniform", "Steady", "Critical", "Gradually varied"],
    correctIndex: 1,
    explanation: "Flow is defined as steady when fluid properties (like discharge, velocity, and depth) at a specific point do not change with time."
  },
  {
    question: "The basic equation for open channel flow is:",
    options: ["Darcy’s law", "Bernoulli’s equation", "Chezy’s formula", "Archimedes’ law"],
    correctIndex: 2,
    explanation: "Chezy's formula ($V = C\\sqrt{RS}$) is a fundamental empirical expression used to compute mean velocity in open channel hydraulic flows."
  },
  {
    question: "Streamlines never intersect because:",
    options: ["They are imaginary", "Flow is random", "Velocity is same", "Fluid particle cannot move in two directions at once"],
    correctIndex: 3,
    explanation: "Intersecting streamlines would imply two different velocity vector directions at a single point simultaneously, which violates continuous fluid field physics."
  },
  {
    question: "Froude number indicates:",
    options: ["Laminar vs turbulent", "Critical flow condition", "Energy head", "Flow resistance"],
    correctIndex: 1,
    explanation: "The Froude number ($Fr = \\frac{V}{\\sqrt{gD}}$) compares inertial to gravity forces and classifies flow as subcritical ($Fr < 1$), critical ($Fr = 1$), or supercritical ($Fr > 1$)."
  },
  {
    question: "What is the primary function of a canal fall?",
    options: ["Control flow", "Reduce velocity", "Provide water to fields", "Lift water"],
    correctIndex: 1,
    explanation: "A canal fall (or drop) is built where the natural ground slope is steeper than the safe canal bed slope to safely lower the water surface and avoid erosive velocities."
  },
  {
    question: "Water hammer occurs in:",
    options: ["Canals", "Pipes", "Reservoirs", "Streams"],
    correctIndex: 1,
    explanation: "Water hammer is a pressure surge created in closed pipe conduits when a flowing fluid is forced to stop or change direction abruptly."
  },
  {
    question: "The unit of rainfall intensity is:",
    options: ["mm", "mm/hour", "m²/hour", "cm³/s"],
    correctIndex: 1,
    explanation: "Rainfall intensity represents the rate at which rain falls, measured in depth per unit time (such as $\text{mm/hr}$ or $\text{in/hr}$)."
  },
  {
    question: "Which is not a surface water source?",
    options: ["River", "Lake", "Spring", "Ocean"],
    correctIndex: 3,
    explanation: "While oceans are massive bodies of surface water, in supply hydrology engineering 'surface water sources' specifically refer to freshwater bodies fit for consumption or treatment (lakes, rivers, reservoirs)."
  },
  {
    question: "For maximum discharge through a circular channel, the depth of flow should be:",
    options: ["Full", "Half", "0.95 times diameter", "0.81 times diameter"],
    correctIndex: 2,
    explanation: "Hydraulic derivations show that a circular conduit reaches its maximum discharge capacity when water depth reaches approximately $0.95$ times its diameter ($0.95d$)."
  },
  {
    question: "The process of evaporation depends on:",
    options: ["Temperature", "Wind speed", "Humidity", "All of these"],
    correctIndex: 3,
    explanation: "Evaporation rates increase with higher temperatures, stronger wind velocities, and lower ambient relative humidity."
  },
  {
    question: "Which of the following is a non-recording type rain gauge?",
    options: ["Tipping bucket", "Symons gauge", "Weighing bucket", "Float type"],
    correctIndex: 1,
    explanation: "The Symons rain gauge collects water for manual reading and does not automatically record rainfall depth over time."
  },
  {
    question: "The velocity head is expressed as:",
    options: ["v²/2g", "v²g", "2gv", "g/2v²"],
    correctIndex: 0,
    explanation: "Velocity head represents the kinetic energy per unit weight of fluid and is given by $\\frac{v^2}{2g}$."
  },
  {
    question: "The depth at which specific energy is minimum for a given discharge is called:",
    options: ["Normal depth", "Critical depth", "Specific depth", "Uniform depth"],
    correctIndex: 1,
    explanation: "Critical depth ($y_c$) is defined as the flow depth in an open channel at which specific energy ($E$) reaches its absolute minimum for a fixed discharge."
  },
  {
    question: "The pressure head is measured in:",
    options: ["meters", "liters", "seconds", "m/s"],
    correctIndex: 0,
    explanation: "Pressure head ($p/\\gamma$) represents fluid column height and is expressed in units of length (meters of fluid column)."
  },
  {
    question: "The upward flow of water through soil is:",
    options: ["Capillary action", "Percolation", "Infiltration", "Diffusion"],
    correctIndex: 0,
    explanation: "Capillary action draws liquid upwards against gravity through fine soil pores due to surface tension and adhesion forces."
  },
  {
    question: "Specific speed of a turbine is:",
    options: ["Dimensionless", "Depends on type", "Always < 1", "Measured in RPM"],
    correctIndex: 0,
    explanation: "Although often expressed numerically in specific unit systems, the fundamental formulation for specific speed is derived as a dimensionless parameter."
  },
  {
    question: "A channel with mild slope and low velocity is:",
    options: ["Steep channel", "Critical flow", "Subcritical flow", "Supercritical flow"],
    correctIndex: 2,
    explanation: "When a channel bed slope is milder than the critical slope ($S_0 < S_c$), flow velocity is low ($Fr < 1$), which corresponds to subcritical flow."
  },
  {
    question: "Which equation is used to find seepage loss in canals?",
    options: ["Chezy’s", "Bligh’s", "Khosla’s", "Darcy’s"],
    correctIndex: 3,
    explanation: "Darcy's Law ($Q = k i A$) governs flow through porous media and is applied to compute soil seepage losses under structures and canal beds."
  },
  {
    question: "Water stored behind a dam is called:",
    options: ["Runoff", "Yield", "Reservoir", "Inflow"],
    correctIndex: 2,
    explanation: "A reservoir is an artificial lake created behind a dam structure to impound and store surface runoff water."
  },
  {
    question: "For maximum velocity in a circular channel, depth is:",
    options: ["d", "0.5d", "0.95d", "0.81d"],
    correctIndex: 3,
    explanation: "In open channel circular pipes, the maximum flow velocity occurs when the water depth is approximately $0.81$ times the diameter ($0.81d$)."
  },
  {
    question: "An aquifer is:",
    options: ["A non-permeable rock", "A water-bearing rock", "A lake", "A dam section"],
    correctIndex: 1,
    explanation: "An aquifer is an underground geologic formation of permeable rock, sand, or gravel that yields economical quantities of water."
  },
  {
    question: "Velocity of water through soil pores is governed by:",
    options: ["Bernoulli’s equation", "Seepage law", "Darcy’s law", "Flow net"],
    correctIndex: 2,
    explanation: "Darcy's Law establishes a linear relationship between hydraulic gradient and discharge velocity through soil pore matrices."
  },
  {
    question: "Flow net consists of:",
    options: ["Equipotential lines only", "Streamlines only", "Both streamlines and equipotential lines", "Flow direction"],
    correctIndex: 2,
    explanation: "A flow net is composed of two orthogonal families of curves: streamlines (flow paths) and equipotential lines (lines of equal hydraulic head)."
  },
  {
    question: "Seepage force acts in the direction of:",
    options: ["Flow", "Gravity", "Upward", "Perpendicular to flow"],
    correctIndex: 0,
    explanation: "Seepage pressure is exerted by moving water onto soil grains in the direction of fluid flow along the hydraulic gradient."
  },
  {
    question: "Reservoir capacity is measured in:",
    options: ["m³", "m/s", "mm/hr", "liters/min"],
    correctIndex: 0,
    explanation: "Capacity refers to the volumetric storage space inside a reservoir, expressed in cubic meters ($\text{m}^3$) or hectare-meters."
  },
  {
    question: "Base period in irrigation is the time:",
    options: ["Between rainfalls", "Between crop harvest", "Water required by crop", "Between first and last watering"],
    correctIndex: 3,
    explanation: "Base period ($B$) is the time span between the very first watering of a crop at sowing and its final watering prior to harvesting."
  },
  {
    question: "Specific yield refers to:",
    options: ["Water lost from aquifer", "Water available for use", "Recharge rate", "Flow from canal"],
    correctIndex: 1,
    explanation: "Specific yield is the ratio of water volume drained from an aquifer by gravity to the total volume of the saturated aquifer material."
  },
  {
    question: "Artesian well is one where:",
    options: ["Water has to be pumped", "Water rises above aquifer", "Water is stagnant", "Water evaporates"],
    correctIndex: 1,
    explanation: "In an artesian well, water in a confined aquifer is under hydrostatic pressure, causing it to rise naturally above the top of the aquifer layer."
  },
  {
    question: "Canal capacity is measured in:",
    options: ["ha", "lps", "m³/s", "mm/day"],
    correctIndex: 2,
    explanation: "Canal capacity is expressed as its maximum volumetric flow rate carrying capacity, measured in $\text{m}^3/\text{s}$ (cumecs)."
  },
  {
    question: "A flow is said to be turbulent when Reynolds number is:",
    options: ["< 2000", "> 4000", "0", "= 1"],
    correctIndex: 1,
    explanation: "For closed pipe flow, flow is laminar for $Re < 2000$, transitional between $2000$ and $4000$, and fully turbulent when $Re > 4000$."
  },
  {
    question: "Dead storage in a reservoir is:",
    options: ["Used for irrigation", "Below the outlet", "Lost to evaporation", "For flood control"],
    correctIndex: 1,
    explanation: "Dead storage lies below the invert level of the lowest outlet/sluice and is set aside to accumulate deposited sediment over the dam's design life."
  },
  {
    question: "Duty is defined as:",
    options: ["Area irrigated per cumec", "Volume per hectare", "Yield per unit area", "Time per crop"],
    correctIndex: 0,
    explanation: "Duty ($D$) represents the area of crop land irrigated per unit continuous discharge of water ($\text{hectares/cumec}$)."
  },
  {
    question: "Delta of a crop is:",
    options: ["Amount of rainfall", "Area of field", "Total depth of water", "Crop yield"],
    correctIndex: 2,
    explanation: "Delta ($\Delta$) is the total depth of irrigation water required by a crop during its entire growth cycle in the field."
  },
  {
    question: "A groyne is used to:",
    options: ["Store water", "Divert flow", "Measure flow", "Regulate temperature"],
    correctIndex: 1,
    explanation: "Groynes (or spurs) are river training structures built out from banks to deflect aggressive current away from banks and protect against erosion."
  },
  {
    question: "The silt factor in Kennedy’s theory depends on:",
    options: ["Velocity", "Particle size", "Canal depth", "Wetted perimeter"],
    correctIndex: 1,
    explanation: "Kennedy introduced the critical velocity ratio ($m$), and subsequent revisions relate silt factor ($f$) directly to mean sediment particle diameter ($d_{mm}$)."
  },
  {
    question: "The efficiency of a canal is maximum when:",
    options: ["It is lined", "Velocity is low", "Discharge is minimum", "Depth is small"],
    correctIndex: 0,
    explanation: "Lining canals minimizes seepage loss, prevents erosion/silting, lowers friction factors, and maximizes conveyance efficiency."
  },
  {
    question: "The ratio of actual evapotranspiration to potential evapotranspiration is called:",
    options: ["Consumptive use", "Evaporation index", "Water use efficiency", "Crop coefficient"],
    correctIndex: 3,
    explanation: "The ratio $AET / PET$ yields the crop coefficient ($K_c$), which varies depending on crop growth stage and soil moisture status."
  },
  {
    question: "Maximum efficiency of a Francis turbine is around:",
    options: ["50%", "60%", "70%", "90%"],
    correctIndex: 3,
    explanation: "Modern mixed-flow Francis turbines achieve very high peak hydraulic efficiencies, typically exceeding $90\%$ under optimal design heads."
  },
  {
    question: "In a flow net, flow lines and equipotential lines intersect at:",
    options: ["60°", "90°", "45°", "120°"],
    correctIndex: 1,
    explanation: "By mathematical definition of orthogonal potential flow fields, equipotential lines and streamlines intersect at right angles ($90^\circ$)."
  },
  {
    question: "Meandering of a river is caused by:",
    options: ["High velocity", "Sediment deposition", "Earthquake", "Flood"],
    correctIndex: 1,
    explanation: "Irregular sediment deposition and bank erosion in flat alluvial valleys cause river channels to follow winding S-shaped curves known as meanders."
  },
  {
    question: "The slope of water surface in open channel is called:",
    options: ["Bed slope", "Energy slope", "Water surface slope", "Velocity slope"],
    correctIndex: 2,
    explanation: "Water surface slope ($S_w$) represents the hydraulic gradient of the free water surface relative to a horizontal datum."
  },
  {
    question: "Weir is classified as:",
    options: ["Pipe structure", "Overflow structure", "Dam", "Sluice gate"],
    correctIndex: 1,
    explanation: "A weir is an overflow structure over which water cascades to measure or regulate flow."
  },
  {
    question: "Water logging is caused due to:",
    options: ["Excess pumping", "Canal seepage", "Low rainfall", "Sandy soil"],
    correctIndex: 1,
    explanation: "Unlined canal seepage raises underground water tables close to the surface, saturating soil pore spaces in crop root zones."
  },
  {
    question: "The time taken by flood wave to pass through watershed is:",
    options: ["Lag time", "Base time", "Recession time", "Concentration time"],
    correctIndex: 0,
    explanation: "Lag time measures the time difference between the centroid of effective rainfall excess and the peak discharge of the resulting hydrograph."
  },
  {
    question: "Subsurface drainage removes:",
    options: ["Surface water", "Air from pores", "Excess water below root zone", "Soil nutrients"],
    correctIndex: 2,
    explanation: "Subsurface drainage systems use underground pipes to collect and lower high water tables, clearing excess water from crop root zones."
  },
  {
    question: "Unit of specific yield is:",
    options: ["m/s", "%", "N/m³", "None"],
    correctIndex: 1,
    explanation: "Specific yield is a dimensionless volumetric ratio, commonly expressed as a percentage ($\\%$)."
  },
  {
    question: "Specific retention means:",
    options: ["Water permanently retained", "Yield", "Irrigation depth", "Percolation rate"],
    correctIndex: 0,
    explanation: "Specific retention is the ratio of water volume retained by molecular/capillary attraction against gravity to the total volume of saturated aquifer."
  },
  {
    question: "A non-recording rain gauge gives:",
    options: ["Rainfall rate", "Daily average", "Total rainfall", "Rain distribution"],
    correctIndex: 2,
    explanation: "A non-recording gauge provides only the accumulated total volume/depth of precipitation over the observation period."
  },
  {
    question: "The best time for irrigation is:",
    options: ["Midday", "Morning", "Night", "Afternoon"],
    correctIndex: 2,
    explanation: "Night irrigation reduces evaporative losses from solar heat and strong daytime winds, ensuring maximum soil absorption."
  },
  {
    question: "The discharge over a triangular notch is proportional to:",
    options: ["H", "H²", "H^(5/2)", "√H"],
    correctIndex: 2,
    explanation: "For a V-notch (triangular notch), discharge is given by $Q = \\frac{8}{15} C_d \\sqrt{2g} \\tan(\\theta/2) H^{5/2}$, making $Q \\propto H^{5/2}$."
  },
  {
    question: "Infiltration capacity reduces with:",
    options: ["Time", "Slope", "Rainfall", "Vegetation"],
    correctIndex: 0,
    explanation: "According to Horton's infiltration model, as rainfall continues and soil pores fill, infiltration capacity decays exponentially over time."
  },
  {
    question: "Darcy’s law assumes:",
    options: ["Turbulent flow", "Laminar flow", "Incompressible fluid", "Free flow"],
    correctIndex: 1,
    explanation: "Darcy's Law applies strictly to creeping laminar flow conditions ($Re < 1$) through saturated porous media."
  },
  {
    question: "Perched aquifer is formed due to:",
    options: ["High rainfall", "Water table fluctuation", "Impervious layer above water table", "Pressure"],
    correctIndex: 2,
    explanation: "A perched aquifer occurs when an isolated lens of impermeable clay/rock traps percolating water above the regional water table."
  },
  {
    question: "The water surface profile of gradually varied flow is:",
    options: ["Uniform", "Sloped", "Curved", "Horizontal"],
    correctIndex: 2,
    explanation: "Gradually varied flow (GVF) is non-uniform steady flow where water depth varies smoothly over long distances, forming a curved water surface profile."
  },
  {
    question: "Time required for surface runoff to reach outlet is:",
    options: ["Lag time", "Base time", "Time of concentration", "Time of flow"],
    correctIndex: 2,
    explanation: "Time of concentration ($T_c$) is the exact time needed for water to flow from the hydrologically most remote point of a watershed to the outlet."
  },
  {
    question: "Lift irrigation means:",
    options: ["Water flows by gravity", "Water lifted by pump", "Sprinkler system", "Subsurface drainage"],
    correctIndex: 1,
    explanation: "Lift irrigation involves mechanically pumping water from lower-level sources (rivers, wells) to higher-lying farmland."
  },
  {
    question: "A stream gauge is used to measure:",
    options: ["Rainfall", "Water level", "Soil moisture", "Evaporation"],
    correctIndex: 1,
    explanation: "A stream gauge measures river stage (water surface elevation relative to a benchmark datum)."
  },
  {
    question: "Peak discharge in a hydrograph is:",
    options: ["Start of runoff", "End of flood", "Maximum flow", "Base flow"],
    correctIndex: 2,
    explanation: "The peak discharge corresponds to the highest flow rate recorded on a flood hydrograph during a storm event."
  },
  {
    question: "The best shape of channel for a given discharge is:",
    options: ["Rectangular", "Circular", "Trapezoidal", "Semicircular"],
    correctIndex: 3,
    explanation: "A semicircular channel section offers the minimum wetted perimeter for a given area, making it hydraulically the most efficient section."
  },
  {
    question: "Which of the following reduces evaporation loss?",
    options: ["Sprinkler irrigation", "Underground irrigation", "Mulching", "Basin irrigation"],
    correctIndex: 2,
    explanation: "Mulching covers topsoil with organic or plastic layers, trapping moisture and directly cutting surface evaporation."
  },
  {
    question: "A stilling basin is provided to:",
    options: ["Increase velocity", "Decrease turbulence", "Dissipate energy", "Increase head"],
    correctIndex: 2,
    explanation: "Stilling basins utilize hydraulic jumps and baffle blocks to dissipate excess kinetic energy from high-velocity spillway flows."
  },
  {
    question: "The topmost surface of underground water is:",
    options: ["Artesian layer", "Phreatic surface", "Capillary zone", "Aquifer"],
    correctIndex: 1,
    explanation: "The phreatic surface (water table) marks the upper boundary of an unconfined underground saturated zone where pressure equals atmospheric pressure."
  },
  {
    question: "The normal depth of flow depends on:",
    options: ["Channel slope", "Flow type", "Cross-section", "All of these"],
    correctIndex: 3,
    explanation: "Normal depth in uniform channel flow is determined jointly by bed slope, channel cross-section shape, roughness, and discharge rate."
  },
  {
    question: "The velocity of approach in weir flow is:",
    options: ["Neglected", "Considered if > 0.15 m/s", "Always considered", "Considered if < 1 m/s"],
    correctIndex: 1,
    explanation: "Velocity of approach ($V_a$) adds kinetic energy head ($V_a^2 / 2g$) and is included in accurate discharge formulas when $V_a > 0.15\text{ m/s}$."
  },
  {
    question: "Which parameter is most important in groundwater recharge?",
    options: ["Runoff", "Soil moisture", "Infiltration", "Water table"],
    correctIndex: 2,
    explanation: "Infiltration capacity dictates how much surface water percolates downward past the unsaturated zone into groundwater aquifers."
  },
  {
    question: "Seepage velocity is always:",
    options: ["Equal to discharge velocity", "Less than discharge velocity", "Greater than discharge velocity", "Zero"],
    correctIndex: 2,
    explanation: "Seepage velocity ($v_s = v/n$) is always greater than discharge velocity ($v$) because real flow occurs through interconnected void spaces ($n < 1$)."
  },
  {
    question: "The base width of a gravity dam depends on:",
    options: ["Flow velocity", "Uplift pressure", "Height and pressure", "Time of flow"],
    correctIndex: 2,
    explanation: "The minimum structural base width required for stability against overturning and sliding depends directly on dam height and hydrostatic water pressure."
  },
  {
    question: "Area under hydrograph gives:",
    options: ["Peak flow", "Total runoff", "Intensity", "Base time"],
    correctIndex: 1,
    explanation: "Integrating discharge ($Q$) over time ($t$) under a hydrograph yields the total volume of surface runoff from the catchment."
  },
  {
    question: "Unit of runoff coefficient is:",
    options: ["%", "Dimensionless", "m³/s", "m/s"],
    correctIndex: 1,
    explanation: "The runoff coefficient ($C = \\text{Runoff} / \\text{Rainfall}$) is a dimensionless ratio between $0$ and $1$."
  }
];


  

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-6 pb-32">
    <h1 className="text-2xl md:text-3xl font-bold text-center text-teal-700 mb-1">
        Basic Water Resources Engineering
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Answer all questions to see instant feedback and explanations.
      </p>

      <Quiz chapterTitle="Chapter 3" questions={questions} />
    </main>
  );
}