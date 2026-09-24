import React, { useState, useRef, useEffect } from "react";
import { FaCaretDown } from "@react-icons/all-files/fa/FaCaretDown";
import { SortDropdownWrapper } from "./resourceGrid.style";

const options = [
  { value: "", label: "Sort by" },
  { value: "asc", label: "Alphabetically (A-Z)" },
  { value: "desc", label: "Alphabetically (Z-A)" },
];

const SortDropdown = ({ sortOrder, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const selected = options.find((opt) => opt.value === sortOrder) || options[0];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelect = (value) => {
    onSortChange(value);
    setIsOpen(false);
  };

  return (
    <SortDropdownWrapper ref={ref}>
      <button
        type="button"
        className={`sort-button ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Sort Resources"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{selected.label}</span>
        <FaCaretDown className={`caret-icon ${isOpen ? "rotate" : ""}`} />
      </button>

      {isOpen && (
        <ul className="sort-menu">
          {options.map(({ value, label }) => (
            <li key={value}>
              <button
                type="button"
                className={`sort-item ${sortOrder === value ? "selected" : ""}`}
                onClick={() => handleSelect(value)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </SortDropdownWrapper>
  );
};

export default SortDropdown;
