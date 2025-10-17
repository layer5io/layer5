import React, { useState, useEffect } from "react";

/**
 * Wrapper component to ensure Material-UI components only render on client-side
 * This prevents SSR issues with Material-UI components
 */
const ClientOnlyMui = ({ children, fallback = null }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return fallback;
  }

  return children;
};

export default ClientOnlyMui;