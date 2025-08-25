import React from "react";
import { renderToString } from "react-dom/server";

// For gatsby-plugin-mdx v5, we need to handle MDX content properly
const MDXRenderer = ({ children }) => {
  // In gatsby-plugin-mdx v5, the body should be a compiled MDX component
  
  // If it's a function (compiled MDX component), execute it
  if (typeof children === 'function') {
    try {
      const Component = children;
      return <Component />;
    } catch (error) {
      console.error('Error rendering MDX function:', error);
      return <div>Error rendering MDX content</div>;
    }
  }
  
  // If it's already a React element, return it
  if (React.isValidElement(children)) {
    return children;
  }
  
  // If it's an object that looks like a React element, render it
  if (children && typeof children === 'object' && (children.type || children.$$typeof)) {
    return children;
  }
  
  // If it's a string that looks like HTML, render it
  if (typeof children === 'string') {
    // Check if it contains JSX or HTML
    if (children.includes('<') || children.includes('import ')) {
      return <div dangerouslySetInnerHTML={{ __html: children }} />;
    }
    return <div>{children}</div>;
  }
  
  // Default: try to render whatever we got
  return <>{children}</>;
};

export { MDXRenderer };
