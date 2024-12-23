import styled from "styled-components";

const PricingFormWrapper = styled.div`
  /* Center the form and give some breathing space */
  max-width: 500px;
  margin: 3rem auto;
  padding: 2rem;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  background-color: #fff;

  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #333;
  }

  form.pricing-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-field {
    display: flex;
    flex-direction: column;
  }

  label {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #555;
  }

  input[type="text"],
  input[type="email"] {
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
  }

  input[type="text"]:focus,
  input[type="email"]:focus {
    border-color: #00b39f;
  }

  button[type="submit"] {
    width: fit-content;
    align-self: center;
    background-color: #00b39f;
    color: #fff;
    padding: 0.75rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.25s ease-in-out;
  }

  button[type="submit"]:hover {
    background-color: #008577;
  }
`;

export default PricingFormWrapper;
