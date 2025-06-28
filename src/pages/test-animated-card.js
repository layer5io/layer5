// test-animated-card.js
import AnimatedCard from "../components/AnimatedCard/index";
import Card from "../components/Card/index";
import React from "react";

const TestAnimatedCardPage = () => {
  // Mock data that matches your Card component structure
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
      padding: "2rem", 
      maxWidth: "1400px", 
      margin: "0 auto",
      backgroundColor: "#0a0a0a", // Dark background to see glass effects
      minHeight: "100vh"
    }}>
      <h1 style={{ color: "white", textAlign: "center", marginBottom: "3rem" }}>
        Animated Card Testing
      </h1>
      
      {/* 3 Animated Cards Side by Side */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2rem",
        marginBottom: "3rem"
      }}>
        
        {/* Card 1: Infrastructure Card with Schema Preview */}
        <div>
          <h3 style={{ color: "white", marginBottom: "1rem" }}>Infrastructure Schema</h3>
          <AnimatedCard 
            frontmatter={{
              title: "Model your infrastructure",
              description: "Design, optimize and maintain your infrastructure with Kanvas' intelligent inference."
            }}
            fields={null}
            useOriginalLayout={false}
            showSchemaPreview={true}
            showVisualizer={false}
          />
        </div>
        
        {/* Card 2: Blog Post Card */}
        <div>
          <h3 style={{ color: "white", marginBottom: "1rem" }}>Blog Post Card</h3>
          <AnimatedCard 
            frontmatter={{
              title: "Building Cloud Infrastructure",
              description: "Learn how to design scalable cloud infrastructure with modern tools and practices.",
              date: "Jan 15, 2024",
              author: "Jane Developer",
              thumbnail: { publicURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTauwmXhMApvtvYkQWYo10kZ4S7EmcNFT_b2Q&s" }
            }}
            fields={{ slug: "/blog/cloud-infrastructure" }}
            useOriginalLayout={false}
            showSchemaPreview={false}
            showVisualizer={false}
          />
        </div>
        
        {/* Card 3: Full Animation Card */}
        <div>
          <h3 style={{ color: "white", marginBottom: "1rem" }}>Full Animation</h3>
          <AnimatedCard 
            frontmatter={{
              title: "Kubernetes Orchestration",
              description: "Manage your containerized applications with intelligent automation and monitoring.",
              date: "Jan 20, 2024",
              author: "DevOps Team"
            }}
            fields={{ slug: "/kubernetes-guide" }}
            useOriginalLayout={false}
            showSchemaPreview={true}
            showVisualizer={true}
          />
        </div>
      </div>

      {/* Alternative: Responsive Grid (for smaller screens) */}
      <h2 style={{ color: "white", textAlign: "center", marginTop: "4rem", marginBottom: "2rem" }}>
        Responsive Grid (Auto-fit)
      </h2>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
        marginBottom: "3rem"
      }}>
        
        {/* Card 1: Service Mesh */}
        <div>
          <h4 style={{ color: "white", marginBottom: "1rem" }}>Service Mesh</h4>
          <AnimatedCard 
            frontmatter={{
              title: "Service Mesh Management",
              description: "Visualize and control your microservices with advanced networking capabilities."
            }}
            fields={null}
            useOriginalLayout={false}
            showSchemaPreview={true}
            showVisualizer={false}
          />
        </div>
        
        {/* Card 2: Performance Monitoring */}
        <div>
          <h4 style={{ color: "white", marginBottom: "1rem" }}>Performance</h4>
          <AnimatedCard 
            frontmatter={{
              title: "Performance Monitoring",
              description: "Real-time insights into your application performance and resource utilization.",
              date: "Jan 18, 2024",
              author: "Monitoring Team"
            }}
            fields={{ slug: "/performance-guide" }}
            useOriginalLayout={false}
            showSchemaPreview={false}
            showVisualizer={false}
          />
        </div>
        
        {/* Card 3: Security */}
        <div>
          <h4 style={{ color: "white", marginBottom: "1rem" }}>Security</h4>
          <AnimatedCard 
            frontmatter={{
              title: "Security Best Practices",
              description: "Implement robust security measures for your cloud infrastructure and applications.",
              date: "Jan 22, 2024",
              author: "Security Team"
            }}
            fields={{ slug: "/security-guide" }}
            useOriginalLayout={false}
            showSchemaPreview={false}
            showVisualizer={false}
          />
        </div>
      </div>

      {/* Comparison Section */}
      <h2 style={{ color: "white", textAlign: "center", marginTop: "4rem", marginBottom: "2rem" }}>
        Original vs Animated Comparison
      </h2>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "2rem"
      }}>
        
        {/* Original Card */}
        <div>
          <h4 style={{ color: "white", marginBottom: "1rem" }}>Original Card</h4>
          <Card frontmatter={mockData.frontmatter} fields={mockData.fields} />
        </div>
        
        {/* Animated - Original Layout */}
        <div>
          <h4 style={{ color: "white", marginBottom: "1rem" }}>Animated (Safe)</h4>
          <AnimatedCard 
            frontmatter={mockData.frontmatter} 
            fields={mockData.fields}
            useOriginalLayout={true}
            showVisualizer={false}
          />
        </div>
        
        {/* Animated - New Design */}
        <div>
          <h4 style={{ color: "white", marginBottom: "1rem" }}>New Design</h4>
          <AnimatedCard 
            frontmatter={mockData.frontmatter} 
            fields={mockData.fields}
            useOriginalLayout={false}
            showSchemaPreview={true}
            showVisualizer={false}
          />
        </div>
      </div>
    </div>
  );
};

export default TestAnimatedCardPage;