import React, { Suspense } from "react";

// Importing components with React.lazy for dynamic loading
const TextField = React.lazy(() => import("@mui/material/TextField"));
const Select = React.lazy(() => import("@mui/material/Select"));
const FormControl = React.lazy(() => import("@mui/material/FormControl"));
const InputLabel = React.lazy(() => import("@mui/material/InputLabel"));
const MenuItem = React.lazy(() => import("@mui/material/MenuItem"));
const Box = React.lazy(() => import("@mui/material/Box"));
const Container = React.lazy(() => import("@mui/material/Container"));
const Grid = React.lazy(() => import("@mui/material/Grid"));
const Backdrop = React.lazy(() => import("@mui/material/Backdrop"));
const Popper = React.lazy(() => import("@mui/material/Popper"));
const Paper = React.lazy(() => import("@mui/material/Paper"));
const Button = React.lazy(() => import("@mui/material/Button"));
const Dialog = React.lazy(() => import("@mui/material/Dialog"));
const DialogTitle = React.lazy(() => import("@mui/material/DialogTitle"));
const DialogContent = React.lazy(() => import("@mui/material/DialogContent"));
const DialogActions = React.lazy(() => import("@mui/material/DialogActions"));
const OutlinedInput = React.lazy(() => import("@mui/material/OutlinedInput"));
const FormHelperText = React.lazy(() => import("@mui/material/FormHelperText"));
const ListSubheader = React.lazy(() => import("@mui/material/ListSubheader"));
const Card = React.lazy(() => import("@mui/material/Card"));
const CardContent = React.lazy(() => import("@mui/material/CardContent"));
const CardActions = React.lazy(() => import("@mui/material/CardActions"));
const Typography = React.lazy(() => import("@mui/material/Typography"));
const Divider = React.lazy(() => import("@mui/material/Divider"));

// HOC to add Suspense to components with SSR support
const withSuspense = (Component) => {
  if (typeof window === "undefined") {
    // During SSR, return a simple div as fallback
    return (props) => <div {...props} />;
  }

  return (props) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

// Create wrapped components with proper names
const WrappedTextField = withSuspense(TextField);
const WrappedSelect = withSuspense(Select);
const WrappedFormControl = withSuspense(FormControl);
const WrappedInputLabel = withSuspense(InputLabel);
const WrappedMenuItem = withSuspense(MenuItem);
const WrappedBox = withSuspense(Box);
const WrappedContainer = withSuspense(Container);
const WrappedGrid = withSuspense(Grid);
const WrappedBackdrop = withSuspense(Backdrop);
const WrappedPopper = withSuspense(Popper);
const WrappedPaper = withSuspense(Paper);
const WrappedButton = withSuspense(Button);
const WrappedDialog = withSuspense(Dialog);
const WrappedDialogTitle = withSuspense(DialogTitle);
const WrappedDialogContent = withSuspense(DialogContent);
const WrappedDialogActions = withSuspense(DialogActions);
const WrappedOutlinedInput = withSuspense(OutlinedInput);
const WrappedFormHelperText = withSuspense(FormHelperText);
const WrappedListSubheader = withSuspense(ListSubheader);
const WrappedCard = withSuspense(Card);
const WrappedCardContent = withSuspense(CardContent);
const WrappedCardActions = withSuspense(CardActions);
const WrappedTypography = withSuspense(Typography);
const WrappedDivider = withSuspense(Divider);

// Export components with their original names
export {
  WrappedTextField as TextField,
  WrappedSelect as Select,
  WrappedFormControl as FormControl,
  WrappedInputLabel as InputLabel,
  WrappedMenuItem as MenuItem,
  WrappedBox as Box,
  WrappedContainer as Container,
  WrappedGrid as Grid,
  WrappedBackdrop as Backdrop,
  WrappedPopper as Popper,
  WrappedPaper as Paper,
  WrappedButton as Button,
  WrappedDialog as Dialog,
  WrappedDialogTitle as DialogTitle,
  WrappedDialogContent as DialogContent,
  WrappedDialogActions as DialogActions,
  WrappedOutlinedInput as OutlinedInput,
  WrappedFormHelperText as FormHelperText,
  WrappedListSubheader as ListSubheader,
  WrappedCard as Card,
  WrappedCardContent as CardContent,
  WrappedCardActions as CardActions,
  WrappedTypography as Typography,
  WrappedDivider as Divider
};
