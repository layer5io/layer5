import React from "react";

// Interactive Labs SVG
const InteractiveLabsIcon = ({ className, style }) => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <rect x="8" y="15" width="54" height="35" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="12" y="19" width="46" height="27" rx="2" fill="currentColor" opacity="0.1"/>
    <circle cx="25" cy="32" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="m20 32 3 3 7-7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="38" y="26" width="16" height="2" fill="currentColor" opacity="0.6"/>
    <rect x="38" y="30" width="12" height="2" fill="currentColor" opacity="0.6"/>
    <rect x="38" y="34" width="14" height="2" fill="currentColor" opacity="0.6"/>
    <rect x="15" y="52" width="8" height="8" rx="2" fill="currentColor" opacity="0.3"/>
    <rect x="27" y="52" width="8" height="8" rx="2" fill="currentColor" opacity="0.3"/>
    <rect x="39" y="52" width="8" height="8" rx="2" fill="currentColor" opacity="0.3"/>
    <rect x="51" y="52" width="8" height="8" rx="2" fill="currentColor"/>
    <path d="M35 10V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M35 64v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="35" cy="6" r="2" fill="currentColor"/>
    <circle cx="35" cy="68" r="2" fill="currentColor"/>
  </svg>
);

// Industry Badges SVG
const IndustryBadgesIcon = ({ className, style }) => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <circle cx="35" cy="25" r="18" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="35" cy="25" r="12" fill="currentColor" opacity="0.1"/>
    <path d="m28 25 5 5 9-9" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 40L35 35L50 40L47 55L35 52L23 55L20 40Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="32" y="48" width="6" height="12" fill="currentColor" opacity="0.6"/>
    <circle cx="35" cy="62" r="3" fill="currentColor"/>
    <path d="M27 42l8-4 8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M29 45l6-3 6 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="15" y="20" width="4" height="4" rx="1" fill="currentColor" opacity="0.4"/>
    <rect x="51" y="20" width="4" height="4" rx="1" fill="currentColor" opacity="0.4"/>
    <rect x="18" y="12" width="3" height="3" rx="1" fill="currentColor" opacity="0.3"/>
    <rect x="49" y="12" width="3" height="3" rx="1" fill="currentColor" opacity="0.3"/>
  </svg>
);

// Community Learning SVG
const CommunityLearningIcon = ({ className, style }) => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <circle cx="25" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
    <circle cx="45" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
    <circle cx="35" cy="35" r="10" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
    <path d="M15 35c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M35 35c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <ellipse cx="35" cy="55" rx="20" ry="8" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M25 45l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="20" cy="50" r="3" fill="currentColor" opacity="0.6"/>
    <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.6"/>
    <circle cx="15" cy="40" r="2" fill="currentColor" opacity="0.4"/>
    <circle cx="55" cy="40" r="2" fill="currentColor" opacity="0.4"/>
    <path d="M22 52l6-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M48 52l-6-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// CNCF Projects SVG
const CNCFProjectsIcon = ({ className, style }) => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <rect x="10" y="15" width="50" height="35" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.05"/>
    <rect x="15" y="20" width="12" height="8" rx="2" fill="currentColor" opacity="0.3"/>
    <rect x="31" y="20" width="12" height="8" rx="2" fill="currentColor" opacity="0.3"/>
    <rect x="47" y="20" width="8" height="8" rx="2" fill="currentColor"/>
    <rect x="15" y="32" width="8" height="8" rx="2" fill="currentColor" opacity="0.3"/>
    <rect x="27" y="32" width="16" height="8" rx="2" fill="currentColor" opacity="0.3"/>
    <rect x="47" y="32" width="8" height="8" rx="2" fill="currentColor" opacity="0.3"/>
    <path d="M21 52L35 58L49 52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 52v8l14 6 14-6v-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="35" cy="8" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
    <path d="M35 12v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <rect x="5" y="25" width="3" height="3" rx="1" fill="currentColor" opacity="0.4"/>
    <rect x="62" y="25" width="3" height="3" rx="1" fill="currentColor" opacity="0.4"/>
    <rect x="8" y="35" width="2" height="2" rx="1" fill="currentColor" opacity="0.3"/>
    <rect x="60" y="35" width="2" height="2" rx="1" fill="currentColor" opacity="0.3"/>
  </svg>
);

