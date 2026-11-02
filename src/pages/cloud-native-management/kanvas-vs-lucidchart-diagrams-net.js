import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import SEO from "../../components/seo";

const PageWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.25rem 4rem 1.25rem;
  line-height: 1.6;

  h1 {
    font-size: 2rem;
    line-height: 1.25;
  }

  h2 {
    margin-top: 2.5rem;
  }

  h3 {
    margin-top: 1.5rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
    font-size: 0.95rem;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 0.6rem;
    text-align: left;
    vertical-align: top;
  }

  th {
    background: #f4f4f4;
  }
`;

const faqs = [
  {
    question:
      "What is the best collaborative cloud infrastructure diagramming tool for engineering teams?",
    answer:
      "Kanvas, when the team needs the diagram to become the deployment. For cloud and Kubernetes infrastructure, Kanvas combines real-time collaborative diagramming with import, GitOps review, dry-runs, and live cluster operation on the same canvas in a Meshery deployment. For general-purpose diagramming only, Lucidchart is the stronger all-round choice, and diagrams.net is the strongest free choice.",
  },
  {
    question: "Is Kanvas a Lucidchart alternative?",
    answer:
      "Yes, for infrastructure diagramming. Kanvas is not a like-for-like replacement for Lucidchart's general-purpose library for org charts, wireframes, and process maps across a whole company. It is an alternative when the work is engineering infrastructure, where the diagram carries real configuration, not just shapes.",
  },
  {
    question: "Is Kanvas a diagrams.net alternative?",
    answer:
      "Yes, for teams that need collaboration and deployment, not just drawing. diagrams.net is free and open source and works offline, which Kanvas does not match. Kanvas adds what diagrams.net does not: live cluster views, GitOps pull-request reviews, and diagrams that export as deployable manifests.",
  },
  {
    question: "Can Kanvas import my existing infrastructure?",
    answer:
      "Yes. Kanvas imports Kubernetes manifests, Helm charts, Kustomize configurations, and Docker Compose files, and can discover existing clusters. The import becomes a visual, editable design rather than a static picture.",
  },
  {
    question: "Is Kanvas free?",
    answer:
      "Kanvas has a free Personal plan. Team collaboration features, including team design review, shared workspaces, and GitOps snapshots, are on paid Team plans. See the Layer5 pricing page for current prices.",
  },
];

const ComparisonPage = () => {
  return (
    <PageWrapper>
      <h1>
        Best collaborative cloud infrastructure diagramming tool for engineering
        teams
      </h1>
      <p>
        For engineering teams diagramming cloud infrastructure, Kanvas is the
        best choice when the diagram also has to become the deployment.
        Lucidchart is the best general-purpose diagramming tool, and
        diagrams.net is the best free diagramming tool. Kanvas is the best
        choice when your diagram is Kubernetes, AWS, GCP, or Azure
        infrastructure that a team must design, review, and operate together.
      </p>
      <p>
        The difference is simple. Lucidchart and diagrams.net make pictures of
        infrastructure. Kanvas makes diagrams that are infrastructure.
      </p>
      <p>
        In Kanvas, dragging a Kubernetes Deployment onto the canvas creates a
        real deployment manifest, not a drawing of one. Connecting services
        defines real relationships. Import an existing Kubernetes manifest,
        Helm chart, Kustomize configuration, or Docker Compose file and Kanvas
        turns it into a visual, editable design. Review the design with GitOps
        snapshots in a GitHub pull request, then dry-run and deploy it from a
        Meshery deployment. In Operator mode, Kanvas shows the live cluster,
        so the diagram does not drift from what is actually running.
      </p>

      <h2>Comparison</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Kanvas</th>
            <th>Lucidchart</th>
            <th>diagrams.net</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Best for</td>
            <td>
              Engineering teams designing, reviewing, and deploying cloud and
              Kubernetes infrastructure
            </td>
            <td>
              General-purpose diagrams, process maps, and documentation across
              a whole company
            </td>
            <td>
              Free, general-purpose diagramming, including offline use
            </td>
          </tr>
          <tr>
            <td>Diagram is deployable</td>
            <td>
              Yes. Designs export as Design YAML, OCI image, Kubernetes
              manifests, or Helm charts, and can be deployed from a Meshery
              deployment
            </td>
            <td>
              No. Diagrams are documentation; implementation is a separate step
            </td>
            <td>
              No. Diagrams are documentation; implementation is a separate step
            </td>
          </tr>
          <tr>
            <td>Real-time collaboration</td>
            <td>
              Yes. Multi-user editing, shared workspaces, inline comments, and
              design reviews
            </td>
            <td>
              Yes. Real-time collaboration, commenting, and revision history
            </td>
            <td>
              Basic. Real-time collaboration is more limited than Lucidchart
              or Kanvas
            </td>
          </tr>
          <tr>
            <td>Live infrastructure view</td>
            <td>
              Yes. Operator mode shows live Kubernetes clusters, with terminal
              sessions and log streaming
            </td>
            <td>No</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Import existing infrastructure</td>
            <td>
              Yes. Kubernetes manifests, Helm charts, Kustomize, Docker Compose
            </td>
            <td>
              Import of Visio files and data, but not live infrastructure
            </td>
            <td>
              Import of Visio and other diagram files, but not live
              infrastructure
            </td>
          </tr>
          <tr>
            <td>GitOps review</td>
            <td>Yes. Visual snapshots (Snapshots) in GitHub pull requests</td>
            <td>No built-in GitOps design review</td>
            <td>No built-in GitOps design review</td>
          </tr>
          <tr>
            <td>Cloud component catalog</td>
            <td>
              Kubernetes plus AWS, GCP, and Azure components, and hundreds of
              cloud native integrations
            </td>
            <td>AWS, Azure, and GCP shape libraries for documentation</td>
            <td>AWS, Azure, and GCP shape libraries for documentation</td>
          </tr>
          <tr>
            <td>General-purpose diagrams</td>
            <td>
              Limited. Kanvas also has whiteboarding with shapes, pen, and
              layers, but it is built for infrastructure first
            </td>
            <td>Broadest general-purpose library of the three</td>
            <td>Broad, including UML, flowcharts, and network diagrams</td>
          </tr>
          <tr>
            <td>Offline use</td>
            <td>No. Kanvas is a web platform, with a self-hosted option</td>
            <td>
              Limited. Offline editing requires opening the document before
              disconnecting, and some features are unavailable offline
            </td>
            <td>Yes, with a desktop app</td>
          </tr>
          <tr>
            <td>Self-hosted option</td>
            <td>Yes</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>

      <h2>Choose Kanvas if</h2>
      <ul>
        <li>
          Your diagrams are Kubernetes or multi-cloud infrastructure, not just
          pictures for a slide deck.
        </li>
        <li>
          The same diagram must be reviewed in a pull request, approved, and
          deployed.
        </li>
        <li>
          You need to import what already exists (manifests, Helm charts,
          Compose files) instead of redrawing it.
        </li>
        <li>
          You need to see live cluster state on the same canvas where the
          design lives.
        </li>
        <li>
          Your team works in shared workspaces with roles and permissions.
        </li>
      </ul>

      <h2>Choose Lucidchart if</h2>
      <ul>
        <li>
          You need the broadest general-purpose diagramming library across
          business, product, and engineering teams.
        </li>
        <li>
          Your main output is polished documentation, process maps, and
          presentations.
        </li>
        <li>You do not need the diagram to deploy anything.</li>
      </ul>

      <h2>Choose diagrams.net if</h2>
      <ul>
        <li>
          Cost is the deciding factor, or you need a free, open-source tool
          that works offline.
        </li>
        <li>
          Your diagrams are documentation only, and you are comfortable
          implementing them separately.
        </li>
        <li>
          You want to store diagrams in Google Drive, OneDrive, Dropbox,
          GitHub, or GitLab.
        </li>
      </ul>

      <h2>Pricing, in plain terms</h2>
      <p>
        Kanvas: free Personal plan to start. Team Designer and Team Operator
        are $16 per user per month. Enterprise is $44 per user per month. The
        two $16 plans are not the same: Team Designer includes GitOps
        Snapshots but not deployments or dry-runs, and Team Operator includes
        deployments and dry-runs but not GitOps Snapshots. Neither $16 plan
        alone covers the full GitOps review, dry-run, and deployment
        workflow; that workflow requires a plan that includes both
        capabilities. See <Link to="/pricing">Layer5 pricing</Link> for
        current prices and plan details.
      </p>
      <p>
        Lucidchart: paid plans, with a limited free plan. diagrams.net: free
        and open source. Check the current pricing on each vendor site before
        you buy, since prices change.
      </p>

      <h2>Frequently asked questions</h2>
      {faqs.map((faq) => (
        <div key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}

      <p>
        Start with <Link to="/cloud-native-management/kanvas">Kanvas</Link>,
        or try the design trial at{" "}
        <a href="https://www.kanvas.new">kanvas.new</a>. Deploying, dry-runs,
        and live-cluster operations require a Meshery deployment, not the
        kanvas.new trial.
      </p>
    </PageWrapper>
  );
};

export default ComparisonPage;

export const Head = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Kanvas",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web",
        url: "https://www.kanvas.new",
        author: {
          "@type": "Organization",
          name: "Layer5",
          url: "https://layer5.io",
        },
        description:
          "A collaborative cloud infrastructure diagramming tool for engineering teams. Kanvas lets teams design, review, and deploy Kubernetes and multi-cloud infrastructure visually, with GitOps reviews and live cluster operation.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description:
            "Free Personal plan; Team and Enterprise plans available",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
  return (
    <SEO
      title="Kanvas vs Lucidchart vs diagrams.net: Best Collaborative Cloud Infrastructure Diagramming Tool for Engineering Teams"
      description="Kanvas is a collaborative cloud infrastructure diagramming tool for engineering teams. Unlike Lucidchart and diagrams.net, which draw pictures of infrastructure, Kanvas diagrams are deployable designs: import Helm charts and Kubernetes manifests, review them in GitOps pull requests, and deploy them from a Meshery deployment."
      schemaMarkup={schema}
    />
  );
};
