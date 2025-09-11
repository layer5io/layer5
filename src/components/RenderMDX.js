import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import Button from "../reusecore/Button";

export function RenderMDX({ body }) {
  // eslint-disable-next-line no-new-func
  const Component = React.useMemo(() => {
    try {
      return new Function('React', 'Button', `return ${body}`)(React, Button);
    } catch (e) {
      return () => <pre>Error rendering MDX: {e.message}</pre>;
    }
  }, [body]);
  return (
    <MDXProvider components={{ Button }}>
      {Component && <Component />}
    </MDXProvider>
  );
}
