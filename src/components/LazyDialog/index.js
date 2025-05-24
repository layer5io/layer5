import React, { Suspense, lazy } from "react";

// Lazy load dialog components
const Modal = lazy(() => import("@mui/material/Modal"));
const Dialog = lazy(() => import("@mui/material/Dialog"));
const DialogContent = lazy(() => import("@mui/material/DialogContent"));
const DialogTitle = lazy(() => import("@mui/material/DialogTitle"));

export const LazyModal = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Modal {...props} />
  </Suspense>
);

export const LazyDialog = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Dialog {...props} />
  </Suspense>
);

export const LazyDialogContent = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <DialogContent {...props} />
  </Suspense>
);

export const LazyDialogTitle = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <DialogTitle {...props} />
  </Suspense>
);
