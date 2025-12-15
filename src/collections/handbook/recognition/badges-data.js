import React from "react";

export const activityBadges = [
  { name: "Design Pioneer", title: "Design Pioneer", badgeKey: "first-design", image: "https://badges.layer5.io/assets/badges/first-design/first-design.png", description: "Awarded to the Layer5 cloud users when they create their first design." },
  { name: "Application Pioneer", title: "Application Pioneer", badgeKey: "first-application", image: "https://badges.layer5.io/assets/badges/first-application/first-application.png", description: "Awarded to the Layer5 cloud users when they create their first application." },
  { name: "Sharing is Caring", title: "Sharing is Caring", badgeKey: "first-share", image: "https://badges.layer5.io/assets/badges/first-share/first-share.png", description: "This badge is awarded upon first-time sharing one of your designs." },
  { name: "Shipped", title: "Shipped", badgeKey: "first-deployment", image: "https://badges.layer5.io/assets/badges/first-deployment/first-deployment.png", description: "This badge is awarded upon the success of your first design deployment." },
  { name: "Need for Speed", title: "Need for Speed", badgeKey: "need-for-speed", image: "https://badges.layer5.io/assets/badges/need-for-speed/need-for-speed.png", description: "This badge is awarded upon successful execution of your first performance test." },
  { name: "Hip Hacker", title: "Hip Hacker", badgeKey: "first-interactive-terminal-session", image: "https://badges.layer5.io/assets/badges/first-interactive-terminal-session/first-interactive-terminal-session.png", description: "First Interactive Terminal Session - awarded the first time that you establish an interactive terminal session with a Kubernetes Pod." },
  { name: "Streamer", title: "Streamer", badgeKey: "first-log-streaming-session", image: "https://badges.layer5.io/assets/badges/first-log-streaming-session/first-log-streaming-session.png", description: "First Log Streaming Session - awarded the first time that you stream logs from a Kubernetes Pod." },
  { name: "GitOps with Friends", title: "GitOps with Friends", badgeKey: "first-collaborator", image: "https://badges.layer5.io/assets/badges/first-collaborator/first-collaborator.png", description: "First Collaborator - awarded the first time a collaborator saves changes to one of your designs." },
  { name: "Bring a Buddy", title: "Bring a Buddy", badgeKey: "bring-a-buddy", image: "https://badges.layer5.io/assets/badges/bring-a-buddy/bring-a-buddy.png", description: "Awarded to the users who invite someone to Layer5 cloud." },
  { name: "Code Cleanup Crew", title: "Code Cleanup Crew", badgeKey: "code-cleanup-crew", image: "https://badges.layer5.io/assets/badges/code-cleanup-crew/code-cleanup-crew.png", description: "Awarded to contributors who help maintain code quality and cleanliness." },
  { name: "Security Sentinel", title: "Security Sentinel", badgeKey: "security-sentinel", image: "https://badges.layer5.io/assets/badges/security-sentinel/security-sentinel.png", description: "Awarded to individuals who contribute to identifying and fixing security vulnerabilities." },
  { name: "Longevity Legend", title: "Longevity Legend", badgeKey: "longevity-legend", image: "https://badges.layer5.io/assets/badges/longevity-legend/longevity-legend.png", description: "Awarded for long-term, sustained contributions to the project over the years." },
  { name: "Review Rockstar", title: "Review Rockstar", badgeKey: "review-rockstar", image: "https://badges.layer5.io/assets/badges/review-rockstar/review-rockstar.png", description: "Awarded to individuals who provide thorough and valuable code reviews." },
  { name: "Kanvas Snapshot", title: "Kanvas Snapshot", badgeKey: "meshmap-snapshot", icmage: "https://badges.layer5.io/assets/badges/meshmap-snapshot/meshmap-snapshot.png", description: "Awarded to users upon creation of their first infrastructure screenshot directly in their pull request." },
  { name: "Continuous Contributor", title: "Continuous Contributor", badgeKey: "continuous-contributor", image: "https://badges.layer5.io/assets/badges/continuous-contributor/continuous-contributor.png", description: "Awarded to the community members who make consistent and impactful contributions for a long period of time in Layer5 projects in recognition and appreciation of their efforts." },
  { name: "Sistent Contributor", title: "Sistent Contributor", badgeKey: "sistent-contributor", image: "https://badges.layer5.io/assets/badges/sistent-contributor/sistent-contributor.png", description: "Awarded to the community members who make consistent and impactful contributions to the Sistent project as a recognition and appreciation of their efforts." },
  { name: "Longevity Legend", title: "Longevity Legend", badgeKey: "longevity-legend", image: "https://badges.layer5.io/assets/badges/longevity-legend/longevity-legend.png", description: "This badge is awarded for long-term, sustained contributions to the project over the years." },
  { name: "GitOps Connected", title: "GitOps Connected", badgeKey: "gitops-connected", image: "https://badges.layer5.io/assets/badges/gitops-connected/gitops-connected.png", description: "Awarded to users upon establishment of a connection with Meshery GitHub App.", href: "https://badges.layer5.io/assets/badges/gitops-connected/gitops-connected.png" },
  { name: "MeshMate", title: "MeshMate", badgeKey: "meshmate", image: "https://badges.layer5.io/assets/badges/meshmate/meshmate.png", description: "Awarded to community members who actively support and guide others, embodying the spirit of collaboration and knowledge sharing in the Layer5 community." },
  { name: "Hacktoberfest Contributor", title: "Hacktoberfest Contributor", badgeKey: "hacktoberfest-contributor", image: "https://badges.layer5.io/assets/badges/hacktoberfest-contributor/hacktoberfest-contributor.png", description: "Awarded to the contributors who contribute to any Layer5 project during Hacktoberfest." },
  { name: "Hacktoberfest '24 Contributor", title: "Hacktoberfest '24 Contributor", badgeKey: "hacktoberfest-24-contributor", image: "https://badges.layer5.io/assets/badges/hacktoberfest-contributor-2024/layer5-hacktoberfest-badge-2024.png", description: "Awarded to the contributors who contribute to any Layer5 project during Hacktoberfest 2024." },
  { name: "Hacktoberfest 2025 Contributor", title: "Hacktoberfest 2025 Contributor", badgeKey: "hacktoberfest25", image: "https://badges.layer5.io/assets/badges/hacktoberfest-contributor-2025/hacktoberfest25-badge.png", description: "Awarded to community members who participate in Hacktoberfest 2025 by making meaningful contributions to Layer5 projects during the month of October 2025." },
];