// Learn Anywhere SVG
const LearnAnywhereIcon = ({ className, style }) => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <rect x="20" y="10" width="30" height="45" rx="6" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.05"/>
    <rect x="24" y="16" width="22" height="16" rx="2" fill="currentColor" opacity="0.2"/>
    <rect x="24" y="36" width="18" height="2" fill="currentColor" opacity="0.4"/>
    <rect x="24" y="40" width="14" height="2" fill="currentColor" opacity="0.4"/>
    <rect x="24" y="44" width="16" height="2" fill="currentColor" opacity="0.4"/>
    <circle cx="35" cy="49" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M10 20L20 15L20 25L10 30L10 20Z" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1"/>
    <path d="M60 20L50 15L50 25L60 30L60 20Z" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1"/>
    <circle cx="15" cy="40" r="6" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.1"/>
    <rect x="12" y="37" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1" fill="none"/>
    <circle cx="55" cy="40" r="8" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.1"/>
    <rect x="51" y="36" width="8" height="8" rx="2" fill="currentColor" opacity="0.3"/>
    <path d="M35 60L30 58L30 65L35 67L40 65L40 58L35 60Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1"/>
    <circle cx="10" cy="55" r="2" fill="currentColor" opacity="0.4"/>
    <circle cx="60" cy="55" r="2" fill="currentColor" opacity="0.4"/>
  </svg>
);

// Always Current SVG
const AlwaysCurrentIcon = ({ className, style }) => (
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <circle cx="35" cy="35" r="25" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.05"/>
    <circle cx="35" cy="35" r="18" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
    <path d="M35 20L35 35L45 45" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="35" cy="35" r="3" fill="currentColor"/>
    <path d="M35 12v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M35 54v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M54 35h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 35h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M50.5 19.5l-2.8 2.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M22.3 47.7l-2.8 2.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M50.5 50.5l-2.8-2.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M22.3 22.3l-2.8-2.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M52 28L58 22L52 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M58 22H50" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="8" cy="15" r="2" fill="currentColor" opacity="0.4"/>
    <circle cx="62" cy="55" r="2" fill="currentColor" opacity="0.4"/>
    <rect x="6" y="50" width="3" height="3" rx="1" fill="currentColor" opacity="0.3"/>
    <rect x="61" y="15" width="3" height="3" rx="1" fill="currentColor" opacity="0.3"/>
  </svg>
);

export const featuresData = [
  {
    icon: InteractiveLabsIcon,
    title: "Interactive Labs",
    description: "Hands-on experience with real cloud native infrastructure in browser-based environments"
  },
  {
    icon: IndustryBadgesIcon,
    title: "Industry Badges",
    description: "Earn verifiable credentials and showcase your cloud native expertise"
  },
  {
    icon: CommunityLearningIcon,
    title: "Community Learning",
    description: "Connect with Layer5 community members and learn collaboratively"
  },
  {
    icon: CNCFProjectsIcon,
    title: "CNCF Projects",
    description: "Deep dive into Cloud Native Computing Foundation graduated projects"
  },
  {
    icon: LearnAnywhereIcon,
    title: "Learn Anywhere",
    description: "Access your learning progress across all devices with cloud sync"
  },
  {
    icon: AlwaysCurrentIcon,
    title: "Always Current",
    description: "Content continuously updated with latest cloud native practices and technologies"
  }
];

export const sectionContent = {
  title: "Why Layer5 Academy?",
  subtitle: "Experience hands-on learning designed by cloud native practitioners"
};