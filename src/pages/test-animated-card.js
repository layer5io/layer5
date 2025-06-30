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
        fontSize: "clamp(1.5rem, 4vw, 2.5rem)" // Responsive font size
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
          💡 <strong>Theme Aware:</strong> Wave visualizer automatically disabled in light mode for better contrast. 
          Switch to dark mode to see wave animations!
        </p>
      </div>
      
      {/* 3 Animated Cards - Responsive Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // Mobile responsive
        gap: "1.5rem",
        marginBottom: "3rem"
      }}>
        
        {/* Card 1: Infrastructure Card with Schema Preview */}
        <div>
          <h3 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>Infrastructure Schema</h3>
          <AnimatedCard 
            frontmatter={{
              title: "Model your infrastructure",
              description: "Design, optimize and maintain your infrastructure with Kanvas' intelligent inference.",
              tags: ["Kubernetes", "Docker", "AWS"]
            }}
            fields={null}
            useOriginalLayout={false}
            showSchemaPreview={true}
            showVisualizer={true} // Will be disabled in light mode automatically
          />
        </div>
        
        {/* Card 2: Blog Post Card */}
        <div>
          <h3 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>Blog Post Card</h3>
          <AnimatedCard 
            frontmatter={{
              title: "Building Cloud Infrastructure",
              description: "Learn how to design scalable cloud infrastructure with modern tools and practices.",
              date: "Jan 15, 2024",
              author: "Jane Developer",
              thumbnail: { publicURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTauwmXhMApvtvYkQWYo10kZ4S7EmcNFT_b2Q&s" },
              tags: ["DevOps", "Cloud", "Tutorial"]
            }}
            fields={{ slug: "/blog/cloud-infrastructure" }}
            useOriginalLayout={false}
            showSchemaPreview={false}
            showVisualizer={false}
          />
        </div>
        
        {/* Card 3: Service Mesh Card */}
        <div>
          <h3 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>Service Mesh</h3>
          <AnimatedCard 
            frontmatter={{
              title: "Service Mesh Management",
              description: "Visualize and control your microservices with advanced networking capabilities.",
              date: "Jan 20, 2024",
              author: "DevOps Team",
              tags: ["Istio", "Linkerd", "Consul"]
            }}
            fields={{ slug: "/service-mesh-guide" }}
            useOriginalLayout={false}
            showSchemaPreview={true}
            showVisualizer={false}
          />
        </div>
      </div>

      {/* Comparison Section - Mobile Stacked */}
      <h2 style={{ 
        textAlign: "center", 
        marginTop: "3rem", 
        marginBottom: "2rem",
        fontSize: "clamp(1.25rem, 3vw, 1.75rem)"
      }}>
        Original vs Animated Comparison
      </h2>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem",
        marginBottom: "3rem"
      }}>
        
        {/* Original Card */}
        <div>
          <h4 style={{ marginBottom: "1rem", fontSize: "1rem" }}>Original Card</h4>
          <Card frontmatter={mockData.frontmatter} fields={mockData.fields} />
        </div>
        
        {/* Animated - Original Layout */}
        <div>
          <h4 style={{ marginBottom: "1rem", fontSize: "1rem" }}>Animated (Safe)</h4>
          <AnimatedCard 
            frontmatter={mockData.frontmatter} 
            fields={mockData.fields}
            useOriginalLayout={true}
            showVisualizer={true} // Auto-disabled in light mode
          />
        </div>
        
        {/* Animated - New Design */}
        <div>
          <h4 style={{ marginBottom: "1rem", fontSize: "1rem" }}>New Design</h4>
          <AnimatedCard 
            frontmatter={mockData.frontmatter} 
            fields={mockData.fields}
            useOriginalLayout={false}
            showSchemaPreview={true}
            showVisualizer={false}
          />
        </div>
      </div>

      {/* Performance Test - Mobile Optimized */}
      <h2 style={{ 
        textAlign: "center", 
        marginTop: "3rem", 
        marginBottom: "2rem",
        fontSize: "clamp(1.25rem, 3vw, 1.75rem)"
      }}>
        Performance Test (Multiple Cards)
      </h2>
      
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", 
        gap: "1rem" 
      }}>
        {[1, 2, 3, 4, 5, 6].map(i => (
          <AnimatedCard 
            key={i}
            frontmatter={{
              title: `Performance Test ${i}`,
              description: `Testing multiple animated cards - Card ${i}`,
              date: "2024-01-01",
              author: `Author ${i}`,
              tags: ["Test", "Performance", `Card${i}`]
            }}
            fields={{ slug: `/test-${i}` }}
            useOriginalLayout={false}
            showVisualizer={false} // No performance impact
            showSchemaPreview={i === 1} // Only first card gets schema
          />
        ))}
      </div>

      {/* Mobile Tips */}
      <div style={{
        backgroundColor: "rgba(34, 197, 94, 0.1)",
        border: "1px solid rgba(34, 197, 94, 0.3)",
        borderRadius: "0.5rem",
        padding: "1rem",
        marginTop: "3rem",
        textAlign: "center"
      }}>
        <p style={{ margin: 0, fontSize: "0.875rem" }}>
          📱 <strong>Mobile Optimized:</strong> Cards automatically adjust size, floating elements scale down, 
          and layouts stack vertically on smaller screens.
        </p>
      </div>
    </div>
  );
};

export default TestAnimatedCardPage;