import Quiz from "../../components/Quiz";

export default function Chapter1Page() {
 const dairyQuestionsData = [
  {
    question: "1. Pasteurization is a process used to:",
    options: ["A. Freeze milk", "B. Increase fat content", "C. Kill harmful microorganisms", "D. Add flavor"],
    correctIndex: 2,
    explanation: "Pasteurization is a heat-treatment process designed to eliminate pathogenic vegetative microorganisms and reduce total microbial load to extend liquid shelf life."
  },
  {
    question: "2. The standard temperature–time condition for HTST pasteurization is:",
    options: ["A. 63°C for 30 minutes", "B. 72°C for 15 seconds", "C. 80°C for 10 minutes", "D. 90°C for 5 seconds"],
    correctIndex: 1,
    explanation: "High-Temperature Short-Time (HTST) pasteurization relies on holding milk at a minimum of 72°C (161°F) for at least 15 seconds before rapid cooling."
  },
  {
    question: "3. The equipment used to separate cream from milk is called:",
    options: ["A. Chiller", "B. Separator", "C. Homogenizer", "D. Sterilizer"],
    correctIndex: 1,
    explanation: "A cream separator utilizes high-speed centrifugal force to separate lighter fat globules (cream) from the denser skim milk phase."
  },
  {
    question: "4. Homogenization in milk processing prevents:",
    options: ["A. Spoilage", "B. Curdling", "C. Fat separation", "D. Color loss"],
    correctIndex: 2,
    explanation: "Homogenization forces milk under high pressure through a narrow valve, breaking down large fat globules into smaller, uniformly distributed droplets to stop cream rising."
  },
  {
    question: "5. The fat content in standard toned milk is about:",
    options: ["A. 0.5%", "B. 1.5%", "C. 3.0%", "D. 4.5%"],
    correctIndex: 2,
    explanation: "By standard dairy specifications, toned milk is formulated to contain a minimum of 3.0% milk fat and 8.5% Solids-Not-Fat (SNF)."
  },
  {
    question: "6. The process of removing water from milk to produce condensed milk is:",
    options: ["A. Sterilization", "B. Pasteurization", "C. Evaporation", "D. Homogenization"],
    correctIndex: 2,
    explanation: "Evaporation removes water under reduced pressure and moderate temperatures to concentrate milk solids into condensed or evaporated milk products."
  },
  {
    question: "7. In a milk processing plant, the CIP system stands for:",
    options: ["A. Cold Injection Process", "B. Clean-In-Place", "C. Condensation in Pasteurizer", "D. Cream Isolated Paste"],
    correctIndex: 1,
    explanation: "Clean-In-Place (CIP) is an automated system that circulates detergent and sanitizing solutions through pipe networks and tanks without dismantling equipment."
  },
  {
    question: "8. The typical energy source for a batch pasteurizer is:",
    options: ["A. Solar", "B. Steam", "C. Petrol", "D. Electricity"],
    correctIndex: 1,
    explanation: "Batch (vat) pasteurizers utilize a steam-jacketed or hot-water-jacketed vessel to deliver controlled, uniform thermal energy to the milk mass."
  },
  {
    question: "9. Shelf life of UHT milk is:",
    options: ["A. 1 day", "B. 1 week", "C. 3 months or more", "D. 10 days"],
    correctIndex: 2,
    explanation: "Ultra-High Temperature (UHT) milk is processed at 135–150°C for 2–5 seconds and packaged commercially sterile, lasting 3 to 6 months at room temperature."
  },
  {
    question: "10. The machine that fills milk into pouches is known as:",
    options: ["A. Churner", "B. Sterilizer", "C. Filler", "D. Pasteurizer"],
    correctIndex: 2,
    explanation: "Form-Fill-Seal (FFS) pouch filling machines automatically measure, load, and heat-seal fluid milk into flexible polyethylene film rolls."
  },
  {
    question: "11. The instrument used to measure specific gravity of milk is:",
    options: ["A. Barometer", "B. Lactometer", "C. Hydrometer", "D. Thermometer"],
    correctIndex: 1,
    explanation: "A lactometer is a specialized hydrometer calibrated to measure the specific gravity of milk at a specific reference temperature (typically 15.5°C or 20°C)."
  },
  {
    question: "12. The ideal temperature for milk storage is:",
    options: ["A. Room temperature", "B. Below 5°C", "C. 10–15°C", "D. 20–25°C"],
    correctIndex: 1,
    explanation: "Maintaining raw and processed liquid milk below 4–5°C suppresses psychrotrophic bacterial replication and maintains biochemical stability."
  },
  {
    question: "13. Which of the following is a milk adulterant?",
    options: ["A. Fat", "B. Water", "C. Lactose", "D. Casein"],
    correctIndex: 1,
    explanation: "Exogenous water is the most common adulterant added to milk to artificially dilute volume, lowering its specific gravity and nutritional density."
  },
  {
    question: "14. Paneer is obtained by:",
    options: ["A. Boiling milk", "B. Freezing milk", "C. Coagulating milk using acid", "D. Filtering milk"],
    correctIndex: 2,
    explanation: "Paneer is produced by heat-treating milk and adding organic food acids (citric acid or sour whey) to precipitate casein into a firm curd."
  },
  {
    question: "15. The main protein found in milk is:",
    options: ["A. Albumin", "B. Gluten", "C. Casein", "D. Hemoglobin"],
    correctIndex: 2,
    explanation: "Casein comprises approximately 80% of total bovine milk proteins, existing as organized micellar structures containing alpha, beta, and kappa-casein fractions."
  },
  {
    question: "16. Which process destroys all microorganisms including spores?",
    options: ["A. Sterilization", "B. Pasteurization", "C. Homogenization", "D. Clarification"],
    correctIndex: 0,
    explanation: "Sterilization applies intense thermal energy (above 115°C under pressure) to destroy all viable vegetative microorganisms and heat-resistant bacterial endospores."
  },
  {
    question: "17. The freezing point of pure milk is approximately:",
    options: ["A. 0°C", "B. –0.55°C", "C. –1.5°C", "D. –5.0°C"],
    correctIndex: 1,
    explanation: "Dissolved lactose and soluble salts lower the freezing point of unadulterated bovine milk to a narrow physiological range around –0.53°C to –0.57°C."
  },
  {
    question: "18. Which factor primarily affects milk spoilage?",
    options: ["A. Fat content", "B. Acidity", "C. Temperature", "D. Color"],
    correctIndex: 2,
    explanation: "Storage temperature dictates enzyme kinetics and the proliferation rate of spoilage bacteria; elevated temperatures lead to rapid acidification."
  },
  {
    question: "19. Clarifier is used to:",
    options: ["A. Increase fat", "B. Reduce protein", "C. Remove suspended particles from milk", "D. Heat milk"],
    correctIndex: 2,
    explanation: "Centrifugal clarifiers spin raw milk to remove dense foreign particulate matter, leucocytes, somatic cells, and slime prior to thermal processing."
  },
  {
    question: "20. Spray drying is commonly used for producing:",
    options: ["A. Paneer", "B. Yogurt", "C. Milk powder", "D. Ghee"],
    correctIndex: 2,
    explanation: "Spray dryers atomize concentrated milk into fine droplets inside a hot air chamber, rapidly evaporating moisture to leave dry powder particles."
  },
  {
    question: "21. Which of the following milk products requires fermentation?",
    options: ["A. Ghee", "B. Butter", "C. Curd", "D. Ice cream"],
    correctIndex: 2,
    explanation: "Curd (dahi) requires lactic acid bacterial starter cultures to ferment lactose into lactic acid, causing acid-induced gelation."
  },
  {
    question: "22. The purpose of chilling milk immediately after milking is to:",
    options: ["A. Make butter", "B. Reduce fat", "C. Slow microbial growth", "D. Improve taste"],
    correctIndex: 2,
    explanation: "Rapid chilling down to 4°C immediately after harvest extends the natural germicidal phase of raw milk and inhibits bacterial multiplication."
  },
  {
    question: "23. The main by-product of cheese production is:",
    options: ["A. Curd", "B. Ghee", "C. Whey", "D. Cream"],
    correctIndex: 2,
    explanation: "Whey is the liquid nutrient-rich serum separated from the curd mass during cheese manufacturing, retaining soluble proteins and lactose."
  },
  {
    question: "24. A Babcock bottle is used for:",
    options: ["A. Storing milk", "B. Collecting milk", "C. Testing fat content", "D. Sterilizing milk"],
    correctIndex: 2,
    explanation: "The Babcock test employs graduated glass bottles and sulfuric acid digestion to separate and volumetrically quantify percentage fat in dairy samples."
  },
  {
    question: "25. The basic principle of refrigeration is:",
    options: ["A. Conduction", "B. Evaporation and compression", "C. Filtration", "D. Radiation"],
    correctIndex: 1,
    explanation: "Vapor-compression refrigeration cycles exploit the phase changes of a circulating refrigerant undergoing continuous evaporation, compression, and condensation."
  },
  {
    question: "26. The function of a homogenizer is to:",
    options: ["A. Heat milk", "B. Remove fat", "C. Break fat globules", "D. Add flavor"],
    correctIndex: 2,
    explanation: "High pressure inside a homogenizer imparts shear, cavitation, and turbulence forces that reduce fat globule diameters down to under 2 micrometers."
  },
  {
    question: "27. Common refrigerant used in dairy plant is:",
    options: ["A. CO₂", "B. Ammonia", "C. Oxygen", "D. Butane"],
    correctIndex: 1,
    explanation: "Anhydrous Ammonia ($\text{NH}_3$ / R-717) is the dominant industrial refrigerant in dairy plants due to its high latent heat of vaporization and efficiency."
  },
  {
    question: "28. Which is NOT a unit operation in milk processing?",
    options: ["A. Filtration", "B. Fermentation", "C. Evaporation", "D. Centrifugation"],
    correctIndex: 1,
    explanation: "Fermentation is a biochemical or biological process, whereas filtration, evaporation, and centrifugation are physical unit operations."
  },
  {
    question: "29. Which dairy product is high in fat content?",
    options: ["A. Skimmed milk", "B. Toned milk", "C. Ghee", "D. Lassi"],
    correctIndex: 2,
    explanation: "Ghee consists of clarified anhydrous milkfat containing a minimum of 99.5% lipid content by weight."
  },
  {
    question: "30. What is the major use of plate heat exchanger in dairy?",
    options: ["A. Freeze milk", "B. Pasteurize milk", "C. Separate cream", "D. Fill bottles"],
    correctIndex: 1,
    explanation: "Plate Heat Exchangers (PHE) provide high surface area thermal transfer for continuous HTST pasteurization, heating, and regeneration phases."
  },
  {
    question: "31. The most perishable dairy product is:",
    options: ["A. Butter", "B. Ghee", "C. Raw milk", "D. Cheese"],
    correctIndex: 2,
    explanation: "Unpasteurized raw milk contains active enzyme systems and background microflora, causing rapid deterioration if left unchilled."
  },
  {
    question: "32. ISO standard for food safety is:",
    options: ["A. ISO 9001", "B. ISO 14000", "C. ISO 22000", "D. ISO 50000"],
    correctIndex: 2,
    explanation: "ISO 22000 establishes global requirements for food safety management systems by mapping out HACCP principles across supply chains."
  },
  {
    question: "33. A bulk milk cooler works on:",
    options: ["A. Radiation", "B. Forced convection", "C. Refrigeration cycle", "D. Microwave"],
    correctIndex: 2,
    explanation: "Bulk Milk Coolers (BMCs) incorporate direct-expansion vapor-compression refrigeration units to chill collected milk down to 4°C."
  },
  {
    question: "34. BIS stands for:",
    options: ["A. Basic Industry Scheme", "B. Bureau of Indian Standards", "C. Biological Inspection System", "D. Bulk Ingredient Source"],
    correctIndex: 1,
    explanation: "BIS stands for the Bureau of Indian Standards, the national standards body responsible for publishing quality and safety codes for food products."
  },
  {
    question: "35. The main cause of rancidity in milk fat is:",
    options: ["A. Protein breakdown", "B. Fat oxidation", "C. Water absorption", "D. Heating"],
    correctIndex: 1,
    explanation: "Oxidative rancidity stems from reaction of unsaturated fatty acids with atmospheric oxygen, forming objectionable aldehydes and ketones."
  },
  {
    question: "36. What is used to coagulate milk during cheese making?",
    options: ["A. Vinegar", "B. Citric acid", "C. Rennet", "D. Bicarbonate"],
    correctIndex: 2,
    explanation: "Rennet contains chymosin, an enzyme that specifically cleaves $\\kappa$-casein at the $\\text{Phe}_{105}-\\text{Met}_{106}$ bond to trigger enzymatic curdling."
  },
  {
    question: "37. The shelf life of pasteurized milk in refrigerator is about:",
    options: ["A. 1 day", "B. 3–5 days", "C. 7–10 days", "D. 2 weeks"],
    correctIndex: 1,
    explanation: "Properly pasteurized, un-opened fluid milk stored strictly under 4°C maintains high organoleptic quality for approximately 3 to 5 days."
  },
  {
    question: "38. Milk is mostly composed of:",
    options: ["A. Fat", "B. Protein", "C. Lactose", "D. Water"],
    correctIndex: 3,
    explanation: "Water forms the continuous dispersion medium in bovine milk, accounting for roughly 87% to 88% of its total compositional weight."
  },
  {
    question: "39. Which machine is used for packaging liquid milk?",
    options: ["A. Milk separator", "B. Filler machine", "C. Homogenizer", "D. Clarifier"],
    correctIndex: 1,
    explanation: "Liquid filler machines dispense predetermined volumes of pasteurized milk into pre-sterilized pouches, bottles, or cartons under hygienic conditions."
  },
  {
    question: "40. Ultra-filtration is used in milk processing for:",
    options: ["A. Flavoring", "B. Protein concentration", "C. Heating", "D. Skimming"],
    correctIndex: 1,
    explanation: "Ultrafiltration membranes selectively retain high-molecular-weight proteins and fats while permitting water, salts, and lactose to pass through into permeate."
  },
  {
    question: "41. The most important test for milk adulteration is:",
    options: ["A. Density test", "B. Acidity test", "C. Lactometer reading", "D. Fat test"],
    correctIndex: 2,
    explanation: "A lactometer reading measures specific gravity to quickly flag abnormal dilution, skim milk addition, or heavy water adulteration."
  },
  {
    question: "42. Ice cream overrun refers to:",
    options: ["A. Melting rate", "B. Air incorporated during freezing", "C. Milk loss", "D. Sugar content"],
    correctIndex: 1,
    explanation: "Overrun is the percentage increase in total frozen ice cream volume achieved relative to initial liquid mix volume due to whipped-in air."
  },
  {
    question: "43. The ideal temperature for making yogurt is:",
    options: ["A. 4°C", "B. 25°C", "C. 37–43°C", "D. 60°C"],
    correctIndex: 2,
    explanation: "Thermophilic starter cultures (*Lactobacillus bulgaricus* and *Streptococcus thermophilus*) grow optimally in the incubation range of 37–43°C."
  },
  {
    question: "44. Milk becomes sour due to:",
    options: ["A. Boiling", "B. Lactic acid fermentation", "C. Fat oxidation", "D. Protein synthesis"],
    correctIndex: 1,
    explanation: "Lactic acid bacteria metabolize lactose sugar into lactic acid, increasing hydrogen ion concentration and creating a sour flavor profile."
  },
  {
    question: "45. The purpose of food packaging is to:",
    options: ["A. Decorate", "B. Preserve and protect", "C. Add weight", "D. Improve flavor"],
    correctIndex: 1,
    explanation: "Primary packaging serves to protect products from environmental contamination, light degradation, gas exchange, and mechanical damage."
  },
  {
    question: "46. Ghee is prepared by:",
    options: ["A. Chilling milk", "B. Centrifugation", "C. Boiling butter", "D. Fermentation"],
    correctIndex: 2,
    explanation: "Clarified butter (ghee) is made by heating butter or cream past 100°C to evaporate water and precipitate non-fat curd solids."
  },
  {
    question: "47. Skim milk contains:",
    options: ["A. 3–4% fat", "B. <0.5% fat", "C. 5–6% fat", "D. 10% fat"],
    correctIndex: 1,
    explanation: "Skimmed milk is the product obtained by removing almost all milk fat, leaving a residual fat level strictly under 0.5% (typically 0.05–0.1%)."
  },
  {
    question: "48. The protein fraction remaining in whey is:",
    options: ["A. Casein", "B. Whey protein", "C. Albumin", "D. Gluten"],
    correctIndex: 1,
    explanation: "Serum proteins that do not coagulate at pH 4.6 (including $\\beta$-lactoglobulin and $\\alpha$-lactalbumin) remain suspended in the whey liquid."
  },
  {
    question: "49. Which equipment is NOT used in a dairy plant?",
    options: ["A. Pasteurizer", "B. Homogenizer", "C. Generator", "D. Air compressor"],
    correctIndex: 2,
    explanation: "Although electrical generators provide standby power, specialized dairy operations center on functional processing hardware like pasteurizers, homogenizers, and compressors."
  },
  {
    question: "50. The optimal storage temperature for cheese is:",
    options: ["A. 0–4°C", "B. 10–15°C", "C. 20°C", "D. Room temperature"],
    correctIndex: 0,
    explanation: "Holding finished consumer cheese packaged between 0°C and 4°C slows down moisture loss, unwanted surface mold, and lipid degradation."
  },
  {
    question: "51. HTST stands for:",
    options: ["A. High Time Storage Technique", "B. High Temperature Short Time", "C. Heat Tested Storage Temperature", "D. High Taste Sterilization Test"],
    correctIndex: 1,
    explanation: "HTST stands for High Temperature Short Time, describing continuous flow pasteurization (e.g., 72°C for 15 seconds)."
  },
  {
    question: "52. The test used to detect presence of water in milk:",
    options: ["A. Babcock", "B. Alcohol", "C. Lactometer", "D. Gerber"],
    correctIndex: 2,
    explanation: "Lactometer testing evaluates specific gravity changes; added water lowers density below the normal baseline of ~1.028 to 1.032."
  },
  {
    question: "53. Enzymatic browning is common in:",
    options: ["A. Milk", "B. Butter", "C. Fruits and vegetables", "D. Yogurt"],
    correctIndex: 2,
    explanation: "Polyphenol oxidase enzymes induce rapid browning reactions in bruised or cut cellular tissue of plant fruits and vegetables."
  },
  {
    question: "54. Which vitamin is added in fortified milk?",
    options: ["A. Vitamin A and D", "B. Vitamin B12", "C. Vitamin C", "D. Vitamin E"],
    correctIndex: 0,
    explanation: "Fat-soluble Vitamins A and D are commonly added back during processing to replenish losses caused by fat skimming."
  },
  {
    question: "55. Maximum moisture content in milk powder:",
    options: ["A. 1%", "B. 5%", "C. 8%", "D. 15%"],
    correctIndex: 1,
    explanation: "Commercial standards mandate that whole and skim milk powders maintain a moisture content below 4–5% to ensure long storage stability."
  },
  {
    question: "56. Milk boiling point is slightly higher than water because of:",
    options: ["A. Fat", "B. Lactose", "C. Proteins and minerals", "D. Air content"],
    correctIndex: 2,
    explanation: "Dissolved solids (such as proteins, lactose, and soluble salts) create boiling point elevation, raising milk's boiling point to ~100.15°C."
  },
  {
    question: "57. Clarification of milk is usually done:",
    options: ["A. Before pasteurization", "B. After homogenization", "C. After packaging", "D. Before storage"],
    correctIndex: 0,
    explanation: "Clarification is executed early in receiving or processing to eliminate physical debris before heat treatment cycles begin."
  },
  {
    question: "58. The freezing point test helps to detect:",
    options: ["A. Water adulteration", "B. Fat percentage", "C. Density", "D. Color"],
    correctIndex: 0,
    explanation: "Freezing point cryoscopy detects exogenous water additions because added water shifts the freezing point closer to 0.00°C."
  },
  {
    question: "59. In canning, milk is:",
    options: ["A. Fermented", "B. Dried", "C. Evaporated and sterilized", "D. Concentrated"],
    correctIndex: 2,
    explanation: "Canned evaporated milk is partially concentrated, sealed into tin cans, and retorted at high thermal pressures for commercial sterility."
  },
  {
    question: "60. Which component in milk causes allergic reactions in some people?",
    options: ["A. Fat", "B. Casein", "C. Lactose", "D. Minerals"],
    correctIndex: 1,
    explanation: "True milk allergy is an immune-mediated reaction triggered by milk proteins, most frequently casein and $\\beta$-lactoglobulin."
  },
  {
    question: "61. The machine used to make butter is called:",
    options: ["A. Separator", "B. Churner", "C. Homogenizer", "D. Pasteurizer"],
    correctIndex: 1,
    explanation: "Butter churners agitate high-fat cream, disrupting fat globule membranes to invert the emulsion from oil-in-water to water-in-oil."
  },
  {
    question: "62. A major cause of microbial contamination in dairy plants is:",
    options: ["A. Pasteurization", "B. Poor sanitation", "C. Homogenization", "D. Packaging"],
    correctIndex: 1,
    explanation: "Inadequate sanitation of contact surfaces, valves, and pipelines allows biofilm formation and post-processing cross-contamination."
  },
  {
    question: "63. Vacuum packaging helps in:",
    options: ["A. Increasing fat", "B. Reducing volume", "C. Extending shelf life", "D. Improving color"],
    correctIndex: 2,
    explanation: "Evacuating atmospheric oxygen from sealed packaging inhibits aerobic spoilage molds and slows down fat oxidation."
  },
  {
    question: "64. UHT stands for:",
    options: ["A. Ultra-High Temperature", "B. Uniform Heat Treatment", "C. Under Heat Technology", "D. Ultra Heat Test"],
    correctIndex: 0,
    explanation: "UHT stands for Ultra-High Temperature, referring to heat processing above 135°C for very short holding times."
  },
  {
    question: "65. The legal body regulating dairy products in Nepal is:",
    options: ["A. Nepal Dairy Authority", "B. Food Technology and Quality Control Department", "C. NDDB", "D. Nepal Agriculture Council"],
    correctIndex: 1,
    explanation: "The Department of Food Technology and Quality Control (DFTQC) under the Ministry of Agriculture enforces food safety standards in Nepal."
  },
  {
    question: "66. Casein is precipitated at pH:",
    options: ["A. 2", "B. 4.6", "C. 7", "D. 9"],
    correctIndex: 1,
    explanation: "The isoelectric point ($\text{pI}$) of casein is pH 4.6, where net electrical charge becomes zero and solubility reaches its absolute minimum."
  },
  {
    question: "67. Dairy effluent is treated using:",
    options: ["A. UV sterilizer", "B. RO filter", "C. Effluent treatment plant (ETP)", "D. Homogenizer"],
    correctIndex: 2,
    explanation: "Industrial Effluent Treatment Plants (ETP) perform primary, secondary, and biological remediation to clean dairy processing wastewater."
  },
  {
    question: "68. Which component of milk is used in infant formula?",
    options: ["A. Lactose", "B. Whey protein", "C. Casein", "D. Fat"],
    correctIndex: 1,
    explanation: "Demineralized whey protein is incorporated into infant formulas to adjust the casein-to-whey ratio closer to human breast milk."
  },
  {
    question: "69. Cheese is preserved by:",
    options: ["A. Boiling", "B. Drying", "C. Refrigeration and salt curing", "D. Clarifying"],
    correctIndex: 2,
    explanation: "Salting lowers moisture activity ($\text{a}_w$) and controls bacterial growth, while refrigeration preserves physical structural integrity."
  },
  {
    question: "70. Paneer shelf life in refrigeration is approximately:",
    options: ["A. 1 day", "B. 3–5 days", "C. 1 week", "D. 15 days"],
    correctIndex: 1,
    explanation: "Fresh unpreserved paneer stored under continuous cold refrigeration (below 5°C) typically stays fresh for about 3 to 5 days."
  },
  {
    question: "71. Which is used to improve color and flavor of butter?",
    options: ["A. Salt", "B. Sugar", "C. Annatto", "D. Clarifier"],
    correctIndex: 2,
    explanation: "Annatto dye is a natural plant extract added to standard butter formulations to standardize yellow coloration across seasons."
  },
  {
    question: "72. Best method to ensure microbial safety in packaged milk:",
    options: ["A. Boiling", "B. Pasteurization", "C. Filtering", "D. Fermenting"],
    correctIndex: 1,
    explanation: "Controlled pasteurization combined with clean packaging eliminates human pathogens while preserving liquid nutritional values."
  },
  {
    question: "73. In HACCP, “C” stands for:",
    options: ["A. Critical", "B. Check", "C. Clean", "D. Control"],
    correctIndex: 0,
    explanation: "HACCP stands for Hazard Analysis Critical Control Point, an international systematic approach to food safety preventative controls."
  },
  {
    question: "74. Lipase enzyme acts on:",
    options: ["A. Proteins", "B. Fat", "C. Lactose", "D. Minerals"],
    correctIndex: 1,
    explanation: "Lipolytic enzymes (lipases) hydrolyze ester bonds in triglycerides, splitting them into free fatty acids and glycerol."
  },
  {
    question: "75. Major cause of spoilage in condensed milk:",
    options: ["A. Lactose crystallization", "B. Fat rancidity", "C. Yeast fermentation", "D. Water dilution"],
    correctIndex: 0,
    explanation: "In sweetened condensed milk, improper cooling can cause large sucrose and lactose crystal growth, leading to a gritty texture fault."
  },
  {
    question: "76. Food safety system FSSAI is based in:",
    options: ["A. India", "B. USA", "C. UK", "D. Nepal"],
    correctIndex: 0,
    explanation: "FSSAI (Food Safety and Standards Authority of India) is the statutory body establishing food regulations across India."
  },
  {
    question: "77. Cheese flavor is enhanced by:",
    options: ["A. Yeast", "B. Bacteria and aging", "C. High pressure", "D. Acid"],
    correctIndex: 1,
    explanation: "Controlled ripening (aging) breaks down proteins and fats via lactic bacteria and starter enzymes, developing mature flavor compounds."
  },
  {
    question: "78. Milk sterilization is done at:",
    options: ["A. 60–70°C", "B. 100°C", "C. 121°C", "D. 90°C"],
    correctIndex: 2,
    explanation: "In-container thermal sterilization requires heating products under pressure to approximately 115–121°C for 15–20 minutes."
  },
  {
    question: "79. Aseptically packaged milk requires:",
    options: ["A. Cold storage", "B. Boiling", "C. Sterile conditions", "D. Sugar"],
    correctIndex: 2,
    explanation: "Aseptic processing requires filling ultra-heat-treated products inside sterile packaging materials within a germ-free environment."
  },
  {
    question: "80. Highest protein content is found in:",
    options: ["A. Whole milk", "B. Skim milk", "C. Paneer", "D. Whey protein isolate"],
    correctIndex: 3,
    explanation: "Whey protein isolate undergoes cross-flow filtration to concentrate protein levels to 90% or higher on a dry weight basis."
  },
  {
    question: "81. To test protein in milk, we use:",
    options: ["A. Alcohol test", "B. Gerber method", "C. Kjeldahl method", "D. Fehling test"],
    correctIndex: 2,
    explanation: "The Kjeldahl method measures total organic nitrogen content, which is multiplied by a conversion factor (6.38 for dairy) to calculate crude protein."
  },
  {
    question: "82. FFA in milk stands for:",
    options: ["A. Final Flavoring Agent", "B. Free Fatty Acids", "C. Fat-Free Additive", "D. Functional Fatty Acid"],
    correctIndex: 1,
    explanation: "FFA stands for Free Fatty Acids, which accumulate in milk fat when lipolysis degrades native triglycerides."
  },
  {
    question: "83. Rapid cooling of milk after milking is important to:",
    options: ["A. Avoid freezing", "B. Increase thickness", "C. Inhibit microbial growth", "D. Remove solids"],
    correctIndex: 2,
    explanation: "Chilling milk immediately down to 4°C slows down bacterial enzyme activity and prevents rapid population growth."
  },
  {
    question: "84. Milk adulteration is checked by:",
    options: ["A. Titratable acidity", "B. Methylene blue reduction test", "C. Freezing point test", "D. All of the above"],
    correctIndex: 3,
    explanation: "Comprehensive dairy platform testing uses acidity, reduction dye tests, and freezing point cryoscopy to identify chemical and microbiological irregularities."
  },
  {
    question: "85. Ice cream texture is improved by:",
    options: ["A. Freezing faster", "B. Reducing sugar", "C. Increasing salt", "D. Over-mixing"],
    correctIndex: 0,
    explanation: "Rapid freezing promotes the formation of tiny, uniform ice crystals, producing a smooth and velvety oral texture."
  },
  {
    question: "86. Lactose intolerance is due to:",
    options: ["A. Fat allergy", "B. Gluten sensitivity", "C. Deficiency of lactase enzyme", "D. Vitamin deficiency"],
    correctIndex: 2,
    explanation: "Lactose intolerance is a digestive disorder caused by inadequate intestinal production of the enzyme lactase needed to hydrolyze lactose into glucose and galactose."
  },
  {
    question: "87. Cheese hardening depends on:",
    options: ["A. Temperature", "B. Fat content", "C. Salt content", "D. Moisture loss"],
    correctIndex: 3,
    explanation: "Evaporation and syneresis reduce moisture percentage during aging, transforming soft curds into hard or extra-hard cheese varieties."
  },
  {
    question: "88. Shelf life of ghee at room temperature is:",
    options: ["A. 1 week", "B. 1 month", "C. 6 months or more", "D. 10 days"],
    correctIndex: 2,
    explanation: "Low moisture content (<0.2%) combined with natural antioxidants enables well-packaged ghee to remain stable at ambient temperatures for over 6 months."
  },
  {
    question: "89. Common method for preserving curd:",
    options: ["A. Sugar addition", "B. Freezing", "C. Refrigeration", "D. Boiling"],
    correctIndex: 2,
    explanation: "Refrigeration retards starter culture metabolism, preventing excessive lactic acid build-up and souring."
  },
  {
    question: "90. Cooling coils in milk tanks are made of:",
    options: ["A. Plastic", "B. GI", "C. Stainless steel", "D. Copper"],
    correctIndex: 2,
    explanation: "Food-grade stainless steel (AISI 304/316) is required for food contact surfaces due to its corrosion resistance and ease of cleaning."
  },
  {
    question: "91. The term “lactation” refers to:",
    options: ["A. Milk marketing", "B. Milk spoilage", "C. Milk secretion from animals", "D. Milk boiling"],
    correctIndex: 2,
    explanation: "Lactation describes the physiological process of milk synthesis and secretion by mammary glands following parturition."
  },
  {
    question: "92. Which component in milk provides energy?",
    options: ["A. Water", "B. Protein", "C. Fat", "D. Calcium"],
    correctIndex: 2,
    explanation: "Lipids (fat) provide approximately $9\\text{ kcal/g}$, making milk fat the most concentrated energy source in dairy products."
  },
  {
    question: "93. Fermented dairy products are rich in:",
    options: ["A. Bacteria", "B. Enzymes", "C. Vitamin B", "D. All of the above"],
    correctIndex: 3,
    explanation: "Fermentation increases beneficial bacterial counts, releases metabolic enzymes, and synthesizes B-complex vitamins."
  },
  {
    question: "94. Centrifugal force is used in:",
    options: ["A. Homogenizer", "B. Clarifier", "C. Milk separator", "D. Both B and C"],
    correctIndex: 3,
    explanation: "Both centrifugal clarifiers and cream separators utilize rotational force field dynamics to separate particles based on density differences."
  },
  {
    question: "95. An example of milk spoilage bacteria:",
    options: ["A. Lactobacillus", "B. Salmonella", "C. Pseudomonas", "D. Rhizobium"],
    correctIndex: 2,
    explanation: "*Pseudomonas* species are psychrotrophic bacteria that multiply in refrigerated milk, producing heat-stable lipases and proteases that degrade quality."
  },
  {
    question: "96. Milk ash contains:",
    options: ["A. Protein", "B. Minerals", "C. Fat", "D. Fiber"],
    correctIndex: 1,
    explanation: "Incinerating milk at high temperatures burns away organic carbon, leaving inorganic mineral oxides (calcium, phosphorus, potassium, sodium) as ash."
  },
  {
    question: "97. Best packaging for UHT milk:",
    options: ["A. Glass bottle", "B. PET jar", "C. Tetra pack", "D. Plastic bag"],
    correctIndex: 2,
    explanation: "Multilayer aseptic Tetra Pak cartons combine polyethylene, paperboard, and aluminum foil to block light, oxygen, and microbial ingress."
  },
  {
    question: "98. Bulk milk collection improves:",
    options: ["A. Milk density", "B. Farmer profitability and hygiene", "C. Milk color", "D. Butter yield"],
    correctIndex: 1,
    explanation: "Chilling milk in localized bulk centers lowers spoilage losses, preserves raw quality grades, and cuts transport overheads."
  },
  {
    question: "99. The taste of milk is affected most by:",
    options: ["A. Protein", "B. Water", "C. Fat", "D. Bacteria"],
    correctIndex: 3,
    explanation: "Bacterial metabolism produces volatile organic acids and metabolic off-flavors (sour, bitter, or malty notes) that alter milk taste."
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
        Dairy and Food Engineering
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Answer all questions to see instant feedback and explanations.
      </p>

      <Quiz chapterTitle="Chapter 8" questions={dairyQuestionsData} />
    </main>
  );
}