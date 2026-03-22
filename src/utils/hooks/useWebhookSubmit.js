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
      setError(err.message || 'An error occurred during submission.');
      return { success: false, error: err };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitForm, isSubmitting, error };
};
