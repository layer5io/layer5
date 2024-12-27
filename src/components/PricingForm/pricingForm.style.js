import styled from "styled-components";

const PricingFormWrapper = styled.div`
  max-width: 800px;
  margin: 1rem auto;
  padding: 2rem;
  border-radius: 8px;
  background-color: var(--background);
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  max-height: 90vh; 
  overflow: hidden;

  .form-content {
    flex: 1;
    overflow-y: auto; /* Enable scrolling */
    margin-bottom: 1rem;
    scrollbar-width: none; /* Hide scrollbar for Firefox */
    -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */

    /* Hide scrollbar for Webkit browsers (Chrome, Safari, Edge) */
    &::-webkit-scrollbar {
      display: none;
    }
  }

  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: var(--text-color);
    font-size: 20px;
    font-weight: bold;
  }

  .form-field {
    margin-bottom: 1.5rem;
  }

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: var(--label-color);
  }

  input[type="text"],
  input[type="email"],
  textarea,
  input[type="number"] {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
   border: 1px solid ${props => props["data-theme"] === "dark" ? "#000000" : "#ffffff"};
    border-radius: 4px;
    background-color: var(--input-bg);
    color: var(--input-text);
    outline: none;
  }

  textarea {
    resize: none;
    min-height: 100px;
  }

  input:focus,
  textarea:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 5px var(--primary-color);
  }

  .form-footer {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  button[type="submit"] {
    background-color: #03d3a9;
    color: #ffffff;
    padding: 0.75rem 2rem;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.25s ease-in-out;
  }

  button[type="submit"]:hover {
    background-color: var(--button-hover-bg);
  }

  /* Light and Dark Mode Variables */
  :root {
    --background: #ffffff;
    --text-color: #333333;
    --label-color: #555555;
    --input-bg: #f9f9f9;
    --input-border: #ffffff; 
    --input-text: #333333;
    --button-bg: #03D3A9;
    --button-text: #ffffff;
    --button-hover-bg: #03d3a9;
    --primary-color: #007bff;
  }

  [data-theme="dark"] {
    --background: #1a1a1a;
    --text-color: #f0f0f0;
    --label-color: #aaaaaa;
    --input-bg: #333333;
    --input-border: #000000; 
    --input-text: #ffffff;
    --button-bg: #0d6efd;
    --button-text: #ffffff;
    --button-hover-bg: #0a58ca;
    --primary-color: #0d6efd;
  }
`;

export default PricingFormWrapper;
