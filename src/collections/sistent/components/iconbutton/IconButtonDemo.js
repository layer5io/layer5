import React from "react";
import { IconButton, KubernetesIcon, DesignIcon } from "@sistent/sistent";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { FaEdit } from "@react-icons/all-files/fa/FaEdit";
import { FaTrash } from "@react-icons/all-files/fa/FaTrash";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { FaShare } from "@react-icons/all-files/fa/FaShare";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

const IconButtonDemo = ({ type }) => {
  if (type === "basic") {
    return (
      <IconButton aria-label="edit">
        <FaEdit />
      </IconButton>
    );
  }

  if (type === "background") {
    return (
      <IconButton
        aria-label="favorite"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
      >
        <FaHeart />
      </IconButton>
    );
  }

  if (type === "sizes") {
    return (
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <IconButton size="small" aria-label="search">
            <FaSearch />
        </IconButton>
        <IconButton size="medium" aria-label="edit">
            <FaEdit />
        </IconButton>
        <IconButton size="large" aria-label="delete">
            <FaTrash />
        </IconButton>
      </div>
    );
  }

  if (type === "sistent-icons") {
      return (
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <IconButton aria-label="kubernetes">
                <KubernetesIcon />
            </IconButton>
            <IconButton aria-label="design">
                <DesignIcon />
            </IconButton>
        </div>
      );
  }

  if (type === "colors") {
      return (
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <IconButton aria-label="favorite" color="error">
                <FaHeart />
            </IconButton>
            <IconButton aria-label="share" color="primary">
                <FaShare />
            </IconButton>
        </div>
      );
  }
  
  if (type === "colors-extended") {
       return (
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <IconButton color="primary" aria-label="share">
                <FaShare />
            </IconButton>
            <IconButton color="error" aria-label="delete">
                <FaTrash />
            </IconButton>
            <IconButton color="success" aria-label="favorite">
                <FaHeart />
            </IconButton>
        </div>
       );
  }

  if (type === "disabled") {
      return (
        <IconButton disabled aria-label="edit">
            <FaEdit />
        </IconButton>
      );
  }
  
  if (type === "spacing") {
      return (
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <IconButton aria-label="approve" color="success">
                <FaCheck />
            </IconButton>
            <IconButton aria-label="reject" color="error">
                <FaTimes />
            </IconButton>
        </div>
      );
  }

  return null;
};

export default IconButtonDemo;
