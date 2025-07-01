// test-animated-card.js
import AnimatedCard from "../components/AnimatedCard/index";
import Card from "../components/Card/index";
import React from "react";

const TestAnimatedCardPage = () => {
  const mockData = {
    frontmatter: {
      title: "Test Animated Card",
      description: "Testing the new animated card component with advanced features",
      date: "2024-01-01",
      author: "Test Author",
      thumbnail: { publicURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTauwmXhMApvtvYkQWYo10kZ4S7EmcNFT_b2Q&s" },
      tags: ["AWS", "Azure", "GCP"]
    },
    fields: {
      slug: "/test-card"
    }
  };

  return (
    <div style={{ 
      padding: "1rem", 
      maxWidth: "1400px", 
      margin: "0 auto",
      minHeight: "100vh"
    }}>
      <h1 style={{ 
        textAlign: "center", 
        marginBottom: "2rem",
        fontSize: "clamp(1.5rem, 4vw, 2.5rem)"
      }}>
        Animated Card Testing
      </h1>
      
      {/* Theme Notice */}
      <div style={{
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        border: "1px solid rgba(59, 130, 246, 0.3)",
        borderRadius: "0.5rem",
        padding: "1rem",
        marginBottom: "2rem",
        textAlign: "center"
      }}>
        <p style={{ margin: 0, fontSize: "0.875rem" }}>
          🌊 <strong>Wave Motion:</strong> Now works in both light and dark themes! 
          Tags automatically get styled colors based on their content.
        </p>
      </div>
      
      {/* 3 Animated Cards - Responsive Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5rem",
        marginBottom: "3rem"
      }}>
        
        {/* Card 1: Infrastructure Card */}
        <div>
          <h3 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>Infrastructure Schema</h3>
          <AnimatedCard 
            frontmatter={{
              title: "Model your infrastructure",
              description: "Design, optimize and maintain your infrastructure with Kanvas' intelligent inference.",
              tags: ["Kubernetes", "Docker", "DevOps"] // Will get proper colors
            }}
            fields={null}
            useOriginalLayout={false}
            showSchemaPreview={true}
            showVisualizer={false} // Now works in light mode too!
          />
        </div>
        
        {/* Card 2: Service Mesh Card */}
        <div>
          <h3 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>Service Mesh</h3>
          <AnimatedCard 
            frontmatter={{
              title: "Service Mesh Management",
              description: "Visualize and control your microservices with advanced networking capabilities.",
              date: "Jan 15, 2024",
              author: "Platform Team",
              tags: ["Istio", "Linkerd", "Consul"] // Service mesh colors
            }}
            fields={{ slug: "/service-mesh" }}
            useOriginalLayout={false}
            showSchemaPreview={true}
            showVisualizer={false}
          />
        </div>
        
        {/* Card 3: Development Guide */}
        <div>
          <h3 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>Development Guide</h3>
          <AnimatedCard 
            frontmatter={{
              title: "Cloud Native Development",
              description: "Best practices for building cloud-native applications with modern tools.",
              date: "Jan 20, 2024",
              author: "Dev Team",
              tags: ["Tutorial", "Golang", "JavaScript"] // Mixed content types
            }}
            fields={{ slug: "/dev-guide" }}
            useOriginalLayout={false}
            showSchemaPreview={false}
            showVisualizer={false} // Wave motion in light mode
          />
        </div>
      </div>

      {/* Tag Color Showcase */}
      <h2 style={{ 
        textAlign: "center", 
        marginTop: "3rem", 
        marginBottom: "2rem",
        fontSize: "clamp(1.25rem, 3vw, 1.75rem)"
      }}>
        Tag Color Showcase
      </h2>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem",
        marginBottom: "3rem"
      }}>
        
        {/* Cloud Platforms */}
        <AnimatedCard 
          frontmatter={{
            title: "Cloud Platforms",
            description: "Multi-cloud deployment strategies",
            tags: ["AWS", "Azure", "GCP"] // Original colors
          }}
          useOriginalLayout={false}
        />
        
        {/* Container Tech */}
        <AnimatedCard 
          frontmatter={{
            title: "Container Orchestration",
            description: "Modern container management",
            tags: ["Kubernetes", "Docker", "OpenShift"] // Blue theme
          }}
          useOriginalLayout={false}
        />
        
        {/* Monitoring Stack */}
        <AnimatedCard 
          frontmatter={{
            title: "Observability Stack",
            description: "Monitor your applications",
            tags: ["Prometheus", "Grafana", "Monitoring"] // Orange/Pink theme
          }}
          useOriginalLayout={false}
        />
        
        {/* Development */}
        <AnimatedCard 
          frontmatter={{
            title: "Development Tools",
            description: "Modern development workflow",
            tags: ["Golang", "React", "Python"] // Language colors
          }}
          useOriginalLayout={false}
        />
        
        {/* Security & Performance */}
        <AnimatedCard 
          frontmatter={{
            title: "Best Practices",
            description: "Security and performance tips",
            tags: ["Security", "Performance", "Testing"] // Functional colors
          }}
          useOriginalLayout={false}
        />
        
        {/* Content Types */}
        <AnimatedCard 
          frontmatter={{
            title: "Learning Resources",
            description: "Educational content types",
            tags: ["Tutorial", "Guide", "Blog"] // Content colors
          }}
          useOriginalLayout={false}
        />
      </div>
    </div>
  );
};

export default TestAnimatedCardPage;