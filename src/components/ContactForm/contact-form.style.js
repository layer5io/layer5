import styled from "styled-components";

const ContactFormWrapper = styled.section`
  margin-bottom: 2rem;
  .form-submitted {
    height: 20rem;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
  }
  .text-2xl {
    flex: 0 0 100%;
    font-size: 2.5rem;
    text-align: center;
  }
  .text-md {
    flex: 0 0 100%;
    font-size: 1.2rem;
    margin-top: 10px;
    text-align: center;
  }
  .page-header {
    h3 {
      color: gray;
      font-weight: 400;
    }
  }

  .form-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: auto;
  }

  .form {
    width: 40%;
    margin: 40px 40px;

    .radio-field {
      margin-top: 1rem;
    }
    .form-name {
      font-weight: 600;
      margin: 20px 0px 5px 3px;
      display: block;
    }
    .form-submit {
      display: flex;

      margin-top: 20px;
      align-content: center;
      justify-content: center;
    }
    .text-field {
      width: 100%;
      border: 1px solid black;
      padding: 0.5rem 0.5rem;
      font-size: 1.1rem;
    }

    .text-field:focus {
      border: 2px solid #00b39f;
    }

    .form-select {
      width: 150px;
      border: 1px solid black;
      border-radius: 10px;
      padding: 1rem 0.5rem;
    }

    .upload-field {
      width: 100%;
      border: 1px dashed black;
      border-radius: 15px;
      height: 50px;
      padding: 12px;
    }

    .form-check {
      width: 20px;
      height: 20px;
      border-radius: 15px;
      margin: 2px 10px !important;
    }

    .btn {
      float: right;
      margin: 20px 0;
    }
    .newsletter {
      display: flex;
      flex-direction: row;
      margin-top: 20px;
    }
    .required-sign {
      color: #8b0000;
    }

    .checkbox-label {
      font-size: 0.8rem;
    }
  }
`;

export default ContactFormWrapper;
