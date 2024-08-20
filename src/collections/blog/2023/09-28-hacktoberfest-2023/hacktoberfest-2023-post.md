---
title: "Navigating Hacktoberfest"
subtitle: "A Guide to Meaningful Contributions and Maintainer Appreciation"
date: 2023-09-28 10:30:05 -0530
author: Lee Calcote
thumbnail: "./layer5-hacktoberfest-2023.png"
darkthumbnail: "./layer5-hacktoberfest-2023.png"
category: "Open Source"
description: "How to have a great Hacktoberfest experience and get the most out of participating"
tags:
 - Community
 - Hacktoberfest
 - Open Source
type: Blog
resource: false
published: true
---

import { BlogWrapper } from "../../Blog.style.js";
import mesheryLogo from "../../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import hacktoberfestEvent from "./layer5-event-hacktoberfest2023.png";
import cloudNativeHacktoberfest from "./hacktoberfest-2023-with-layer5.png";
import hacktoberfestBadge from "./hacktoberfest-contributor.png";
import Blockquote from "../../../../reusecore/Blockquote";
import BlockquoteAlt from "../../../../reusecore/Blockquote/Blockquote-alt-style";
import { Link } from "gatsby" ;


<BlogWrapper>

As the leaves begin to turn and the air grows crisp, it can only mean one thing: [Hacktoberfest](https://hacktoberfest.com) is here! This annual celebration of open source, hosted by Digital Ocean, invites contributors from all over the world to participate in a month-long extravaganza of code contributions. While the allure of limited-edition swag may be enticing, it's essential to approach Hacktoberfest with a mindset focused on quality, respect for maintainers, and a commitment to long-term community engagement.

Layer5 has a long history of participating in Hacktoberfest. 2023 is no different. Our annual [Hacktoberfest kickoff and prep event](/community/events/hacktoberfest-prep-2023-easing-into-cncf-open-source-projects) (be sure to join) is tomorrow.

### 1. Purposeful Participation: Beyond Swag Chasing and Profile Building

Before you embark on your Hacktoberfest journey, take a moment to reflect on your motivation. Are you here solely for the swag, just for the green boxes in your GitHub profile, or do you genuinely want to make a meaningful contribution to a project, learn, grow, and make new friends in the process? Embrace the opportunity to forge lasting connections and dive deeper into topics that resonate with you. 

### 2. Quality Over Quantity: Making a Lasting Impact

While a flurry of pull requests may be impressive, maintainers value contributions that add genuine value. Think beyond code and consider how your unique skills—whether in design, organization, or other areas can enrich the project. Open Source thrives on meaningful contributions, so let's aim to make a tangible difference, rather than settling for mediocrity. You will grow in the process and so will the project.

<BlockquoteAlt
  quote="When you are clear about what motivates you, each contribution you make will help you achieve your goals, because you will be working on projects that are aligned with your values." person=" Lee Calcote"
/>

### 3. Guidelines Aren't Optional: Respecting the Playbook

That CONTRIBUTING.md file? It's not there for decoration. Treat it as your playbook, providing guidance for equitable collaboration. Ignoring these guidelines is akin to rearranging someone's furniture without permission. Established protocols are crucial, especially in projects with numerous contributors. They help navigate the intricacies of collaborative development. As an example, there is a full set of contributig docs written for Meshery - one for each component:

<ul>
  <li><a href="https://docs.meshery.io/project/contributing/contributing-gitflow">Contributing to Meshery using git</a></li>
  <li><a href="https://docs.meshery.io/project/contributing/meshery-windows">Setting up Meshery Development Environment on Windows</a></li>
  <li><a href="https://docs.meshery.io/project/contributing/build-and-release">Contributing to Meshery Build and Release (CI)</a></li>
  <ul><li><a href="https://docs.meshery.io/project/contributing/contributing-cypress">Contributing to Meshery's End-to-End Tests using Cypress</a></li></ul>
  <li><a href="https://docs.meshery.io/project/contributing/contributing-adapters">Contributing to Meshery Adapters</a></li>
  <li><a href="https://docs.meshery.io/project/contributing/contributing-docker-extension">Contributing to Meshery Docker Extension</a></li>
  <li><a href="https://docs.meshery.io/project/contributing/contributing-server">Contributing to Meshery Server</a></li>
    <ul>
      <li><a href="https://docs.meshery.io/project/contributing/contributing-models">Contributing to Meshery Models</a></li>
      <li><a href="https://docs.meshery.io/project/contributing/contributing-error">How to write MeshKit compatible errors</a></li>
    </ul>
  <li><a href="https://docs.meshery.io/project/contributing/contributing-ui">Contributing to Meshery UI</a></li>
    <ul><li><a href="https://docs.meshery.io/project/contributing/contributing-ui-notification-center">Contributing to Meshery UI - Notification Center</a></li></ul>
  <li><a href="https://docs.meshery.io/project/contributing/contributing-docs">Contributing to Meshery Docs</a></li>
  <li><a href="https://docs.meshery.io/project/contributing/contributing-cli">Contributing to Meshery CLI</a></li>
    <ul><li><a href="https://docs.meshery.io/project/contributing/contributing-cli-guide">Meshery CLI Contributing Guidelines</a></li></ul>
</ul>

### 4. Upholding a Safe Environment: The Code of Conduct

Respect, collaboration, and kindness are the bedrock of Open Source. The Code of Conduct is non-negotiable, ensuring a secure and inclusive space for all contributors. Reporting mechanisms are in place to uphold these principles. As contributors, it is our duty to champion a culture of respect and security, nurturing an environment where creativity and innovation flourish. The [Layer5 Community Handbook](/community/handbook) offers an excellent reference for our community's culture norms and practices.

### 5. Engaging Beyond Code: Fostering Holistic Development

Don't confine yourself to a GitHub profile. Engage in meaningful discussions, participate in webinars, and [open discussions](https://discuss.layer5.io). Be a mentor and seek mentorship. Open Source offers a wealth of opportunities for comprehensive growth. While coding skills undoubtedly benefit, the real lessons often lie in understanding people and their diverse perspectives.

### 6. Compassion Over Code: Recognizing Maintainer Burnout

<p><Link to="/community/handbook/repository-overview">Maintainers</Link> are the unsung heroes of the open-source world, often overwhelmed by the Hacktoberfest influx. Your seemingly "simple" pull request may be the tipping point. Recognize their efforts and respect their capacity. Some projects may not actively seek new contributions, and that's perfectly valid. Begin by identifying projects explicitly welcoming newcomers, tagged with <a href="https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+org%3Alayer5labs+org%3Ameshery+org%3Aservice-mesh-performance+org%3Aservice-mesh-patterns+label%3A%22help+wanted%22+">"good first issue"</a> or <a href="https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+org%3Ameshery+org%3Aservice-mesh-performance+org%3Aservice-mesh-patterns+label%3A%22help+wanted%22+">"help wanted"</a>.</p>


### 7. The Virtue of Patience: Embracing the Long Game

Open source is a marathon, not a sprint. Feedback may take time, and collaboration may be challenging. Patience is the glue that holds this ecosystem together. Cultivate it as a fundamental habit in your contributor journey. The Layer5 <Link to="/community/members">community members</Link> invest time, patience, understanding and offer endless hours of support to our contributors. Stick around and benefit. In turn, offer to help others. There's little better way to learn, than through teaching.


### 8. Humility and Gratitude: The Essence of Meaningful Contributions

Remember, a meaningful contribution is its own reward. Swag and a profile boost is a delightful bonus, not the end goal. Celebrate your progress, no matter how small, and learn from your experiences. As you recognize that you are part of a much larger movement, we <Link to="/blog/community/layer5-recognition-program">recognize our contributors and users milestones</Link> each step of the way. Earn any number of <a href="https://badges.layer5.io">Layer5 badges</a> as you grow with the community.

### 9. Earn a Badge
    
<p>Earn a Hacktoberfest Contributor badge by contributing to Layer5 projects during this Hacktoberfest.</p>
<img src={hacktoberfestBadge} style="width: 250px"/>

# Join Layer5's Hacktoberfest Event

<figure class="imgWithCaption" style="width: 80%;">
  <Link to="/community/events/hacktoberfest-prep-2023-easing-into-cncf-open-source-projects"><img src={cloudNativeHacktoberfest} /></Link>
  <figcaption style="display:flex;gap:2rem;">
  <div>
    <strong><Link to="/community/events/hacktoberfest-prep-2023-easing-into-cncf-open-source-projects">Hacktoberfest Prep 2023: Easing into CNCF Open Source Projects</Link></strong>
    <ul>
    <li>DATE: September 29, 2023</li>
    <li>TIME: 3PM UTC | 10AM Central | 8:30PM IST</li>
    <li>EVENT: <a href="https://meet.layer5.io/community">Zoom</a></li>
    </ul>
  </div>
  <div>
    <strong> Open GitHub Issues by Label:</strong>
    <ul>
      <li><a href="https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+org%3Ameshery+org%3Aservice-mesh-performance+org%3Aservice-mesh-patterns+label%3A%22hacktoberfest%22+">"hacktoberfest" issues</a>
      </li>
      <li><a href="https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+org%3Ameshery+org%3Aservice-mesh-performance+org%3Aservice-mesh-patterns+label%3A%22help+wanted%22+">"help wanted" issues</a>
      </li>
      <li><a href="https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+org%3Alayer5labs+org%3Ameshery+org%3Aservice-mesh-performance+org%3Aservice-mesh-patterns+label%3A%22help+wanted%22+">"good first issue" issues</a>
      </li>
    </ul>
  </div>
  </figcaption>
</figure>

Hacktoberfest is an opportunity for transformation, a time when contributors and maintainers can connect on a deeper level. Let's be the contributors that maintainers celebrate, rather than dread. Whether maintainers actively seek contributions or focus on internal tasks, respect their choices. Remember, we're all weaving the rich tapestry of the open-source community, and together, we're contributing to something far greater than a month-long treasure hunt. So, dive in, make a splash, and keep coming back for more than just the loot. Happy Hacking!

</BlogWrapper>
