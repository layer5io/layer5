// Academy add-ons have tiered pricing based on the number of learners
// Icons are handled separately to avoid serialization issues

export const getAddOns = () => [
  {
    id: "academy",
    name: "Academy",
    description: "A comprehensive learning management system for creators and learners.",
    iconType: "academy", // Reference to icon type instead of component
    unitLabel: "learners",
    unitLabelSingular: "learner",
    maxUnits: 5000,
    // features: ["Learning Paths", "Challenges", "Certifications", "Instructor Console"],
    subAddOns: [
      {
        id: "academy-theory",
        name: "Theoretical Learning",
        description: "A comprehensive learning management system for creators and instructors on how to build, manage, and extend educational content like learning paths, challenges, and certifications.",
        unitLabel: "learners",
        unitLabelSingular: "learner",
        maxUnits: 5000,
        pricing: [
          { learners: 250, monthlyPerUser: 1.08, yearlyPerUser: 10.81, currency: "$" },
          { learners: 500, monthlyPerUser: 0.68, yearlyPerUser: 6.74, currency: "$" },
          { learners: 1000, monthlyPerUser: 0.46, yearlyPerUser: 4.69, currency: "$" },
          { learners: 2500, monthlyPerUser: 0.40, yearlyPerUser: 4.08, currency: "$" },
          // { learners: "2500+", monthlyPerUser: "contact us", yearlyPerUser: "contact us", currency: "$" },
        ],
        planLink: [
          { learners: 250, cadence: "monthly", name: "enterprise-add-on-academy-theory-250", link: "https://cloud.layer5.io/account/plans/upgrade?plan=7fe3c084-c25d-4add-88da-70f7de1b1338", },
          { learners: 500, cadence: "monthly", name: "enterprise-add-on-academy-theory-500", link: "https://cloud.layer5.io/account/plans/upgrade?plan=3b1c48e1-456d-405d-9639-4794e8a78f6c" },
          { learners: 1000, cadence: "monthly", name: "enterprise-add-on-academy-theory-1000", link: "https://cloud.layer5.io/account/plans/upgrade?plan=8d641b71-cc54-4e77-9908-4f66bfecd4ba" },
          { learners: 2500, cadence: "monthly", name: "enterprise-add-on-academy-theory-2500", link: "https://cloud.layer5.io/account/plans/upgrade?plan=7a7569b4-e552-481c-a323-d51ebfe603d0" },{ learners: 250, cadence: "yearly", name: "enterprise-add-on-academy-theory-250", link: "https://cloud.layer5.io/account/plans/upgrade?plan=4c4c7f40-dcc5-4ab9-b381-ee4d1ee4f603", },
          { learners: 500, cadence: "yearly", name: "enterprise-add-on-academy-theory-500", link: "https://cloud.layer5.io/account/plans/upgrade?plan=13b69e5e-0cc2-4a24-948c-4955d1c9c44d" },
          { learners: 1000, cadence: "yearly", name: "enterprise-add-on-academy-theory-1000", link: "https://cloud.layer5.io/account/plans/upgrade?plan=9dcdef1a-283c-4405-acf0-cdd76ba9ec65" },
          { learners: 2500, cadence: "yearly", name: "enterprise-add-on-academy-theory-2500", link: "https://cloud.layer5.io/account/plans/upgrade?plan=7a7569b4-e552-481c-a323-d51ebfe603d0" },
        ],
        features: ["Learning Paths", "Challenges", "Certifications", "Instructor Console"],
      },
      {
        id: "academy-practical",
        name: "Practical Learning",
        description: "An inclusive, collaborative, hands-on learning environment with labs for students.",
        maxUnits: 5000,
        unitLabel: "learners",
        unitLabelSingular: "learner",
        pricing: [
          { learners: 250, monthlyPerUser: 1.08, yearlyPerUser: 10.81, currency: "$" },
          { learners: 500, monthlyPerUser: 0.68, yearlyPerUser: 6.74, currency: "$" },
          { learners: 1000, monthlyPerUser: 0.46, yearlyPerUser: 4.69, currency: "$" },
          { learners: 2500, monthlyPerUser: 0.40, yearlyPerUser: 4.08, currency: "$" },
        ],
        planLink: [
          { learners: 250, cadence: "monthly", name: "enterprise-add-on-academy-labs-250", link: "https://cloud.layer5.io/account/plans/upgrade?plan=cc52a8c7-8f19-4475-8a43-896711438423", },
          { learners: 500, cadence: "monthly", name: "enterprise-add-on-academy-labs-500", link: "https://cloud.layer5.io/account/plans/upgrade?plan=5643b020-fba2-41e5-a26a-8e7dd00728eb" },
          { learners: 1000, cadence: "monthly", name: "enterprise-add-on-academy-labs-1000", link: "https://cloud.layer5.io/account/plans/upgrade?plan=ac7b571a-97c4-4c38-896a-c7228cf6cd75" },
          { learners: 2500, cadence: "monthly", name: "enterprise-add-on-academy-labs-2500", link: "https://cloud.layer5.io/account/plans/upgrade?plan=aace63be-0f9c-4147-a30b-21b8b741c0e4" },{ learners: 250, cadence: "yearly", name: "enterprise-add-on-academy-labs-250", link: "https://cloud.layer5.io/account/plans/upgrade?plan=33cf6739-af74-4ef2-ae51-4e21cc915a84", },
          { learners: 500, cadence: "yearly", name: "enterprise-add-on-academy-labs-500", link: "https://cloud.layer5.io/account/plans/upgrade?plan=0c15f971-45a6-4429-98a9-407eaa430ae8" },
          { learners: 1000, cadence: "yearly", name: "enterprise-add-on-academy-labs-1000", link: "https://cloud.layer5.io/account/plans/upgrade?plan=88d4bd46-5c0f-4b32-bc6c-6d37b555c993" },
          { learners: 2500, cadence: "yearly", name: "enterprise-add-on-academy-labs-2500", link: "https://cloud.layer5.io/account/plans/upgrade?plan=5c34cf16-2884-4606-94e5-e95985e1b42c" },
        ],
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
    iconType: "cloud", // Reference to icon type instead of component
    unitLabel: "Servers",
    unitLabelSingular: "Server",
    maxUnits: 50,
    pricing: [
      { units: 1, monthlyPerUnit: 64, yearlyPerUnit: 54.40, currency: "$" },
      { units: 25, monthlyPerUnit: 64, yearlyPerUnit: 54.40, currency: "$" },
      { units: 50, monthlyPerUnit: 64, yearlyPerUnit: 54.40, currency: "$" },
    ],
    features: ["Automated deployment", "Real-time monitoring", "Multi-cluster support", "Performance analytics"],
  },
  {
    id: "team-seats",
    name: "Dedicated WebRTC with Conflict-Free Collaboration",
    description: "This premium offering delivers a secure, high-performance WebRTC solution, purpose-built for real-time, multiplayer collaboration across distributed teams. Powered by Conflict-Free Replicated Data Types (CRDT), this feature ensures seamless, low-latency synchronization of cloud native designs, configurations, and operational workflows, even in complex multi-cluster Kubernetes and public Cloud environments.",
    monthlyPrice: 1.50,
    yearlyPrice: 15.30, // ~15% discount for yearly
    iconType: "group", // Reference to icon type instead of component
    unitLabel: "Collaborators",
    unitLabelSingular: "Collaborator",
    maxUnits: 200,
    pricing: [
      { units: 1, monthlyPerUnit: 2, yearlyPerUnit: 1.70, currency: "$" },
      { units: 100, monthlyPerUnit: 1.50, yearlyPerUnit: 1.275, currency: "$" },
      { units: 200, monthlyPerUnit: 1.50, yearlyPerUnit: 1.275, currency: "$" },
    ],
    features: ["Enhanced Security", "Guaranteed SLAs", "Conflict-Free Synchronization", "Real-Time Collaboration"],
  },
];
