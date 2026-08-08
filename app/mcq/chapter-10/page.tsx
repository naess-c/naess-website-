import Quiz from "../../components/Quiz";

export default function Chapter1Page() {
  const projectManagementQuiz = [
  {
    question: "1. The first step in project planning is:",
    options: ["A. Implementation", "B. Feasibility study", "C. Evaluation", "D. Financing"],
    correctIndex: 1,
    explanation: "Before initiating execution or securing financing, a feasibility study must be conducted to assess whether the project is technical, economic, and socially viable."
  },
  {
    question: "2. A project is considered successful if it:",
    options: ["A. Is expensive", "B. Starts quickly", "C. Meets objectives within time and budget", "D. Uses modern tools"],
    correctIndex: 2,
    explanation: "Project success is measured by achieving defined scope objectives while adhering to time, cost, and quality constraints (the Triple Constraint)."
  },
  {
    question: "3. SWOT analysis includes:",
    options: ["A. Structure, Work, Output, Time", "B. Strengths, Weaknesses, Opportunities, Threats", "C. Strategy, Workload, Objectives, Team", "D. None of the above"],
    correctIndex: 1,
    explanation: "SWOT stands for Strengths, Weaknesses (internal factors), Opportunities, and Threats (external factors)."
  },
  {
    question: "4. Gantt charts are used for:",
    options: ["A. Budgeting", "B. Staff recruitment", "C. Project scheduling", "D. Site surveying"],
    correctIndex: 2,
    explanation: "A Gantt chart is a bar chart tool used to visualize project schedules, task durations, dependencies, and progress over time."
  },
  {
    question: "5. CPM stands for:",
    options: ["A. Critical Path Method", "B. Cost Planning Management", "C. Control Project Map", "D. Construction Phase Model"],
    correctIndex: 0,
    explanation: "Critical Path Method (CPM) is a step-by-step project management technique for process planning that defines critical and non-critical tasks."
  },
  {
    question: "6. In project management, stakeholders include:",
    options: ["A. Only farmers", "B. Project team", "C. All parties affected by the project", "D. Financial institutions only"],
    correctIndex: 2,
    explanation: "Stakeholders are individuals, groups, or organizations that can affect, be affected by, or perceive themselves to be affected by a project decision or outcome."
  },
  {
    question: "7. The logical framework (LogFrame) is used to:",
    options: ["A. Analyze soil", "B. Track weather", "C. Plan and evaluate projects", "D. Hire staff"],
    correctIndex: 2,
    explanation: "The Logical Framework Approach (LFA) or LogFrame is a structured design tool used to plan, monitor, and evaluate projects by linking inputs, activities, outputs, outcomes, and impact."
  },
  {
    question: "8. A feasibility study assesses:",
    options: ["A. Soil fertility", "B. Project's technical, economic, and social viability", "C. Marketing only", "D. Weather patterns"],
    correctIndex: 1,
    explanation: "A feasibility study comprehensively evaluates technical feasibility, financial/economic return, environmental, legal, and operational suitability before committing funds."
  },
  {
    question: "9. Project implementation refers to:",
    options: ["A. Final reporting", "B. Physical execution of planned activities", "C. Stakeholder mapping", "D. Budget proposal"],
    correctIndex: 1,
    explanation: "Implementation is the phase where project plans are put into action and physical deliverables/activities are executed."
  },
  {
    question: "10. Project sustainability means:",
    options: ["A. Completing on time", "B. Long-term benefits after project ends", "C. Overusing resources", "D. Project duplication"],
    correctIndex: 1,
    explanation: "Sustainability refers to the capacity of a project to continue delivering its intended benefits, services, or outcomes over an extended period after donor funding or initial intervention ceases."
  },
  {
    question: "11. The PERT technique is primarily used for:",
    options: ["A. Market survey", "B. Risk assessment", "C. Time estimation and scheduling", "D. Soil testing"],
    correctIndex: 2,
    explanation: "Program Evaluation and Review Technique (PERT) is a probabilistic scheduling tool used to estimate task durations and project completion time under uncertainty."
  },
  {
    question: "12. In project budgeting, a contingency fund is allocated for:",
    options: ["A. Salaries", "B. Unexpected costs", "C. Machinery", "D. Raw materials"],
    correctIndex: 1,
    explanation: "Contingency funds are emergency reserves set aside to cover unforeseen risks, price fluctuations, or unexpected expenses during project execution."
  },
  {
    question: "13. A stakeholder analysis helps to:",
    options: ["A. Select crops", "B. Estimate irrigation", "C. Identify interest and influence of involved parties", "D. Reduce taxes"],
    correctIndex: 2,
    explanation: "Stakeholder analysis systematically evaluates the interests, influence, expectations, and power dynamics of individuals or groups related to the project."
  },
  {
    question: "14. Monitoring and Evaluation (M&E) focuses on:",
    options: ["A. Water demand", "B. Equipment safety", "C. Project progress and outcome assessment", "D. Land size"],
    correctIndex: 2,
    explanation: "Monitoring tracks continuous progress against targets, while Evaluation measures the overall relevance, effectiveness, efficiency, and impact of project outcomes."
  },
  {
    question: "15. A project logframe usually includes:",
    options: ["A. Objectives, indicators, means of verification, assumptions", "B. Budget, cost, revenue", "C. Design, materials, personnel", "D. Activities, fertilizers, soil type"],
    correctIndex: 0,
    explanation: "A standard LogFrame matrix consists of four main columns: Intervention Logic (Objectives/Activities), Performance Indicators, Means of Verification, and Key Assumptions."
  },
  {
    question: "16. The critical path in a project is the:",
    options: ["A. Shortest activity path", "B. Cheapest route", "C. Longest path determining project duration", "D. Optional task list"],
    correctIndex: 2,
    explanation: "The critical path is the longest sequence of dependent activities in a project network diagram; it determines the minimum total time required to complete the project."
  },
  {
    question: "17. Time overrun in a project indicates:",
    options: ["A. Ahead of schedule", "B. On time", "C. Delayed execution", "D. Reduced budget"],
    correctIndex: 2,
    explanation: "Time overrun occurs when project completion exceeds the scheduled deadline, signifying execution delays."
  },
  {
    question: "18. Which type of evaluation is conducted during project execution?",
    options: ["A. Final", "B. Mid-term", "C. Ex-post", "D. Pre-feasibility"],
    correctIndex: 1,
    explanation: "Mid-term evaluation takes place halfway through implementation to assess progress, identify bottlenecks, and recommend corrective actions."
  },
  {
    question: "19. A baseline survey is used to:",
    options: ["A. Conduct training", "B. Establish initial conditions before project", "C. Distribute funds", "D. End a project"],
    correctIndex: 1,
    explanation: "A baseline survey collects pre-project benchmark data across target indicators to serve as a point of comparison for evaluating future project impact."
  },
  {
    question: "20. Project impact is measured:",
    options: ["A. Before project starts", "B. At mid-term", "C. Immediately after start", "D. After completion, over time"],
    correctIndex: 3,
    explanation: "Long-term impact (changes in socio-economic status, environment, etc.) can only be reliably measured after completion through ex-post evaluations."
  },
  {
    question: "21. Risk management in a project involves:",
    options: ["A. Ignoring threats", "B. Identifying, assessing, and mitigating potential issues", "C. Avoiding decisions", "D. Speeding up work"],
    correctIndex: 1,
    explanation: "Project risk management is the systematic process of identifying, analyzing, prioritizing, responding to, and monitoring potential risks."
  },
  {
    question: "22. Financial analysis of a project includes:",
    options: ["A. Asset inspection", "B. ROI, IRR, NPV", "C. Rainfall data", "D. Soil compaction"],
    correctIndex: 1,
    explanation: "Financial feasibility metrics evaluate profitability and cash flows using Net Present Value (NPV), Internal Rate of Return (IRR), and Return on Investment (ROI)."
  },
  {
    question: "23. Which tool is used to show project hierarchy and timeline?",
    options: ["A. CAD", "B. SWOT", "C. Gantt Chart", "D. GPS"],
    correctIndex: 2,
    explanation: "A Gantt chart illustrates task hierarchy, start/finish dates, dependencies, and overall project timeline visual layout."
  },
  {
    question: "24. One key indicator of project success is:",
    options: ["A. Number of meetings", "B. Output and impact achieved", "C. Project volume", "D. Budget surplus"],
    correctIndex: 1,
    explanation: "True project success is defined by delivering intended outputs and achieving meaningful long-term impacts for target beneficiaries."
  },
  {
    question: "25. Logical framework approach (LFA) is mainly used in:",
    options: ["A. Land preparation", "B. Fertilizer estimation", "C. Project planning and management", "D. Road construction"],
    correctIndex: 2,
    explanation: "LFA is a widely adopted methodology by international development bodies for systematic project planning, management, and monitoring."
  },
  {
    question: "26. A donor-funded project is:",
    options: ["A. Self-financed", "B. Externally funded", "C. Privately owned", "D. Public-private"],
    correctIndex: 1,
    explanation: "Donor-funded projects receive financial support or grants from external funding entities like international aid agencies or multilateral development banks."
  },
  {
    question: "27. The abbreviation TOR in project terms means:",
    options: ["A. Time of Requirement", "B. Terms of Reference", "C. Type of Road", "D. Tools of Research"],
    correctIndex: 1,
    explanation: "Terms of Reference (TOR) define the purpose, scope, deliverables, background, and responsibilities of a project assignment or consultancy."
  },
  {
    question: "28. Project phasing involves:",
    options: ["A. Weather forecasting", "B. Breaking project into stages", "C. Machinery maintenance", "D. Land leveling"],
    correctIndex: 1,
    explanation: "Phasing breaks a large, complex project into manageable sequential stages or life-cycle phases (e.g., initiation, planning, execution, closure)."
  },
  {
    question: "29. SMART indicators are:",
    options: ["A. Simple, Manageable, Applied, Rapid, Timely", "B. Specific, Measurable, Achievable, Relevant, Time-bound", "C. Sustainable, Multi-level, Adjustable, Robust, Targeted", "D. Scientific, Monitorable, Available, Realistic, Transparent"],
    correctIndex: 1,
    explanation: "Indicators used in M&E should be Specific, Measurable, Achievable, Relevant, and Time-bound (SMART)."
  },
  {
    question: "30. A pilot project is implemented to:",
    options: ["A. Avoid costs", "B. Reduce time", "C. Test feasibility on small scale", "D. Avoid permits"],
    correctIndex: 2,
    explanation: "A pilot project acts as an initial small-scale trial to test feasibility, refine strategies, and identify challenges before full-scale deployment."
  },
  {
    question: "31. Which is not part of project life cycle?",
    options: ["A. Initiation", "B. Planning", "C. Implementation", "D. Export"],
    correctIndex: 3,
    explanation: "The standard project life cycle consists of Initiation, Planning, Execution/Implementation, Monitoring, and Closure. Export is a trade activity."
  },
  {
    question: "32. Project exit strategy defines:",
    options: ["A. When staff go home", "B. Plan for smooth closure and post-project transition", "C. Training material", "D. Expansion plan"],
    correctIndex: 1,
    explanation: "An exit strategy plans for the deliberate withdrawal of external assistance while maintaining local project continuity and operational sustainability."
  },
  {
    question: "33. Project appraisal is done:",
    options: ["A. After closing", "B. Before implementation", "C. During reporting", "D. By engineers only"],
    correctIndex: 1,
    explanation: "Project appraisal is the ex-ante assessment of a proposed project before approval and implementation to determine its technical and economic feasibility."
  },
  {
    question: "34. Which chart helps track resource use over time?",
    options: ["A. Line chart", "B. Bar chart", "C. Resource histogram", "D. Flow diagram"],
    correctIndex: 2,
    explanation: "A Resource Histogram is a column bar chart that depicts resource allocation, over-allocation, and utilization levels across project time periods."
  },
  {
    question: "35. Resource leveling is a method to:",
    options: ["A. Reduce rainfall", "B. Spread equipment evenly over time", "C. Increase project cost", "D. Track temperature"],
    correctIndex: 1,
    explanation: "Resource leveling optimizes resource usage by smoothing out peaks and valleys in resource demand without exceeding available limits."
  },
  {
    question: "36. Which of the following is a qualitative evaluation method?",
    options: ["A. Questionnaire", "B. Focus group discussion", "C. Sensor logging", "D. GPS tracking"],
    correctIndex: 1,
    explanation: "Focus Group Discussions (FGDs) gather non-numerical, qualitative insights, perceptions, and attitudes from participants."
  },
  {
    question: "37. Cash flow statement is used to:",
    options: ["A. Paint office", "B. Record rainfall", "C. Monitor income and expenditure over time", "D. Check inventory"],
    correctIndex: 2,
    explanation: "A cash flow statement tracks the actual inflows and outflows of cash over given time intervals to assess project liquidity."
  },
  {
    question: "38. Scope creep in a project refers to:",
    options: ["A. Budget reduction", "B. Work expansion beyond plan", "C. Improved quality", "D. Land expansion"],
    correctIndex: 1,
    explanation: "Scope creep refers to continuous or uncontrolled expansion of project scope without adjustments to time, cost, and resource baselines."
  },
  {
    question: "39. Project output refers to:",
    options: ["A. Final impact", "B. Initial investment", "C. Immediate deliverables", "D. Staff salary"],
    correctIndex: 2,
    explanation: "Outputs are the direct, tangible goods, services, or physical products generated by completing project activities."
  },
  {
    question: "40. One common project constraint is:",
    options: ["A. Too much land", "B. Limited resources", "C. Excess funds", "D. Time bonus"],
    correctIndex: 1,
    explanation: "Resource constraints (budget, labor, equipment, time) are fundamental limitations that restrict project execution."
  },
  {
    question: "41. Bottom-up planning involves:",
    options: ["A. Central government only", "B. Consultants", "C. Community participation", "D. None"],
    correctIndex: 2,
    explanation: "Bottom-up planning engages grassroots communities and local beneficiaries in identifying needs and formulating plans from the ground level up."
  },
  {
    question: "42. Data triangulation improves:",
    options: ["A. Budget", "B. Road alignment", "C. Validity of findings", "D. Plantation density"],
    correctIndex: 2,
    explanation: "Data triangulation cross-verifies information from multiple methods or sources to increase the accuracy, validity, and credibility of evaluation findings."
  },
  {
    question: "43. Cash crop planning in projects considers:",
    options: ["A. Yield only", "B. Market, labor, land", "C. Tourist flow", "D. Office size"],
    correctIndex: 1,
    explanation: "Successful cash crop project planning depends on market demand/access, available labor supply, soil/land suitability, and supply chain logistics."
  },
  {
    question: "44. Project milestone is a:",
    options: ["A. Road marker", "B. Key event or checkpoint", "C. Budget cut", "D. Brick"],
    correctIndex: 1,
    explanation: "A milestone is a significant zero-duration marker or checkpoint in a project timeline that indicates the completion of a major deliverable."
  },
  {
    question: "45. Which is a monitoring tool?",
    options: ["A. GPS", "B. LogFrame", "C. Level", "D. Excavator"],
    correctIndex: 1,
    explanation: "The LogFrame matrix acts as an active project monitoring tool by specifying objectifiable indicators and means of verification."
  },
  {
    question: "46. Project design includes:",
    options: ["A. Only building drawings", "B. Technical specs, implementation strategy, and scheduling", "C. Satellite photos", "D. Paint selection"],
    correctIndex: 1,
    explanation: "Comprehensive project design defines technical specifications, operational work plans, timelines, resource allocation, and execution methodologies."
  },
  {
    question: "47. If IRR > Discount rate, project is:",
    options: ["A. Not viable", "B. Technically unsound", "C. Financially viable", "D. Overfunded"],
    correctIndex: 2,
    explanation: "When Internal Rate of Return (IRR) exceeds the hurdle rate or cost of capital (discount rate), the Net Present Value is positive, rendering the project financially viable."
  },
  {
    question: "48. Stakeholder engagement promotes:",
    options: ["A. Conflict", "B. Delay", "C. Ownership and sustainability", "D. Extra cost"],
    correctIndex: 2,
    explanation: "Active stakeholder involvement builds trust, aligns project goals with community needs, and fosters long-term local ownership and sustainability."
  },
  {
    question: "49. Baseline and endline surveys help assess:",
    options: ["A. Inflation", "B. Before–after changes", "C. Fund source", "D. Legal approval"],
    correctIndex: 1,
    explanation: "Comparing pre-intervention baseline values against post-project endline results measures total net change and impact directly attributable to the project."
  },
  {
    question: "50. Cost–benefit analysis (CBA) compares:",
    options: ["A. Salary and expense", "B. Income and tax", "C. Benefits and total project costs", "D. Contractor rate"],
    correctIndex: 2,
    explanation: "CBA quantifies and compares the total expected monetary/economic benefits against total project costs to evaluate overall value for money."
  },
  {
    question: "51. Which tool best visualizes a project’s timeline?",
    options: ["A. Soil chart", "B. Contour map", "C. Gantt chart", "D. Pie chart"],
    correctIndex: 2,
    explanation: "A Gantt chart graphically represents time schedules, activity durations, and task relationships across project phases."
  },
  {
    question: "52. Work Breakdown Structure (WBS) helps in:",
    options: ["A. Machinery repair", "B. Breaking project into manageable tasks", "C. Soil testing", "D. Drawing maps"],
    correctIndex: 1,
    explanation: "A Work Breakdown Structure (WBS) hierarchically decomposes total project scope into smaller, more manageable work packages."
  },
  {
    question: "53. One key feature of participatory planning:",
    options: ["A. Top-down control", "B. Beneficiary inclusion", "C. Engineer-only design", "D. Private consultancy"],
    correctIndex: 1,
    explanation: "Participatory planning mandates active involvement, consultation, and decision-making by target community beneficiaries."
  },
  {
    question: "54. Cost escalation in projects is caused by:",
    options: ["A. Efficient planning", "B. Sudden inflation and delays", "C. Overstaffing", "D. Sunny days"],
    correctIndex: 1,
    explanation: "Cost escalation (budget overrun) frequently stems from macroeconomic inflation, material price spikes, design changes, and project timeline delays."
  },
  {
    question: "55. Ex-post evaluation is done:",
    options: ["A. After project completion", "B. Before design", "C. Mid-term", "D. During implementation"],
    correctIndex: 0,
    explanation: "Ex-post evaluations take place well after a project is completed to assess its long-term impacts, sustainability, and unexpected outcomes."
  },
  {
    question: "56. What is float in CPM?",
    options: ["A. Time flexibility for non-critical activities", "B. Cost saving", "C. Water depth", "D. Resource load"],
    correctIndex: 0,
    explanation: "Float (or slack) represents the total amount of time an activity can be delayed without delaying the overall project target completion date."
  },
  {
    question: "57. Physical verification means:",
    options: ["A. Asset counting", "B. Theory class", "C. Temperature testing", "D. File scanning"],
    correctIndex: 0,
    explanation: "Physical verification involves manually checking, measuring, and inventorying physical assets, construction progress, and equipment on site."
  },
  {
    question: "58. A donor’s key concern is:",
    options: ["A. Soil color", "B. ROI and impact", "C. Cement cost", "D. Map style"],
    correctIndex: 1,
    explanation: "Donors prioritize financial accountability, Return on Investment (ROI), value for money, and quantifiable developmental impact."
  },
  {
    question: "59. Livelihood projects aim to:",
    options: ["A. Improve TV access", "B. Enhance household income and skills", "C. Increase fuel use", "D. Reduce rice price"],
    correctIndex: 1,
    explanation: "Livelihood programs target capacity building, vocational training, and income-generating opportunities to improve community socio-economic wellbeing."
  },
  {
    question: "60. Community mobilization involves:",
    options: ["A. Enforcing laws", "B. Training and participation of local people", "C. Machine leasing", "D. Map editing"],
    correctIndex: 1,
    explanation: "Community mobilization engages, educates, and empowers local community members to take active ownership in development initiatives."
  },
  {
    question: "61. Procurement in project context means:",
    options: ["A. Payment release", "B. Construction planning", "C. Acquiring goods and services", "D. Budget sanction"],
    correctIndex: 2,
    explanation: "Procurement is the formal process of sourcing, purchasing, leasing, or acquiring equipment, construction works, supplies, and consultancy services."
  },
  {
    question: "62. Project risk log tracks:",
    options: ["A. Cement use", "B. Weather", "C. Identified risks and actions", "D. Road length"],
    correctIndex: 2,
    explanation: "A Risk Log (or Risk Register) documents identified potential risks, their severity/probability, assigned owners, and mitigation action plans."
  },
  {
    question: "63. The financial year in Nepal begins on:",
    options: ["A. January 1", "B. April 1", "C. July 16", "D. September 1"],
    correctIndex: 2,
    explanation: "In Nepal, the official fiscal year starts on 1st Shrawan in the Bikram Sambat calendar, which corresponds to July 16 (or July 17 in leap years)."
  },
  {
    question: "64. Theory of Change describes:",
    options: ["A. Weather variation", "B. Project causal pathway from input to impact", "C. Inflation rate", "D. Irrigation flow"],
    correctIndex: 1,
    explanation: "A Theory of Change outlines the comprehensive causal pathway explaining how project inputs and activities lead directly to outputs, outcomes, and high-level impacts."
  },
  {
    question: "65. Quality control in construction ensures:",
    options: ["A. Higher cost", "B. Faster pace", "C. Conformance to specifications", "D. More meetings"],
    correctIndex: 2,
    explanation: "Quality control (QC) verifies that materials, structural execution, and engineering procedures strictly conform to technical standards and contract specifications."
  },
  {
    question: "66. Which is not a direct project cost?",
    options: ["A. Materials", "B. Labor", "C. Supervision staff", "D. Office rent"],
    correctIndex: 3,
    explanation: "Direct costs (materials, field labor, site supervision) directly trace to core project deliverables. Central office rent is an indirect/overhead cost."
  },
  {
    question: "67. Physical progress in construction is tracked by:",
    options: ["A. Material order", "B. Number of meetings", "C. Site measurements and reports", "D. Budget file"],
    correctIndex: 2,
    explanation: "Field measurement books, structural inspections, and physical site verification reports accurately measure physical construction progress."
  },
  {
    question: "68. Soft component of a project includes:",
    options: ["A. Training and capacity building", "B. Earthworks", "C. Concrete", "D. Excavation"],
    correctIndex: 0,
    explanation: "Soft project components focus on non-physical interventions like capacity building, skill training, institutional strengthening, and awareness creation."
  },
  {
    question: "69. Budget variance indicates:",
    options: ["A. Stability", "B. Temperature change", "C. Difference between planned and actual cost", "D. Cement quantity"],
    correctIndex: 2,
    explanation: "Budget variance calculates the quantitative difference between baseline planned financial expenditure and actual incurred costs."
  },
  {
    question: "70. Internal monitoring is done by:",
    options: ["A. External evaluator", "B. Ministry", "C. Project team", "D. Community group"],
    correctIndex: 2,
    explanation: "Internal monitoring is a continuous tracking process performed internally by the project management unit and field operational staff."
  },
  {
    question: "71. Gender equity in projects ensures:",
    options: ["A. Same workload", "B. Exclusion", "C. Equal opportunities and benefits", "D. Same salary"],
    correctIndex: 2,
    explanation: "Gender equity ensures fair treatment, equal access to resources, participation in decision-making, and distribution of benefits for both men and women."
  },
  {
    question: "72. Tender evaluation is part of:",
    options: ["A. Impact study", "B. Site inspection", "C. Procurement process", "D. Final audit"],
    correctIndex: 2,
    explanation: "Tender evaluation scrutinizes submitted contractor bids technically and financially during the formal procurement stage."
  },
  {
    question: "73. A lead agency in a multi-stakeholder project is:",
    options: ["A. Passive partner", "B. Largest donor", "C. Coordinating and responsible body", "D. Contractor"],
    correctIndex: 2,
    explanation: "The lead agency acts as the primary administrative authority responsible for coordinating implementation, manage funds, and liaising across partners."
  },
  {
    question: "74. Outcome is defined as:",
    options: ["A. Raw material", "B. Change achieved from outputs", "C. Total cost", "D. Budget difference"],
    correctIndex: 1,
    explanation: "Outcomes represent short- to medium-term institutional, behavioral, or developmental changes brought about by utilizing project outputs."
  },
  {
    question: "75. One cause of project failure:",
    options: ["A. Clear objectives", "B. Strong planning", "C. Lack of stakeholder buy-in", "D. Adequate funding"],
    correctIndex: 2,
    explanation: "A lack of local stakeholder buy-in leads to poor community cooperation, resistance, underutilization of deliverables, and project failure."
  },
  {
    question: "76. Milestone chart helps to:",
    options: ["A. Show cost", "B. Track road slope", "C. Identify key deliverables and deadlines", "D. Check rainfall"],
    correctIndex: 2,
    explanation: "Milestone charts emphasize major task completions, key events, and critical deadlines along the project schedule."
  },
  {
    question: "77. Main aim of Environmental Impact Assessment (EIA):",
    options: ["A. Increase land use", "B. Identify potential environmental effects", "C. Track funding", "D. Promote deforestation"],
    correctIndex: 1,
    explanation: "EIA evaluates potential adverse environmental impacts of a proposed project and formulates environmental management and mitigation plans prior to construction."
  },
  {
    question: "78. A project budget should be:",
    options: ["A. Overestimated", "B. Unrelated to plan", "C. Realistic and aligned with activities", "D. Ignored during implementation"],
    correctIndex: 2,
    explanation: "Effective budgeting requires realistic cost estimation strictly tied to defined Work Breakdown Structure (WBS) activities."
  },
  {
    question: "79. Top-down planning may fail due to:",
    options: ["A. No funds", "B. Ignoring local context and needs", "C. Strong leaders", "D. Rapid evaluation"],
    correctIndex: 1,
    explanation: "Top-down planning often ignores field realities, local socio-cultural dynamics, and real beneficiary needs, leading to unsustainable implementations."
  },
  {
    question: "80. Participatory Rural Appraisal (PRA) helps in:",
    options: ["A. Tax planning", "B. Satellite imaging", "C. Community needs identification", "D. Product pricing"],
    correctIndex: 2,
    explanation: "PRA uses qualitative field methods to enable local rural people to share, analyze, and enhance their knowledge of living conditions to identify community needs."
  },
  {
    question: "81. Which document summarizes the entire project?",
    options: ["A. Map", "B. Executive summary", "C. Voucher", "D. Invoice"],
    correctIndex: 1,
    explanation: "An executive summary synthesizes key project proposal details—objectives, scope, budget, methodology, and target benefits—in a concise summary format."
  },
  {
    question: "82. Key informant interview is:",
    options: ["A. Multiple choice survey", "B. Group discussion", "C. One-on-one data collection from knowledgeable individuals", "D. Inventory list"],
    correctIndex: 2,
    explanation: "Key Informant Interviews (KIIs) collect qualitative data through qualitative in-depth interviews with individuals who possess specialized knowledge on a topic."
  },
  {
    question: "83. Time–cost trade-off is analyzed in:",
    options: ["A. Budget proposal", "B. CPM", "C. SWOT", "D. Feasibility"],
    correctIndex: 1,
    explanation: "In CPM, time-cost trade-off analysis evaluates the cost implications of crashing (speeding up) activities on the critical path."
  },
  {
    question: "84. Community contribution to project is known as:",
    options: ["A. VAT", "B. Local investment", "C. Cost sharing or in-kind contribution", "D. Tax"],
    correctIndex: 2,
    explanation: "Community co-financing through uncompensated labor, locally sourced raw materials, or monetary pooling is referred to as cost sharing or in-kind contribution."
  },
  {
    question: "85. Asset register in a project records:",
    options: ["A. Salaries", "B. Fund flow", "C. Equipment and resources", "D. Stakeholder list"],
    correctIndex: 2,
    explanation: "An asset register systematically inventories capital equipment, machinery, property, and physical assets purchased or deployed for the project."
  },
  {
    question: "86. Red flag in monitoring report indicates:",
    options: ["A. On track", "B. Needs improvement", "C. Serious issue", "D. Low priority"],
    correctIndex: 2,
    explanation: "A 'red flag' signals critical implementation bottlenecks, severe deviations from baseline plans, or urgent risks demanding immediate corrective action."
  },
  {
    question: "87. Logical sequencing of project activities is called:",
    options: ["A. Timeline sketch", "B. Flowchart", "C. Activity schedule or network diagram", "D. Budget table"],
    correctIndex: 2,
    explanation: "Activity scheduling or constructing a network diagram maps sequential dependency relationships among tasks from start to finish."
  },
  {
    question: "88. Key principle in development projects:",
    options: ["A. Centralization", "B. Participation", "C. Profit maximization", "D. Overdesign"],
    correctIndex: 1,
    explanation: "Active stakeholder and beneficiary participation is essential for equitable, effective, and sustainable development projects."
  },
  {
    question: "89. Line department refers to:",
    options: ["A. Outsider", "B. Core government agency responsible for sector implementation", "C. NGO", "D. Donor"],
    correctIndex: 1,
    explanation: "Line departments are sectoral government authorities (e.g., Department of Agriculture, Department of Roads) carrying out executive sector plans."
  },
  {
    question: "90. A real-time monitoring tool:",
    options: ["A. Newspaper", "B. Dashboard", "C. Ledger", "D. Email"],
    correctIndex: 1,
    explanation: "A digital data dashboard consolidates and displays real-time Key Performance Indicators (KPIs) and status metrics for immediate management decisions."
  },
  {
    question: "91. Return on Investment (ROI) is calculated as:",
    options: ["A. Cost × Time", "B. Output ÷ Input", "C. (Gain – Cost) ÷ Cost", "D. Output × Price"],
    correctIndex: 2,
    explanation: "Return on Investment measures economic profitability via the standard ratio formula: $\\text{ROI} = \\frac{\\text{Net Gain}}{\\text{Cost of Investment}} = \\frac{\\text{Gain} - \\text{Cost}}{\\text{Cost}}$."
  },
  {
    question: "92. Institutional memory helps to:",
    options: ["A. Forget previous work", "B. Repeat mistakes", "C. Preserve past knowledge for future planning", "D. Save taxes"],
    correctIndex: 2,
    explanation: "Institutional memory captures historical operational data, best practices, and lessons learned to inform future program formulation and avoid past errors."
  },
  {
    question: "93. Conflict in projects is best handled by:",
    options: ["A. Ignoring it", "B. Stakeholder consultation and mediation", "C. Police", "D. Delaying work"],
    correctIndex: 1,
    explanation: "Transparent stakeholder consultation, negotiation, and formal mediation address root causes of disagreement and lead to collaborative consensus."
  },
  {
    question: "94. One advantage of project-based approach:",
    options: ["A. Long-term permanent structures", "B. Focused time-bound goal achievement", "C. Fixed salary", "D. Land ownership"],
    correctIndex: 1,
    explanation: "Projects are distinct, temporary endeavors designed to achieve specific, time-bound objectives within designated resource allocations."
  },
  {
    question: "95. Project sustainability improves when:",
    options: ["A. Donors control activities", "B. Local community takes ownership", "C. Technology is foreign", "D. Cost increases"],
    correctIndex: 1,
    explanation: "When local communities assume full psychological and operational ownership, they continue managing, maintaining, and protecting project assets over the long run."
  },
  {
    question: "96. The unit “man-day” measures:",
    options: ["A. Machine output", "B. Rainfall", "C. Human labor in a day", "D. Payment delay"],
    correctIndex: 2,
    explanation: "A man-day (or person-day) is a standard unit of measure representing the quantitative workload completed by one full-time worker in one standard working day."
  },
  {
    question: "97. Which is not a project management software?",
    options: ["A. MS Project", "B. Primavera", "C. AutoCAD", "D. Trello"],
    correctIndex: 2,
    explanation: "AutoCAD is Computer-Aided Design drafting software for architecture/engineering, whereas MS Project, Primavera, and Trello are project scheduling and task management systems."
  },
  {
    question: "98. Baseline indicators are used to:",
    options: ["A. Show change over time", "B. Draw maps", "C. Measure slope", "D. Recruit staff"],
    correctIndex: 0,
    explanation: "Baseline indicators record pre-project starting conditions against which future progress, endline outcomes, and net changes are measured."
  },
  {
    question: "99. Organizational chart shows:",
    options: ["A. Soil structure", "B. Budget variance", "C. Hierarchy and roles in team", "D. Field crops"],
    correctIndex: 2,
    explanation: "An organogram (organizational chart) graphically presents institutional reporting structures, authority lines, and designated team member roles."
  },
  {
    question: "100. Final audit is done to:",
    options: ["A. Initiate project", "B. Approve materials", "C. Verify financial compliance and accuracy", "D. Expand scope"],
    correctIndex: 2,
    explanation: "A final financial audit independently inspects account ledgers, expenditure receipts, and statutory compliance upon project closure."
  }

  ];

  return (
   <main className="min-h-screen bg-gray-50 py-8 px-6 pb-32">
    <h1 className="text-2xl md:text-3xl font-bold text-center text-teal-700 mb-1">
        Project planning, Design and implementation
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Answer all questions to see instant feedback and explanations.
      </p>

      <Quiz chapterTitle="Chapter 10" questions={projectManagementQuiz} />
    </main>
  );
}