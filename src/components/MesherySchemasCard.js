import React from "react";

export const MesherySchemasCard = ({
  tags = ["AWS", "Azure", "GCP"],
  title = "Cloud Native Management",
  description = "Design, optimize and maintain your infrastructure with powerful schema tools.",
  actionText = "Manage",
  statusText = "Live",
  onActionClick,
}) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "340px",
        background: "#0b132b",
        borderRadius: "1rem",
        padding: "1.5rem",
        border: "1px solid #00b39f",
        color: "#fff",
      }}
    >
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              background: "rgba(0,179,159,0.2)",
              padding: "0.25rem 0.5rem",
              borderRadius: "4px",
              fontSize: "10px",
              color: "#00b39f",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem 0" }}>{title}</h3>
      <p style={{ fontSize: "0.8rem", color: "#ccc", margin: "0 0 1.5rem 0" }}>
        {description}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          onClick={onActionClick}
          style={{
            background: "#00b39f",
            color: "#fff",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            fontSize: "0.8rem",
          }}
        >
          {actionText}
        </button>
        <span style={{ fontSize: "0.8rem", color: "#888" }}>{statusText}</span>
      </div>
    </div>
  );
};
