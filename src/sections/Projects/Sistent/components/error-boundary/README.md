## Error Boundary Components

### `ErrorBoundary`

The `ErrorBoundary` component is designed to catch errors that occur within its child components and provide a customizable fallback UI when an error occurs.

#### Usage

Wrap your component with the `ErrorBoundary`:

```tsx
import { ErrorBoundary } from '@layer5/sistent';

const MyComponent = () => {
  // Your component logic

  return <ErrorBoundary>{/* Your component JSX */}</ErrorBoundary>;
};
```

##### Custom Fallback

You can provide a custom fallback component to `ErrorBoundary`:

```tsx
const MyComponent = () => {
  // Your component logic

  return (
    <ErrorBoundary customFallback={CustomFallbackComponent}>
      {/* Your component JSX */}
    </ErrorBoundary>
  );
};
```

### `withErrorBoundary`

`withErrorBoundary` is a higher-order component (HOC) that simplifies wrapping a component with ErrorBoundary. It uses default fallback component. This can be useFul to wrap child components

#### Usage

Wrap your component using `withErrorBoundary`:

```tsx
import { withErrorBoundary } from '@layer5/sistent';

const MyComponent = withErrorBoundary(() => {
  return {
    /* Your component JSX */
  };
});
```

### `withSuppressedErrorBoundary`

`withSuppressedErrorBoundary` is another HOC that suppresses the error in browser's console instead of displaying fallback component to users, this can be useFull for errors that are not critical and can be avoided.

#### Usage

Wrap your component using withSuppressedErrorBoundary:

```tsx
import { withSuppressedErrorBoundary } from '@layer5/sistent';

const MyComponent = withSuppressedErrorBoundary(() => {
  return {
    /* Your component JSX */
  };
});
```

### Handling Different Levels of Errors

#### Critical Errors

Critical errors typically originate from parent or root components and can potentially lead to the entire page crashing. In such cases, it is recommended to use the ErrorBoundary with either the default fallback component or a custom fallback component to ensure users receive assistance.

#### Non-critical Errors

Non-critical errors occur in child components and may not result in a page crash or hinder users from performing other operations. In these cases, displaying the error through a toaster notification or handling it as an event can be beneficial.

#### Errors That Can Be Avoided

In some scenarios, a child component might encounter an error that doesn't block users and doesn't require immediate attention. Such errors can be avoided and suppressed into the browser's console for debugging purposes. The `withSuppressedErrorBoundary` higher-order component (HOC) function can be useful in this scenario.