export const projectBadges = [
  { name: "Kanvas", title: "Kanvas", badgeKey: "kanvas", image: "https://badges.layer5.io/assets/badges/kanvas/kanvas.png", description: <>Awarded to the community members who make consistent and impactful contributions to the <a href="/cloud-native-management/kanvas">Kanvas</a> project in recognition and appreciation of their efforts. Community members who earn this badge occasionally become a project maintainer.</> },
  { name: "Cloud Native Performance", title: "Cloud Native Performance", badgeKey: "cloud-native-performance", image: "https://badges.layer5.io/assets/badges/smp/smp.png", description: "Awarded to the community members who make consistent and impactful contributions to the Cloud Native Performance project. Community members who earn this badge occasionally become a project maintainer." },
  { name: "MeshMap", title: "MeshMap", badgeKey: "meshmap", image: "https://badges.layer5.io/assets/badges/meshmap/meshmap.png", description: "Awarded to the community members who make consistent and impactful contributions to the MeshMap project in recognition and appreciation of their efforts. Community members who earn this badge occasionally become a project maintainer." },
  { name: "MeshSync", title: "MeshSync", badgeKey: "meshsync", image: "https://badges.layer5.io/assets/badges/meshsync/meshsync.png", description: "Awarded to the community members who make consistent and impactful contributions to MeshSync in recognition and appreciation of their efforts." },
  { name: "Community", title: "Community", badgeKey: "community", image: "https://badges.layer5.io/assets/badges/community/community.png", description: "WAwarded to the community members who repeatedly engage in welcoming, encouraging, and supporting other Layer5 community members. Community members who earn this badge occasionally graduate to undertaking the Community Manager role." },
  { name: "Meshery", title: "Meshery", badgeKey: "meshery", image: "https://badges.layer5.io/assets/badges/meshery/meshery.png", description: "Awarded to the community members who make consistent and impactful contributions to the Meshery project. Community members who earn this badge occasionally become a project maintainer." },
  { name: "Meshery Operator", title: "Meshery Operator", badgeKey: "meshery-operator", image: "https://badges.layer5.io/assets/badges/meshery-operator/meshery-operator.png", description: "Awarded to the community members who make consistent and impactful contributions to Meshery Operator of the Meshery project in recognition and appreciation of their efforts." },
  { name: "Patterns", title: "Patterns", badgeKey: "patterns", image: "https://badges.layer5.io/assets/badges/patterns/patterns.png", description: <>Awarded to the community members who make consistent and impactful contributions to the <a href="/learn/service-mesh-books/service-mesh-patterns">Cloud Native Patterns</a> project in recognition and appreciation of their efforts.</> },
  { name: "Landscape", title: "Landscape", badgeKey: "landscape", image: "https://badges.layer5.io/assets/badges/landscape/landscape.png", description: "Awarded to the community members who make consistent and impactful contributions to the layer5.io website." },
  { name: "Writer's Program", title: "Writer's Program", badgeKey: "writers-program", image: "https://badges.layer5.io/assets/badges/writer-program/writer-program.png", description: "Awarded to the community members who make with two or more published writings whether in article, blog post, project documentation or other form in recognition and appreciation of their efforts." },
  { name: "Nighthawk", title: "Nighthawk", badgeKey: "nighthawk", image: "https://badges.layer5.io/assets/badges/nighthawk/nighthawk.png", description: "Awarded to the community members who make consistent and impactful contributions to the NightHawk project in recognition and appreciation of their efforts. Community members who earn this badge occasionally become a project maintainer." },
  { name: "UI/UX", title: "UI/UX", badgeKey: "ui-ux", image: "https://badges.layer5.io/assets/badges/ui-ux/ui-ux.png", description: "Awarded to the community members who create or improve designs for visual aspects or user flow for any of the websites, flyers, promotions, Meshery UI, and so on in recognition and appreciation of their efforts." },
  { name: "Meshery Catalog", title: "Meshery Catalog", badgeKey: "meshery-catalog", image: "https://badges.layer5.io/assets/badges/meshery-catalog/meshery-catalog.png", description: <>Awarded to the community members who make consistent and impactful contributions to the <a href="https://meshery.io/catalog">Meshery Catalog</a> of Meshery project in recognition and appreciation of their efforts.</> },
  { name: "Docker Extension", title: "Docker Extension", badgeKey: "docker-extension", image: "https://badges.layer5.io/assets/badges/docker-extension/docker-extension.png", description: "Awarded to the community members who make consistent and impactful contributions to the Docker Extension of meshery project in recognition and appreciation of their efforts." },
  { name: "Docs", title: "Docs", badgeKey: "docs", image: "https://badges.layer5.io/assets/badges/meshery-docs/meshery-docs.png", description: <>Awarded to the community members who make consistent and impactful contributions to the <a href="https://docs.meshery.io/">Meshery docs</a> in recognition and appreciation of their efforts.</> },
];

export const specialBadges = [
  {
    key: "certified-meshery-contributor",
    name: "Certified Meshery Contributor",
    title: "Certified Meshery Contributor",
    image: "https://badges.layer5.io/static/certification-program-6ea140e34c1dd08074ec896d0b98c0f8.png",
    description: "Recognition of contributor expertise."
  },
  {
    key: "cncf-ambassador",
    name: "CNCF Ambassador",
    title: "CNCF Ambassador",
    image: "https://badges.layer5.io/assets/badges/cncf-ambassador/cncf-ambassador.png",
    description: "This is a special edition badge awarded to CNCF Ambassadors."
  },
  {
    key: "docker-captain",
    name: "Docker Captain",
    title: "Docker Captain",
    image: "https://badges.layer5.io/assets/badges/docker-captain/docker-captain.png",
    description: "This is a special edition badge awarded to Docker Captains."
  },
];
