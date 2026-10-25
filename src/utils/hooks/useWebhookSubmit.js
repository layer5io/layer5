import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

export const useWebhookSubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const isMountedRef = useRef(true);
  const requestControllerRef = useRef(null);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
      if (requestControllerRef.current) {
        requestControllerRef.current.abort();
      }
    };
  }, []);

  const submitForm = async (payload) => {
    const controller = new AbortController();
    requestControllerRef.current = controller;

    if (isMountedRef.current) {
      setIsSubmitting(true);
      setError(null);
    }

    try {
      const response = await axios.post(
        "https://hook.us1.make.com/nficb3d7swqkclkl467st4hp4cg65u8o",
        payload,
        { signal: controller.signal },
      );
      return { success: true, data: response.data };
    } catch (err) {
      const isAborted = controller.signal.aborted || err?.name === "CanceledError";
      if (isAborted) {
        return { success: false, error: null, errorMessage: "Request was cancelled." };
      }

      const errorMessage = (err && err.message) || 'An error occurred during submission.';
      const errorObject = err instanceof Error ? err : new Error(errorMessage);
      if (isMountedRef.current) {
        setError(errorObject);
      }
      return { success: false, error: errorObject, errorMessage };
    } finally {
      if (requestControllerRef.current === controller) {
        requestControllerRef.current = null;
      }
      if (isMountedRef.current) {
        setIsSubmitting(false);
      }
    }
  };

  const errorMessage = error ? (error.message || 'An error occurred during submission.') : null;

  return { submitForm, isSubmitting, error, errorMessage };
};
