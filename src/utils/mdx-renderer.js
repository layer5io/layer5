import React from "react";

// Compatibility wrapper for MDXRenderer which was removed in gatsby-plugin-mdx v5
// In gatsby-plugin-mdx v5, MDX content is handled differently
const MDXRenderer = ({ children }) => {
  // Debug logging
  console.log('MDXRenderer received:', typeof children, children);
  
  // For gatsby-plugin-mdx v5, the MDX content should be rendered as JSX
  // If children is already JSX (React component), render it directly
  if (React.isValidElement(children)) {
    console.log('Rendering as React element');
    return children;
  }
  
  // If it's a function (compiled MDX), call it
  if (typeof children === 'function') {
    console.log('Rendering as function component');
    const Component = children;
    return <Component />;
  }
  
  // For gatsby-plugin-mdx v5, we need to handle JSX content properly
  // The body should be a React component function that we can render
  try {
    if (children && typeof children === 'object' && children.type) {
      console.log('Rendering as object with type');
      // It's already a React element
      return children;
    }
    
    // Try to evaluate as JSX if it's a string
    if (typeof children === 'string') {
      console.log('Rendering string as HTML - this might be the issue!');
      // This is likely plain HTML, render it safely
      return <div dangerouslySetInnerHTML={{ __html: children }} />;
    }
  } catch (error) {
    console.error('Error rendering MDX content:', error);
    return <div>Error rendering content</div>;
  }
  
  // Otherwise, try to render as JSX
  console.log('Rendering as fragment');
  return <>{children}</>;
};

export { MDXRenderer };
