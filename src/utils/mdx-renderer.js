import React from "react";

// Compatibility wrapper for MDXRenderer which was removed in gatsby-plugin-mdx v5
// In gatsby-plugin-mdx v5, MDX content is handled differently
const MDXRenderer = ({ children }) => {
  // For gatsby-plugin-mdx v5, the MDX content should be rendered as JSX
  // If children is already JSX (React component), render it directly
  if (React.isValidElement(children)) {
    return children;
  }
  
  // If it's a function (compiled MDX), call it
  if (typeof children === 'function') {
    const Component = children;
    return <Component />;
  }
  
  // If it's a string, it might be HTML content
  if (typeof children === 'string') {
    return <div dangerouslySetInnerHTML={{ __html: children }} />;
  }
  
  // Otherwise, try to render as JSX
  return <>{children}</>;
};

export { MDXRenderer };
