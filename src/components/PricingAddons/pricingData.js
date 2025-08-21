import React from "react";
import { CloudOutlined, Group } from "@mui/icons-material";
import AcademyIcon from "./AcademyIcon";

// Academy learning plans with tiered pricing
export const academyPlans = [
  // { learners: 0, monthlyPerUser: 0 },
  // { learners: 50, monthlyPerUser: 1.73, currency: "$" },
  // { learners: 150, monthlyPerUser: 1.73, currency: "$" },
  { learners: 250, monthlyPerUser: 1.29, yearlyPerUser: 1.05, currency: "$" },
  { learners: 500, monthlyPerUser: 0.80, yearlyPerUser: 0.67, currency: "$" },
  { learners: 1000, monthlyPerUser: 0.49, yearlyPerUser: 0.49, currency: "$" },
  { learners: 2500, monthlyPerUser: 0.44, yearlyPerUser: 0.44, currency: "$" },
];

/**
 * Generate theme-aware add-ons configuration
 * @param {Object} theme - The theme object from useTheme hook
 * @returns {Array} Array of add-on configurations with theme-aware styling
 */
export const getAddOns = (theme) => [
  {
    id: "academy",
    name: "Academy",
    description: "A comprehensive learning management system for creators and instructors on how to build, manage, and extend educational content like learning paths, challenges, and certifications.",
    icon: <AcademyIcon
      primaryFill={theme?.palette?.primary?.light || "#00B39F"}
      secondaryFill={theme?.palette?.background?.inverse || "#FFFFFF"}
    />,
    unitLabel: "learners",
    maxUnits: 5000,
    features: ["Learning Paths", "Challenges", "Certifications", "Instructor Console"],
    subAddOns: [
      {
        id: "academy-theory",
        name: "Theoretical Learning",
        description: "A comprehensive learning management system for creators and instructors on how to build, manage, and extend educational content like learning paths, challenges, and certifications.",
        unitLabel: "learners",
        maxUnits: 5000,
        monthlyPrice: 0, // Free theoretical learning
        yearlyPrice: 0,
        features: ["Learning Paths", "Challenges", "Certifications", "Instructor Console"],
      },
      {
        id: "academy-practical",
        name: "Practical Learning",
        description: "An inclusive, collaborative, hands-on learning environment with labs for students.",
        maxUnits: 5000,
        monthlyPrice: 50, // Premium hands-on learning
        yearlyPrice: 500, // ~15% discount for yearly
        features: ["Hands-on Learning", "Collaborative Instruction", "Visual Design", "Orchestrated Infrastructure"],
      }
    ],
  },
  {
    id: "meshery-server",
    name: "Managed Meshery Servers",
    description: "Managed cloud instances for comprehensive infrastructure configuration and lifecycle management",
    monthlyPrice: 64,
    yearlyPrice: 653, // ~15% discount for yearly
    icon: <CloudOutlined sx={{ color: theme?.palette?.background?.inverse || "#FFFFFF" }} />,
    unitLabel: "servers",
    maxUnits: 50,
    features: ["Automated deployment", "Real-time monitoring", "Multi-cluster support", "Performance analytics"],
  },
  {
    id: "team-seats",
    name: "Dedicated WebRTC with Conflict-Free Collaboration",
    description: "This premium offering delivers a secure, high-performance WebRTC solution, purpose-built for real-time, multiplayer collaboration across distributed teams. Powered by Conflict-Free Replicated Data Types (CRDT), this feature ensures seamless, low-latency synchronization of cloud native designs, configurations, and operational workflows, even in complex multi-cluster Kubernetes and public Cloud environments.",
    monthlyPrice: 1.50,
    yearlyPrice: 15.30, // ~15% discount for yearly
    icon: <Group sx={{ color: theme?.palette?.background?.secondary || "#00B39F" }} />,
    unitLabel: "collaborators",
    maxUnits: 200,
    features: ["Enhanced Security", "Guaranteed SLAs", "Conflict-Free Synchronization", "Real-Time Collaboration"],
  },
];
