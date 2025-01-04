
import { FaClock, FaTrophy, FaWallet, FaUsers, FaGlobe, FaLeaf, FaTools, FaHandshake, FaTree, FaBalanceScale, FaLightbulb, FaBuilding, FaCog, FaWarehouse, FaShieldAlt, FaRobot, FaPalette, FaSmile, FaChair, FaSun, FaPeopleCarry, FaWater, FaPenNib, FaHome, FaCity } from 'react-icons/fa';
export const services = [
  {
    icon: <FaHome className="w-12 h-12 opacity-60" />,
    title: "architectural",
    subTitle: "design services",
    description: "Expert architectural design for residential, commercial, and industrial spaces, blending functionality with aesthetics.",
    features: [
      "Customizable Floor Plans",
      "Conceptual and Detailed Schematic Designs",
      "Development of 3D Architectural Models"
    ],
    benefits: [
      { icon: <FaClock />, text: "Quick turnaround for initial designs (4-6 weeks)" },
      { icon: <FaTrophy />, text: "Award-winning architectural solutions" },
      { icon: <FaWallet />, text: "Transparent pricing with no hidden costs" },
      { icon: <FaUsers />, text: "Dedicated support from start to finish" }
    ],
    processSteps: [
      "Consultation & Requirements Gathering",
      "Conceptual Sketches & Design Layouts",
      "3D Modeling & Virtual Presentations",
      "Comprehensive Planning & Documentation",
      "On-Site Supervision & Guidance"
    ]
  },
  {
    icon: <FaBuilding className="w-12 h-12 opacity-60" />,
    title: "commercial",
    subTitle: "architecture",
    description: "Innovative commercial spaces that blend functionality with aesthetic excellence, incorporating sustainable practices and smart designs.",
    features: [
      "Office Complexes",
      "Shopping Centers",
      "Hotels & Resorts",
      "Mixed-use Buildings"
    ],
    benefits: [
      { icon: <FaGlobe />, text: "Global expertise in commercial architecture" },
      { icon: <FaLeaf />, text: "Eco-friendly and sustainable designs" },
      { icon: <FaTools />, text: "Advanced tools for precision planning" },
      { icon: <FaHandshake />, text: "Collaborative approach to meet client goals" }
    ],
    processSteps: [
      "Initial Consultation & Feasibility Study",
      "Design Development & Approval",
      "Construction Documentation",
      "Construction Administration",
      "Post-occupancy Support"
    ]
  },
  {
    icon: <FaCity className="w-12 h-12 opacity-60" />,
    title: "urban",
    subTitle: "planning",
    description: "Comprehensive urban planning solutions to create sustainable, livable, and vibrant communities for future generations.",
    features: [
      "Master Planning",
      "Urban Design",
      "Infrastructure Development",
      "Sustainable Development Strategies"
    ],
    benefits: [
      { icon: <FaTree />, text: "Integration of green spaces" },
      { icon: <FaBalanceScale />, text: "Balanced and equitable development" },
      { icon: <FaLightbulb />, text: "Innovative planning methodologies" },
      { icon: <FaBuilding />, text: "Focus on community-centric spaces" }
    ],
    processSteps: [
      "Community Needs Assessment",
      "Master Plan Development",
      "Stakeholder Engagement",
      "Implementation Guidelines",
      "Monitoring & Review"
    ]
  },
  {
    icon: <FaTools className="w-12 h-12 opacity-60" />,
    title: "industrial ",
    subTitle: "facility design",
    description: "State-of-the-art industrial facilities designed to optimize workflow, enhance efficiency, and integrate advanced technologies.",
    features: [
      "Manufacturing Units",
      "Warehouses",
      "R&D Centers",
      "Industrial Parks"
    ],
    benefits: [
      { icon: <FaCog />, text: "Customized solutions for industrial needs" },
      { icon: <FaWarehouse />, text: "Optimized layouts for storage and production" },
      { icon: <FaShieldAlt />, text: "Focus on safety and compliance" },
      { icon: <FaRobot />, text: "Integration of advanced automation technologies" }
    ],
    processSteps: [
      "Requirement Analysis",
      "Site Analysis & Feasibility Study",
      "Conceptual & Detailed Design",
      "Construction Management",
      "Post-construction Support"
    ]
  },
  {
    icon: <FaPenNib className="w-12 h-12 opacity-60" />,
    title: "interior",
    subTitle: "design services",
    description: "Transforming interior spaces into functional and captivating environments, balancing aesthetics with practicality.",
    features: [
      "Space Planning",
      "Custom Furniture Design",
      "Material Selection",
      "Lighting Design"
    ],
    benefits: [
      { icon: <FaLightbulb />, text: "Innovative and creative interior solutions" },
      { icon: <FaChair />, text: "Tailored furniture to suit every style" },
      { icon: <FaPalette />, text: "Expert material and color selection" },
      { icon: <FaSmile />, text: "Client-centric approach for satisfaction" }
    ],
    processSteps: [
      "Client Consultation",
      "Concept Development",
      "Material and Finish Selection",
      "On-site Coordination",
      "Project Handover"
    ]
  },
  {
    icon: <FaTree className="w-12 h-12 opacity-60" />,
    title: "landscape",
    subTitle: "architecture",
    description: "Integrating natural elements with built environments to create harmonious and sustainable outdoor spaces.",
    features: [
      "Garden Design",
      "Public Spaces",
      "Green Roofs",
      "Water Features"
    ],
    benefits: [
      { icon: <FaLeaf />, text: "Eco-friendly landscape solutions" },
      { icon: <FaWater />, text: "Innovative water feature designs" },
      { icon: <FaSun />, text: "Maximizing natural light and ventilation" },
      { icon: <FaPeopleCarry />, text: "Community-oriented outdoor spaces" }
    ],
    processSteps: [
      "Site Analysis",
      "Design Concept Development",
      "Hardscape and Softscape Design",
      "Construction Oversight",
      "Maintenance Guidelines"
    ]
  }
];
