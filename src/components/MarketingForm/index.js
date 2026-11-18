import React, { useId, useState } from "react";
import { Field } from "formik";
import {
  fieldsFromFormData,
  marketingPreferencesUrl,
  submissionMessage,
  submitMarketingForm,
} from "./client";

export { marketingPreferencesUrl, submitMarketingForm, submissionMessage };

const honeypotStyle = {
  position: "absolute",
  left: "-9999px",
  width: "1px",
  height: "1px",
  overflow: "hidden",
};

export const MarketingHoneypot = ({ formik = false, value, onChange }) => {
  const id = useId();
  const controlled = value !== undefined;
  const inputProps = {
    id,
    name: "company_website",
    type: "text",
    tabIndex: -1,
    autoComplete: "off",
    ...(controlled ? { value, onChange } : {}),
  };

  return (
    <div style={honeypotStyle} aria-hidden="true">
      <label htmlFor={id}>Company website</label>
      {formik ? <Field {...inputProps} /> : <input {...inputProps} />}
    </div>
  );
};

export const MarketingStatus = ({
  status,
  message,
  pendingMessage = "Sending…",
}) => {
  if (status === "submitting") {
    return <p role="status">{pendingMessage}</p>;
  }
  if (!message || (status !== "success" && status !== "error")) {
    return null;
  }
  return <p role={status === "error" ? "alert" : "status"}>{message}</p>;
};

export const useMarketingForm = (formType) => {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const submit = async (fields) => {
    setStatus("submitting");
    setMessage("");
    try {
      const result = await submitMarketingForm(formType, fields);
      setStatus("success");
      setMessage(submissionMessage(formType, result));
      return result;
    } catch (error) {
      setStatus("error");
      setMessage(
        error.message || "We could not submit this form. Please try again.",
      );
      return null;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    return submit(fieldsFromFormData(new FormData(event.currentTarget)));
  };

  return { status, message, submit, handleSubmit };
};
