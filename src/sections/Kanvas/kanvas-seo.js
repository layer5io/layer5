import React from "react";
import { Helmet } from "react-helmet";

const KanvasSEO = () => (
  <>
    <Helmet>
      {/* --- Invisible SEO Improvements --- */}
      <title>Kanvas | Cloud Native Visual Designer for Kubernetes | Layer5</title>
      <meta
        name="description"
        content="Kanvas by Layer5 lets teams visually design, manage, and deploy Kubernetes and cloud native applications. Build, visualize, and collaborate seamlessly."
      />
      <meta
        name="keywords"
        content="Kanvas, Layer5, Kubernetes visualizer, Meshery, Cloud Native Design, DevOps tools, CNCF projects, Kubernetes management"
      />

      {/* --- Crawlable Setup --- */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href="https://layer5.io/cloud-native-management/kanvas" />
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

      {/* --- Speed Optimization --- */}
      <link rel="preconnect" href="https://layer5.io" />
      <meta http-equiv="Cache-Control" content="max-age=3600, must-revalidate" />

      {/* --- Structured Data (invisible) --- */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Kanvas",
          operatingSystem: "Cloud, Web",
          applicationCategory: "DeveloperTool",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          url: "https://layer5.io/cloud-native-management/kanvas",
          description:
            "Kanvas is a visual cloud native designer for Kubernetes and modern DevOps workflows.",
          publisher: { "@type": "Organization", name: "Layer5" },
        })}
      </script>
    </Helmet>

    {/* --- Hidden but SEO-effective elements --- */}
    <div style={{ display: "none" }}>
      <h1>Kanvas Cloud Native Visual Designer</h1>
      <p>
        Kanvas helps teams visually design, manage, and deploy Kubernetes
        applications using a drag-and-drop interface. It supports collaboration
        between developers and operators within Layer5’s cloud native ecosystem.
      </p>
      <img src="/assets/images/kanvas/KanvasDesigner.webp" alt="Kanvas visual interface preview" />
      <img src="/assets/images/kanvas/KanvasVisualizer.webp" alt="Kanvas Kubernetes visualizer" />
    </div>
  </>
);

export default KanvasSEO;
