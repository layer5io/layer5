import { useState } from 'react';
import axios from 'axios';

export const useWebhookSubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const submitForm = async (payload) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await axios.post("https://hook.us1.make.com/nficb3d7swqkclkl467st4hp4cg65u8o", payload);
      return { success: true, data: response.data };
    } catch (err) {
      const errorMessage = (err && err.message) || 'An error occurred during submission.';
      const errorObject = err instanceof Error ? err : new Error(errorMessage);
      setError(errorObject);
      return { success: false, error: errorObject, errorMessage };
    } finally {
      setIsSubmitting(false);
    }
  };

  const errorMessage = error ? (error.message || 'An error occurred during submission.') : null;

  return { submitForm, isSubmitting, error, errorMessage };
};
