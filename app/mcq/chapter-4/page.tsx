import Quiz from "../../components/Quiz";

export default function Chapter1Page() {
  const questions = [
  
  {
    question: "The main purpose of irrigation is to:",
    options: ["Increase soil salinity", "Promote weed growth", "Supply water to crops", "Remove water from field"],
    correctIndex: 2,
    explanation: "Irrigation is the artificial application of water to soil or land to assist in the growing of agricultural crops."
  },
  {
    question: "Which of the following is a surface irrigation method?",
    options: ["Drip", "Sprinkler", "Furrow", "Subsurface"],
    correctIndex: 2,
    explanation: "Furrow irrigation is a surface irrigation method where small parallel channels are flooded to irrigate crops."
  },
  {
    question: "‘Duty’ in irrigation refers to:",
    options: ["Volume of water required", "Area irrigated per unit discharge", "Crop yield per hectare", "Depth of water applied"],
    correctIndex: 1,
    explanation: "Duty represents the area of land in hectares that can be irrigated by a continuous flow of 1 cumec of water throughout the base period."
  },
  {
    question: "‘Delta’ in irrigation means:",
    options: ["Water lost to atmosphere", "Total depth of water required by a crop", "Area irrigated per cumec", "Maximum yield"],
    correctIndex: 1,
    explanation: "Delta is the total depth of water required by a crop during its entire growth period in the field."
  },
  {
    question: "Base period refers to:",
    options: ["Total period of canal construction", "Period between two irrigations", "Period between sowing and last watering", "Crop rotation time"],
    correctIndex: 2,
    explanation: "Base period is the total time between the first watering of a crop at the time of sowing to its last watering before harvesting."
  },
  {
    question: "Consumptive use of water includes:",
    options: ["Runoff", "Deep percolation", "Transpiration and evaporation", "Seepage"],
    correctIndex: 2,
    explanation: "Consumptive use (Evapotranspiration) includes the water transpired by plants plus the water evaporated from adjacent soil."
  },
  {
    question: "The unit of irrigation duty is:",
    options: ["Cumec/ha", "ha/cumec", "m³/sec", "ha/m³"],
    correctIndex: 1,
    explanation: "Duty is expressed in hectares per cumec (ha/cumec), defined as area irrigated per unit continuous discharge."
  },
  {
    question: "Which crop requires the maximum amount of irrigation water?",
    options: ["Wheat", "Rice", "Potato", "Maize"],
    correctIndex: 1,
    explanation: "Rice requires continuous submergence or frequent irrigation, resulting in the highest overall water depth (delta)."
  },
  {
    question: "Irrigation is most effective when done:",
    options: ["At noon", "In the evening", "At midnight", "Early morning"],
    correctIndex: 3,
    explanation: "Early morning irrigation minimizes evaporative losses due to cooler temperatures and reduced wind movement."
  },
  {
    question: "Sprinkler irrigation is best suited for:",
    options: ["Rice fields", "High wind areas", "Sandy soils", "Low pressure areas"],
    correctIndex: 2,
    explanation: "Sandy soils have high permeability where surface flooding causes excessive percolation; sprinklers apply water controlledly."
  },
  {
    question: "Which method of irrigation is most water-efficient?",
    options: ["Basin", "Border", "Drip", "Furrow"],
    correctIndex: 2,
    explanation: "Drip irrigation applies water directly to the root zone, reducing evaporation and deep percolation to achieve >90% efficiency."
  },
  {
    question: "The depth of water applied to crop field is measured in:",
    options: ["ha", "mm", "cumec", "m²"],
    correctIndex: 1,
    explanation: "Irrigation depth is standardly measured in linear units of length, typically millimeters (mm) or centimeters (cm)."
  },
  {
    question: "A weir is used in irrigation systems to:",
    options: ["Store water", "Divert water", "Measure discharge", "Drain fields"],
    correctIndex: 2,
    explanation: "A weir is an overflow structure placed across an open channel to measure the rate of flow (discharge)."
  },
  {
    question: "Which structure is used to prevent scouring downstream of a fall?",
    options: ["Canal head regulator", "Stilling basin", "Cross regulator", "Silt trap"],
    correctIndex: 1,
    explanation: "Stilling basins dissipate kinetic energy downstream of falls or spillways to protect the channel bed from erosion/scouring."
  },
  {
    question: "The main cause of waterlogging is:",
    options: ["High rainfall", "Low irrigation", "Poor drainage", "Low temperature"],
    correctIndex: 2,
    explanation: "Inadequate or poor drainage prevents excess water from percolating or flowing away, raising the water table to the root zone."
  },
  {
    question: "Tile drainage is used for:",
    options: ["Irrigation", "Fertilization", "Removing excess soil water", "Increasing seepage"],
    correctIndex: 2,
    explanation: "Tile drainage consists of underground perforated pipes that collect and remove excess subsurface gravitational water."
  },
  {
    question: "The best method to prevent salinization in irrigation is:",
    options: ["Use of saline water", "Frequent irrigation", "Proper drainage", "Compacting the soil"],
    correctIndex: 2,
    explanation: "Proper drainage allows leaching of soluble salts out of the root zone and prevents salt buildup due to high water tables."
  },
  {
    question: "Groundwater is usually located in:",
    options: ["Impervious layer", "Confined aquifer", "Above water table", "Atmosphere"],
    correctIndex: 1,
    explanation: "Confined aquifers are permeable rock or sediment layers saturated with groundwater trapped under pressure between impervious layers."
  },
  {
    question: "Which is not a major type of well?",
    options: ["Dug well", "Bored well", "Artesian well", "Waterfall well"],
    correctIndex: 3,
    explanation: "'Waterfall well' is not a recognized classification or engineering type of water well."
  },
  {
    question: "Which instrument is used to measure water table depth?",
    options: ["Infiltrometer", "Theodolite", "Piezometer", "Anemometer"],
    correctIndex: 2,
    explanation: "A piezometer measures pore water pressure and depth to liquid water levels in an aquifer or soil matrix."
  },
  {
    question: "A tube well can be operated efficiently by:",
    options: ["Gravity", "Rope and bucket", "Pump", "Rain"],
    correctIndex: 2,
    explanation: "Tube wells extract deep groundwater through narrow pipes requiring mechanical pumps (centrifugal or submersible) for operation."
  },
  {
    question: "When groundwater rises under pressure, the well is called:",
    options: ["Perched well", "Confined well", "Artesian well", "Open well"],
    correctIndex: 2,
    explanation: "An artesian well taps a confined aquifer where hydrostatic pressure forces water to rise above the level of the aquifer top."
  },
  {
    question: "In sprinkler systems, water is applied in the form of:",
    options: ["Jet", "Drip", "Mist", "Rain"],
    correctIndex: 3,
    explanation: "Sprinkler systems pressurizedly spray water into the air, distributing it over the soil surface in rain-like droplets."
  },
  {
    question: "The crop water requirement depends on:",
    options: ["Soil texture", "Climate", "Crop type", "All of these"],
    correctIndex: 3,
    explanation: "Crop water requirement varies with environmental factors (climate), crop growth characteristics, and soil retention properties."
  },
  {
    question: "Which soil has the highest infiltration rate?",
    options: ["Clay", "Loam", "Silt", "Sand"],
    correctIndex: 3,
    explanation: "Sandy soil has coarse particles and large macropores, allowing rapid intake and downward movement of surface water."
  },
  {
    question: "What is used to prevent seepage loss in canals?",
    options: ["Plastic lining", "Bitumen", "Cement concrete", "All of these"],
    correctIndex: 3,
    explanation: "Impervious linings using plastic sheets, asphaltic bitumen, or cement concrete significantly reduce seepage losses."
  },
  {
    question: "A device to regulate water supply to fields is:",
    options: ["Drop structure", "Outlet", "Flume", "Inlet"],
    correctIndex: 1,
    explanation: "A canal outlet (or module) controls and discharges a regulated flow from a distributing canal into a field watercourse."
  },
  {
    question: "Groundwater can be contaminated due to:",
    options: ["Controlled irrigation", "Subsurface drainage", "Chemical leaching", "Water table decline"],
    correctIndex: 2,
    explanation: "Chemical leaching carries soluble agricultural pollutants like synthetic fertilizers and pesticides down into groundwater."
  },
  {
    question: "What is the main source of groundwater recharge?",
    options: ["Canals", "Percolation", "Evaporation", "Wells"],
    correctIndex: 1,
    explanation: "Deep percolation of rainwater and surface irrigation water downward into unsaturated soil layers feeds underlying aquifers."
  },
  {
    question: "Which system supplies water directly to root zone?",
    options: ["Sprinkler", "Basin", "Drip", "Furrow"],
    correctIndex: 2,
    explanation: "Drip (trickle) irrigation uses emitters to deliver water slowly and precisely at or below the crop root level."
  },
  {
    question: "Field capacity is:",
    options: ["Maximum moisture held after free drainage", "Minimum moisture content", "Water that plants can't use", "Total water content"],
    correctIndex: 0,
    explanation: "Field capacity is the amount of water remaining in soil after excess gravitational water has drained away completely."
  },
  {
    question: "Capillary water is:",
    options: ["Unavailable to plants", "Readily available to plants", "Deeply percolated", "Surface water"],
    correctIndex: 1,
    explanation: "Capillary water is held in soil pores against gravity by surface tension and is the primary water source absorbed by plants."
  },
  {
    question: "Which of the following causes drainage problems?",
    options: ["Deep water table", "Heavy rainfall and poor percolation", "Coarse soil", "Light irrigation"],
    correctIndex: 1,
    explanation: "Heavy rainfall combined with low soil percolation rates leads to surface ponding and saturation of root zones."
  },
  {
    question: "Pore water pressure in saturated soils is measured using:",
    options: ["Thermometer", "Hygrometer", "Piezometer", "Infiltrometer"],
    correctIndex: 2,
    explanation: "Piezometers determine hydrostatic or hydraulic pore water pressure within saturated soil formations."
  },
  {
    question: "Which is a common surface drainage method?",
    options: ["Mole drainage", "Tile drainage", "Ditch drainage", "Subsurface pipe"],
    correctIndex: 2,
    explanation: "Open ditch drainage uses shallow surface trenches to collect and divert excess runoff off fields."
  },
  {
    question: "The area served by one outlet is called:",
    options: ["Command area", "Field area", "Net irrigated area", "Gross area"],
    correctIndex: 0,
    explanation: "The command area (outlet command area) refers to the specific geographic zone irrigated by a single canal outlet."
  },
  {
    question: "Total irrigated area under a crop in a season is:",
    options: ["Irrigation intensity", "Seasonal crop area", "Gross cropped area", "Net crop area"],
    correctIndex: 0,
    explanation: "Irrigation intensity represents the percentage of culturable command area irrigated during a given crop season."
  },
  {
    question: "Leaching requirement is associated with:",
    options: ["Acid soils", "Water deficit", "Salt control", "Nutrient uptake"],
    correctIndex: 2,
    explanation: "Leaching requirement is the extra fraction of water applied to flush accumulated soluble salts down past the crop root zone."
  },
  {
    question: "The efficiency of a well is given by:",
    options: ["Output/input ratio", "Specific yield × drawdown", "Ratio of theoretical to actual discharge", "Output per meter"],
    correctIndex: 2,
    explanation: "Well efficiency is mathematically evaluated by comparing actual discharge performance against theoretical hydraulic models."
  },
  {
    question: "Which method is used to explore groundwater?",
    options: ["Boring", "Geophysical survey", "Drilling", "Soil sampling"],
    correctIndex: 1,
    explanation: "Geophysical surveys (such as electrical resistivity testing) non-destructively detect subsurface water-bearing formations."
  },
  {
    question: "Conjunctive use means:",
    options: ["Use of rainfall only", "Surface water + groundwater", "Rain + well water", "Multiple crops"],
    correctIndex: 1,
    explanation: "Conjunctive use is the combined, coordinated management of surface water and groundwater resources for optimal supply."
  },
  {
    question: "What is the standard spacing for lateral lines in tile drainage?",
    options: ["0.5–1 m", "2–5 m", "10–30 m", "50–100 m"],
    correctIndex: 2,
    explanation: "Subsurface tile drains are typically spaced 10–30 meters apart depending on soil hydraulic conductivity."
  },
  {
    question: "Which is not a method of irrigation scheduling?",
    options: ["IW/CPE ratio", "Soil moisture deficit", "Water table depth", "Rain gauge reading"],
    correctIndex: 3,
    explanation: "A rain gauge only records historical rainfall volume and cannot individually indicate soil moisture or irrigation timing."
  },
  {
    question: "Wilting point is:",
    options: ["Field capacity", "When plants can't extract water", "Maximum water holding", "Soil saturation"],
    correctIndex: 1,
    explanation: "Permanent wilting point is the soil moisture limit where plants can no longer exert enough suction to extract water."
  },
  {
    question: "Which water is most easily used by plants?",
    options: ["Gravitational", "Capillary", "Hygroscopic", "Runoff"],
    correctIndex: 1,
    explanation: "Capillary water held between field capacity and wilting point is the liquid water accessible for plant transpiration."
  },
  {
    question: "Which is the most common type of well in Nepal?",
    options: ["Tube well", "Dug well", "Borewell", "Artesian"],
    correctIndex: 1,
    explanation: "Traditional shallow open-dug wells are widely constructed and commonly used across small-scale farming areas in Nepal."
  },
  {
    question: "The movement of water in soil due to gravity is called:",
    options: ["Infiltration", "Capillarity", "Percolation", "Retention"],
    correctIndex: 2,
    explanation: "Percolation is the downward movement of gravitational water through saturated soil layers."
  },
  {
    question: "Water use efficiency is calculated by:",
    options: ["Yield / evapotranspiration", "Irrigation depth / yield", "Runoff / evapotranspiration", "Seepage / area"],
    correctIndex: 0,
    explanation: "Water Use Efficiency (WUE) is expressed as crop yield produced per unit of evapotranspired water."
  },
  {
    question: "Highest irrigation efficiency is achieved in:",
    options: ["Border method", "Check basin", "Drip method", "Furrow method"],
    correctIndex: 2,
    explanation: "Drip irrigation minimizes conveyance, runoff, and evaporation losses, achieving field application efficiency above 90%."
  },
  {
    question: "Which soil condition needs subsurface drainage?",
    options: ["Sandy soil", "Saline soil", "Loamy soil", "Stony soil"],
    correctIndex: 1,
    explanation: "Subsurface drainage lowers high saline water tables and carries away leached soluble salts."
  },
  {
    question: "The term 'critical growth stage' refers to:",
    options: ["Period of no irrigation", "Stage needing maximum water", "Stage of yield harvest", "Planting phase"],
    correctIndex: 1,
    explanation: "The critical growth stage is the crop growth phase most vulnerable to moisture stress where water shortage causes maximum yield loss."
  },
  {
    question: "Drainage coefficient is expressed in:",
    options: ["mm/hr", "m/day", "mm/day", "%"],
    correctIndex: 2,
    explanation: "Drainage coefficient is the depth of water in millimeters removed from an area in 24 hours (mm/day)."
  },
  {
    question: "Specific yield of an aquifer is:",
    options: ["Water retained", "Water released", "Water lost", "Total moisture"],
    correctIndex: 1,
    explanation: "Specific yield is the ratio of water volume drained from an aquifer by gravity to the total aquifer volume."
  },
  {
    question: "A piezometer tube is used to measure:",
    options: ["Soil moisture", "Water table", "Pore pressure", "Static head"],
    correctIndex: 2,
    explanation: "Piezometer pipes measure localized sub-surface pore water pressures within waterlogged soil or structures."
  },
  {
    question: "Open drains are used in:",
    options: ["Urban areas", "Flat terrain", "Hill areas", "Steep slopes"],
    correctIndex: 1,
    explanation: "Open surface ditches effectively drain excess runoff in flat agricultural lands where slope gradients are minimal."
  },
  {
    question: "A canal drop is used to:",
    options: ["Raise water level", "Increase discharge", "Control water table", "Dissipate energy"],
    correctIndex: 3,
    explanation: "Canal drops (falls) safely lower water levels along steep terrain steps while dissipating excess kinetic energy to prevent erosion."
  },
  {
    question: "Leaching is generally done for:",
    options: ["Moisture conservation", "Soil erosion", "Salinity control", "Fertilization"],
    correctIndex: 2,
    explanation: "Leaching applies surplus water to dissolve accumulated salts and flush them below the crop root zone."
  },
  {
    question: "Capillary rise in soil is affected by:",
    options: ["Soil texture", "Soil depth", "Soil color", "Water source"],
    correctIndex: 0,
    explanation: "Soil texture determines pore diameter; smaller pore sizes in fine-textured soils produce higher capillary suction rise."
  },
  {
    question: "Interceptor drain is used to:",
    options: ["Block surface water", "Intercept seepage", "Store rainwater", "Improve percolation"],
    correctIndex: 1,
    explanation: "Interceptor drains cut off lateral subsurface seepage water moving from higher elevations before it reaches lower farmland."
  },
  {
    question: "The depth of drain depends on:",
    options: ["Crop", "Water table", "Soil texture", "All of the above"],
    correctIndex: 3,
    explanation: "Effective drainage depth depends on plant root depths, local groundwater levels, and soil permeability characteristics."
  },
  {
    question: "Which crop is highly sensitive to water stress?",
    options: ["Rice", "Sorghum", "Wheat", "Maize"],
    correctIndex: 0,
    explanation: "Rice is extremely sensitive to moisture deficits, suffering significant yield reductions if root zones dry out."
  },
  {
    question: "Horizontal drainage removes water by:",
    options: ["Wells", "Boreholes", "Tile drains", "Sumps"],
    correctIndex: 2,
    explanation: "Tile drain networks laid horizontally under fields collect groundwater across broad areas to lower high water tables."
  },
  {
    question: "Surface irrigation is best suited for:",
    options: ["Sandy soils", "Steep slopes", "Flat lands", "Hilly terrain"],
    correctIndex: 2,
    explanation: "Surface irrigation methods require uniform land slopes and flat topography to allow smooth water flow without erosion."
  },
  {
    question: "Groundwater overdraft leads to:",
    options: ["High water table", "Aquifer recharge", "Well failure", "Soil fertility"],
    correctIndex: 2,
    explanation: "Pumping groundwater faster than natural recharge rates causes water table drops, land subsidence, and dried-up well failures."
  },
  {
    question: "Average irrigation efficiency in Nepal is:",
    options: ["30–40%", "50–60%", "70–80%", ">90%"],
    correctIndex: 0,
    explanation: "Traditional conveyance channels and unlined field canals in Nepal keep overall irrigation efficiency around 30–40%."
  },
  {
    question: "The crop coefficient (Kc) is used to estimate:",
    options: ["Irrigation efficiency", "Water table", "Evapotranspiration", "Crop yield"],
    correctIndex: 2,
    explanation: "Crop coefficient (Kc) scales reference evapotranspiration (ET0) to calculate specific crop evapotranspiration (ETc)."
  },
  {
    question: "Most important component of water balance is:",
    options: ["Seepage", "Infiltration", "Precipitation", "Runoff"],
    correctIndex: 2,
    explanation: "Precipitation serves as the fundamental primary inflow source driving hydrological water balance budgets."
  },
  {
    question: "The primary source of irrigation in Nepal is:",
    options: ["Rainwater", "Tube wells", "Surface water", "Rivers"],
    correctIndex: 2,
    explanation: "Surface water diverted through gravity-fed canal networks and rivers supplies most irrigation systems in Nepal."
  },
  {
    question: "A dug well is usually:",
    options: ["Deep and narrow", "Shallow and wide", "Pressurized", "Lined with metal"],
    correctIndex: 1,
    explanation: "Open dug wells are excavated manually or mechanically into shallow unconfined aquifers with wide diameters."
  },
  {
    question: "Transpiration is the process of water loss from:",
    options: ["Soil", "Leaves", "Groundwater", "Atmosphere"],
    correctIndex: 1,
    explanation: "Transpiration is the biological process where plant leaves release absorbed water vapor into the atmosphere through stomata."
  },
  {
    question: "Which of the following affects evapotranspiration the most?",
    options: ["Temperature", "Wind", "Humidity", "All of these"],
    correctIndex: 3,
    explanation: "Evapotranspiration is governed combinedly by ambient solar energy/temperature, relative humidity, and air velocity."
  },
  {
    question: "Drainage intensity is defined as:",
    options: ["Area drained per outlet", "Depth drained per hour", "mm/day", "% of area with drainage"],
    correctIndex: 3,
    explanation: "Drainage intensity reflects the percentage of a total agricultural area equipped with functional drainage systems."
  },
  {
    question: "The movement of water between soil particles is due to:",
    options: ["Gravity only", "Adhesion", "Capillary action", "Osmosis"],
    correctIndex: 2,
    explanation: "Capillary action driven by surface tension and adhesive forces draws water through tiny inter-particle soil pores."
  },
  {
    question: "In India and Nepal, irrigation scheduling is often based on:",
    options: ["IW/CPE ratio", "Water balance", "Soil map", "Crop yield"],
    correctIndex: 0,
    explanation: "The Irrigation Water to Cumulative Pan Evaporation (IW/CPE) ratio is a standard meteorological scheduling approach."
  },
  {
    question: "Which method helps to reduce seepage loss in canals?",
    options: ["Increasing width", "Silt removal", "Concrete lining", "Siphoning"],
    correctIndex: 2,
    explanation: "Lining earthen canals with impervious cement concrete seals permeable soil and minimizes seepage."
  },
  {
    question: "Hygroscopic water is:",
    options: ["Easily available to plants", "Plant available", "Unavailable to plants", "Surface water"],
    correctIndex: 2,
    explanation: "Hygroscopic water forms thin micro-films tightly bound to soil particles that plant roots cannot extract."
  },
  {
    question: "Which irrigation method is least efficient?",
    options: ["Drip", "Furrow", "Border strip", "Basin"],
    correctIndex: 3,
    explanation: "Uncontrolled basin flooding results in high evaporative losses, deep percolation, and lower application efficiency."
  },
  {
    question: "The most suitable soil for tube well irrigation is:",
    options: ["Clay", "Silt", "Loam", "Sand"],
    correctIndex: 3,
    explanation: "Coarse sandy aquifers have high hydraulic conductivity, yielding strong groundwater flow into tube wells."
  },
  {
    question: "Which of the following is a permanent structure?",
    options: ["Temporary bund", "Masonry weir", "Soil bund", "Earthen check dam"],
    correctIndex: 1,
    explanation: "Masonry or concrete weir diversion structures are built as long-lasting permanent civil engineering installations."
  },
  {
    question: "What is the general spacing for tile drains in heavy soil?",
    options: ["3–5 m", "5–10 m", "10–15 m", "15–30 m"],
    correctIndex: 3,
    explanation: "In low-permeability heavy clay soils, tile drain laterally spaced lines are installed 15–30 m apart to lower water levels."
  },
  {
    question: "The main advantage of sprinkler irrigation is:",
    options: ["High cost", "Uniform water application", "Labor-intensive", "Low efficiency"],
    correctIndex: 1,
    explanation: "Overhead sprinklers distribute water evenly over non-uniform field terrains, preventing local over- or under-watering."
  },
  {
    question: "Which drainage method suits rice fields?",
    options: ["Surface", "Subsurface", "Open ditch", "Vertical drainage"],
    correctIndex: 0,
    explanation: "Paddy fields require controlled shallow surface water removal using surface ditches or bund outlets."
  },
  {
    question: "Irrigation efficiency is calculated by:",
    options: ["Water delivered / water applied × 100", "Crop yield / water used", "Seepage / discharge", "Field area / rainfall"],
    correctIndex: 0,
    explanation: "Irrigation application efficiency is the percentage ratio of water stored in root zones relative to total water applied."
  },
  {
    question: "The water that freely drains out of soil after irrigation is:",
    options: ["Capillary water", "Hygroscopic water", "Gravitational water", "None"],
    correctIndex: 2,
    explanation: "Gravitational water is unconfined pore water that drains rapidly downward under gravity following saturation."
  },
  {
    question: "Tile drains are made of:",
    options: ["Clay", "PVC", "Concrete", "All of these"],
    correctIndex: 3,
    explanation: "Subsurface drainage conduits can be manufactured using porous clay, perforated plastic (PVC/PE), or concrete pipes."
  },
  {
    question: "Subsurface irrigation involves:",
    options: ["Applying water on surface", "Applying water below ground level", "Sprinkling water", "Flooding"],
    correctIndex: 1,
    explanation: "Subsurface irrigation applies water beneath the soil surface to raise the water table into root zone contact."
  },
  {
    question: "The main objective of irrigation scheduling is:",
    options: ["To reduce drainage", "To maximize evaporation", "To apply water at right time", "To increase rainfall"],
    correctIndex: 2,
    explanation: "Irrigation scheduling determines the exact timing and precise volume of water application needed for optimal crop yields."
  },
  {
    question: "Border strip irrigation is most suitable for:",
    options: ["Pulses", "Wheat", "Vegetables", "Rice"],
    correctIndex: 1,
    explanation: "Close-growing grain crops like wheat are well suited to border strip surface irrigation on gentle slopes."
  },
  {
    question: "In water balance equation, ET stands for:",
    options: ["Effective total", "Evaporation and transpiration", "Energy transmission", "Early time"],
    correctIndex: 1,
    explanation: "In hydrological equations, 'ET' denotes combined losses from surface Evaporation and crop Transpiration."
  },
  {
    question: "Which source has the most consistent water supply?",
    options: ["Rain", "River", "Canal", "Groundwater"],
    correctIndex: 3,
    explanation: "Deep groundwater reserves are sheltered from immediate weather changes, offering a stable and continuous water source."
  },
  {
    question: "The rate of downward water movement in saturated soil is:",
    options: ["Percolation", "Seepage", "Runoff", "Absorption"],
    correctIndex: 0,
    explanation: "Percolation refers specifically to gravity-driven downward water movement through saturated subsurface soil layers."
  },
  {
    question: "Perched water table forms:",
    options: ["Above impermeable layer", "Below aquifer", "In waterlogged areas", "At deep depths"],
    correctIndex: 0,
    explanation: "A perched water table occurs when unconfined groundwater collects above an isolated impervious layer above the main water table."
  },
  {
    question: "Which condition requires controlled drainage?",
    options: ["Sandy soil", "Saline soil", "Loamy soil", "Silt soil"],
    correctIndex: 1,
    explanation: "Saline soils require controlled drainage to manage water tables while flushing harmful salts out of root zones."
  },
  {
    question: "Interceptor drains are usually:",
    options: ["Vertical", "Circular", "Surface", "Subsurface"],
    correctIndex: 3,
    explanation: "Interceptor drains are installed as underground subsurface channels along hillsides to catch lateral groundwater seepage."
  },
  {
    question: "Sprinkler irrigation is not suitable for:",
    options: ["Sandy soil", "High wind conditions", "Loamy soil", "High-value crops"],
    correctIndex: 1,
    explanation: "High wind conditions distort sprinkler spray distribution patterns and cause significant evaporation loss."
  },
  {
    question: "Infiltration rate is measured using:",
    options: ["Lysimeter", "Infiltrometer", "Tensiometer", "Piezometer"],
    correctIndex: 1,
    explanation: "Infiltrometers (e.g., double-ring infiltrometers) measure the rate at which surface soil absorbs water."
  },
  {
    question: "Which irrigation is most suitable in hilly terrain?",
    options: ["Check basin", "Furrow", "Sprinkler", "Border strip"],
    correctIndex: 2,
    explanation: "Sprinkler irrigation accommodates undulating, sloped landscapes without requiring extensive land levelling."
  },
  {
    question: "The term “net irrigation requirement” refers to:",
    options: ["Gross water requirement", "Water needed excluding losses", "Total soil moisture", "Field water balance"],
    correctIndex: 1,
    explanation: "Net irrigation requirement is the exact depth of water needed to meet crop ET minus effective rainfall and soil storage, excluding application losses."
  },
  {
    question: "The volume of water available for crops in root zone is:",
    options: ["Total available water", "Field capacity", "Permanent wilting point", "Readily available water"],
    correctIndex: 3,
    explanation: "Readily available water (RAW) is the portion of available moisture that plants can easily extract without experiencing water stress."
  },
  {
    question: "A vertical drainage system consists mainly of:",
    options: ["Deep ditches", "Tile lines", "Bore wells", "Contour bunds"],
    correctIndex: 2,
    explanation: "Vertical drainage relies on pumped bore wells or tubewells to extract subsurface groundwater and lower high water tables."
  }

  ];

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-6 pb-32">
    <h1 className="text-2xl md:text-3xl font-bold text-center text-teal-700 mb-1">
        Irrigation, Drainage and Groundwater Development
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Answer all questions to see instant feedback and explanations.
      </p>

      <Quiz chapterTitle="Chapter 4" questions={questions} />
    </main>
  );
}