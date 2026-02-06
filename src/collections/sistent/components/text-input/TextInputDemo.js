import React from "react";
import { Input } from "@sistent/sistent";

const TextInputDemo = ({ type }) => {
  if (type === "basic") {
    return <Input placeholder="Enter your name" />;
  }

  if (type === "labeled") {
    return (
      <Input
        label="Email Address"
        type="email"
        placeholder="example@domain.com"
        required
      />
    );
  }

  if (type === "multiline") {
    return (
      <Input
        placeholder="Share your thoughts..."
        multiline
        rows={4}
      />
    );
  }

  if (type === "colors") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
        <Input color="primary" placeholder="Primary" />
        <Input color="secondary" placeholder="Secondary" />
        <Input color="success" placeholder="Success" />
      </div>
    );
  }

  if (type === "types") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
        <Input
          type="password"
          label="Password"
          placeholder="Enter password"
          required
        />
        <Input
          type="number"
          label="Age"
          placeholder="25"
        />
        <Input
          type="tel"
          label="Phone"
          placeholder="+1 (555) 123-4567"
        />
      </div>
    );
  }

  if (type === "error") {
    return (
      <Input
        label="Username"
        placeholder="Enter username"
        error
        helperText="Username is already taken"
      />
    );
  }

  if (type === "disabled") {
    return (
      <Input
        label="Read-only Field"
        value="This field is disabled"
        disabled
      />
    );
  }

  return null;
};

export default TextInputDemo;
